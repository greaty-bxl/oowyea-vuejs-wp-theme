<template>
	<div>
		<slot/>
	</div>
</template>

<script>
	import anime from 'animejs/lib/anime.es.js';

	console.log(anime);	

export default{

	mounted(){

		let $ = this.$

		let lines = {}
		let i_lines = 0

		// $( this.$el ).html(function (i, html) {
		// 	return html.replace(/( )/g, '<span>$1</span>');
		// })

		var text_remplace = " ";

		var tets = $( this.$el ).html()

		var passage = true 

		for (var i = 0; i < tets.length; i++) {

			if ( tets.charAt(i) == "<"){

				passage = false

				text_remplace += tets.charAt(i)

			}

			else if (passage == false ) {

				text_remplace +=  tets.charAt(i)

			}

			if ( passage == true ) {

				if (tets.charAt(i) == " ") {

					text_remplace += '&nbsp;'

				}
				
				else{

					text_remplace += '<span>'+ tets.charAt(i) +'</span>';

					$( this.$el ).html(" ")

					$( this.$el ).append(text_remplace)

				}

			}

			if ( tets.charAt(i) == ">"){

				passage = true

			}
		
		}

		$( this.$el ).find('span').each(function(index, el) {
			let newTop = Math.round( $(el).position().top )
			// let newLeft = Math.round( $(el).position().left )
			// let newright = Math.round( $(el).position().right )
			$(el).attr('data-lettertop', newTop )
			// $(el).css({
			// 	top: newTop,
			// 	// left: newLeft,
			// 	// right: newright,
			// 	// position: 'absolute'
			// });

			lines[newTop] = newTop

		})

			console.log($( this.$el ));

			console.log(lines);

		// }

		// line ()

		$.each(lines, function(index, val) {
			
			$("[data-lettertop="+ val +"]:first").addClass('on-screen')
			$("[data-lettertop="+ val +"]:first").addClass('line')
		});
	
		$.each(lines, function(index, val) {

			let delay = i_lines * 150

			$('[data-lettertop='+val+']').on('enter-screen', () => {

					$('[data-lettertop='+val+']').each( (index, el) => {
						anime({
							targets: el,
							translateY: -20,
							opacity: 1,
							easing: 'linear',
							delay: delay,
							duration: 500
						}) ;	
					});
					console.log('enter', $('[data-lettertop='+val+']').length, i_lines );

			})

			$('[data-lettertop='+val+']').on('leave-screen', () => {
				$('[data-lettertop='+val+']').css({
					'opacity': 0,
					// 'display': 'inline-block'
				});
			})

			i_lines++
		});		

		
		this.$emit('template_mounted')


}
}
</script>
