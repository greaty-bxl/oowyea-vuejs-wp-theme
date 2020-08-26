class wp{
	constructor(){
		this.state = window.wp
		//console.log( this.state );
	}

	section_change(state, payload){

		//console.log('section_change', state, payload)
		
		state.wp.current_section = payload.section

		state.main_audio = Object.assign({}, state.main_audio)
	}
}

export default new wp()