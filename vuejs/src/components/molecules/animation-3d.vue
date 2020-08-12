<template>
	<div>
		<slot/>
	</div>
</template>

<script>
	
	console.log(anime);	

export default{

	mounted(){

		this.$emit('template_mounted')
	}
}
</script>