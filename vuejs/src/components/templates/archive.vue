<template>
	<div  class="section-wrap" >
		<div class="clear"></div>
				<h1 v-html="title"></h1>
				<p>Archive template</p>

			<swiper class="swiper" :options="swiperOption">
			<!-- <swiper-slide>Slide 1</swiper-slide> -->
			<swiper-slide v-for="child in wp.wp_query.posts" :key="child.ID" >
				<img height="150px" width="100px" :href="child.thumbnail"> 
				<h2 v-html="child.post_title"></h2>
				<p v-html="child.post_content"></p>
				<a :href="child.permalink">Read more</a>

			</swiper-slide>

			</swiper>

		<div class="clear"></div>
	</div>
</template>

<script>
	
    
	// console.log( this.wp.wp_query.post );

	import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
	import 'swiper/css/swiper.css'

	export default {

		props: {
			'title': String,
			'posts' : Array,
		},
		mounted (){

			console.log( this.wp.wp_query.posts );
			this.$emit('template_mounted')
		},
		
		name: 'swiper-example-default',
		title: 'Default',
		init: true,
		
		components: {
		Swiper,
		SwiperSlide

		},
		data() {

			return {

				swiperOption: {

					slidesPerView: 4,
				}
			}
		}

	
	}

	// export default {
	//    name: 'swiper-example-centered-slides',
	//    title: 'Centered slides',
	//    components: {
	//      Swiper,
	//      SwiperSlide
	//    },
	//    data() {
	//      return {
	//        swiperOption: {
	//          slidesPerView: 4,
	//          spaceBetween: 30,
	//          centeredSlides: true,
	//          pagination: {
	//            el: '.swiper-pagination',
	//            clickable: true
	//          }
	//        }
	//      }
	//    }
	//  }
</script>


