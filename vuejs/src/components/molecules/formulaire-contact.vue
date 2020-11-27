<template>
	<div>
		<slot>

				<form action="" method="post" class="myform">

				<input class="input-single"  placeholder="Prénom"  type="" name="name" required>
				<input class="input-single" placeholder="E-mail" type="" name="email" required>
				<input class="input-single" placeholder="Téléphone" type="" name="telephone" required>
				<textarea class="input-single " placeholder="Messsage"  type="" name="message"></textarea>

				<div class="alert-envoi-assortiment">
					<p>Votre message a été envoyé</p>
				</div>
				<button type="submit" name="submit" value="Send" class="button-envoyer">Envoyer</button>
				<div class="divcheckbox" >
					
					<input type="checkbox" class="checkbox" id="scales" name="scales" required>
					<label class="tchekboxx" for="scales">J'accepte <a class="line" target="_blank" href="http://dev.fromagerie.brussels/politique-de-confidentialite/">La Politique de confidentialité et les Cookies </a>  </label>

				</div>


				

				</form>

		</slot>
	</div>
</template>

<script>
	
	import smart_fonts from 'Libs/smart-fonts.js';	

export default{

mounted(){


	var $ = this.$

	smart_fonts({
	
		'.input-single' : 18,
	})


	$('.myform').on('submit',function(event){

		event.preventDefault()


		var form = $(this);

		console.log( form.serializeArray() );

		$.ajax({
			type: 'post',
			url: window.ajaxurl,
			data:{
				action: 'send_contact_mail',
				form: form.serializeArray()
			},


			success: function(result){
				console.log(result);

				console.log(result);

					$('.alert-envoi-assortiment').show('slow/400/fast', function() {
						
					});

						$('.alert-envoi-assortiment').animate({
							// targets: $('.menu_link').target,
							opacity: '1',
							easing: 'easeInOutSine',
							duration: 200,
						});

						$('.alert-envoi-assortiment').animate({
						// targets: $('.menu_link').target,
						display: 'block',
						easing: 'easeInOutSine',
						duration: 200,
						});


					setTimeout(function() {

						$('.alert-envoi-assortiment').animate({
							opacity: '0',
							easing: 'easeInOutSine',
							duration: 200,
						});
						$('.alert-envoi-assortiment').hide('slow/400/fast', function() {
							
						});

					}, 3000);
	
		}
		});

	// Prevents default submission of the form after clicking on the submit button. 
	return false;   
	});

}
}
</script>

<style scoped>

	.input-single{

		margin-top: 15px;
	}


	.alert-envoi-assortiment{

		background-color: #bcf5bc;
		margin-top: 15px;
		display: none;
		opacity: 0;
		
	}
	.alert-envoi-assortiment p{

		color: darkgreen;
		padding: 5px 10px;
		text-align: center;
	}



/*	textarea
	{
			
			width: 20vw !important;
		}
*/
	.divcheckbox{

		display: flex;
		flex-direction: row;
		margin-top: 10px;		
		

	}

	.line{

		border-bottom: 1px solid #A59890 ;

	}

	.checkbox{

		height: auto;
		width: auto;
		margin-right: 10px;
		margin-top: 1px;
	}

	.woocommerce #respond input#submit, .woocommerce a.button, .woocommerce button.button, .woocommerce input.button{

		text-align: center;
	}

	.content-single del{

		display: none !important;
	}

	.content-single bdi {

		display: none !important;
	}

	a{
		text-decoration-line: none;
		color: #666666;
	}

	input{

		border: 1px solid #A59890 !important;
		margin-top: 15px;
		padding-top: 10px;
		padding-bottom: 10px;
		color: #666666;
		padding-left: 15px;

	}

	textarea{
		padding-top: 10px;
		border: 1px solid #A59890 !important;
		margin-top: 15px;
		min-height: 100px;
		padding-left: 15px;
	}

	button{

		margin-top: 20px;
		padding-top: 10px;
		padding-bottom: 10px;
		background: #70625b;
		color: white;
		border: solid #70625b;
		border-width: 1px;
		font-weight: bold;

	}

	button:hover{

		color: #A59890;
		background: white;
		/*border: 1px ;*/
	/*	border: solid #A59890;
		border-width: 1px;*/
		transition-delay: 200;
	}

	.contener-single{
		padding-top: 0px;
	}

	@media screen and (max-width: 1100px) and (min-width: 600px){

		h5{

			font-size: 26px !important;
		}
	}

	@media screen and (max-width: 600px){


	}

	.contener-single form{

		display: flex;
		flex-direction: column;
		min-width: 20vw;
		/*justify-content: space-between;*/
	}

/*	.tcheckboxx{

		font-size: 16px !important;
	}*/
	

	@media screen and (max-width: 1100px) and (min-width: 600px){


		.contener-single form{

			max-width: 80% !important;
			/*justify-content: space-between;*/
		}

		p{

			font-size: 18px !important;
		}

		.tchekboxx{

			font-size: 16px !important;
		}


	}

	@media screen and (max-width: 600px){


		.contener-single form{

			max-width: 100%;
			/*justify-content: space-between;*/
		}

		.checkbox{

			height: auto;
			width: auto;
			margin-right: 10px;
			margin-top: 1px;
			
		}
		.tchekboxx{

			font-size: 16px!important;
		}


	}





</style>