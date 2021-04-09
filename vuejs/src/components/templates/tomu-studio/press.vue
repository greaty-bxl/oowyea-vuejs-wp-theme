<template>
	
	<div class="section-global-project section-global-news ">

			<div class="content-project  section-global-press on-screen"  v-for="(item, index) in wp.press" :key="index"  >
				<a :href="item.permalink">
					<img v-if="is" :src="item.thumb">	
					<div v-else class="background-project" :style= "{'background-image': 'url('+item.thumb+')' }" ></div>
					<div class="animation-title" >
						<p v-html="item.post_title"></p>
					</div>
				</a>
			</div>
	</div>	

	

</template>


<script type="text/javascript">

	import is from 'is_js'

	export default{

	data(){

		// currentRoute: window.location.pathname
		return {
			is : is.mobile(),
			// showButton : window.location.toString()
		}
	},


	mounted(){
		this.$emit('template_mounted')

		let $ = this.$
		console.log(this.wp);

		$('[data-state="current"] .section-global-press').on('enter-screen', () => {
			console.log('enter-screen');

			$('.header-tomu-container').css('color', '#E4A8BC');
			// $('.current-menu-item a').css('color', '#E4A8BC');

		
			var href = $('#press').attr('data-permalink');
			console.log('href' , href);
			this.pushHistory( href )
			$('.header-tomu-container a').css('color', 'black');
			$('a[href="'+ href +'"]').css('color', '#E4A8BC');
			
		})



		// this.pushHistory( href )

		}
	}


</script>
<style type="text/css">
	
	.section-global-news{

		padding-top: 0px;
		padding-bottom: 50px;
		min-height: 100vh;

	}

</style>