import wp_ajax from 'Libs/wp-ajax.js'

Date.prototype.addHours = function(h) {
  this.setTime(this.getTime() + (h*60*60*1000));
  return this;
}

String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}

const radio = class radio {
	constructor() {
		this.state = {
			'playlist': [],
			'title': '...loading',
			'next_audio' : null,
			'next_show' : null,
			'paused': false
		}
	}

	init_radio( state ) 
	{
		//console.log('init radio', state, payload);

		let target = state.radio

		wp_ajax('get_radio_playlist', null, (data) => {
			
			target.playlist = data.radio_playlist

			let $ = window.jquery

			let date = new Date( Date.now() )
			date.addHours(2)			

			let current_second_of_the_day = (date.getUTCMinutes() + date.getUTCHours() * 60) * 60 + date.getUTCSeconds()
			
			let start = data.radio_show.metas.start[0].split(':')
			let start_in_second = (parseInt(start[1]) + parseInt(start[0]) * 60) * 60 + parseInt(start[2])
			let current_second_to_play = current_second_of_the_day - start_in_second

			let select_current = false
			let selected_index = false
			let next_index = false

			let prev = null
			let prev_index = 0


			$.each(target.playlist, (index, val) => {

				if( current_second_to_play >= prev_index && current_second_to_play < index && !select_current)
				{
					//console.log('current', target.playlist[prev_index]);
					target.playlist[prev_index]['current'] = true

					selected_index = prev_index
					select_current = prev

					next_index = index
				}
				else
				{
					target.playlist[index]['current'] = false
				}

				prev_index = index
				prev = val

				target.playlist[index]['time_start'] = ((start_in_second + index)).toHHMMSS()
			});

			let currentTime = current_second_to_play - selected_index
			let currentTitle = select_current.post_title

			let music_url = state.wp.upload_baseurl + '/' + select_current.metas._wp_attached_file

			//console.log('next_timer', next_index - current_second_to_play);

			let get_cover = music_url.toString()
				.replace(/(\.-)|(\.\.)/g,'-')
				.replace(/\./g,'-') + '-image.jpg'

			//console.log( ("test.-test").replace(/(\.-)/g,'-') )
			//console.log('_wp_attached_file', get_cover);
			let cover = null

			$.get(get_cover, () => {
				cover = get_cover
			})
			.fail( () => {
				cover = ''
			})
			.always( () => {
				//console.log('always', cover);
				this.commit({
					type: 'update_main_audio_src',
					src: music_url,
					title: currentTitle,
					cover: cover,
					start: currentTime,
					from: 'radio'
				})
			});

			target.next_timer = setTimeout( () =>{
				/*this.playing = false*/
				if( !target.paused )
				{
					//console.log('next by timer');
					this.commit({
						type: 'init_radio',
					})
				}
			}, (next_index - current_second_to_play) * 1000)
		})
	}
}
export default new radio()