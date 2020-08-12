export default function(vue){
	var $ = vue.$
	var timer
	
	if( vue.wp.sections.length >= 1 )
	{
		var section = $('.section[data-permalink="'+window.location.href+'"]')

		if( $('#app') && section )
		{
			$('#app').data('scrolling', 'init-scrolltop')

			$('#app').scrollTop( section.position().top + $('#app').scrollTop() )

			clearTimeout( timer )
			timer = setTimeout( () => {
				$('#app').data('scrolling', '')

				window.current_section = section.attr('id')
				window.current_section_index =  section.index()
				$('#app').trigger('section-top-ready')
			}, 15)
		}		
	}
	/*else
	{
		$('#app').trigger('section-top-ready')
	}*/
}