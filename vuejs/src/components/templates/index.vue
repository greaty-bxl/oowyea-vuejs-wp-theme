<template>
	<div class="section-wrap">
		<div class="clear"></div>
		<h1 v-html="post.post_title"></h1>
		<p>Index template (posts loop)</p>
		
		<div v-for="child in post.children" :key="child.ID">
			<h2 v-html="child.post_title"></h2>
			<p v-html="child.post_content"></p>
			<a :href="child.permalink">Read more</a>
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
			this.$emit('template_mounted')
		}
	}
</script>
