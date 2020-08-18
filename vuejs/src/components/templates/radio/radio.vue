<!-- template: Radio -->
<template>
	<div class="section-wrap">
		<div class="clear"></div>
		<h1 v-html="post.post_title"></h1>
		<div v-html="post.post_content"></div>
		
		<div id="player">
			<div class="play-pause" v-on:click="click_play_pause">
				<v-icon name="pause" v-if="playing"></v-icon>
				<v-icon name="play" v-else></v-icon>
			</div>
			<h2>{{currentTitle}}</h2>
			<div class="playlist">
				<div 
					class="song-item" 
					v-for="(item, index) in playlist" 
					v-bind:key="index"
					v-bind:class="{ 'current': item.current }" 
				>
					<!-- {{item.time_start}} --> {{item.post_title}}
				</div>
			</div>
		</div>

		<canvas id="audio-visualizer"></canvas>
	</div>
</template>

<script>

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



export default {
	components: {
		
	},
	props: {
		'post' : Object
	},
	data(){
		return {
			playing: true,
			paused: false,
			currentTitle : '...loading',
			audio: null,
			last_audio: null,
			next_timer: false,
			toptimer: false,
			playlist: [],
		}
	},
	mounted (){
		let $ = this.$

		$('#header').hide()

		this.play_next_audio()

		$(window).resize( () => {
			var canvas = document.getElementById("audio-visualizer");
			canvas.width = $('#app').innerWidth();
			canvas.height = window.innerHeight / 3;
		});

		this.$emit('template_mounted', this)
	},
	methods:{
		play_next_audio: function(){

			let $ = this.$

			let date = new Date( Date.now() )
			date.addHours(2)

			let current_second_of_the_day = (date.getUTCMinutes() + date.getUTCHours() * 60) * 60 + date.getUTCSeconds()
			let start = this.wp.radio_show.metas.start[0].split(':')
			let start_in_second = (parseInt(start[1]) + parseInt(start[0]) * 60) * 60 + parseInt(start[2])
			let current_second_to_play = current_second_of_the_day - start_in_second

			let select_current = false
			let selected_index = false
			let next_index = false

			let prev = null
			let prev_index = 0

			$.each(this.wp.radio_playlist, (index, val) => {

				if( current_second_to_play >= prev_index && current_second_to_play < index && !select_current)
				{
					console.log('current', this.wp.radio_playlist[prev_index]);
					this.wp.radio_playlist[prev_index]['current'] = true

					selected_index = prev_index
					select_current = prev

					next_index = index
				}
				else
				{
					this.wp.radio_playlist[index]['current'] = false
				}

				prev_index = index
				prev = val

				this.wp.radio_playlist[index]['time_start'] = ((start_in_second + index)).toHHMMSS()
			});

			this.playlist = this.wp.radio_playlist

			let currentTime = current_second_to_play - selected_index

			this.currentTitle = select_current.post_title

			this.toptimer = setTimeout( () =>{
				
				var new_top = $('.song-item.current').position().top - $('#player .playlist').position().top + $('#player .playlist').scrollTop() - ($('#player .playlist').outerHeight() / 2) + ($('.song-item.current').outerHeight() / 2)

				$('#player .playlist').animate({scrollTop: new_top}, 150)
			}, 300)
			
			this.audio = new Audio('http://localhost/wp-food-theme/wp-content/uploads/' + select_current.metas._wp_attached_file)
			//audio.currentTime = currentTime
			this.audio.addEventListener("canplaythrough", () => {
				
				if( this.audio.currentTime != currentTime )
				{
					this.audio.currentTime = currentTime
				}

				if( this.paused == false )
				{
					var promise = this.audio.play();
					if (promise !== undefined) {
						promise.then( () => {
							this.playing = true
						}).catch(() => {
							this.playing = false
						});
					}

					this.visualizer()	
				}
			})


			this.next_timer = setTimeout( () =>{
				console.log('next by timer');
				this.play_next_audio()
			}, (next_index - current_second_to_play) * 1000)

		},
		click_play_pause: function()
		{
			if( this.playing )
			{
				this.audio.pause()
				this.playing = false
				this.paused = true
			}
			else
			{
				this.paused = false
				this.play_next_audio()
			}
			console.log('click_play_pause');
		},
		visualizer: function () {

			var $ = this.$ 

			if( this.last_audio == this.audio ) return false

			console.log('visualizer started');

			var context = new AudioContext();
			var src = context.createMediaElementSource(this.audio);
			var analyser = context.createAnalyser();

			this.last_audio = this.audio

			var canvas = document.getElementById("audio-visualizer");
			canvas.width = $('#app').innerWidth();
			canvas.height = window.innerHeight / 3;
			var ctx = canvas.getContext("2d");

			src.connect(analyser);
			analyser.connect(context.destination);

			analyser.fftSize = 256 * 64//256;

			var bufferLength = analyser.frequencyBinCount;

			var dataArray = new Uint8Array(bufferLength);

			
			var barHeight;
			var x = 0;

			var _this = this
			var max_height = 0

			function renderFrame() {

				var WIDTH = canvas.width;
				var HEIGHT = canvas.height;

				var barWidth = (WIDTH / bufferLength) * 2.5;

				requestAnimationFrame(renderFrame);				

				x = 0;

				analyser.getByteFrequencyData(dataArray);

				var canContext = canvas.getContext('2d');
				canContext.clearRect(0, 0, canvas.width, canvas.height)
				/*ctx.fillStyle = $(_this.$el).css('background-color');
				ctx.fillRect(0, 0, WIDTH, HEIGHT);*/
				//context.clearRect(0, 0, canvas.width, canvas.height);
				//console.log(bufferLength);
				for (var i = 0; i < bufferLength; i++) {
					//console.log(i);
					barHeight = dataArray[i] / 1;

					if( barHeight > max_height )
					{
						max_height = barHeight
					}

					var percent = Math.round( barHeight / max_height * 100 ) / 100
					//console.log(percent);

					var r = barHeight + (25 * (i/bufferLength));
					var g = 250 * (i/bufferLength);
					var b = 50;

					//ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
					ctx.fillStyle = "rgba(255,255,255, "+percent+")"
					ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

					x += barWidth + 0;
				}
			}
			renderFrame();
		}
	}
}
</script>

<style scoped>
h1{
	color: #fff
}
#player .playlist{
	height: 15vh;
	width: 35vh;
	max-width: 90%;
	margin: auto;
	overflow-y: hidden;
	overflow-x: hidden;
	text-align: left;
}
#player .playlist > .song-item{
	white-space: nowrap;
	line-height: 180%;
	padding: 0 2%;
	opacity: 0.3;
	color: #5C7EA1;
	overflow: hidden;
	width: 92%;
}
#player .playlist > .song-item.current {
	display: block;
	background-color: #2c3e50;
	color: #5C7EA1;
	opacity: 1 !important;
	width: auto;
}
#audio-visualizer{
	bottom: 0;
	align-self: flex-end;
	opacity: 0.5
}
</style>