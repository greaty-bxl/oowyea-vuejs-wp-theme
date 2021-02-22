<template>
	<transition name="fade">
		<div id="editor-menu" class="owy_modal_form" :class="{ready: ready}" v-if="ready">
			<div class="owy_content">
				<div class="owy-edit-menu" :class="{disabled: disabled}">
					<ul>
						<li v-for="(menu, key) in menus" :key="key"  
						v-on:click="open_page(key)"
						v-html="menu"></li>
					</ul>
				</div>				
			</div>
		</div>
	</transition>
</template>
<script>

	export default {
		data(){
			return {
				ready: false,
				menus: {
					publish : 'publish',
					workflow : 'workflow',
					app_design : 'app design',
					marketing : 'marketing',
					api_s : 'api\'s',
					stats : 'stats'
				}
			}
		},
		components:{

		},
		mounted(){
			setTimeout( ()=>{ this.ready = true }, 300 )
		},
		methods: {
			open_page : function (page) {
				this.$store.state.current_page = page
				console.log('page', page);
			}
		},
		computed: {
			disabled : function () {
				if( this.$store.state.current_page == null )
				{
					return false
				}
				else
				{
					return true
				}
			}
		}
	}
</script>

<style scoped>
	
	.owy-edit-menu{
		font-size: 300%;
		font-weight: 200;
		line-height: 140%;
		margin: 15px 0px;
		letter-spacing: 10px;
	}

	.owy-edit-menu ul {
		padding: 0;
		list-style: none;
	}

	.owy-edit-menu ul li{
		float: left;
		clear: both;
		box-sizing: border-box;
		border-bottom: solid 3px transparent;
	}

	.owy-edit-menu ul li:hover{
		cursor: pointer;
		/*text-decoration: underline;*/
		transition: all 1s;
		border-bottom: solid 3px #fff;
	}

	.owy-edit-menu.disabled ul li{
		pointer-events: none;
		opacity: 0.1;
	}

	.fade-enter-active, .fade-leave-active, .fade-leave-to {
		opacity: 0;
		transition: all 3s;
	}

	.fade-enter-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 1;
	}

	.owy_modal_form {
		position: fixed;
		width: 100%;
		height: 100vh;
		z-index: 2000;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgba(0,0,0,0.5);	
	}

	.owy_modal_form .owy_content {
		width: calc(100% - 40px);
		height: calc(100vh - 40px);
		box-sizing: border-box;
		padding: 40px;
	}

	.owy-description{
		max-width: 500px;
	}

	.new-template {
		height: 201px;
		width: 300px;
		border: 1px solid #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.new-template .plus {
		font-size: 1000%;
		font-weight: 600;
		opacity: 0.7;
		transition: opacity 1s;
		line-height: 80%;
	}

	.new-template:hover .plus{
		opacity: 1;
	}

	.flex-row{
		display: flex;
		width: 100%;
	}

	.swiper-container{
		overflow: hidden;
		width: 100%;
	}

	@media (orientation: portrait) {

		.owy-edit-menu{
			font-size: 250%;
			font-weight: 200;
			line-height: 120%;
			margin: 15px 0px;
			letter-spacing: 7px;
		}

		.new-template {
			height: 100px;
			width: 100%;
		}

		.flex-row{
			flex-direction: column;
		}

		.new-template .plus {
			font-size: 600%;
			line-height: 60%;
		}
	}

	
</style>