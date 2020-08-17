<template>
	<div class="section-wrap">
		<div class="clear"></div>
		<h1 v-html="post.post_title"></h1>
		<div v-html="post.post_content"></div>
		
		<VideoPlayer :options="videoOptions"/>

		<div class="clear"></div>
	</div>
</template>

<script>

import 'video.js/dist/video-js.css'
import VideoPlayer from "Organisms/video-player.vue";

export default {
	components: {
		VideoPlayer
	},
	props: {
		'post' : Object
	},
	data() {
		return {
			videoOptions: {
				autoplay: true,
				controls: true,
				sources: [
					{
						src:
							"http://localhost/wp-food-theme/wp-content/uploads/2020/08/MadD3E-No-Trend.mp3",
						 	type: "video/mp4"
					}
				]
			}
		};
	},
	mounted (){
		var $ = this.$
		
		var date = new Date( Date.now() )
		var current_second_of_the_day = (date.getMinutes() + date.getHours() * 60) * 60 + date.getSeconds()
		var start = this.wp.radio_show.metas.start[0].split(':')
		var start_in_second = (parseInt(start[1]) + parseInt(start[0]) * 60) * 60 + parseInt(start[2])
		var current_second_to_play = current_second_of_the_day - start_in_second

		var select_current = false
		var selected_index = false
		var prev = null
		var prev_index = 0
		$.each(this.wp.radio_playlist, function(index, val) {

			if( current_second_to_play > prev_index && current_second_to_play < index && !select_current)
			{
				selected_index = prev_index
				select_current = prev
			} 

			prev_index = index
			prev = val
		});

		console.log(selected_index, select_current);

		this.$emit('template_mounted', this)
	}
}
</script>

<style>

</style>