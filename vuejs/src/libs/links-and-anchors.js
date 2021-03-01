export default function (vue)
{
	var $ = vue.$
	var timer;

	function open_link(event, href, push = true)
	{
		var is_same_site = 0

		if( href )
		{
			if( href.search( vue.wp.options.siteurl ) === 0 ) is_same_site = 1
		}


	
		if( is_same_site ){

			//event.preventDefault();
			let href_url = new URL(href)

			// console.log('is_section 1', href_url);

			let section = $('.section[data-permalink="'+href_url.origin+href_url.pathname+'"]')
			let is_section = section.length
			
			// console.log('is_section 1', is_section);

			if( $('[data-state="current"]').hasClass('woocommerce-account') && event ) is_section = 0

			// console.log('is_section 2', is_section);

			var href_search = href_url.search;
			if( window.location.search != href_search )
			{
				is_section = false;
			}
	

			if( is_section )
			{
				
				// console.log('is_section', document.location.href, href);

				if( document.location.href == href && push ) return true

				var start

				/*if( section.position().top + $('#app').scrollTop() > $('#app').scrollTop() )
				{
					start = '100vh'; 
				}
				else
				{
					start = '-100vh';
				}*/

				start = 0



				var clone = section.clone()

				clone.addClass('clone')

				clone.css({
					'position': 'fixed',
					'top': start,
					'left': 0,
					'width': section.width(),
					'height': '100vh',
					'overflow':'hidden',
					'opacity': 0,
					'z-index': 2000
				});

				clone.find('.section-wrap').css({
					'height': '100vh',
					'min-height': '100vh'
				});
				console.log( clone.find('.section-wrap') );

				section.parent().prepend(clone)

				$('#app').trigger('clone')
				$('#app').trigger('before_next_page')

				$('#app').data('scrolling', 'links-and-anchors')

				if( push ) vue.pushHistory( href )

				clone.stop().animate({
					top: '0',
					opacity: 1
					},
					{
						duration: 444,
						ease: 'easeInOutQuad',
						step: () => {
							$('#app').trigger('clone-move')
						},
						done: () => {

							$('#app').scrollTop( section.position().top + $('#app').scrollTop() )
							

							clone.animate({
								opacity: 0,
								},
								150, function() {
									clone.remove()
							});

							clearTimeout( timer )
							timer = setTimeout( () => {
								$('#app').data('scrolling', '')
							}, 15)

							$('#app').trigger('after_next_page')

							console.log( 'after anchor', section.index() );

							if( vue.$store.state.wp.sections[section.index()] )
							{
								vue.$store.commit({
									type: 'section_change',
									current_section: vue.$store.state.wp.sections[section.index()],
								})	
							}							
						}
					});

					return true
			}
			else
			{
				$(document).trigger({
					type:"new_page",
					href: href,
				})

				return true
			}
		}
		else
		{
			return false
		}
	}

// on load


    $('.current-menu-item').find('a').css({
		borderBottom: '1px solid white',
	});

    function on_click(event){
		/* Act on the event */
		let href = $(event.currentTarget).prop('href')

		href = vue.apply_filters( 'clicked_url', href )

		//event.preventDefault();
		// Add proprietie css to current link

		$('.menu-item').each(function() {

			var url_link = $(this).find('a').attr('href');

			$(this).removeClass('current-menu-item')
			$(this).removeClass('current_page_item')
			
			$(this).find('a').css({
				borderBottom: '0px solid white',
			});

			if ( href === url_link  ) {
				
				$(this).find('a').css({
							borderBottom: '1px solid white',
						});
					$(this).find('a').addClass('current-page')


				$(this).addClass('current-menu-item')
				$(this).addClass('current_page_item')
			
			}
			else{

				$(this).find('a').removeClass('current-page')


			}
			
		});

		if ( open_link(event, href) )
		{
			
			event.preventDefault();

		}

		
    }

    //console.log( $('.remove') );
    setTimeout( ()=>{
		$('a').unbind('click').on('click', (event) => {	
			console.log( 'click', event.currentTarget );
			let target = $(event.currentTarget)
			//event.preventDefault()

			if (event.currentTarget.hasClass('download')) {

				on_click(event)
			}

			if( target.data('trigger') )
			{
				//console.log('trigger link');
				$(document).trigger( target.data('trigger'), event.currentTarget )
				event.preventDefault();
			}
			else if(  target.hasClass('owy-mailto') )
			{	
				let adr = target.data('adr')
				let domain = target.data('domain')
				let mail = adr+'@'+domain
				target.attr('href', 'mailto:'+mail);
				target.text(mail)
				target.removeClass('owy-mailto')
				event.preventDefault()

			}
			else if( target.attr('href') != "" )
			{
				on_click(event)
			}
			else
			{	
				event.preventDefault()
			}
		});

    }, 10 )
	

	/*$(document).unbind('click').on('click', 'a', function(event) {
		on_click(event)
	});*/

	//if using history browser
	function popstate_redirect(event){
		open_link(event, document.location.href, false)
	}

	window.removeEventListener('popstate', popstate_redirect)
	window.onpopstate = popstate_redirect
}