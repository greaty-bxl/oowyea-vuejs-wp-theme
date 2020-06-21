export default (vue, selector, top = 0, left = 0, state = 'auto') => {
	var $ = vue.$

	function update_position(vue, selector, top, left, state) {

		var elements = $(selector)

		elements.each( (index, el) => {
			
			if( $(el).parent().hasClass('extra-wrapper-fixit') === false )
			{
				$(el).wrap('<div class="extra-wrapper-fixit"></div>')
			}

			var pos1 = $('#app').scrollTop()
			var pos2 = $(vue.$el).position().top + $('#app').scrollTop()
			var pos3 = pos2 + $(vue.$el).outerHeight() - $('#app').outerHeight()

			var eltop

			if( ( ( pos1 < pos2 || pos3 < pos1 ) && state == 'limited' ) || state == 'absolute' )
			{
				eltop = 0
			}
			else
			{
				eltop = $(vue.$el).position().top * -1
			}			

			$(el).parent().css({
				'position': 'fixed',
				'top': $(vue.$el).position().top + 'px',
				'width':  $(vue.$el).innerWidth(),
				'height': $(vue.$el).height(),
				'overflow': 'hidden',
				'pointer-events': 'none',
			});

			$(el).css({
				'position': 'absolute',
				'top': eltop, //$(vue.$el).position().top * -1,
				'left': 0,
				'margin-top': top,
				'margin-left': left,
				'pointer-events': 'auto',
			});	
		});
	}
	
	update_position(vue, selector, top, left, state)

	$('#app').on('scroll', () => {
		update_position(vue, selector, top, left, state)
	});
}