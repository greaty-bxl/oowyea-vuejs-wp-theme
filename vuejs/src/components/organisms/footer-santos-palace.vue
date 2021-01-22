<template>
	<div id="footer" class="section">
		<div class="clear"></div>

			<div>

				<div v-html="wp.newsletter" class="div-green-parent">

					<p>OBTENEZ LES DERNIÈRES NOUVELLES</p>
					<div>
					<input type="text">
					<div></div>
					</div>

				</div>

				<div class="contener-footer">

				<div class="logo-footer">
					
					<img src="https://demo-santospalace.greaty.be/bruxelles/wp-content/uploads/sites/2/2021/01/santos-palace_logo-rond.svg">

				</div>

				<div v-html="wp.sidebars.footer_generale" ></div>

				<div class="reseaux-sociaux">
					
					<a class="facebook" target="_blank"  href="https://www.facebook.com/santospalace"><img src="https://demo-santospalace.greaty.be/bruxelles/wp-content/uploads/sites/2/2021/01/santos-palace_icone_facebook.svg"> </a>
					<a class="Instagram" target="_blank" href="https://www.instagram.com/santospalacebel/"> <img src="https://demo-santospalace.greaty.be/bruxelles/wp-content/uploads/sites/2/2021/01/santos-palace_icone_instagram.svg"> </a>
					<a class="Linkeding" target="_blank" href="https://www.linkedin.com/company/santos-palace/?originalSubdomain=be"> <img src="https://demo-santospalace.greaty.be/bruxelles/wp-content/uploads/sites/2/2021/01/santos-palace_icone__linkedin.svg"> </a>

				</div>

				</div>

				<div class="droit-reserve">

					<p>Copyright © Santos Palace 2020 Tous droits réservés 
						- <a href="">Terms & Conditions</a>
						- <a href="">Privacy Policy</a> 
					</p>
					
				</div>

			</div>

		<div class="clear"></div>
	</div>
</template>

<script>

	import smart_fonts from "Libs/smart-fonts.js"
	import is from 'is_js'

	export default {

		components:{
		
		},
		

		mounted(){

			this.$emit('template_mounted', this);
			console.log( this.wp);

		
			smart_fonts({
				'.text-contact' : 52.8,
			})

			var $ = this.$


		if ( ! is.desktop() ) {

			$('.tnp-email').first().appendTo('.tnp-field.tnp-field-button');
			$('.tnp-field.tnp-field-button').first().insertBefore(  $( ".tnp-field.tnp-privacy-field" ))

		}
		else{

			$('.tnp-privacy-field').first().insertAfter('.tnp-field-button')

		}

		
		$('.tnp-field , .tnp-field-button').find('input[type=submit]').css('font-weight', '700');

		}
	}


</script>

<style>

	.custom-html-widget{

		flex-wrap: wrap;
		justify-content: space-between;
	}
	.custom-html-widget *{
		font-size: 16px;
	}
	.custom-html-widget div{

		text-align: left;
		display: inline-table;
		width: 37%;
		margin-right: 20px;
		margin-left: 20px;
		margin-bottom: 40px;
		line-height: 25px !important;

	}

	.logo-footer img{

		width: 150px;
	}

	.reseaux-sociaux img{

		width: 20px;
		height: 20px;

	}

	.reseaux-sociaux img{

		padding-left: 20px;
		padding-right: 20px;

	}

	.reseaux-sociaux{

		display: flex;
		flex-direction: row !important;
		justify-content: space-between;

	}


	.contener-footer{

		width: 80%;
		margin-left: auto;
		margin-right: auto;
	}



	.droit-reserve{

		background-color: #F1F1F1;
		color: #666666;
		padding-top: 30px;
		padding-bottom: 30px;
	}

	.droit-reserve p{

		width: 80%;
		margin-left: auto;
		margin-right: auto;
		font-size: 15px;
	}

	.droit-reserve a {

		text-decoration: none;
		color: #666666;

	}


	.tnp-subscription div.tnp-field-email label{

		font-weight: 600;
		line-height: 25px;

	}

	.tnp-subscription label{

		font-weight: 500;
	}

	.div-green-parent{

		padding-top: 30px;
		padding-bottom: 30px;
	}
/*	.div-green-parent *{

		font-family: 'Montserrat', sans-serif; 

	}
*/
	.tnp-subscription input[type=text], .tnp-subscription input[type=email], .tnp-subscription input[type=submit], .tnp-subscription select{

		background-color: white;
		color: black;
		font-weight: 500;
		width: 250px;
		height: auto !important;
		padding-top: 15px;
		padding-bottom: 15px;
	
	}
	.tnp-subscription input.tnp-submit {
		
		background-color: #ffffff !important;
		color: #422112 !important;
		width: auto !important;
		height: auto !important;
		margin: 0 !important;
		padding-right: 20px !important;
		padding-top: 15px !important;
		padding-bottom: 15px !important;

	}

	.tnp-field-button input{

		border-top-right-radius: 3px 3px;
		border-bottom-right-radius: 3px 3px;
	}

	.tnp-field label{

		width: 500px !important;
		max-width: 50% !important;
		font-size: 14px !important;
		line-height: 25px;
		color: white !important;

	}

	.tnp-field label a {

		color: white;

	}

	.tnp-field.tnp-field-email label {

		margin-bottom: auto;
		margin-top: auto;
		max-width: auto !important;
		margin-right: 15px;
	} 

	.tnp-field-email input{

		border-top-left-radius: 3px 3px;
		border-bottom-left-radius: 3px 3px;
	}

	.tnp-field.tnp-field-email {
		display: flex;
		justify-content: flex-end;
	}

	.tnp-field-email label{

		font-size: 21px !important;
		font-weight: 500;
	}

	.tnp-subscription input[type=text], .tnp-subscription input[type=email],
	.tnp-subscription input[type=submit], .tnp-subscription select
	{

		background-color: white; 
	}

	input.tnp-email{

		font-weight: 500;
	}

	.div-green-parent{

		background-color: #888320;
	}

	.tnp-privacy-field{

		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.tnp-subscription form{

		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.tnp-subscription{

		max-width: none !important;
	}
	.contener-footer a{

		text-decoration-line: none;
		height: 30px;

	}
	.contener-footer *{

		color: #70625B;
		font-weight: 500;
	
	}

	.contener-footer{

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding-bottom: 75px;
		padding-top: 100px;

	}

	.contener-footer > div{

		display: flex;
		flex-direction: column;

	}

	#footer{

		font-size: 14px;
		min-height: auto !important;
	}

	#footer *{

		line-height: 30px;
	}

	.div-green-parent .tnp-field-email label{

			line-height: 25px !important;
	}



	#footer{

		/*font-size: 14px !important;*/
		line-height: 25px;
	}

	.custom-html-widget h2{

		color: #888320 !important;
		font-weight: 600;
		margin-top: 0px;
	}

	div p {

		margin: 0px;
	}

	@media screen and ( min-width: 1100px){

		.contener-footer{

			flex-direction: row;
		}

		.contener-footer *{

			/*text-align: left;*/

		}

		

		
	}


	@media screen and ( max-width: 1100px){

		.logo-footer img{

			margin-left: auto;
			margin-right: auto;
			margin-bottom: 50px;

		}

		.div-green-parent{

			padding-left: 30px;
			padding-right: 30px;
		}

		.tnp-field.tnp-field-button {
			display: flex;
			flex-direction: row-reverse;
			/*width: 100%;*/
		}

		.tnp-field-button input{

			border-top-right-radius: 0px;
			border-bottom-right-radius: 0px;
		}

		input.tnp-email{

			border-top-left-radius: 3px;
			border-bottom-left-radius: 3px;
		}

		input.tnp-submit{


			border-top-right-radius: 3px;
			border-bottom-right-radius: 3px;

		}

		.tnp-field.tnp-field-email{

			justify-content: center;
		}

		input.tnp-submit{

			padding-left: 0px !important;
		}

		.tnp-field.tnp-field-email label{

			margin-right: 0px;
		}

		.tnp-field-email label{

			font-size: 17px !important;
		}

		.tnp-subscription div.tnp-field-email{

			margin-bottom: 20px;

		}

		.textwidget div:last-child{

			margin-bottom: 0px;
		}

		.contener-footer > div{

			justify-content: center;
		}
		
	}

	@media screen and ( max-width: 600px){



		.tnp-field.tnp-field-button{

			width: 100%;
		}

		.div-green-parent{

			padding-top: 15px;
			padding-bottom: 15px;
		}

		.contener-footer{

			padding-bottom: 50px;
			padding-top: 50px;
			flex-direction: column;
		}

		.textwidget div{

			margin-bottom: 30px;
		}

		.contener-footer div *{

			font-size: 16px !important;

		}

		.tnp-field label {

			width: 100% !important;
			max-width: 100% !important;
			font-size: 14px !important;
			line-height: 25px;
			color: white !important;

		}

		.custom-html-widget div {

			text-align: left;
			display: inline-table;
			width: calc(100% - 60px);
			margin-right: 30px; 
			margin-left: 30px;

		}

		.contener-footer {

			width: 100%;

		}

		.textwidget div{

			text-align: center;
		}

		.reseaux-sociaux{

			margin-top: 50px;
		}

	}

	@media screen and ( max-width: 1100px) and ( min-width: 600px){

		.contener-footer{

			flex-direction: column;
		}

		.contener-footer .textwidget .custom-html-widget *{

			text-align: center;
		}

		.tnp-field label {

			width: 100% !important;
			max-width: 70% !important;
			font-size: 14px !important;
			line-height: 25px;
			color: white !important;

		}

		.custom-html-widget div {
	
			width: 40%;
			margin-right: 20px;
			margin-left: 20px;
			margin-bottom: 40px;

		}

		.reseaux-sociaux{

			margin-top: 10px;
		}

		.contener-footer {
			padding-bottom: 100px;
		}


	}

</style>

<style scoped>
	
/*	.section-footer{

		min-height: auto;
		opacity: 1;
	}*/


</style>
