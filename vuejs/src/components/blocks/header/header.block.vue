<template>
	<div>
		<span v-if="state_2">header text</span>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				state_2 : true
			}
		},
		props : {
			state : Boolean
		},
		mounted(){
			console.log('mounted block');
		}
	}
</script>
<style scoped>
	/* Dev: grapesjs add css */
	div{
		color: red;
	}
</style>