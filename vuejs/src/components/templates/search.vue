<template>
	<div class="section-wrap">
		<div class="clear"></div>
		<h1>Search: <span v-html="s"></span></h1>
		<p>Search template</p>
		
		<div class="clear"></div>
	</div>
</template>

<script>
	export default {
		components: {
			
		},
		props: {
			's': String,
			'posts': Array
		},
		mounted (){
			this.$emit('template_mounted')
		}
	}
</script>