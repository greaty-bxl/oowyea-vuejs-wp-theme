<template>
		
		<div class="contact-tomu on-screen">

			<div class="on-screen">
				<ul> 
					<li> <a target="_blank" href="https://www.google.com/maps/place/Avenue+Brugmann+16,+1060+Saint-Gilles/@50.8217959,4.3512311,17z/data=!3m1!4b1!4m5!3m4!1s0x47c3c458b350e9cb:0x1e6f59366739416!8m2!3d50.8217959!4d4.3534198">AVENUE BRUGMANN 16</a></li>
					<li> <a target="_blank" href="https://www.google.com/maps/place/Avenue+Brugmann+16,+1060+Saint-Gilles/@50.8217959,4.3512311,17z/data=!3m1!4b1!4m5!3m4!1s0x47c3c458b350e9cb:0x1e6f59366739416!8m2!3d50.8217959!4d4.3534198">1060 BRUSSELS</a></li>
					<li><a target="_blank" href="mailto: HELLO@TOMUSTUDIO.COM">HELLO@TOMUSTUDIO.COM</a></li>
					<li><a target="_blank" href="tel:+32 2 897 15 33">+32 2 897 15 33</a></li>
				</ul>
			</div>
			

		</div>

</template>

<script type="text/javascript">
	
	export default{

		mounted(){

			let $ = this.$
			
			$('[data-state="current"] .contact-tomu div').on('enter-screen', () => {
				console.log('enter-screen');
				$('.header-tomu-container').css('color', '#BBD7B3');
				$('.header-tomu-container a').css('color', 'black');


				var href = $('#contact').attr('data-permalink');
				console.log('href' , href);
				this.pushHistory( href )
				$('a[href="'+ href +'"]').css('color', '#BBD7B3');
				
			})

			$('.contact-tomu div').on('leave-screen', () => {
				console.log('leave-screen');
			})

		}
	}

</script>

<style type="text/css">
	
	.contact-tomu *{
		all: none;
		justify-content: center;
		color: #BBD7B3;
		font-weight: bold;
		z-index: 3010;
	}

	.contact-tomu{
		display: flex;
		justify-content: center;
		font-size: 16px;
		z-index: 3010;
	}


	.contact-tomu ul{

		width: 30%;
		margin: 0vh 70px 0px auto;

	}

	.contact-tomu ul li{

		text-align: right;

	}


	.contact-tomu a{

		cursor: pointer;

	}

	@media  screen and ( max-width: 1305px ) and ( max-width: 0px ){

		.contact-tomu ul{

		 margin: 60vh 70px 0 auto;

		}

	}

   

	@media  screen and ( max-width: 700px ){


		.contact-tomu ul{

			width: auto;
			margin: 40vh 30px 0px auto;

		}

	}



</style>