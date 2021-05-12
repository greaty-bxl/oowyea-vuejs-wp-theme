export default function (vue)
{
	var $ = vue.$
	var timer;
	var last_url = window.location.href

	function open_link(event, href, push = true)
	{
		var is_same_site = 0

		if( href )
		{
			if( href.search( vue.wp.options.siteurl ) === 0 ) is_same_site = 1
			/*if( href.search( '_wpnonce' ) >= 0 )
			{
				is_same_site = 0	
			}*/
		}

		//event.preventDefault();

		console.log('links-and-anchors');	
	
		if( is_same_site ){

			event.preventDefault();

			let section = $('.section[data-permalink="'+href+'"]')
			let is_section = section.length

			if( $('body').hasClass('woocommerce-account') && event ) is_section = 0

			if( is_section )
			{

				console.log('is section');

				if( document.location.href == href && push ) return

				//var start

				/*if( section.offset().top + $('#app').scrollTop() > $('#app').scrollTop() )
				{
					start = '100vh'; 
				}
				else
				{
					start = '-100vh';
				}*/

				/*start = 0

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

				$('#app').prepend(clone)

				$('#app').trigger('clone')*/
				$('#app').trigger('before_next_page')

				$('#app').data('scrolling', 'links-and-anchors')

				if( push ) vue.pushHistory( href )

				console.log('section anchor' , section.offset().top);

				if( vue.$store.state.is_history == false && !vue.$store.state.history_scroll[href] )
				{
					console.log("section scroll");
					window.scroll.scrollTop = section.offset().top + window.scroll.scrollTop
				}

				/*clone.stop().animate({
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

							$('#app-scroller').scrollTop( section.offset().top + $('#app-scroller').scrollTop() )
							

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
					});*/

					clearTimeout( timer )
					timer = setTimeout( () => {
						$('#app').data('scrolling', '')
						$('#app').trigger('scroll')
					}, 15)
					$('#app').trigger('after_next_page')

					if( vue.$store.state.wp.sections[section.index()] )
					{
						vue.$store.commit({
							type: 'section_change',
							current_section: vue.$store.state.wp.sections[section.index()],
						})	
					}

					last_url = window.location.href
					
					return true
			}
			else
			{

				//save scroll
				if( !vue.$store.state.is_history )
				{
					vue.$store.state.history_scroll[window.location.href] = window.scroll.scrollTop	
					console.log('save scroll', window.scroll.scrollTop, vue.$store.state.history_scroll );
				}
				else
				{
					vue.$store.state.history_scroll[last_url] = window.scroll.scrollTop	
					console.log('save scroll hist', last_url);
				}
				

				$(document).trigger({
					type:"new_page",
					href: href,
				})

				last_url = window.location.href

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

	$('a').unbind('click').on('click', (event) => {
		on_click(event)	
	});

	/*$(document).unbind('click').on('click', 'a', function(event) {
		on_click(event)
	});*/

	//if using history browser
	function popstate_redirect(event){
		console.log('history', event);
		vue.$store.state.is_history = true

		open_link(event, document.location.href, false)
	}

	window.removeEventListener('popstate', popstate_redirect)
	window.onpopstate = popstate_redirect
}