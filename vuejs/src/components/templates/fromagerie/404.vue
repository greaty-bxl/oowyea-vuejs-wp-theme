
<template>
    <div class="section-wrap">
		<div class="clear"></div>

		<div class="div-404" >

			<h1>404</h1>

		</div>
			


		<div class="clear"></div>
    </div>
 
</template>

<script>

import smart_fonts from 'Libs/smart-fonts.js';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';


export default {
	components: {

		Swiper,
		SwiperSlide,

	},
	props: {
		'post' : Object
	},



	mounted(){

	}
}



</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400&display=swap');

.div-404{


	display: flex;
	justify-content: center;
	align-content: center;
	align-items: center;
	height: 100vh;
}

h1{

	font-size: 20vw;
	color: #70625b;

}


</style>






