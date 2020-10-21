<template>
	<div class="yt-bg" :style='{"background":bgcolor}'>
		<div v-if="main_audio.playing"> 
			<youtube class="yt-iframe" :video-id="YtId" :player-vars="YtVars" @ready="YT_ready" @playing="YT_playing" @ended="YT_ended" ref="youtube"></youtube>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import VueYoutube from 'vue-youtube'

Vue.use(VueYoutube)

export default{
	props:{
		'bgcolor': String
	},
	data(){
		return{
			//playing: true,
			YTReady: false,
			YtId: 'tnGaCZZ5Z28', //'tnGaCZZ5Z28',//'6stlCkUDG_s',//'1eHwlmn_Mps', rlonGk2UcnE, EbOy4D4hu3U
			YtVars: {
				autoplay: 1,
				controls: 0,
				showinfo: 0,
				loop: 1,
				suggestedQuality:'large',
			},
		}
	},
	mounted(){
		let $ = this.$
		//let bg = this.bgcolor //$(this.$el).parents('.section-wrap').css('background')

		//$('.yt-bg').css('background', bg)
		$(this.$el).parents('.section').addClass('force-no-bg')

	},
	computed: {
		main_audio: {
			get () {
				return this.$store.state.main_audio
			}
		}
	},
	methods:{
		YT_ready : function(){
			//console.log('ready yt');
			this.YTReady = true
			this.$refs.youtube.player.mute()
			/*this.$refs.youtube.player.cueVideoById({videoId:this.YtId,
				startSeconds:0,
				endSeconds:39,
				suggestedQuality:'medium'})*/
			this.$refs.youtube.player.playVideo()
		},
		YT_playing : function() {
			//console.log('playing yt');
			let $ = this.$
			$(this.$el).find('.yt-iframe').show();
			$(this.$el).find('.yt-iframe').animate({opacity: 0.3}, 3000)
		},
		YT_ended : function(){
			//console.log('ended yt');
			this.$refs.youtube.player.playVideo()
		}
	},
	
}
</script>

<style>
	.yt-bg{
		/*display: none;*/
		width:100%;
		height:100vh;
		overflow:hidden;
		position: absolute;
		z-index: -1;
		pointer-events:none;
		/*opacity: 0;*/
	}
	.yt-iframe {
		position: absolute;
		/*left: 50%;
		top: 50%;
		transform: translateY(-50%) translateX(-50%);*/
		transform: translateX(-50%) translateY(-5vh);
		height: 120vh; /*100vh;*/
		width: 212vh;/*177vh;*/
		/*margin: auto;*/
		/*margin-top: -72px;*/

		display: none;
		opacity: 0;
	}
	.force-no-bg{
		background: none !important;
	}
</style>