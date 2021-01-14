<template>
	<div id="footer" class="section">
		<div class="clear"></div>


			<div class="contener-header">

				<div v-html="this.wp.sidebars.footer_generale" ></div>
			
			</div>

<!-- <div>
<h2>MAGASIN SANTOS PALACE BRUXELLES</h2>
<br> Rue du Marché aux Poulets 3
<br> 1000 – Bruxelles
<br><a href="+32 2 512 39 53"> Tel.: +32 2 512 39 53</a><br><a href="mailto: info@santospalace.be">e-mail : info[at]santospalace.be</a> 
</div>



<div>
<h2>SANTOS PALACE – SIÈGE BRUXELLES</h2>
<br>Rue de Manchester 32-34
<br>1080 – Bruxelles
<br><a href="+32 2 410 44 75"> Tel.: +32 2 410 44 75</a><br><a href="+32 2 410 01 38"> Tel.: +32 2 410 01 38</a><br><a href="mailto: info@santospalace.be">e-mail : info[at]santospalace.be</a> 
</div>


 -->

	
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
