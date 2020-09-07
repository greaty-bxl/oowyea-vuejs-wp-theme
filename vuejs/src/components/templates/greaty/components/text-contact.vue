<template>
    <div class="section-wrap">
    <div class="clear"></div>
<!--         <div class="textbox">
        <div  class="div-text-contact on-screen">
            <p class="text-contact">
                Vous avez une idéew.<br>
                Nous avons l'expertise pour la réaliser.<br>
                Faites-nous un <u><strong><a href="">coucou</a></strong></u>  :)
            </p>
        </div>
        </div> -->
   </div>	
</template>

<script>
import smart_fonts from "Libs/smart-fonts.js"
import anime from 'animejs/lib/anime.es.js';
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

		// console.log( $.get('./json/animation.json') );
		//Important to let works basic functions
		this.$emit('template_mounted')
		
		smart_fonts({
			'.text-contact' :45,
		})


			$('.div-text-contact').on('leave-screen', (event) => {

			$(event.target).css("opacity","0");

				anime({
					targets: event.target,
					translateY: '100px',
					opacity: 0,

				});

			})

			$( ".div-text-contact" ).each( function( index , el) {

			$(el).on('enter-screen', (event) => {
				anime({
					targets: event.target,
					translateY: '0px',
					opacity: 1,
					easing: 'easeInOutSine',
					duration: 500,
					delay: index * 100
				});

			})


		});


	}
}

</script>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap')


.text-contact a{
font-family: 'Montserrat', sans-serif !important;
color: #e1e1e1;
font-weight: lighter;}
.text-contact {
	font-family: 'Montserrat', sans-serif !important;
color: #e1e1e1;
font-weight: lighter;
/*font-size: 0.6em !important;*/
}

.textbox {
	margin-bottom: auto;
	margin-top: auto;
    text-align: left;
}

.text-contact {
 
    color: #e1e1e1;
    
}

.text-contact a{
		color: #e1e1e1;
	}

p{

	font-family: 'Montserrat', sans-serif !important;
}	
	

@media screen and (min-width: 1100px) {

	.div-text-contact{

		/*padding: 12rem 4.5rem;*/
		width: 80%;
		margin-left: 0;
		margin-right: 0;
		padding-top: 100px;
		padding-bottom: 70px;
		font-family: 'Montserrat', sans-serif !important;
		margin-left: 70px;
		margin-right: 70px;
		font-size: 35px;
		font-weight: lighter;

	}

	.text-contact strong{

		display: inline !important;
		font-family: 'Montserrat', sans-serif !important;
		font-weight: 600;
	}

		.section-wrap{

		height: 75vh;

		}     
	
	}

    @media screen and (max-width: 1100px) and  (min-width: 600px) {


		.div-text-contact{

		font-family: 'Montserrat', sans-serif !important;
		width: 80%;
		font-size: 2em;
		color: white;
		margin-left: 70px;
		margin-right: 70px;
		padding-top: 50px;
		font-weight: lighter;
		}
		.text-homepage{

			margin-top: 20% !important;
		}
    }

    @media screen and (max-width: 600px) {

        .div-text-contact{

			font-family: 'Montserrat', sans-serif !important;
			color: white;
			margin-left: 0;
			margin-right: 0;
			padding-top: 50px;
			padding-left: 30px !important;
			padding-right: 30px !important;
			font-weight: lighter;

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

		.text-contact{

		/*	font-size: 2.2em !important;
			line-height: 1.8em;
*/
		}
    }
</style>