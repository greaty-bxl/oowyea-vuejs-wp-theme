<template>
	<div class="page">
		<div class="col col1" :style="{'background-image':'url('+this.wp.dami_assets['bg-left']+')'}">
			<embed class="logo" :src="this.wp.dami_assets['logo']" >
			<h1>Entreprise générale</h1>
			<p class="services">
				démolition <span>|</span> terrassement <span>|</span> toiture <span>|</span>
				carrelage <span>|</span> peinture <span>|</span> etc 
			</p>
			<p class="contact">
				<span class="name">damian tubek</span><br>
				<a href="tel:0032477253365">+32 (0)477 25 33 65</a><br>
				<a href="mailto:info@damiconcept.be">info@damiconcept.be</a><br>
			</p>
		</div>
		<div class="col col2">
			<slider 
				class="slider" 
				animation="fade" 
				:control-btn="false"
				:indicators="false">
				<slider-item
					class="slide"
					v-for="(i, index) in list"
					:key="index"
					:style="i"
					>
				</slider-item>
			</slider>
		</div>
	</div>
</template>

<script>
	// import Swiper JS
	// https://www.npmjs.com/package/vue-easy-slider
	import { Slider, SliderItem } from 'vue-easy-slider'

	export default {
		mounted(){
			console.log('dami', this.wp.dami_assets);
		},
		components: {
			Slider,
			SliderItem,
		},
		data() {
			return {
				list: [
					{ 'background-image': 'url('+this.wp.dami_assets['carrelage_damiconcept']+')' },
					{ 'background-image': 'url('+this.wp.dami_assets['demolition_damiconcept']+')' },
					{ 'background-image': 'url('+this.wp.dami_assets['peinture_damiconcept']+')' },
					{ 'background-image': 'url('+this.wp.dami_assets['terrassement_damiconcept']+')' },
					{ 'background-image': 'url('+this.wp.dami_assets['toiture_damiconcept']+')' },
				],
			}
		},
	}
</script>

<style scoped>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

	.page{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		min-height: 100vh;
		font-family: 'Montserrat', sans-serif;
		color: #fff;
		text-align: center;
		line-height: 150%;
		text-transform: uppercase;
	}

	.col{
		width: 50%;
	}

	.col1{
		padding: 5vh;
		background-color: #2e3740;
		background-size: cover;
		background-position: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.logo{
		height: 20vh;
		margin: 0px auto;
	}

	h1{
		margin-top: 5vh;
		font-size: 20px;
	}

	.services {
		margin-top: 2vh;
		font-size: 14px;
	}

	.services span,
	.contact .name{
		color: #e94e25;
	}

	.contact{
		margin-top: 9vh;
		font-size: 12px;
	}

	a{
		color: #fff;
		text-decoration: none;
	}

	.col2{
		display: flex;
		min-height: 100%;
		flex-direction: column;
		color: #000
	}

	.slider{
		height: 100% !important;
	}
	
	.slide{
		background-position: center;
		background-size: cover;
	}

	@media screen and (orientation:portrait) {
		
		.col{
			width: 100%;
		}

		.col1{
			padding: 2vh;
		}

		.logo{
			height: 12vh;
		}

		.col2{
			height: auto !important;
		    min-height: 25vh;
		}

	}
</style>