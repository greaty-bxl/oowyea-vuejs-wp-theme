class main_audio{
	constructor(){
		this.state = {
			audio: new Audio(),
			title: '-',
			cover: null,
			playing: false,
			from: null,
			player: null,
			radio_visualizer_vars: {},
			last_audio: null
		}
	}

	update_main_audio_src(state, payload){
		//console.log('change src', state, payload);

		let target = state.main_audio

		target.audio.src = payload.src
		if( payload.start )
		{
			target.audio.currentTime = payload.start
		}
		
		target.from = payload.from
		target.playing = true

		var promise = target.audio.play()
		if (promise !== undefined) {
			promise.then( () => {
				target.playing = true
			}).catch(() => {
				target.playing = false
			});
		}

		if( payload.cover )	target.cover = payload.cover

		if( payload.title )	target.title = payload.title	

		state.main_audio = Object.assign({}, state.main_audio)
	}

	play_pause(state){
		//console.log('play pause', state, payload);

		let target = state.main_audio

		if( target.playing )
		{
			target.audio.pause()
			target.playing = false
		}
		else
		{
			target.audio.play()
			target.playing = true
		}

		state.main_audio = Object.assign({}, state.main_audio)
	}
}
export default new main_audio()