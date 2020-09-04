<template>
	<div id="editor">
		<div v-if="open == true" id="editor-wrap-content">
			<div v-on:click="close_content"><button>close</button></div>
			<Scheme />
		</div>
		<div v-else id="editor-open-bt" v-on:click="open_content"></div>
	</div>
</template>

<script>

import Scheme from "Organisms/scheme.vue"

export default {
	components:{
		Scheme
	},
	data(){
		return {
			open: true,
		}
	},
	mounted(){

	},
	methods: {
		open_content : function () {
			this.open = true
			console.log('click');
		},
		close_content : function () {
			this.open = false
		}
	}
}
</script>

<style>
	#editor {
		position: fixed;
		z-index: 5000;
		top: 0;
		left: 0;
		width: 0;
		height: 0;
	}
	#editor-open-bt{
		position: fixed;
		background: #CD2626;
		width: 10vh;
		height: 10vh;
		bottom: 0;
		right: 0;
	}

	#editor-wrap-content {
		position: fixed;
		background: rgba(255,255,255,0.6);
		backdrop-filter: blur(4px);
		width: 100vw;
		height: 100vh;
		overflow: auto;
	}

</style>