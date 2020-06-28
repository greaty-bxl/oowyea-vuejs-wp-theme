<template>
	<div class="section-wrap">
		<div class="clear"></div>
		<h1 v-html="tag.name"></h1>
		<p>Tag template</p>
		
		<div class="clear"></div>
	</div>
</template>

<script>
	export default {
		components: {
			
		},
		props: {
			'tag' : Object,
		},
		mounted (){
			this.$emit('template_mounted')
		}
	}
</script>