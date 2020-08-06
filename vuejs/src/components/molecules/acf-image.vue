<template>
	<img :src="value.url">
</template>

<script>

export default{
	props:{
		value : null
	},
	mounted(){
		//console.log( this.value.url );
	}
}

</script>

<style scoped>
	img{
		max-width: 100%
	}
</style>