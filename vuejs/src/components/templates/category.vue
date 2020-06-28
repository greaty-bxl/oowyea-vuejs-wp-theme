<template>
	<div class="section-wrap">
		<div class="clear"></div>
		<h1 v-html="cat.cat_name"></h1>
		<p>Category template</p>
		
		<div class="clear"></div>
	</div>
</template>

<script>
	export default {
		components: {
			
		},
		props: {
			'cat' : Object,
		},
		mounted (){
			this.$emit('template_mounted')
		}
	}
</script>