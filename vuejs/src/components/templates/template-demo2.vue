<template>
	<div class="section-wrap">
		<div class="clear"></div>
		<h1>{{post.post_title}}</h1>
		<p>Demo 2 template</p>
		<div class="clear"></div>
	</div>
</template>

<script>
	//import {wp_content_filter} from 'Libs/wp.js'

	export default {
		components: {
			
		},
		props: {
			'post' : Object
		},
		mounted (){
			var $ = this.$

			$(this.$el).css('height', '200vh');
		}
	}
</script>