<template>
	<div class="section-wrap" data-scroll-section>
		<div class="clear"></div>

	
		<div class="wp-content">

			<h1 v-html="post.post_title"></h1>
			<div v-html="post.post_content"></div>
		
		</div>
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
	
		}
	}
</script>

<style scoped>
	.section-wrap {
		padding: 100px;
		background-color: #971732;
	}
</style>