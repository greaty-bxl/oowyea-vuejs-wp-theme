import is from 'is_js'
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

			var elTop = $(el).offset().top +  $('#app').scrollTop()
			// var elTop2 = $(el).position().top +  $('#app').scrollTop() 

		
			var elBott = elTop + $(el).outerHeight()  
			var top = $('#app').scrollTop()
			var bottom = $('#app').scrollTop() + $('#app').outerHeight() 

			//console.log( $(el).prop('class'), elBott, bottom );

			if( 
				(
					elTop >= top  
				)
				&& 
				(
					//elBott < bottom 
					is.within(elBott, bottom - 5, bottom + 5 )
					||
					elBott <= bottom 
				)
			)
			{
				if( $(el).data('screen-event') !== 'in-screen' /*&& $(el).data('screen-event') !== 'leaving-screen'*/ )
				{
					//console.log( 'enter', $(el).prop('class') );
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
			else if( 
				( 
					(elTop < top && sens == 1) 
					|| 
					(elBott > bottom && sens == -1) 
					/*(
						(
							is.within(elBott, bottom - 5, bottom + 5 )
							||
							elBott > bottom 
						)
						&&
						sens == -1
					)*/
				) 
				&& 
				$(el).data('screen-event') == 'in-screen')
			{
				if( $(el).data('screen-event') !== 'leaving-screen' )
				{					
					$(el).data('screen-event', 'leaving-screen')
					leave(el)
				}
			}
		})
	}

	leave('.on-screen')

	$("#app").on('before_next_page', () => {
		leave('.on-screen')
	});

	$("#app").on('section-top-ready', () => {
		last_scroll = $('#app').scrollTop()
	});

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

