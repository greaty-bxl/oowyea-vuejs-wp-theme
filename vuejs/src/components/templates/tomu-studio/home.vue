<template>
    <div class="section-wrap">
    <div class="clear"></div>
		<div class="home-section">
			
				<div>
					<p>TOMU STUDIO</p>
					<p>IS A CREATIVE OFFICE</p>
					<p>BASED IN BRUSSELS</p>
					<p>A CITY WE LOVE</p>
					<div>WE DO <p id="spin" class="on-screen spin" ></p></div>
				</div>

		</div>
	<div class="clear"></div>
	</div>

</template>


<script type="text/javascript">

	import Vue from 'vue'
	import SmoothScrollbar from 'vue-smooth-scrollbar'
	Vue.use(SmoothScrollbar)

	export default{

		mounted(){

		let $ = this.$
		// (function(){
		var color = [
		'#bdb5d9',
		'#fddaa7',
		'#e6b4e6',
		'#86dadc',
		'#e6b1c2',
		'#dbcdbe',
		];
		var words = [
		'DESIGN',
		'SPACES',
		'INTERIOR',
		'HOSPITALITY',
		'RESTAURANT',
		'SCENOGRAPHY',
		], i = 0;
		setInterval(function(){
		$('#spin').fadeOut(function(){
		$(this).html(words[i=(i+1)%words.length]).css('color', color[i]);	
		$(this).html(words[i=(i+1)%words.length]).fadeIn();
		});
		}, 2000);

		$('.spin').on('enter-screen', () => {
			console.log('enter-screen');

			$('.header-tomu-container').css('color', 'black');
			$('.current-menu-item a').css('color', 'black');

		})
		
		}
	}


</script>

<style type="text/css">

	#spin {
		/*width: 250px;*/
		margin-left: 10px;
		text-align: left;
	}
	#spin:after {
		content:"";
		animation-delay: 2s;
		animation: spin 20s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
	}
	.home-section > div{
		font-weight: 700;
		font-size: 80px;
	}

	.home-section p{
		all: unset;
		text-align: left;
		line-height: 100%;
	}

	.home-section > div > div{
		line-height: 100%;
		display: flex;
		flex-direction: row;
		
	}
	
	.home-section > div{

		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
	}

	.home-section{

		padding-left: 70px;
		width: calc( 100vw - 245px)
	}
	@media screen and ( max-width: 1250px ) and ( min-width: 740px ){

		.home-section > div{
			font-size: 50px;
		}
	}
	

	@media screen and ( max-width: 740px ){

		.home-section{

			width: calc( 100% - 60px );
			padding-left: 30px;

		}

		.home-section > div{

			font-size: 30px;
		}

		.home-section > div > div{
			flex-direction: column;
			text-align: left;
		}

		#spin {
			margin-left: 0px;
		}
	}

</style>