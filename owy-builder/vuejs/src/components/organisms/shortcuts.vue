<template>
	<div class="owy-shortcuts gjs-one-bg">
		<div class="label gjs-four-color">Shortcuts:</div>
		<div class="shortcut">Post types & taxonomies</div>
		<div class="shortcut">Forms</div>
		<div class="shortcut">Users roles</div>
		<div class="shortcut" @click="$store.state.code_page = true">Custom Code</div>
	</div>
</template>

<script>
	export default{

	}
</script>

<style>
	.owy-shortcuts{
		position: fixed;
		bottom: 0px;
		width: 100%;
		height: 40px;
		z-index: 2000;
		overflow-x: auto;
	}
	.owy-shortcuts > div{
		display: inline-block;
		margin-left: 5px;
		margin-top: 5px;
		padding: 5px 8px;
		font-size: .75rem;
	}
	.owy-shortcuts > .label{
		font-weight: bold;
	}	
	.owy-shortcuts > .shortcut{
		border: 1px solid rgba(0,0,0,.2);		
		cursor: pointer;
	}
</style>