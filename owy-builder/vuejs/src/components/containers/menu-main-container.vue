<template>
	<transition name="fade">
		<div class="main-container" v-if="display" >
			<CloseMenu />
			<slot></slot>
		</div>
	</transition>
</template>

<script>
	import CloseMenu from 'PluginComponents/elements/close-menu'

	export default{
		components:{
			CloseMenu
		},
		mounted(){
			console.log(this.$parent.$options.name);
		},
		computed:{
			display : function () {
				if( this.$store.state.current_page == this.$parent.$options.name )
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
	.main-container{
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

	@media (orientation: portrait) {
		.main-container{
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