<template>
	<div class="section-wrap">
		<div class="clear"></div>
		<h1>404</h1>
		<p>404 template</p>
		
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