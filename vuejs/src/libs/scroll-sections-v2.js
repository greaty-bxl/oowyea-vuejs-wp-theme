import is from 'is_js'
import anime from 'animejs'
import hotkeys from 'hotkeys-js';

function scrollSection(vue){

	var $ = vue.$
	var animating = false

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
						//console.log(anchor);
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

		let duration = new_top - $('#app').scrollTop()
		if( duration < 0 )
		{
			duration *= -1
		}

		duration += 300

		duration = Math.round( duration )
		//console.log('duration', duration);
		//$('.banner').remove()

		animating = true
		anime({
			targets: '#app',
			scrollTop: new_top,
			duration: duration,
			easing: 'easeInOutQuad',
			complete: function() {
				animating = false
				$('#app').css('scrolltop', new_top + 'px');
			}
		});		

		/*$("#app").stop()
				.animate({scrollTop: new_top + 'px'}, 900, 'easeOutQuad')
				.promise()
				.then( ()=>{
					animating = false
				})*/
	}

	if( is.desktop() )
	{
		$('#app').css('overflow', 'hidden');

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