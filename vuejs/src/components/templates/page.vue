<template>
	<div class="section-wrap">
		<div class="clear"></div>
		<h1 v-html="post.post_title"></h1>
		<p>Page template</p>
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
			
		}
	}
</script>