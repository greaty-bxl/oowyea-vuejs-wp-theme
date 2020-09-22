export default function(vue){
	var $ = vue.$
	var timer
	
	if( vue.wp.sections.length >= 1 )
	{
		var section = $('.section[data-permalink="'+window.location.href+'"]')

		if( $('#app') && section )
		{
			//$('#app').css('', 'value');
			$('#app').css('pointer-events', 'none');
			$('#app').data('scrolling', 'init-scrolltop')

			var newScroll = section.position().top + $('#app').scrollTop()
			if( newScroll < 0 ) newScroll == 0

			$('#app').scrollTop( newScroll )

			console.log('newScroll', newScroll);

			

			clearTimeout( timer )
			timer = setTimeout( () => {
				$('#app').data('scrolling', '')

				window.current_section = section.attr('id')
				window.current_section_index =  section.index()

				$('#app').css('pointer-events', 'auto');
				/*vue.$store.commit({
					type: 'section_change',
					current_section: vue.$store.state.wp.sections[window.current_section_index],
				})*/

				$('#app').trigger('section-top-ready')
				
			}, 51)
		}		
	}
	/*else
	{
		$('#app').trigger('section-top-ready')
	}*/
}