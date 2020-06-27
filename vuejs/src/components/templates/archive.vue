<template>
	<div class="section-wrap">
		<div class="clear"></div>
		<h1 v-html="title"></h1>
		<p>Archive template</p>
		
		<div class="clear"></div>
	</div>
</template>

<script>
	export default {
		components: {
			
		},
		props: {
			'title': String,
			'posts' : Array,
		},
		mounted (){
			this.$emit('template_mounted')
		}
	}
</script>