function scrollSection(vue){
	
	var $ = vue.$;

	var last_scroll = $('#app').scrollTop();
	var timer;
	
	var wait = 0;
	var current_section = window.current_section;

	var to_scroll
	var sens = 1

	function update_current_section()
	{
		window.current_section = current_section
		window.current_section_index =  $('#'+current_section).index()

		vue.$store.commit({
			type: 'section_change',
			current_section: vue.$store.state.wp.sections[window.current_section_index],
		})
	}
	
	function animate_scroll_to( pos )
	{
		if( !wait )
		{
			wait = 1
			$("#app").stop()
				.animate({scrollTop: pos + 'px'}, 500, 'easeInOutQuart')
				.promise()
				.then( () => {
					setTimeout( () => {
						wait = 0
						$('#app').data('scrolling', '')
						let permalink = $('#'+current_section).data('permalink')
						vue.pushHistory( permalink )
					}, 0)
					
			});
		}
	}

	function scroll_end()
	{
		let new_scroll = $('#app').scrollTop()

		if( new_scroll > last_scroll )
		{
			//auto scroll down
			$('.section').each(function(index, el) {
				if( ($(el).position().top + new_scroll) > new_scroll && ($(el).position().top + new_scroll) < ( new_scroll + $('#app').outerHeight() ) )
				{
					if( current_section != $(el).attr('id') )
					{
						current_section = $(el).attr('id')
						update_current_section()

						new_scroll = $(el).position().top + new_scroll
						animate_scroll_to( new_scroll )

						to_scroll = new_scroll
						sens = 1
					}
				}

				if( ($(el).position().top + new_scroll) <= new_scroll && ($(el).position().top + $(el).outerHeight() + new_scroll) > ( new_scroll + $('#app').outerHeight() ) )
				{
					//scroll down in section
					//auto scroll to end of current section for biggest sections than 100vh
					let bottomPos = $(el).position().top + new_scroll + $(el).outerHeight()
					if( bottomPos - new_scroll - $('#app').outerHeight() <= $('#app').outerHeight() / 3 )
					{
						new_scroll = $(el).position().top + $(el).outerHeight() -  $('#app').outerHeight() + new_scroll
						animate_scroll_to( new_scroll )	

						to_scroll = new_scroll
						sens = 1
					}
				}

			});
		}
		else if ( new_scroll <= last_scroll )
		{

			//auto scroll up
			$('.section').each(function(index, el) {
				if( ($(el).position().top + new_scroll) <= new_scroll && ($(el).position().top + $(el).outerHeight() + new_scroll) > new_scroll )
				{
					if( current_section != $(el).attr('id') )
					{
						current_section = $(el).attr('id')
						update_current_section()

						new_scroll = $(el).position().top + $(el).outerHeight() -  $('#app').outerHeight() + new_scroll
						animate_scroll_to( new_scroll )	

						to_scroll = new_scroll
						sens = -1
					}
					else
					{
						//scroll up in section 
						//auto scroll to begin of current section for biggest sections than 100vh
						let topPos = $(el).position().top
						if( topPos * -1 <= $('#app').outerHeight() / 3 )
						{
							new_scroll = $(el).position().top + new_scroll
							animate_scroll_to( new_scroll )	

							to_scroll = new_scroll
							sens = -1
						}
					}
					
				}
			});
		}
		last_scroll = new_scroll
	}

	$('#app').on('section-top-ready', () => {
		$('#app').on('scroll', () => 
		{
			let is_scrolling_by_what = $('#app').data('scrolling')

			if( !wait && ( !is_scrolling_by_what || is_scrolling_by_what == "scroll-sections" ) )
			{
				$('#app').data('scrolling', 'scroll-sections')
				clearTimeout( timer )
				timer = setTimeout( scroll_end , 250 )
			}
			else
			{
				last_scroll = $('#app').scrollTop()
			}

			let current_scroll = $('#app').scrollTop()

			if( ( sens == 1 && current_scroll > to_scroll ) || ( sens == -1 && current_scroll < to_scroll ) )
			{
				wait = 0
				$('#app').data('scrolling', '')
				$('#app').stop()
			}
		});
	});
}

export default scrollSection 