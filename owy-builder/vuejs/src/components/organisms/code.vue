<template>
	<Page class="owy-code">
		<div class="top-bar gjs-one-bg gjs-pn-panel">
			<div class="gjs-pn-btn" @click="$store.state.code_page = false"><font-awesome-icon icon="times" /></div>
			<div class="gjs-pn-btn" v-if="owy_codeMirror != null" @click="save"><font-awesome-icon icon="save" /></div>
		</div>
		<div class="code-col">
			<div class="codemirror-wrapper"></div>
		</div>
		<div class="code-options gjs-one-bg">
			<div class="pointer" @click="open_global_css" data-save="save_global_css">edit global css</div>
		</div>
	</Page>
</template>

<script>
	import Page from 'PluginComponents/containers/page-container'
	import CodeMirror from 'codemirror'
	import 'codemirror/theme/material-darker.css'
	import 'codemirror/mode/javascript/javascript.js'
	import 'codemirror/mode/css/css.js'

	import {unminify} from 'cssunminifier'
	import CleanCSS from 'clean-css'
	import wp_ajax from 'Libs/wp-ajax.js';

	export default {
		data(){
			return {
				owy_codeMirror : null,
				save_function: null
			}			
		},
		components : {
			Page
		},
		mounted() {

		
		},
		methods : {
			open_global_css : function(e){
				console.log('open css', this.$store.state.wp.owy_builder_css);
				let $ = this.jquery

				$('.codemirror-wrapper').html('')

				this.owy_codeMirror = CodeMirror( $('.codemirror-wrapper')[0] , {
					value: unminify( this.$store.state.wp.owy_builder_css ),
					mode: {name: "css"},
					lineNumbers: true,
					lineWrapping: true,	
					theme: 'material-darker'
				});

				eval( 'this.save_function = this.' + $(e.target).data('save') )
			},
			save_global_css : function(){
				

				var minified_css = new CleanCSS({}).minify( this.owy_codeMirror.getValue() );

				console.log('save css', minified_css );

				this.$store.state.wp.owy_builder_css = minified_css

				wp_ajax('owy_save_css', {
					'css' : minified_css,
				}, () => {
					console.log('saved');
				})
			},
			save: function(){
				console.log('save');
				this.save_function()	
			}
		}
	}
</script>

<style>
	.owy-code {
		background: #212121;
		padding: 0px;
		z-index: 2000;
		display: flex;
	}

	.owy-code .top-bar {
		width: 100%;
		height: 40px;
		text-align: left;
	}

	.owy-code .top-bar .gjs-pn-btn {
		display: inline-block;	
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

	.owy-code .code-options > div{
		font-size: 0.75em;
	}
</style>