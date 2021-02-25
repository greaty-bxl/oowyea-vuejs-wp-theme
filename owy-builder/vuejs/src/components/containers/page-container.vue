<template>
	<div class="page">
		<slot></slot>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style>
	.page{
		padding: 50px;
		max-height: 100vh;
		overflow: auto;
	}
</style>