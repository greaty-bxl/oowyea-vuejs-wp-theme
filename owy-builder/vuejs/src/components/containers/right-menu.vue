<template>
	<div class="owy-right-menu" @click="close">
		<div class="wrapper gjs-one-bg">
			<slot/>	
		</div>		
	</div>
</template>
<script>
	export default {
		methods : {
			close : function(event){
				if( event.target == this.$el )
				{
					this.$store.state.right_menu = null
				}
				
			}
		}
	}
</script>
<style>
	.owy-right-menu {
		position: fixed;
		height: 100vh;
		width: 100%;
		top: 0px;
		background: rgba(0,0,0,0.5);
		z-index: 3000;
	}

	.owy-right-menu .wrapper{
		width: 600px;
		height: 100vh;
		margin-left: auto;
		overflow: auto;
	}
</style>