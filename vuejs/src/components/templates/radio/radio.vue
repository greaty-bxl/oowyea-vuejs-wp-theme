<template page-template="Radio">
	<div class="section-wrap">
		<div id="yt-bg" v-if="playing">
			<youtube :video-id="YtId" :player-vars="YtVars" @ready="YT_ready" @playing="YT_playing" @ended="YT_ended" ref="youtube"></youtube>
		</div>
		<div class="clear"></div>
		<div>
			<h1 v-html="post.post_title"></h1>
			<div><em>Indie P2P Web Radio</em></div>	
		</div>
		
		<div v-html="post.post_content"></div>
		
		<div id="player">
			<div class="play-pause" v-on:click="click_play_pause" v-bind:style="{ 'background-image': 'url(' + cover + ')' }">
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

		<div>
			<div class="btn-ligth">Get this song</div>
			<div class="like-song">
				<v-icon name="heart" ></v-icon>
			</div>
			
			<div class="menu-song">
				<v-icon name="bars" ></v-icon>
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

/*function baseName(str)
{
   var base = new String(str).substring(str.lastIndexOf('/') + 1); 
    if(base.lastIndexOf(".") != -1)       
        base = base.substring(0, base.lastIndexOf("."));
   return base;
}*/

import Vue from 'vue'
import VueGAPI from 'vue-gapi'
import VueYoutube from 'vue-youtube'

// create the 'options' object
const apiConfig = {
  apiKey: 'AIzaSyCLmKvgd4SB0ErTnaiFVsRlN52uTiekay8',
  //clientId: '<YOUR_CLIENT_ID>.apps.googleusercontent.com',
  discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
  // see all available scopes here: https://developers.google.com/identity/protocols/googlescopes'
  scope: 'https://www.googleapis.com/auth/youtube',
  // works only with `ux_mode: "prompt"`
  refreshToken: true,
}

// Use the plugin and pass along the configuration
Vue.use(VueGAPI, apiConfig)
Vue.use(VueYoutube)

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
			cover: '',
			YtId: 'tnGaCZZ5Z28',//'6stlCkUDG_s',//'1eHwlmn_Mps',
			YtVars: {
				autoplay: 1,
				controls: 0,
				showinfo: 0,
				loop: 1,
			}
		}
	},
	mounted (){
		let $ = this.$

		console.log(this.post);

		this.cover = this.post.thumb

		$('#header, #footer').hide()

		this.play_next_audio()

		$(window).resize( () => {
			var canvas = document.getElementById("audio-visualizer");
			canvas.width = $('#app').innerWidth();
			canvas.height = window.innerHeight * 0.20;
		});

		/*this.$gapi.getGapiClient().then((gapi) => {
			// gapi.sheets.spreadsheet.get(...)
			// ...
			console.log('gapi',gapi);

			var arr_search = {
				"part": 'snippet',
				"type": 'video',
				"order": 'date',
				"maxResults": 5,
				"q": 'test'
				};
			 
			 
		    gapi.client.youtube.search.list(arr_search)
		    .then(function(response) {
		    	console.log('response',response);
		    });
		})*/

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

			let music_url = 'http://localhost/wp-food-theme/wp-content/uploads/' + select_current.metas._wp_attached_file

			let get_cover = music_url.toString().replace('.mp3','-mp3')/*.toLowerCase()*/+'-image.jpg'
			console.log('_wp_attached_file', get_cover);
			$.get(get_cover, () => {
				this.cover = get_cover
			})
			.fail( () => {
				this.cover = this.post.thumb
			});

			this.audio = new Audio(music_url)
			
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

					setTimeout(()=>{this.visualizer()}, 250)	
				}
			})

			clearTimeout(this.next_timer);
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
			canvas.height = window.innerHeight * 0.20;
			var ctx = canvas.getContext("2d");

			src.connect(analyser);
			analyser.connect(context.destination);

			analyser.fftSize = 256 * 8//256;

			var bufferLength = analyser.frequencyBinCount;

			var dataArray = new Uint8Array(bufferLength);

			
			var barHeight;
			var x = 0;

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
					barHeight = dataArray[i] / 3;

					if( barHeight > max_height )
					{
						max_height = barHeight
					}

					var percent = Math.round( barHeight / max_height * 100 ) / 100
					//console.log(percent);

					/*var r = barHeight + (25 * (i/bufferLength));
					var g = 250 * (i/bufferLength);
					var b = 50;*/

					//ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
					ctx.fillStyle = "rgba(255,255,255, "+percent+")"
					ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

					x += barWidth + 2;
				}
			}
			renderFrame();
		},
		YT_ready : function(){
			console.log('ready yt');
			this.$refs.youtube.player.mute()
			/*this.$refs.youtube.player.cueVideoById({videoId:this.YtId,
			                     startSeconds:0,
			                     endSeconds:39,
			                     suggestedQuality:'medium'})
			this.$refs.youtube.player.playVideo()*/
		},
		YT_playing : function() {
			console.log('playing yt');
			let $ = this.$
			$('#yt-bg').show();
			$('#yt-bg').animate({opacity: 1}, 3000)
		},
		YT_ended : function(){
			console.log('ended yt');
			this.$refs.youtube.player.playVideo()
		}
	}
}
</script>

<style scoped>
body{
	font-family: 'Libre Caslon Display', serif;
}
h1{
	color: #fff;
	margin-top: 10vh;
	margin-bottom: 0;
	font-family: 'Libre Caslon Display', serif;
}
em{
	font-family: 'Libre Caslon Display', serif;
}
h2{
	font-family: 'Open Sans Condensed', sans-serif;
}
.section-wrap{
	color: #fff
}
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&family=Open+Sans+Condensed:wght@300&display=swap');


#player .play-pause{
	background-size: cover;
	margin: auto;
	height: 27vh;
	width: 27vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	opacity: 0.7;
	/*border-radius: 33vh;*/
}
#player .play-pause > svg {
	margin: auto;
	height: 3vh;
    width: auto;
} 
#player .playlist{
	display: none;
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
	color: #fff;
	overflow: hidden;
	width: 92%;
}
#player .playlist > .song-item.current {
	display: block;
	background-color: rgba(255,255,255,0.7);
	color: #131F2C;
	opacity: 1 !important;
	width: auto;
}
.btn-ligth{
	font-family: 'Libre Caslon Display', serif;
	display: inline-block;
	border: 0.5px solid #fff;
	padding: 1vh 1.5vh;
	width: auto;
}
.like-song, .menu-song{
	display: inline-block;
	margin-left: 2vh;
}
.like-song > svg, .menu-song > svg{
	height: 2vh;
	width: auto;
}
#audio-visualizer{
	bottom: 0;
	align-self: flex-end;
	opacity: 0.8
}
.section-wrap > * {
	z-index: 1;
}
#yt-bg{
	display: none;
	width:100%;
	height:100vh;
	overflow:hidden;
	position: absolute;
	z-index: 0;
	pointer-events:none;
	opacity: 0;
}
iframe{
	position: absolute;
	/*left: 50%;
	top: 50%;
	transform: translateY(-50%) translateX(-50%);*/
	transform: translateX(-50%) scale(1.4);
	height: 100vh;
	width: 177vh;
	/*margin: auto;*/
	/*margin-top: -72px;*/
}
</style>

