<template>
	<div class="close" v-on:click="close_page" v-html="'<'"></div>
</template>

<script>
	
	export default {
		methods : {
			close_page : function () {
				this.$store.state.current_page = null
			}
		}
	}
</script>

<style scoped>
	.close {
		font-size: 200%;
		cursor: pointer;
		position: absolute;
		top:40px;
		left: 40px;
		border: solid 1px #fff;
		width: 40px;
		height: 40px;
		text-align: center;

	}
</style>