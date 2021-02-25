<template>
	<div class="section-wrap">

		<div class="clear"></div>
		
		<br><br><br><br><br><br><br>

		<h1 v-html="post.post_title"></h1>
		<p>Archive template</p>
		<div v-for="post in posts" :key="post.ID">
			<h2 v-html="post.post_title"></h2>
		</div>
		
		<div class="clear"></div>
	</div>
</template>

<script>
	
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
	props: {	
		'title': String,
		'post': Object,
		'posts' : Array,
	},
	mounted () {

		//console.log( this.posts );
		this.$emit('template_mounted');
	},	
	name: 'swiper-example-default',
	title: 'Default',
	init: true,
	components: {
		
	},
	data () {
		return {
			
		}
	}
}
</script>
<style>


</style>

