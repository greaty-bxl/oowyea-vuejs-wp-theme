import is from 'is_js'
import anime from 'animejs'
import hotkeys from 'hotkeys-js'
import interact from 'interactjs'

//$ = window.jquery

/*import velocity from 'velocity-animate'
window.jquery.prototype.velocity = velocity*/

/*console.log(velocity);*/

function scrollSection(vue){

	let $ = vue.$
	let animating = false	

	let scrollbar = $('<div>')
	let percent_screen_page
	let barHeight
	let scrollDragging = false
	//let dragTop = 0
	let dragSens = 1

	let duration

	function find_current_section(){
		
		let current

		$('.section').each(function(index, el) {

			let app_scrollTop = $('#app').scrollTop()

			/*if( scrollDragging == true )
			{
				app_scrollTop = dragTop
				console.log('find_current_section scrollDragging', dragTop);
			}*/

			let relative_top = $(el).offset().top + app_scrollTop
			let relative_bottom = relative_top + $(el).outerHeight()
			let app_relative_bottom = app_scrollTop + $('#app').outerHeight()

			if( (
					is.within(relative_top, app_scrollTop - 5, app_scrollTop + 5 )
					&&
					is.within($(el).outerHeight(), $('#app').outerHeight() - 5, $('#app').outerHeight() + 5 )
				)
				||
				( 
					$(el).outerHeight() > $('#app').outerHeight()
					&&
						(
							is.within(relative_top, app_scrollTop - 5, app_scrollTop + 5 )
							||
							relative_top < app_scrollTop
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
					relative_top > app_scrollTop
					&&
					/*(
						is.within(relative_bottom, app_relative_bottom - 5, app_relative_bottom + 5 )
						||
						relative_bottom < app_relative_bottom
					)*/	
					relative_bottom <= app_scrollTop + $('#app').outerHeight() + 2
				)
			)
			{
				current = $(el)
			}


		});

		

		//if not current in screen then find the section who is the most in screen
		if( is.undefined( current ) )
		{
			let max_in_screen = 0
			let val = 0
			//let element = null

			$('.section').each(function(index, el) {
				let relative_top = $(el).offset().top + $('#app').scrollTop()
				let relative_bottom = relative_top + $(el).outerHeight()
				let app_relative_bottom = $('#app').scrollTop() + $('#app').outerHeight()
				//let pos1 = $(el).offset().top
				//let pos2 = $('#app').scrollTop() - ( $(el).offset().top + $(el).outerHeight() )
				if( relative_top <= $('#app').scrollTop() && relative_bottom < app_relative_bottom )
				{
					val = relative_bottom - $('#app').scrollTop()
				}
				else if( relative_top > $('#app').scrollTop() && $(el).outerHeight() >= $('#app').outerHeight() )
				{
					val = app_relative_bottom - relative_top
				}

				if( val > max_in_screen )
				{
					max_in_screen = val
					current = $(el)
				}
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
				(
					is.within(current_relative_bottom, app_relative_bottom - 5, app_relative_bottom + 5 )
					||
					current_relative_bottom > app_relative_bottom
				)
				//current_relative_bottom >= app_relative_bottom
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
						//console.log( $(anchor).offset().top, $('#app').scrollTop() );
						relative_top_anchor = $(anchor).offset().top +  $('#app').scrollTop()

						if( 
							relative_top_anchor > $('#app').scrollTop() + 1
							
							)
						{
							found = anchor
							//console.log('anchor', anchor);
						}
					}
				});
				
				//console.log( 'relative_top_anchor', relative_top_anchor, next );

				if( 
					found != false 
					&& 
						(
							is.within(relative_top_anchor, max_next - 10, max_next + 10 )
							||
							relative_top_anchor < max_next 
						)
					&& !force_bottom_section )
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
					
					//console.log( $(anchor).offset().top, $('#app').scrollTop() );
					relative_top_anchor = $(anchor).offset().top +  $('#app').scrollTop()

					if( relative_top_anchor <= $('#app').scrollTop() - 1 )
					{
						found_relative_top_anchor = relative_top_anchor
						found = anchor
					}
				});
				

				if( 
					found != false 
					&& 
					found_relative_top_anchor != false 
					&& 
						(
							//found_relative_top_anchor > max_next 
							is.within(found_relative_top_anchor, max_next - 5, max_next + 5 )
							||
							found_relative_top_anchor > max_next 
						)
					&& !force_top_section )
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

		if( scrollDragging && is.not.decimal( next ) && is.not.integer( next )  )
		{
			
			//next = current
		}

		if( !next )
		{
			//next = 0
		}

		//console.log('in', scrollDragging, current, next);

		return next
	}

	function go_to_next(delta){

		let is_scrolling_by_what = $('#app').data('scrolling')
		//console.log( 'scroll', find_current_section() );
		if( !is_scrolling_by_what || is_scrolling_by_what == "scroll-sections" )
		{
			$('#app').data('scrolling', 'scroll-sections')
		}
		else
		{
			return
		}

		if( animating == true )
		{
			return
		}

		let next = find_next_section(delta)
		let new_top

		if( is.decimal( next ) || is.integer( next ) ){
			new_top = next
		}
		else
		{
			//console.log('test', $('#app').scrollTop() + $('#app').innerHeight(), $('#app')[0].scrollHeight );
			//console.log( is.within($('#app').scrollTop() + $('#app').innerHeight(), $('#app')[0].scrollHeight - 5, $('#app')[0].scrollHeight + 5 ) );

			//if( window.current_section == 'footer' && next.prop('id') == 'footer' && delta == 1 )
			if( 
				is.within( $('#app').scrollTop() + $('#app').innerHeight(), $('#app')[0].scrollHeight - 5, $('#app')[0].scrollHeight + 5 ) && delta == 1 
				||
				$('#app').scrollTop() == 0 && delta == -1
			)
			{
				return
			}

			new_top = next.offset().top + $('#app').scrollTop()
			// go bottom of big prev section
			if( next.outerHeight() > $('#app').outerHeight() && delta == -1 && !scrollDragging )
			{
				new_top += next.outerHeight() - $('#app').outerHeight()
			}
		}

		if( new_top > $('#app')[0].scrollHeight - $('#app').outerHeight() )
		{
			new_top = $('#app')[0].scrollHeight - $('#app').outerHeight()
		}

		//console.log('footer', new_top, $('#app')[0].scrollHeight - $('#app').outerHeight());

		go_to( new_top, next )
	}

	function go_to( new_top, next ) {
		duration = new_top - $('#app').scrollTop()
		if( duration < 0 )
		{
			duration *= -1
		}

		duration += 450

		duration = Math.round( duration )

		animating = true

		$('#app').trigger({
			'type': 'before_scroll_to_section',
			'new_top': new_top,
			'current' : window.current_section,
			'next' : next,
			'duration': duration
		})


		let next_id = window.current_section

		if( next.length ){ next_id = next.prop('id') }

		update_current_section( next_id, {
			'current' : window.current_section,
			'next' : next,
			'duration': duration
		})

		anime({
			targets: '#app-scroller',
			translateY: $('#app').scrollTop() - new_top,
			duration: duration,
			easing: 'easeInOutQuad',
			update: function() {
				$('#app').trigger('scroll')
			},
			complete: function() {
				
				$('#app').scrollTop( new_top )
				$('#app-scroller').css('transform', 'translateY(0px)');

				animating = false

				$('#app').trigger({
					'type': 'after_scroll_to_section',
					'new_top': new_top,
					'current' : window.current_section,
					'next' : next,
					'duration': duration,
				})
			}
		});

		/*$('#app').velocity({
			tween: [new_top, $('#app').scrollTop()],
		}, {
			easing: "easeInOutQuad",
			duration: duration,
			progress: function(elements, complete, remaining, start, tweenValue) {
				$('#app').scrollTop( tweenValue );
			},
			complete: function() {
				
				animating = false

				$('#app').trigger({
					'type': 'after_scroll_to_section',
					'new_top': new_top,
					'current' : window.current_section,
					'next' : next,
					'duration': duration,
				})
			}
		});*/

		//$('#app').scrollTop( new_top );

		/*$('#app')
			.velocity('stop')
			.velocity('scroll', { duration: 750, offset: new_top });*/

		/*$('#app').velocity({
			'scrollTop': new_top + 'px',
		}, {
			easing: "easeInOutQuad",
			duration: 800,
			complete: function() {
				animating = false
				//$('#app').css('scrolltop', new_top + 'px');

				$('#app').trigger({
					'type': 'after_scroll_to_section',
					'new_top': new_top,
				})
			}
		});*/
	}

	function get_scroll_top(new_top){
		let percent_scroll = Math.round( new_top / ( $('#app')[0].scrollHeight - $('#app').outerHeight() ) * 100 ) / 100
		return ( $('#app').outerHeight() - barHeight ) * percent_scroll
	}
	
	function reset_scroll_sizes(){
		percent_screen_page = ( $('#app').outerHeight() / $('#app')[0].scrollHeight )
		barHeight = $('#app').outerHeight() * percent_screen_page

		scrollbar.css({
			'position': 'fixed',
			'width' : '10px',
			'height' : barHeight + 'px',
			'background' : '#6e6e6e',
			'top': get_scroll_top( $('#app').scrollTop() ),
			'right': 0,
			'z-index' : 10000,
			//'transition': 'all'
			'touch-action' : 'none'
		});
	}

	function init_fake_scrollbar(){
		
		$('#app').append( scrollbar )

		reset_scroll_sizes()

		$('#app').on('before_scroll_to_section',  (event) => {

			if( scrollDragging == false )
			{
				anime({
					targets: scrollbar[0],
					top: get_scroll_top(event.new_top),
					duration: duration,
					easing: 'easeInOutQuad',
					complete: function() {
						
					}
				});
			}
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

		$('#app').on('after_scroll_to_section', function() {
			reset_scroll_sizes()
		})

		$('*').on('load', function() {
			reset_scroll_sizes()
		})

		interact( scrollbar[0] ).draggable({
			cursorChecker(){
				return false
			},
			listeners: {
				move (event) {

					if( event.dy > 0 )
					{
						dragSens = 1
					}
					else if( event.dy < 0 )
					{
						dragSens = -1
					}

					scrollDragging = true

					let new_pos = scrollbar.offset().top + event.dy

					if( new_pos > 0 && new_pos + barHeight < $('#app').outerHeight() )
					{
						scrollbar.css('top', new_pos);	
					}

					let new_percent_scroll = Math.round( (scrollbar.offset().top) /  ($('#app').outerHeight() - barHeight) * 100 ) / 100
					let new_scroll_top = $('#app')[0].scrollHeight * new_percent_scroll

					$('#app').scrollTop( new_scroll_top )
					//dragTop =  new_scroll_top
				},
				end () {
					
					scrollDragging = false

					go_to_next(dragSens)

					
				}
			}
		})
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
		$('#header').css('position', 'absolute');
	}

	function update_current_section( section_id, details )
	{
		if( section_id )
		{
			window.current_section = section_id
		}
		else
		{
			window.current_section = find_current_section().prop('id')	
		}		
		//console.log(window.current_section);
		if( window.current_section )
		{
			window.current_section_index =  $('#'+window.current_section).index()

			let permalink = $('#'+window.current_section).data('permalink')
			vue.pushHistory( permalink )
		}
		vue.$store.commit({
			type: 'section_change',
			current_section: vue.$store.state.wp.sections[window.current_section_index],
			index: window.current_section_index,
			details: details
		})
	}
	/*$('#app').on('after_scroll_to_section', function() {
		update_current_section()
	})*/
	/*$('#app').on('scroll', function() {
		let is_scrolling_by_what = $('#app').data('scrolling')
		//console.log( 'scroll', find_current_section() );
		if( !is_scrolling_by_what || is_scrolling_by_what == "scroll-sections" )
		{
			$('#app').data('scrolling', 'scroll-sections')
			update_current_section()	
		}		
	});*/
}

export default scrollSection 