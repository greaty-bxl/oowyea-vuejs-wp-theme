//init
export default () => {

	var $ = window.jquery
	var last_scroll = $('#app').scrollTop()
	var sens = 0
	var scrollingType = ''

	function leave(el)
	{
		$(el).trigger({
			'type': 'leave-screen',
			'sens': sens,
			'scrollingType': scrollingType
		})
	}

	function scan_screen(){
		$('.on-screen').each( (index, el) => {

			var elTop = $(el).position().top +  $('#app').scrollTop() / 1.5
			// var elTop2 = $(el).position().top +  $('#app').scrollTop() 

		
			var elBott = elTop + $(el).outerHeight()  
			var top = $('#app').scrollTop()
			var bottom = $('#app').scrollTop() + $('#app').outerHeight() 


			if( elTop < top  && elBott < bottom )
			{
				if( $(el).data('screen-event') !== 'in-screen' )
				{
					$(el).data('screen-event', 'in-screen')
					$(el).trigger({
						'type': 'enter-screen',
						'sens': sens,
						'scrollingType': scrollingType
					})

					// console.log(el, '2');
					// console.log('entree');
				}
			}

			if (last_scroll < elTop && elBott < bottom ) {

				// console.log(last_scroll , 'last_scroll');
				// console.log(elTop , 'elTop');


				$(el).data('screen-event', 'in-screen')
									$(el).trigger({
										'type': 'enter-screen',
										'sens': sens,
										'scrollingType': scrollingType
									})
									// console.log(el , '1');
			}

			else if( elTop < top - 1 && elBott < top &&  elTop > bottom - 1 && elBott > bottom )
			{
				if( $(el).data('screen-event') !== 'out-screen' )
				{
					$(el).data('screen-event', 'out-screen')
					leave(el)

					// console.log(el);



					// console.log('sorti');
				}
			}

		})
	}

	leave('.on-screen')

	$("#app").scroll( () => { 
		
		scrollingType =  $('#app').data('scrolling')

		var new_scroll = $('#app').scrollTop()
		if( new_scroll >  last_scroll )
		{
			sens = 1
		}
		else if( new_scroll <  last_scroll )
		{
			sens = -1
		}
		else
		{
			sens = 0
		}

		last_scroll = new_scroll

		scan_screen()
	})

	$(window).resize( () => { scan_screen() })
	$(document).on('before_next_page', () => { leave('.on-screen') })
	$(document).on('after_next_page', () => { scan_screen() })
	scan_screen()
}

