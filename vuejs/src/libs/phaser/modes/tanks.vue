<!-- @date 2020-07-25 -->
<template>
	<div>
		<div id="phaser-canvas-wrap"></div>
	</div>	
</template>

<script>
import Phaser from 'phaser'

export default {
	mounted(){
		let $ = this.$

		let game, w, h

		function proportional(percent) {
			return Math.round( (w + h / 2) * (percent / 100) )
		}

		function fonts_proportional(fontSize){
			return Math.round( ( ( (w + h) / 2.2 ) / 999 ) * fontSize )
		}

		let config = {
			parent: document.getElementById("phaser-canvas-wrap"),
			type: Phaser.AUTO,
			width: '100%',
			height: '100vh',
			physics: {
				default: 'arcade',
				arcade: {
					gravity: { y: 300 },
					debug: false
				}
			},
			scene: {
				preload: function(){
					
					let scene = this

					w = $('#game').width()
					h = $('#game').height()

					

					console.log( w, h )

					/*this.rect = this.add.rectangle(w/2, h/2, proportional(20), proportional(5), 0x6666ff)
					this.text = this.add.text( Math.round(w/2), Math.round(h/2), 'board game', { 
						fontFamily: 'Arial',
						fontSize: fonts_proportional(40) })
					this.text.x = Math.round( (w/2) - (this.text.width / 2) )
					this.text.y = Math.round( (h/2) - (this.text.height / 2) )
					this.text.setResolution(3)
					console.log(this.text.x)*/

					let btn = scene.add.container()
					let rect = scene.add.rectangle(0, 0, proportional(20), proportional(5), 0x6666ff)
					let text = scene.add.text( 0, 0, 'board game', { 
						fontFamily: 'Arial',
						fontSize: fonts_proportional(40) })

					text.x = Math.round( rect.x - (text.width / 2) )
					text.y = Math.round( rect.y - (text.height / 2) )

					btn.add(rect)
					btn.add(text)

					btn.x = w/2
					btn.y = h/2

				},
				create: function(){

				},
				update: function(){
					
				},
			}
		}

		game = new Phaser.Game(config)

		$(window).on('resize', function() {
			game.destroy(true)
			game = new Phaser.Game(config)
		});

		console.log(game, $)
		
	}
}
</script>

<style>

</style>