import is from 'is_js'
import anime from 'animejs'
import hotkeys from 'hotkeys-js'
import interact from 'interactjs'

function scrollSection(vue){

	var $ = vue.$
	var animating = false

	let scrollbar = $('<div>')
	let percent_screen_page
	let barHeight
	let scrollDragging = false

	let duration

	function find_current_section(){
		let current

		$('.section').each(function(index, el) {

			let relative_top = $(el).position().top + $('#app').scrollTop()
			let relative_bottom = relative_top + $(el).outerHeight()
			let app_relative_bottom = $('#app').scrollTop() + $('#app').outerHeight()
			
			//console.log( $(el).prop('id'), relative_top , $('#app').scrollTop() );
			//console.log( $(el).prop('id'), relative_bottom , $('#app').scrollTop() + $('#app').outerHeight() + 2 );

			if( (
					is.within(relative_top, $('#app').scrollTop() - 5, $('#app').scrollTop() + 5 )
					&&
					is.within($(el).outerHeight(), $('#app').outerHeight() - 5, $('#app').outerHeight() + 5 )
				)
				||
				( 
					$(el).outerHeight() > $('#app').outerHeight()
					&&
						(
							is.within(relative_top, $('#app').scrollTop() - 5, $('#app').scrollTop() + 5 )
							||
							relative_top < $('#app').scrollTop()
						)					
					&&
						(
							is.within(relative_bottom, app_relative_bottom - 5, app_relative_bottom + 5 )
							||
							relative_bottom > app_relative_bottom
						)
					//relative_bottom >= $('#app').scrollTop() + $('#app').outerHeight()
				)
				||
				(
					$(el).outerHeight() < $('#app').outerHeight()
					&&
					relative_top > $('#app').scrollTop()
					&&
					/*(
						is.within(relative_bottom, app_relative_bottom - 5, app_relative_bottom + 5 )
						||
						relative_bottom < app_relative_bottom
					)*/	
					relative_bottom <= $('#app').scrollTop() + $('#app').outerHeight() + 2
				)
			)
			{
				current = $(el)
			}
		});

		//if not current in screen then find the section who is the most in screen
		if( is.undefined( current ) )
		{
			//let max_in_screen = 0

			$('.section').each(function(index, el) {
				//let relative_top = $(el).position().top + $('#app').scrollTop()
				//let relative_bottom = relative_top + $(el).outerHeight()
				//let app_relative_bottom = $('#app').scrollTop() + $('#app').outerHeight()
				//let pos1 = $(el).position().top
				//let pos2 = $('#app').scrollTop() - ( $(el).position().top + $(el).outerHeight() )

				console.log('in screen',  $(el).position().top );
			});
		}

		return current
	}

	function find_next_section(delta){
		let current = find_current_section()
		let next
		let max_next
		let force_bottom_section = false
		let force_top_section = false

		let is_first = ( current.index() == 0 )
		let is_last = ( current.index() ==  $('#app .page .section').length - 1 ) 

		let current_relative_top = current.offset().top + $('#app').scrollTop()
		let current_relative_bottom = current_relative_top + current.outerHeight()
		let app_relative_bottom = $('#app').scrollTop() + $('#app').outerHeight()

		let is_current_scrollable_down = ( 
				current.outerHeight() > $('#app').outerHeight()  
				&&
				//current_relative_top <= $('#app').scrollTop()
				(
					is.within(current_relative_top, $('#app').scrollTop() - 5, $('#app').scrollTop() + 5 )
					||
					current_relative_top < $('#app').scrollTop()
				)
				&&
				current_relative_bottom > app_relative_bottom + 1
		)

		let is_current_scrollable_up = ( 
				current.outerHeight() > $('#app').outerHeight()  
				&&
				current_relative_top < $('#app').scrollTop()
				&&
				/*(
					is.within(current_relative_bottom, app_relative_bottom - 5, app_relative_bottom + 5 )
					||
					current_relative_bottom > app_relative_bottom
				)*/
				current_relative_bottom >= app_relative_bottom
		)

		//console.log('is_current_scrollable_down', is_current_scrollable_down, current.prop('id'), is_first, is_last, delta );

		if( delta == 1 && !is_last && ( !is_current_scrollable_down ) ){
			next = current.next()
			//console.log('down', $(current).next());
		}
		else if( delta == 1 && is_last && ( !is_current_scrollable_down ) ){
			next = $('#footer')
		}
		else if( delta == 1 && is_current_scrollable_down )
		{
			next = $('#app').scrollTop() + ($('#app').outerHeight() / 1.5 )
			max_next = $('#app').scrollTop() + ($('#app').outerHeight() )

			if( next > current_relative_bottom - $('#app').outerHeight() )
			{ 
				force_bottom_section = true
				next = current_relative_bottom - $('#app').outerHeight()
			}

			if( current.find('.anchor') )
			{
				let found = false
				let relative_top_anchor
				current.find('.anchor').each( (index, anchor) => {
					
					if( found == false )
					{
						//console.log( $(anchor).position().top, $('#app').scrollTop() );
						relative_top_anchor = $(anchor).position().top +  $('#app').scrollTop()

						if( relative_top_anchor > $('#app').scrollTop() + 1 )
						{
							found = anchor
							//console.log(anchor);
						}
					}
				});
				
				//console.log( 'relative_top_anchor', relative_top_anchor, next );

				if( found != false && relative_top_anchor < max_next && !force_bottom_section )
				{
					next = relative_top_anchor
					//console.log( 'relative_top_anchor' );
				}
			}
			
			//console.log( 'next int', next )
		}
		else if( delta == -1 && !is_first && ( !is_current_scrollable_up ) && current.prop('id') != 'footer' ){
			next = current.prev()
			//console.log('up prev');
		}
		else if( delta == -1 && current.prop('id') == 'footer' ){
			next = $('#app .page').first().find('.section').last()
			//console.log('footer', $('#app .page').first() );
		}
		else if( delta == -1 && is_current_scrollable_up && current.prop('id') != 'footer'  )
		{
			next = $('#app').scrollTop() - ($('#app').outerHeight() / 1.5 )
			max_next = $('#app').scrollTop() - ($('#app').outerHeight() )

			if( next < current_relative_top )
			{ 
				force_top_section = true
				next = current_relative_top
			}

			if( current.find('.anchor') )
			{
				let found = false
				let relative_top_anchor
				let found_relative_top_anchor = false

				current.find('.anchor').each( (index, anchor) => {
					
					//console.log( $(anchor).position().top, $('#app').scrollTop() );
					relative_top_anchor = $(anchor).position().top +  $('#app').scrollTop()

					if( relative_top_anchor < $('#app').scrollTop() - 1 )
					{
						found_relative_top_anchor = relative_top_anchor
						found = anchor
					}
				});
				

				if( found != false && found_relative_top_anchor != false && found_relative_top_anchor > max_next && !force_top_section )
				{
					next = found_relative_top_anchor
				}
				/*else
				{
					next = $('#app').scrollTop() - ($('#app').outerHeight() / 2)
				}*/
			}
			//console.log( 'next int', next )
		}

		//console.log( current.index(), $('.page .section').length - 2 );

		return next
	}

	function go_to_next(delta){
		if( animating == true )
		{
			return
		}

		let next = find_next_section(delta)
		let new_top

		//console.log( is.decimal( next ) );
		if( is.decimal( next ) || is.integer( next ) ){
			new_top = next
		}
		else
		{
			new_top = next.position().top + $('#app').scrollTop()
			if( next.outerHeight() > $('#app').outerHeight() && delta == -1 )
			{
				new_top += next.outerHeight() - $('#app').outerHeight()
			}
		}

		duration = new_top - $('#app').scrollTop()
		if( duration < 0 )
		{
			duration *= -1
		}

		duration += 300

		duration = Math.round( duration )

		animating = true

		$('#app').trigger({
			'type': 'before_scroll_to_section',
			'new_top': new_top,
		})

		anime({
			targets: '#app',
			scrollTop: new_top,
			duration: duration,
			easing: 'easeInOutQuad',
			complete: function() {
				animating = false
				$('#app').css('scrolltop', new_top + 'px');

				$('#app').trigger({
					'type': 'after_scroll_to_section',
					'new_top': new_top,
				})
			}
		});
	}

	
	function reset_scroll_sizes(){
		percent_screen_page = ( $('#app').outerHeight() / $('#app')[0].scrollHeight )
		barHeight = $('#app').outerHeight() * percent_screen_page

		scrollbar.css({
			'position': 'fixed',
			'width' : '10px',
			'height' : barHeight + 'px',
			'background' : 'rgba(0,0,0,0.7)',
			'top': 0,
			'right': 0,
			'z-index' : 10000,
			'transition': 'all'
		});
	}

	function init_fake_scrollbar(){
		
		$('#app').append( scrollbar )

		reset_scroll_sizes()

		$('#app').on('before_scroll_to_section',  (event) => {

			let percent_scroll = Math.round( event.new_top / ( $('#app')[0].scrollHeight - $('#app').outerHeight() ) * 100 ) / 100
			let scrollbar_top = ( $('#app').outerHeight() - barHeight ) * percent_scroll

			anime({
				targets: scrollbar[0],
				top: scrollbar_top,
				duration: duration,
				easing: 'easeInOutQuad',
				complete: function() {
					
				}
			});
		});
		
		$(document).on('before_next_page', function() {
			scrollbar.animate({
				'opacity': 0,
				'top': $('#app').outerHeight()
				},
				200);
		});

		$(document).on('after_next_page', function() {
			reset_scroll_sizes()
			scrollbar.animate({
				'opacity': 1,
				},
				500);
		});

		interact( scrollbar[0] ).draggable({
			cursorChecker(){
				return false
			},
			listeners: {
				move (event) {
					//console.log('move', event.dy);

					scrollDragging = true

					let new_pos = scrollbar.position().top + event.dy

					if( new_pos > 0 && new_pos + barHeight < $('#app').outerHeight() )
					{
						scrollbar.css('top', new_pos);	
					}

					let new_percent_scroll = Math.round( (scrollbar.position().top) /  ($('#app').outerHeight() - barHeight) * 100 ) / 100
					let new_scroll_top = $('#app')[0].scrollHeight * new_percent_scroll
					console.log( new_percent_scroll )
					$('#app').scrollTop( new_scroll_top )

				},
				end () {
					
					scrollDragging = false
				}
			}
		})

		console.log('scrollDragging', scrollDragging);

	}



	if( is.desktop() )
	{
		$('#app').css('overflow', 'hidden');

		init_fake_scrollbar()

		window.addEventListener("wheel", event => {
			const delta = Math.sign(event.deltaY);
			//console.info(delta, find_next_section(delta) );
			
			go_to_next(delta)		
		});

		hotkeys('up, down', function(event, handler){
			// Prevent the default refresh event under WINDOWS system
			event.preventDefault() 
			//console.log('you pressed', event, handler) 
			switch (handler.key) {
				case 'up': go_to_next(-1)
				break;
				case 'down': go_to_next(1)
				break;
			}
		});
	}
	else
	{
		$('#app').css('overflow-y', 'auto');
	}

	
}

export default scrollSection 