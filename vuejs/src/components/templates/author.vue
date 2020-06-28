<template>
	<div class="section-wrap">
		<div class="clear"></div>
		<h1 v-html="author.display_name"></h1>
		<p>Author template</p>
		
		<div class="clear"></div>
	</div>
</template>

<script>
	export default {
		components: {
			
		},
		props: {
			'author' : Object,
		},
		mounted (){
			this.$emit('template_mounted')
		}
	}
</script>