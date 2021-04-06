<template>
	<span :type="type" contenteditable v-html="value"></span>
</template>

<script>
	export default {
		props :{
			type: String,
			value: String
		},
	}
</script>

<style scoped>
	span{
		outline: none !important;
	}
</style>