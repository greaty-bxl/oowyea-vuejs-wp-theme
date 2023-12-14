<template>
	<div class="popup-form" data-scroll data-scroll-sticky >
		<div class="popup-form-content">hein ?</div>
	</div>
</template>

<script>
	export default {
		components: {
			
		},
		props: {
			
		},
		mounted (){
			console.log('Réservation form');
		}
	}
</script>

<style>
	.popup-form {
		z-index: 10000;
		position: fixed;
		background-color: rgba(0, 0, 0, 0.8);
		height: 100vh;
		width: 100%;
		top: 0;
		left: 0;
		display: none;
	}
</style>