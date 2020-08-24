<template>
    <div class="section-wrap">
    <div class="clear"></div>
        <div class="textbox">
        <div class="div-text-contact">
            <p class="text-contact">
                Vous avez une idée.<br>
                Nous avons l'expertise pour la réaliser.<br>
                Faites-nous un <u><strong><a href="">coucou</a></strong></u>  :)
            </p>
        </div>
        </div>
</div>	
</template>

<script>
import smart_fonts from "Libs/smart-fonts.js"
export default {
	components: {

	},
	props: {
		'post' : Object
	},
	mounted (){


		var $ = this.$


		$(this.$el).css({
			'min-height':'50vh'
		})

	

		//Important to let works basic functions
		this.$emit('template_mounted')

			console.log(this.wp);

		smart_fonts({
			'.text-contact' :54
		})
	}
}

</script>


<style scoped>

/*.div-text-contact{
  font-size: 3em;
  margin-left: 0;
  margin-right: 0;
  padding-top: 100px;
  padding-bottom: 70px;

}*/

.text-contact a{
font-family: "Open Sans", regular !important;
color: white;
}
.text-contact {
	font-family: "Open Sans", regular !important;
color: white;
/*font-size: 0.6em !important;*/
}

.textbox {
    text-align: left;
}

.text-contact {
 
    color: #e1e1e1;
    
}

.text-contact a{
		color: white;
	}

p{

	font-family: "Open Sans", regular !important;
}	
	

@media screen and (min-width: 1100px) {

	.div-text-contact{

		/*padding: 12rem 4.5rem;*/
		width: 80%;
		margin-left: 0;
		margin-right: 0;
		padding-top: 100px;
		padding-bottom: 70px;
		font-family: "Open Sans", regular !important;
		margin-left: 70px;
		margin-right: 70px;
		font-size: 35px;

	}

	.text-contact strong{

		display: inline !important;
	}

        
	
	}

    @media screen and (max-width: 1100px) and  (min-width: 600px) {


		.div-text-contact{

		font-family: "Open Sans", regular !important;
		width: 80%;
		font-size: 2em;
		color: white;
		margin-left: 70px;
		margin-right: 70px;
		padding-top: 50px;
		/*height: 100vh;*/

		}
		.text-homepage{

			margin-top: 20% !important;
		}
    }

    @media screen and (max-width: 600px) {

        .div-text-contact{

			font-family: "Open Sans", regular !important;
			color: white;
			margin-left: 0;
			margin-right: 0;
			padding-top: 50px;
			padding-left: 30px !important;
			padding-right: 30px !important;

		}

		.div-text-contact{
			padding: 0px 0px;
		}
		.div-text-contact{

			height: 100%

		}
		
		.div-text-contact{

			width: auto !important;

		}

    }
</style>