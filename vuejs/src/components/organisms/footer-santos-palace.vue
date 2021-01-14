<template>
	<div id="footer" class="section">
		<div class="clear"></div>

			<div class="contener-header">

				<div>
					


				</div>
				
				<div>

					<!-- <div v-html="this.wp.sidebars.footer_generale" ></div> -->

				</div>

				<div>
					

				</div>

				
			
			</div>

		<div class="clear"></div>
	</div>
</template>

<script>

	import smart_fonts from "Libs/smart-fonts.js"

	export default {

		components:{
		
		},
		

		mounted(){

			this.$emit('template_mounted', this);

		
			smart_fonts({
				'.text-contact' : 52.8,
			})

		}
	}


</script>

<style>


	.contener-header a{

		text-decoration-line: none;

	}
	.contener-header *{

		color: #70625B;
		text-align: left;
		font-weight: 500;
	
	}

	.contener-header{

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding-bottom: 50px;
		padding-top: 70px;
		padding-left: 70px;
		padding-right: 70px;
	}

	.contener-header div{

		display: flex;
		flex-direction: column;
		margin-top: 20px;

	}

	#footer{

		font-size: 14px;
		min-height: auto !important;
	}

	#footer *{

		font-size: 14px !important;
		line-height: 25px;
	}

	div p {

		margin: 0px;
	}

	@media screen and ( max-width: 600px){

		.contener-header{

			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding-top:  70px;
			padding-left: 30px;
			padding-right: 30px;
			
		}

		
	}

	@media screen and ( max-width: 1100px) and ( min-width: 600px){

		.contener-header{

			flex-direction: column;
			padding-bottom: 70px;
		}

	}

</style>

<style scoped>
	
/*	.section-footer{

		min-height: auto;
		opacity: 1;
	}*/


</style>
