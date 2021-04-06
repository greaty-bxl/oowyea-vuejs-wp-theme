<template>
	<Page class="owy-code">
		<div class="top-bar gjs-one-bg gjs-pn-panel">
			<div class="gjs-pn-btn" @click="$store.state.code_page = false"><font-awesome-icon icon="times" /></div>
		</div>
		<div class="code-col">
			<div class="codemirror-wrapper"></div>
		</div>
		<div class="code-options gjs-one-bg">
			
		</div>
	</Page>
</template>

<script>
	import Page from 'PluginComponents/containers/page-container'
	import CodeMirror from 'codemirror'
	import 'codemirror/theme/material-darker.css'
	import 'codemirror/mode/javascript/javascript.js'

	export default {
		components : {
			Page
		},
		mounted() {

			var myCodeMirror = CodeMirror(document.querySelector('.codemirror-wrapper'), {
				value: "function myScript(){return 100;}\n",
				mode: {name: "javascript", json: true},
				lineNumbers: true,
				lineWrapping: true,	
				theme: 'material-darker'
			});

			console.log(myCodeMirror);
		}
	}
</script>

<style>
	.owy-code {
		background: #58CCD3;
		padding: 0px;
		z-index: 2000;
		display: flex;
	}

	.owy-code .top-bar {
		width: 100%;
		height: 40px;
		text-align: left;
	}

	.owy-code .code-col {
		margin-top: 40px;
		height: calc(100vh - 80px);
		width: calc(100% - 280px);
	}

	.owy-code .code-options {
		margin-top: 40px;
		height: calc(100vh - 80px);
		width: 280px;
	}

	.owy-code .code-col .codemirror-wrapper {
		height: 100%;
	}

	.owy-code .code-col .codemirror-wrapper .CodeMirror {
		height: 100%;
	}
</style>