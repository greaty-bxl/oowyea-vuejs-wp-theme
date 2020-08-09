import is from 'is_js'

export default class element{
	constructor(game, scene, config){

		this.game = game
		this.config = config

		console.log(scene);

		this.element = scene.add.container()

	}

	preload(){
		if( is.function( this.config.preload ) ) this.config.preload(this.element)
	}

	create(){
		if( is.function( this.config.create ) ) this.config.create(this.element)
	}

	sizes(){
		if( is.function( this.config.sizes ) ) this.config.sizes(this.element)
	}

	update(){
		if( is.function( this.config.update ) ) this.config.update(this.element)
	}
}