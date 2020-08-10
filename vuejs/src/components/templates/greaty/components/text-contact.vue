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
.textbox {
    text-align: left;
}

.text-contact {
 
    color: #e1e1e1;
    
}

.text-contact a{
		color: white;
	}
	
	

@media screen and (min-width: 1200px) {

		.div-text-contact{

			padding: 12rem 4.5rem;
			width: 80%;
			margin-left: 0;
			margin-right: 0;
			padding-top: 100px;
			padding-bottom: 70px;
			font-family: 'Gotham-Book';

		}
        
	
	}

    @media screen and (max-width: 1200px) {

        .div-text-contact{

			padding: 12rem 4.5rem;
			width: 80%;
		
			color: white;
			margin-left: 0;
			margin-right: 0;
			padding-top: 50px;

		}
    }
</style>