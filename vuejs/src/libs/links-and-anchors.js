export default function (vue)
{
	var $ = vue.$
	var timer;

	function open_link(event, href, push = true)
	{
		if( href ) if( href.search( vue.wp.options.siteurl ) === 0 ) var is_same_site = 1

		

		if( is_same_site ){
			
			event.preventDefault();

			let section = $('.section[data-permalink="'+href+'"]')
			let is_section = section.length

			if( is_section )
			{

				if( document.location.href == href && push ) return

				var start

				if( section.position().top + $('#app').scrollTop() > $('#app').scrollTop() )
				{
					start = '100vh'; 
				}
				else
				{
					start = '-100vh';
				}

				var clone = section.clone()

				clone.addClass('clone')

				clone.css({
					'position': 'fixed',
					'top': start,
					'left': 0,
					'width': section.width(),
					'overflow':'hidden',
					'opacity': 0.5,
					'z-index': 2000
				});

				section.parent().prepend(clone)

				$('#app').trigger('clone')

				$('#app').data('scrolling', 'links-and-anchors')

				if( push ) vue.pushHistory( href )

				clone.stop().animate({
					top: '0',
					opacity: 1
					},
					{
						duration: 444,
						ease: 'easeOutQuart',
						step: () => {
							$('#app').trigger('clone-move')
						},
						done: () => {
							console.log( "done" );
							$('#app').scrollTop( section.position().top + $('#app').scrollTop() )
							clone.remove()

							clearTimeout( timer )
							timer = setTimeout( () => {
								$('#app').data('scrolling', '')
							}, 15)
						}
					});
			}
			else
			{
				$(document).trigger({
					type:"new_page",
					href: href,
				})
			}
		}
	}

	$(document).on('click', 'a', (event) => {

		/* Act on the event */
		let href = $(event.target).prop('href')

		open_link(event, href)

	});

	window.onpopstate = function(event) {

		open_link(event, document.location.href, false)
	};
}