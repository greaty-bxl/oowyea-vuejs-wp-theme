export default (vue, selector, top = 0, left = 0, state = 'auto') => {
	var $ = vue.$

	function update_position(vue, selector, top, left, state) {

		var elements = $(selector)

		elements.each( (index, el) => {

			var section = $(el).parents('.section')
			
			if( $(el).parent().hasClass('extra-wrapper-fixit') === false )
			{
				$(el).wrap('<div class="extra-wrapper-fixit"></div>')
			}

			var pos1 = $('#app').scrollTop()
			var pos2 = section.position().top + $('#app').scrollTop()
			var pos3 = pos2 + section.outerHeight() - $('#app').outerHeight()

			var eltop

			if( $(el).parents('.section').hasClass('clone') ) state = 'absolute'

			if( ( ( pos1 < pos2 || pos3 < pos1 ) && state == 'limited' ) || state == 'absolute' )
			{
				eltop = 0
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

			$(el).on('touchmove', function(e) {
					console.log('touch');
					e.preventDefault();
			}, false);
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