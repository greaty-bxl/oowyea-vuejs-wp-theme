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

export default {

	name: 'footer',

}

</script>


<style>
.textbox {
    text-align: left;
}

.text-contact {
    font-size: 4rem !important;
    color: #e1e1e1;
    padding-left: 4.5rem;
}

.text-contact a{
		font-family: 'Gotham Bold', sans-serif; 
		color: white;
	}
	
	

@media screen and (min-width: 1200px) {

		.div-text-contact{

			padding-right: 20px;
			width: 80%;
			margin-left: 0;
			margin-right: 0;
			padding-top: 100px;
			padding-bottom: 70px;

		}
        
	
	}

    @media screen and (max-width: 1200px) {

        .div-text-contact{

			padding-left: 5vw;
			padding-right: 5vw;
			width: 80%;
		
			color: white;
			margin-left: 0;
			margin-right: 0;
			padding-top: 50px;

		}
    }
</style>