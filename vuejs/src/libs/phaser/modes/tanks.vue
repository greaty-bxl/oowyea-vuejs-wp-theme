<!-- @date 2020-07-25 -->
<template>
	<div></div>
</template>

<script>
import OYGame from 'Libs/phaser/functions/game.js'
import {vh,vw} from 'Libs/phaser/functions/vh-vw.js'

export default {
	mounted(){		

		new OYGame( this.$el, {
			'max-players': 0,
			'game-type': 'tank', //space, plateform, tank
			'controllers': 'any',
			'zoom': 1, //Integer || Object{ desktop: 100, tablet: 150, mobile: 170 }
			'zoom-max': 3,
			'zoom-min': 0.5,
			init: (game, scene/*, players*/) => {

				console.log(vw(100),vh(100));

				//grid map
				game.new_map(100, 100)

				//my tank
				game.new_element({
					preload: function(element) {
						console.log('preload images for the element', element);

					},
					create: function(element) {
						
						this.rect = scene.add.rectangle(0, 0, 0, 0, 0x6666ff)
						this.rect2 = scene.add.rectangle(0, 0, 0, 0, 0xfff)

						this.rect2.fillColor = 0x20FFF2

						console.log(this.rect, this.rect2); 
						
						element.add(this.rect)
						element.add(this.rect2)

						console.log('create element', element, this);
					},
					sizes: function (element) {
						console.log('sizes element', element);
						this.rect.height = vh(5)
						this.rect.width = vh(5)

						this.rect2.height = vh(2)
						this.rect2.width = vh(2)
						this.rect2.x = vh(1.5)
						this.rect2.y = vh(1.5)

						element.x = vw(50) - (this.rect.width / 2)
						element.y = vh(50) - (this.rect.width / 2)
					},
					update: () => {
						//console.log('update element');
					}
				})
			},
			create: (game, scene) => {
				//scene.cameras.main.setBounds(-500, 0, 1024, 2048);
				scene.cameras.main.setZoom(1);
			}			
		})
	}
}
</script>

<style>

</style>