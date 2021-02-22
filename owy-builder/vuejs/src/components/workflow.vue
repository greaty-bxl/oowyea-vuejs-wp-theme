<template>
	<transition name="fade">
		<div id="workflow" v-if="display">
			<CloseMenu />
			<h1>workflow</h1>
			<p>
				Define how your webapp will works.
			</p>
			<div class="worflow-option"
				v-for="(option, key) in options"
				:key="key">
				<h2 v-html="option"></h2>
			</div>
		</div>
	</transition>
</template>

<script>

	import CloseMenu from 'PluginComponents/elements/close-menu'

	export default {
		data(){
			return {
				options: {
					pages: 'pages',
					blog: 'blog',
					events: 'events',
					forms: 'forms',
					users: 'users',
					payments: 'payments',
					languages: 'languages',
					live: 'live apps',
					cloud: 'cloud apps',
					post_type: 'custom data object',
				}
			}
		},
		components:{
			CloseMenu
		},
		computed : {
			display : function () {
				if( this.$store.state.current_page == 'workflow' )
				{
					return true
				}
				else
				{
					return false
				}
			}
		}
	}
</script>

<style scoped>
	#workflow{
		position: fixed;
		top: 0;
		right: 0;
		width: 81%;
		height: 100vh;
		border-left: solid 1px #FFFFFF;
		background-color: rgba(255,255,255,0.05);
		z-index: 3000;
		box-sizing: border-box;
		padding: 120px 40px 40px;
		overflow: auto;
	}

	.fade-enter-active, .fade-leave-active, .fade-leave-to {
		opacity: 0;
		margin-right: -81%;
		transition: all 0.6s;
	}

	.fade-enter-to {
		opacity: 1;
		margin-right: 0;
	}

	.worflow-option{
		width: 400px;
		max-width: 100%;
		padding: 15px;
		box-sizing: border-box;
		margin-bottom: 10px;
		border: solid 1px #fff;
		background-color: rgba(0,0,0,0.1);
		transition: all 0.6s;
	}

	.worflow-option:hover{
		background-color: rgba(0,0,0,0.4);
	}

	h1{
		letter-spacing: 10px;
	}

	h2{
		margin: auto;
		letter-spacing: 5px;
	}

	@media (orientation: portrait) {
		#workflow{
			width: 96%;
		}

		.fade-enter-active, .fade-leave-active, .fade-leave-to {
			opacity: 0.3;
			margin-right: -96%;
			transition: all 0.6s;
		}

		.fade-enter-to /* .fade-leave-active below version 2.1.8 */ {
			opacity: 1;
			margin-right: 0;
		}
	}
</style>