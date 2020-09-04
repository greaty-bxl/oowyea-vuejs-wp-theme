import wp_ajax from 'Libs/wp-ajax.js'

let ajax_timer;
let ajax_queue = {}
let ajax_keys_queue = {}

class option{

	/* State */
	constructor(){
		this.state = window.wp.options

		/*this.subscribe((mutation, state) => {
			
			if( mutation.type == 'sections_load' )
			{
				console.log('update options', state);
			}
		})*/
	}

	set_option(state, payload){

		for (const [key, value] of Object.entries(payload)) {
			if( key != 'type' ){

				ajax_keys_queue[key] = key
				ajax_queue[key] = value
				
			}
		}

		
		clearTimeout( ajax_timer )
		ajax_timer = setTimeout( ()=>{
			console.log( 'one time ajax', ajax_queue )
			
			wp_ajax( 'save_theme_option', {
				'keys' : ajax_keys_queue,
				'state' : ajax_queue
			}, (result) => {
				console.log('ajax return', result);
			});

			ajax_keys_queue = {}
			ajax_queue = {}

		}, 1500 )

		

	}

	get_option(){

	}
}

export default new option()