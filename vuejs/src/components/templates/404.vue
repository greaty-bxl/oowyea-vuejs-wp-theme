<template>
	<div class="section-wrap">
		<div class="clear"></div>
		<div class="div-404">
			
			<h1>404</h1>

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


<style type="text/css">
	
	.div-404{

		background-color: #888320;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-content: center;

	}

	.div-404 h1{
		margin-top: auto;
		margin-bottom: auto;
		color: white;
		font-size: 100px;

	}



</style>