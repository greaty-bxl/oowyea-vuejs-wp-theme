<template>
    <div class="section-wrap home-url">
    <div class="clear"></div>
		<div class="home-section">
			
				<div>
					<p>TOMU STUDIO</p>
					<p>IS A CREATIVE OFFICE</p>
					<p>BASED IN BRUSSELS</p>
					<p>A CITY WE LOVE</p>
					<div class="we-do" style="text-align: left; margin-bottom: 40px;">WE DO <br>
					<p id="spin" class="on-screen spin" ></p>
					</div>
				</div>

				<!-- <div  v-html="wp.menus['burger-menu']"></div> -->



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
		'FURNITURE',
		'HOSPITALITY',
		'RESTAURANT',
		'SCENOGRAPHY',
		], i = 0;
		
		setInterval(function(){
		$('#spin').fadeOut(function(){
		// $(this).html(words[i=(i+1)%words.length]).css('color', color[i]);	
		$(this).html(words[i=(i+1)%words.length]).fadeIn().css('color', color[i]);
		});
		}, 2000);

		$('[data-state="current"] .spin').on('enter-screen', () => {
			console.log('enter-screen');

			$('.header-tomu-container').css('color', 'black');
			$('.header-tomu-container a').css('color', 'black');

			var href =  $('.home-url').parent().attr('data-permalink');
			this.pushHistory( href )

			$('a[href="'+ href +'"]').css('color', 'black');

		})

		$('.spin').on('leave-screen', () => {
			//console.log('leave screen', event.target);
			console.log('leave-screen');
		})

		$('.lang-item').appendTo('.home-section > div')



		setTimeout(function() 

		{
				$('.lang-item').click(function() {
					
					setTimeout(function() {
						document.location.reload();
					}, 500);
					
				});

			


		}, 500);

		$('.lang-item').each(function(index) {

			$(this).css('padding-left',  30 * index);
			
		});
		
		}




	}


</script>

<style type="text/css">

	.current-lang a{

		text-decoration: underline !important;
	}

	p#spin{

		line-height: 100%;
	}
	.lang-item{

		all: unset;
		font-size: 40px;
		line-height: 100%;

	}
	.lang-item a{

		text-decoration: none;
		color: black;
	}

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
		font-size: 50px;
	}

	.home-section p{
		all: unset;
		text-align: left;
		line-height: 85%;
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

		padding-left: 245px;
		width: calc( 100vw - 700px)
	}
	@media screen and ( max-width: 1250px ) and ( min-width: 740px ){

		.home-section > div{
			font-size: 50px;
		}

		.home-section{

			padding-left: 70px;
			width: calc( 100vw - 250px);
		}

		.we-do{

			display: flex;
			flex-direction: column !important;
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