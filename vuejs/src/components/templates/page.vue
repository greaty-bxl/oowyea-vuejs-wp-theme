<template>
	<div class="section-wrap">
		<div class="clear"></div>
		<h1 v-html="post.post_title"></h1>
		<p>Page template</p>
		<div class="clear"></div>
	</div>
</template>

<script>
	export default {
		components: {
			
		},
		props: {
			'post' : Object
		},
		mounted (){
			this.$emit('template_mounted')
		}
	}
</script>