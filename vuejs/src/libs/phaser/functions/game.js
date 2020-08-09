import Phaser from 'phaser'
import is from 'is_js'
import element from 'Libs/phaser/functions/element.js'
import {vh,vw} from 'Libs/phaser/functions/vh-vw.js'

let game, oyscene 

export default class oowyea_game{
	constructor(wrap, config = {}){

		console.log('init oowyea game', wrap, config);

		let $ = window.jquery
		
		window.oowyea_game = {}
		window.oowyea_game.config = config
		
		
		function elements_events( event ){
			$.each(game.elements, function(index, element) {
				if( is.function( element[event] ) ) element[event]()	
			});
		}

		/*function proportional(percent) {
			return Math.round( (w + h / 2) * (percent / 100) )
		}

		function fonts_proportional(fontSize){
			return Math.round( ( ( (w + h) / 2.2 ) / 999 ) * fontSize )
		}*/

		let phaser_config = {
			parent: $(wrap)[0],
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

					oyscene = this

					//w = $('#game').width()
					//h = $('#game').height()

					//console.log( w, h )

					if( is.function( config.init ) ) config.init(game, oyscene)

					if( is.function( config.preload ) ) config.preload(game, oyscene)

					elements_events('preload')

					/*this.btn = scene.add.container()
					this.rect = scene.add.rectangle(0, 0, proportional(20), proportional(5), 0x6666ff)
					this.text = scene.add.text( 0, 0, 'board game', { 
						fontFamily: 'Arial',
						fontSize: fonts_proportional(40) })

					this.text.x = Math.round( this.rect.x - (this.text.width / 2) )
					this.text.y = Math.round( this.rect.y - (this.text.height / 2) )

					this.btn.add(this.rect)
					this.btn.add(this.text)*/

				},
				create: function(){
					if( is.function( config.create ) ) config.create(game, oyscene)
					elements_events('create')
					if( is.function( config.sizes ) ) config.sizes(game, oyscene)
					elements_events('sizes')


				},
				update: function(){

					if( is.function( config.update ) ) config.update(game, oyscene)
					elements_events('update')
					/*this.btn.x = w/2
					this.btn.y = h/2*/
				}
			}
		}

		game = new Phaser.Game(phaser_config)

		game.elements = []
		game.new_map = this.new_map
		game.new_element = this.new_element


		$(window).on('resize', function() {
			//w = $('#game').width()
			//h = $('#game').height()
			game.scale.setGameSize($('#app').outerWidth(), $('#app').outerHeight());

			if( is.function( config.sizes ) ) config.sizes(game, oyscene)
			elements_events('sizes')
		});
	}

	new_map(w,h){
		console.log(w,h)
		console.log( vw(100), vh(100) )
	}

	new_element(config){
		return this.elements[ this.elements.length ] = new element(game, oyscene, config)
	}

}