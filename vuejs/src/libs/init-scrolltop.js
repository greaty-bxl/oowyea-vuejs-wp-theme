import remove_get_from_url from "Libs/remove-get-from-url.js"

export default function(vue){
	var $ = vue.$
	var timer
	
	if( vue.wp.sections.length >= 1 )
	{
		var current_location = remove_get_from_url( window.location.href )

		var section = $('.section[data-permalink="'+current_location+'"]')
		if( section.length == 0 )
		{
			section = $('.section').first() 
		}
		//console.log('scrolltop init', section);

		if( $('#app') && section.length )
		{
			//$('#app').css('', 'value');
			$('#app').css('pointer-events', 'none');
			$('#app').data('scrolling', 'init-scrolltop')

			var newScroll = section.offset().top + $('#app-scroller').scrollTop()
			if( newScroll < 0 ) newScroll == 0

			$('#app-scroller').scrollTop( 0 /*newScroll*/ )
			//vue.$store.state.locomotive.scrollTo('top')
			//vue.$store.state.locomotive.scroll.y = 0;

			vue.$store.state.locomotive.setScroll(0, 0);
			vue.$store.state.locomotive.update();
			console.log('newScroll', vue.$store.state, newScroll);

			

			clearTimeout( timer )
			timer = setTimeout( () => {
				$('#app').data('scrolling', '')

				window.current_section = section.attr('id')
				window.current_section_index =  section.index()
				//console.log(section.index());
				$('#app').css('pointer-events', 'auto');
				vue.$store.commit({
					type: 'section_change',
					current_section: vue.$store.state.wp.sections[window.current_section_index],
				})

				$('#app').trigger('section-top-ready')
				
			}, 100)
		}		
	}
	/*else
	{
		$('#app').trigger('section-top-ready')
	}*/
}