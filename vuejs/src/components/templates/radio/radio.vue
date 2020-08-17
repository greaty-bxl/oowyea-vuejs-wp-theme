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
		</div>

		<div class="clear"></div>
	</div>
</template>

<script>

Date.prototype.addHours = function(h) {
  this.setTime(this.getTime() + (h*60*60*1000));
  return this;
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
			currentTitle : '...loading',
			audio: null,
			next_timer: false,
		}
	},
	mounted (){
		
		//var audio

		/*function play_next_audio(vue)
		{
			
			
		}*/

		this.play_next_audio()

		this.$emit('template_mounted', this)

		//$('#radio')[0].play()		
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
			let next_song = false
			let next_index = false

			let prev = null
			let prev_index = 0
			$.each(this.wp.radio_playlist, function(index, val) {

				if( current_second_to_play >= prev_index && current_second_to_play < index && !select_current)
				{
					selected_index = prev_index
					select_current = prev

					next_song = val
					next_index = index
				} 

				prev_index = index
				prev = val
			});

			let currentTime = current_second_to_play - selected_index

			this.currentTitle = select_current.post_title
			

			this.audio = new Audio('http://localhost/wp-food-theme/wp-content/uploads/' + select_current.metas._wp_attached_file)
			//audio.currentTime = currentTime
			this.audio.addEventListener("canplaythrough", event => {
				
				if( this.audio.currentTime != currentTime )
				{
					this.audio.currentTime = currentTime
				}
				var promise = this.audio.play();
				if (promise !== undefined) {
					promise.then(_ => {
						this.playing = true
					}).catch(error => {
						this.playing = false
					});
				}
			})


			this.next_timer = setTimeout( _ =>{
				console.log('next by timer');
				this.play_next_audio()
			}, (next_index - current_second_to_play) * 1000)
			//console.log('next', next_index - current_second_to_play, next_song);

			/*this.audio.addEventListener("ended", _ => { 
				console.log('next by end');
				this.play_next_audio()
			});*/
		},
		click_play_pause: function()
		{
			if( this.playing )
			{
				this.audio.pause()
				this.playing = false
			}
			else
			{
				this.play_next_audio()
			}
			console.log('click_play_pause');
		}
	}
}
</script>

<style>

</style>