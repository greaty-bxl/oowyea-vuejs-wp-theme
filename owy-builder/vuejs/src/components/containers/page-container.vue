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
		box-sizing: border-box;
		padding: 50px;
		min-height: calc(100vh - 40px);
		overflow: auto;
		padding-bottom: 90px;
		position: absolute;
		top: 0;
		width: 100%;
	}
</style>