<template>

	<div class="button-contener" v-html="_cart">

	</div>

</template>

<script>

// import smart_fonts from 'Libs/smart-fonts.js';
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
// import 'swiper/css/swiper.css';


export default {
	components: {

		// Swiper,
		// SwiperSlide,

	},
	props: {
		'post' : Object
	},




	mounted(){

	
		this.$emit('template_mounted', this);
		console.log();

	},


	

}



</script>

<style>

</style>

<style scoped >



</style>





