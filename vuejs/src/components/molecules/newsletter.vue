<template>

	<div class="content-newsletter" >
		
		<form method="post" :action="newsletter.action" >
			
			<div class="content-email-input">

				<p style="color: white" v-html="pll__('RESTEZ AU COURANT DE NOTRE ACTUALITÉ')"></p>
				<div class="input-col">

					<div class="border-button" >
						<input class="input-email" type="email" :name="newsletter.input_email_name" :placeholder="pll__('Email')" required >
						<input class="input-submit" type="submit" :name="newsletter.input_email_name" :value="pll__('S’inscrire')" required style="font-weight: 700;">
					</div>
				</div>

			</div>
			
			<label class="politique-confidentialite">
				<div >
					
					<input class="checkbox-input" type="checkbox" :name="newsletter.input_checkbox" required>
					<a target="_blank" :href="newsletter.a_url" 
					v-html="pll__('En continuant, vous acceptez la politique de confidentialité')" ></a>

				</div>
				
			</label>
			
		</form>
	
	</div>

	

</template>

<script type="text/javascript">
	
export default{

	
	mounted(){

		var $ = this.$

		$('.tnp-privacy-field').first().insertAfter('.tnp-field-button')
		$('.tnp-field-button').prepend($('.tnp-field-email').find('input')) 
		$('.tnp-field , .tnp-field-button').find('input[type=submit]').css('font-weight', '700');

	},
	
	computed:{

		newsletter: function () {

			let $ = this.$

			let formsendEmail = {};

			formsendEmail['action'] = $(this.wp.newsletter).find("form").attr('action');

			formsendEmail['title'] = $(this.wp.newsletter).find("[for='tnp-email']").text()

			formsendEmail['input_email_name'] = $(this.wp.newsletter).find(".tnp-email").attr('name');

			formsendEmail['input_checkbox'] = $(this.wp.newsletter).find(".tnp-privacy-field").find('label').find('input').attr('name');

			formsendEmail['a_url'] = $(this.wp.newsletter).find(".tnp-privacy-field").find('a').attr('href');
			
			return formsendEmail

		}
	}
}


</script>	

<style>

.content-newsletter
{

	background-color: #888320;
	padding-top: 50px;
	padding-bottom: 50px;

}

.content-email-input
{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.content-email-input p
{
	text-align: right;
	display: block;
	margin-top: auto;
	margin-bottom: auto;
}

.content-email-input > *
{	
	width: 45%;
	background-color: transparent;

}

.content-email-input
{	
	display: flex;
	flex-direction: row;
}


.border-button {

	background-color: white;
	display: flex;
	border-radius: 3px;
}


.input-col
{

	flex-direction: row;
	justify-content: right;
	display: flex;

}

.content-newsletter label{

	margin-top: 20px;
	color: white;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;

}

input.input-submit{

	width: auto;
	border: 1px solid white;
	border-bottom-right-radius: 3px ;
	border-top-right-radius: 3px;
}

.content-email-input p{

	font-size: 21px;
	font-weight: 600;
}

.checkbox-input{

	width: auto;
}


.border-button > *{

	background-color: white;
	border: none;
}

.input-email{

	padding: 21px 5px 21px 32px;
	min-width: 250px;
	border-bottom-left-radius: 3px !important;
	border-top-left-radius: 3px !important;
}

.input-submit{

	padding: 21px 32px 21px  5px;
}

.politique-confidentialite{

	margin-left: auto;
    width: 100%;
}

.politique-confidentialite div{

	text-align: left;
	width: 45%;

}

.politique-confidentialite input{

	position: relative;
	top: 2px;
	margin-right: 5px;

}




.politique-confidentialite a{

	margin-top: 20px;
	color: white;
}


@media screen and ( min-width: 1100px){

	.input-email{

		width: 100%;
	}

}


@media screen and ( max-width: 1125px){

	.content-email-input{

		flex-direction: column;
	}

	.input-col{

		margin-top: 30px;
		justify-content: center;
	}

	.content-email-input p{

		text-align: center;
		margin-right: auto;
		margin-left: auto;
		width: 80%;

	}

	.content-email-input > *{

		width: 100%;
		text-align: center;
	}

	.politique-confidentialite div{

		width: 100%;
		text-align: center;
		width: 100%;
	}



}



@media screen and ( max-width: 600px){


	.input-email{

		min-width: auto;
		padding: 21px 5px 21px 15px;
	}

	.input-submit {
		padding: 21px 15px 21px 5px;
	}

	.content-email-input p {

		line-height: 25px !important;
	}

	.border-button{

		width: 90%;
	}

	.politique-confidentialite input {
		
		/*top: calc( 50% - 6.5px);*/
		margin-right: 10px;
	}

	.content-newsletter label{

		justify-content: center;

	}

	.politique-confidentialite div{

		width: 90%;

	}



}


</style>