export default (vue, selector, top = 0, left = 0, state = 'auto') => {
	var $ = vue.$
	var touchY;
	var speed = 1

	function update_position(vue, selector, top, left, state) {

		var elements = $(selector)

		elements.each( (index, el) => {

			var section = $(el).parents('.section')
			
			if( $(el).parent().hasClass('extra-wrapper-fixit') === false )
			{
				$(el).wrap('<div class="extra-wrapper-fixit"></div>')
			}

			var scroll_pos = $('#app').scrollTop()
			var sectionTop_pos = section.position().top + $('#app').scrollTop()
			var sectionBot_pos = sectionTop_pos + section.outerHeight() - $('#app').outerHeight()

			var eltop

			if( $(el).parents('.section').hasClass('clone') ) state = 'absolute'

			if( ( ( scroll_pos < sectionTop_pos || sectionBot_pos < scroll_pos ) && state == 'limited' ) || state == 'absolute' )
			{
				if( sectionBot_pos < scroll_pos && state != 'absolute' )
				{
					eltop = 0 + section.outerHeight() - $('#app').outerHeight()
				} 
				else
				{
					eltop = 0
				}
			}
			else
			{
				eltop = section.position().top * -1
			}			

			$(el).parent().css({
				'position': 'fixed',
				'top': section.position().top + 'px',
				'width':  section.innerWidth(),
				'height': section.height(),
				'overflow': 'hidden',
				'pointer-events': 'none',
				'touch-action': 'none',
			});

			$(el).css({
				'position': 'absolute',
				'top': eltop, //section.position().top * -1,
				'left': 0,
				'margin-top': top,
				'margin-left': left,
				'pointer-events': 'auto',
				'touch-action': 'none',
			});

			

			$(el).unbind('wheel touchstart touchmove touchend').on('wheel touchstart touchmove touchend', function(e) 
			{
				if( e.type == 'touchstart')
				{
					touchY = e.originalEvent.touches[0].clientY
				}
				if( e.type == 'touchmove' )
				{
					var newTouchY = e.originalEvent.touches[0].clientY
					
					if( newTouchY < touchY )
					{
						$('#app').scrollTop( $('#app').scrollTop(  ) + 7 )
						if( !$('#app').data('scrolling') )
						{
							$("#app").stop()
							.animate({scrollTop: $('#app').scrollTop(  ) + ( 72 * speed ) + 'px'}, 100, 'easeInOutQuart')
						}
						
					}
					else if( newTouchY > touchY )
					{
						$('#app').scrollTop( $('#app').scrollTop(  ) - 7 )
						if( !$('#app').data('scrolling') )
						{
							$("#app").stop()
								.animate({scrollTop: $('#app').scrollTop(  ) - ( 72 * speed ) + 'px'}, 100, 'easeInOutQuart')
						}
					}

					speed+= 0.1
				}

				if( e.type == 'touchend' )
				{
					speed = 1
				}
				else
				{
					$(this).css('pointer-events', 'none')
				}
				
			});

		});
	}
	
	update_position(vue, selector, top, left, state)

	$('#app').on('scroll', () => {
		update_position(vue, selector, top, left, state)
	});

	$('#app').on('clone clone-move', () => {
		update_position(vue, selector, top, left, state)
	});
}