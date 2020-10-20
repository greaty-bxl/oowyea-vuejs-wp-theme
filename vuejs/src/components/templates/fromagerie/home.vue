
<template>
    <div class="section-wrap">
		<div class="clear"></div>

		<div  v-bind:style="{ 'background-image': 'url(' +this.wp.sections[0].acf_fields.image_home.url + ')' }"  class="section-home">
			<div  v-bind:style="{'color':  this.wp.sections[0].acf_fields.fonts.h1.color + ' !important'   }" v-html="this.wp.sections[0].post_content" class="titre-home-section">
			</div>
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
			'.titre-home' : 85 ,
		})
        console.log(this.wp.sections);
        

		this.$emit('template_mounted', this);


	}

}



</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400&display=swap');
	
	body *{

		font-family: 'Montserrat';
		font-weight: 500 ;
		/*color: white;*/

	}


	*:focus {
		outline: 0;
	}

	.section-home{
		background-size: cover;
		height: 100vh;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-content: center;


	}

	.titre-home-section{
		margin-top: auto;
		margin-bottom: auto;
	}

	@media screen and (max-width: 900px){

		.titre-home-section  *{
			text-align: center !important;
		}

		.titre-home-section{

			margin-left: 30px;
			margin-right: 30px;
		}
	}

	.header-greaty{

		height: 0px;
	}

</style>


<style scoped >

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;1,300;1,400&display=swap');


</style>






