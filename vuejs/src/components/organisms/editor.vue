<template>
	<div id="editor">
		<div v-if="open == true" id="editor-wrap-content">
			<div v-on:click="close_content"><button>close</button></div>
			<Scheme />
		</div>
		<div v-else id="editor-open-bt" v-on:click="open_content"><v-icon name="pen"/></div>
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
			open: false,
		}
	},
	mounted(){

	},
	methods: {
		open_content : function () {
			this.open = true
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
		display: flex;
		flex-direction: column;
		text-align: center;
		position: fixed;
		background: #FFFFFF;
		width: 40px;
		height: 40px;
		bottom: 3vh;
		right: 3vh;
		border-radius: 40px;
		box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.50);
	}

	#editor-open-bt > svg{
		margin: auto;
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