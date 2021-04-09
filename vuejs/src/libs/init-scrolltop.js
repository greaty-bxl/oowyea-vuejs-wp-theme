import remove_get_from_url from "Libs/remove-get-from-url.js"

export default function(vue){
	var $ = vue.$
	var timer
	
	if( vue.wp.sections.length >= 1 )
	{
		var current_location = remove_get_from_url( window.location.href )

		console.log('location', current_location);
		var section = $('.section[data-permalink="'+current_location+'"]')
		if( section.length == 0 )
		{
			section = $('.section').first() 
		}
		console.log('scrolltop init', section);

		if( $('#app') && section.length )
		{
			//$('#app').css('', 'value');
			$('#app').css('pointer-events', 'none');
			$('#app').data('scrolling', 'init-scrolltop')

			let scrollTop = window.scroll.scrollTop
			if( !scrollTop ) scrollTop = 0

			var newScroll = section.offset().top + scrollTop
			if( newScroll < 0 ) newScroll == 0

			window.scroll.scrollTop = newScroll

			console.log('newScroll', section.offset().top , window.scroll);

			

			clearTimeout( timer )
			timer = setTimeout( () => {
				$('#app').data('scrolling', '')

				window.current_section = section.attr('id')
				window.current_section_index =  section.index()

				console.log(section.index());
				$('#app').css('pointer-events', 'auto');
				vue.$store.commit({
					type: 'section_change',
					current_section: vue.$store.state.wp.sections[window.current_section_index],
				})

				$('#app').trigger('section-top-ready')
				
			}, 51)
		}		
	}
	/*else
	{
		$('#app').trigger('section-top-ready')
	}*/
}