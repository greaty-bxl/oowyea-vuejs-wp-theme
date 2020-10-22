<template>
    <div class="section-wrap">
		<div class="clear"></div>

			<div class="section-a-propos">

				<div v-bind:style="{ 'color':  this.wp.sections[1].acf_fields.fonts.h1.color  }" v-html="this.wp.sections[1].post_content" class="titre-a-propos-section"></div>

			</div>

		<div class="clear"></div>
    </div>
 
</template>

<script>

import smart_fonts from 'Libs/smart-fonts.js';


export default {
	components: {

	},
	props: {
		'post' : Object
	},



	mounted(){

		// console.log(smart_fonts);

		// var $ = this.$

		smart_fonts({
			'.titre-a-propos' : 50,
		})
        console.log(this.wp);
        

		this.$emit('template_mounted', this);


	}

}



</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400&display=swap');
	


	*:focus {
		outline: 0;
	}

	.section-a-propos{

		height: 100vh;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-content: center;
		background: #A59890;


	}

	.titre-a-propos-section{
		margin-top: auto;
		margin-bottom: auto;
		width: 70%;
		line-height: 70px;
		color: white;

	}

	.section-a-propos{}

	@media screen and (max-width: 1100px){

		.titre-a-propos-section *{
			text-align: center !important;
			line-height: 50px;
		}

		.titre-a-propos-section{

			margin-left: 30px;
			margin-right: 30px;
		}

		.titre-a-propos-section{

			line-height: 30px;

		}
	}


</style>


<style scoped >

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;1,300;1,400&display=swap');


</style>






