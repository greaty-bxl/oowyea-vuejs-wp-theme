<template>
	<div id="player">
		<div class="diamond-shape-wrap">
			<div class="diamond-shape">
				<div class="play-pause" v-on:click="click_play_pause" v-bind:style="{ 'background-image': 'url(' + main_audio.cover + ')' }">
					<v-icon name="pause" v-if="main_audio.playing"></v-icon>
					<v-icon name="play" v-else></v-icon>
				</div>
			</div>
		</div>
		<div class="title-line">
			<h2 v-html="main_audio.title"></h2> <v-icon name="star" ></v-icon> <v-icon name="download" ></v-icon>
		</div>
	</div>
</template>

<script>
export default{
	mounted(){

		if( this.main_audio.from !== 'radio' && !this.main_audio.playing )
		{
			this.$store.commit({
				type: 'init_radio',
			})	
		}
	},
	computed: {
		main_audio: {
			get () {
				return this.$store.state.main_audio
			}
		}
	},
	methods: {
		click_play_pause: function(){
			if( this.main_audio.playing == true )
			{
				this.$store.state.radio.paused = true
				this.$store.commit({
					type: 'play_pause',
				})
			}
			else
			{
				this.$store.commit({
					type: 'init_radio',
				})	
			}
		}
	}
}
</script>

<style scoped>
h2{
	display: inline-block;
}
.title-line{
	display: flex;
	flex-direction: row;
	justify-content: center;
	width: 100%;
}
.title-line > *{
	margin: auto 5px;
}
.diamond-shape-wrap{
	transform: translateY(-4vh);
}
.diamond-shape{
	height: 22vh;
	width: 22vh;
	overflow: hidden;
	transform: rotate(45deg) scale(0.93);
	transform-origin: center;
	margin:auto;
	margin-top: 7vh;

}
#player .play-pause{
	transform: rotate(-45deg) translateY(-13%) scale(1.3);
	transform-origin: center;
	background-size: cover;
	margin: auto;
	height: 27vh;
	width: 27vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	opacity: 0.80;
	/*border-radius: 33vh;*/
}
#player .play-pause > svg {
	margin: auto;
	height: 3vh;
    width: auto;
} 

</style>