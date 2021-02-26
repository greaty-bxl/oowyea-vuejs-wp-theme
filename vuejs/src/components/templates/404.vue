<template>
	<div class="section-wrap">
		<div class="clear"></div>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<h1>404</h1>
		<p>...</p>
		
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