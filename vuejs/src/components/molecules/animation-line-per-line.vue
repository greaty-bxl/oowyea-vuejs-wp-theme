<template>
	<div>
		<slot/>
	</div>
</template>

<script>
	import anime from 'animejs/lib/anime.es.js';

	//console.log(anime);	

export default{

	mounted(){

		let $ = this.$

		let lines = {}
		// let i_lines = 0



		var text_remplace = " ";

		var tets = $( this.$el ).html()

		var passage = true 

		for (var i = 0; i < tets.length; i++) {

			if( i == 0)
			{
				text_remplace += '<span class="word ">'
			}

			if ( tets.charAt(i) == "<"){

				passage = false

				text_remplace += tets.charAt(i)

			}

			else if (passage == false ) {

				text_remplace +=  tets.charAt(i)

			}

			if ( passage == true ) {

				if (tets.charAt(i) == " ") {

					text_remplace += '</span><span class="space"> </span><span class="word">'

				}
				else if (tets.charAt(i) == "-") {
					text_remplace += '<span class="char char'+this._uid+'">-</span></span><span class="word ">'
				}
				else
				{

					text_remplace += '<span class="char char'+this._uid+'">'+ tets.charAt(i) +'</span>';

				}
			}

			if ( tets.charAt(i) == ">"){

				passage = true
			}
		
		}



		text_remplace += "</span>"

		$( this.$el ).html( text_remplace )
		$( this.$el ).find('.word').css({'white-space': 'nowrap',
			// 'width': '150px',
			'display': 'inline-block',
			'overflow': 'hidden',

		});
		$( this.$el ).find('.char').css({
			'display': 'inline-block',
			'transform': 'translateY(50px)',

		});

		$( this.$el ).find('.word')
		.first()
		.addClass('on-screen')
		.on('leave-screen', () => {
			$( this.$el ).find('.char').css({
				'opacity': 0,
				'translateY': 50,
			});
		})
	
		.on('enter-screen', () => {

			// console.log( 'my first word enter-screen' )
			
			$( this.$el ).find('.char').each(function(index, el) {
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

			/*$.each(lines, function(index, val) {
				
				$("[data-lettertop="+ val +"]:first").addClass('on-screen')
				//$("[data-lettertop="+ val +"]:first").addClass('line')
			});*/

			//$.each(lines, (/*index, val*/) => {

				//let delay = i_lines * 50

				// console.log(i_lines);

					/*$('[data-lettertop='+val+']').each( (index, el) => {
							
					});*/
					// console.log('anime', '.char'+this._uid);
					anime({
						targets: '.char'+this._uid,
						opacity: 1,
						translateY: 0,
						easing: 'cubicBezier(0.25, 0.46, 0.45, 0.94)',
						duration: 500,
						delay: 700,
						
					}) ;
		
					
				// console.log('enter', $('[data-lettertop='+val+']').length, i_lines );


				//i_lines ++
			//});
		});
		
		


		//setTimeout( ()=>{
			/*$( this.$el ).find('.char').each(function(index, el) {
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
			})*/
		//}, 1 )

		
		/**/

		this.$emit('template_mounted')
	}
}
</script>


<style >
	
	.word{
		text-align: left;
		
	}
	
</style>