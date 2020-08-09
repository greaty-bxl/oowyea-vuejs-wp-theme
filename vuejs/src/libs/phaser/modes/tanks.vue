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
			'zoom': 100, //Integer || Object{ desktop: 100, tablet: 150, mobile: 170 }
			'zoom-max': 300,
			'zoom-min': 50,
			init: (game, scene/*, players*/) => {

				//grid map
				game.new_map(100, 100)

				//my tank
				game.new_element({
					preload: (element) => {
						console.log('preload images for the element', element);

					},
					create: (element) => {
						console.log('create element', element);

						let rect = scene.add.rectangle(vw(50), vh(50), vh(5), vh(5), 0x6666ff)
						let rect2 = scene.add.rectangle(vw(50), vh(53), vh(2), vh(1), 0x6666ff)
						
						element.add(rect, rect2)
					},
					sizes: () => {
						console.log('sizes element', game);
					},
					update: () => {
						//console.log('update element');
					}
				})
			},
			create: (game, scene) => {
				//scene.cameras.main.setBounds(0, 0, 1024, 2048);
				scene.cameras.main.setZoom(1);
			}			
		})
	}
}
</script>

<style>

</style>