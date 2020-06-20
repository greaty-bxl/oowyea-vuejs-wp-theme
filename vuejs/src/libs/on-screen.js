//init
export default () => {

	var $ = window.jquery
	var last_scroll = $('#app').scrollTop()
	var sens = 0
	var scrollingType = ''

	console.log('on screen', $("#app"));

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
			var elTop = $(el).position().top +  $('#app').scrollTop()
			var elBott = elTop + $(el).outerHeight()
			var top = $('#app').scrollTop()
			var bottom = $('#app').scrollTop() + $('#app').outerHeight()

			if( elTop >= top && elBott < bottom )
			{
				if( $(el).data('screen-event') !== 'in-screen' )
				{
					$(el).data('screen-event', 'in-screen')
					$(el).trigger({
						'type': 'enter-screen',
						'sens': sens,
						'scrollingType': scrollingType
					})
				}
			}
			else
			{
				if( $(el).data('screen-event') !== 'out-screen' )
				{
					$(el).data('screen-event', 'out-screen')
					leave(el)
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