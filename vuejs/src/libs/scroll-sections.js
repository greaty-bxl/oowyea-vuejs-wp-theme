function scrollSection(vue){

	var last_scroll = 0;
	var timer;
	var $ = vue.$;
	var wait = 0;
	var current_section;

	function update_current_section()
	{
		window.current_section = current_section
		window.current_section_index =  $('#'+current_section).index()
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
					}, 150)
					
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
						}
					}
					
				}
			});
		}
		last_scroll = new_scroll
	}

	$('#app').on('scroll', () => 
	{
		let is_scrolling_by_what = $('#app').data('scrolling')

		if( !wait && ( !is_scrolling_by_what || is_scrolling_by_what == "scroll-sections" ) )
		{
			$('#app').data('scrolling', 'scroll-sections')
			clearTimeout( timer )
			timer = setTimeout( scroll_end , 50 )
		}
		else
		{
			last_scroll = $('#app').scrollTop()
		}
	});

	current_section = $('.section').first().attr('id')
	update_current_section()	
}

export default scrollSection 