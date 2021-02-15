<template>

	<div class="content-newsletter" >
		
		<form method="post" :action="newsletter.action" >
			
			<div class="content-email-input">

				<p style="color: white" v-html="newsletter.title"></p>
				<div class="input-col">

					<div class="border-button" style="border-radius: 3px">
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
			
			console.log(formsendEmail);

			return formsendEmail


		}
	}
}


</script>	

<style>

.content-newsletter
{

	background-color: #888320;
	padding-top: 30px;
	padding-bottom: 30px;

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

.border-button > * {

	background-color: transparent;
	border: 0px;
}

.border-button {

	background-color: white;
	display: flex;
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
}

.content-email-input p{

	font-size: 21px;
	font-weight: 600;
}

.checkbox-input{

	width: auto;
}

.input-email{

	padding: 21px 5px 21px 32px;
	min-width: 250px;
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
	top: 1px;
	margin-right: 10px;

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


@media screen and ( max-width: 1100px){

	.content-email-input{

		flex-direction: column;
	}

	.input-col{

		margin-top: 20px;
		justify-content: center;
	}

	.content-email-input p{

		text-align: center;
		width: 100%;
	}

	.content-email-input > *{

		width: 100%;
		text-align: center;
	}

}



@media screen and ( max-width: 600px){



}


</style>