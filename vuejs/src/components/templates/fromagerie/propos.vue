
<template>
    <div class="section-wrap">
		<div class="clear"></div>

		<!-- 	<div class="section-a-propos">
			<div v-html="this.wp.wp_query.post.post_content" class="titre-home-section"></div> -->

		<!-- </div> -->

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
			'.titre-home' : 85,
		})
        console.log(this.wp.wp_query.post.post_content);
        

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


	}

	.titre-home-section{
		margin-top: auto;
		margin-bottom: auto;
	}


</style>


<style scoped >

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;1,300;1,400&display=swap');


</style>






