<template>
	<div id="footer" class="section">
		<div class="clear"></div>

		<section>	
			<footer>

			<div class="contener-header">
				<div>
					<p>Fromagerie Westland <br> Bd. Sylvain Dupuis 373<br> 1070 Bruxelles</p> 
				</div>
				<div> 
					<p>Lun Sam : 9h - 19h <br> Vendredi : 9h - 20h</p>
					<!-- <p></p> -->
				</div>
				<div> 
					<a href="">Facebook</a>
					<a href="">Instagram</a>
				</div>
				<div>
					<a href="">Livrasion</a>
					<a href="">Politique de confidentialité</a>
					<a href="">Fromagerie Westland © 2020</a>
				</div>
			</div>

			</footer>

		</section>
		
		<div class="clear"></div>
	</div>
</template>

<script>

	import smart_fonts from "Libs/smart-fonts.js"
	// import Alpl from 'Molecules/animation-line-per-line';
	// import anime from 'animejs/lib/anime.es.js';
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
	}

	.contener-header{

		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.contener-header div{

		display: flex;
		flex-direction: column;
		margin-top: 20px;

	}

	footer{

		padding-left: 70px;
		padding-right: 70px;
		font-size: 14px;
	}

	footer *{

		font-size: 14px !important;
	}

	div p {

		margin: 0px;
	}

	@media screen and ( max-width: 600px){

		footer{

			padding-left: 30px;
			padding-right: 30px;
			padding-bottom: 30px;
		}

		.contener-header{

			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
	}

</style>
<style scoped>

	.section{

		min-height: auto;
	}
	
</style>