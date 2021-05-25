<template>
		
		<div  class="contact-tomu">

			<div class="on-screen">
				<ul>
					<li style="margin-bottom: 15px;"><a target="_blank" href="mailto: HELLO@TOMUSTUDIO.COM">HELLO@TOMUSTUDIO.COM</a></li>
					<li>
						<a target="_blank" href="https://www.google.com/maps/place/Avenue+Brugmann+16,+1060+Saint-Gilles/@50.8217959,4.3512311,17z/data=!3m1!4b1!4m5!3m4!1s0x47c3c458b350e9cb:0x1e6f59366739416!8m2!3d50.8217959!4d4.3534198">RUE FERNAND BERNIER 15
						</a>
					</li>
					<li>
						<a target="_blank" href="https://www.google.com/maps/place/Avenue+Brugmann+16,+1060+Saint-Gilles/@50.8217959,4.3512311,17z/data=!3m1!4b1!4m5!3m4!1s0x47c3c458b350e9cb:0x1e6f59366739416!8m2!3d50.8217959!4d4.3534198">1060 BRUSSELS
						</a>
					</li>
					<li style="margin-top: 15px;"><a target="_blank" href="tel:+32 2 897 15 33">+32 2 897 15 33</a></li>
					
				</ul>


			</div>



		</div>

</template>

<script type="text/javascript">

	export default{
		mounted(){

			let $ = this.$

			var href_contact = $('#contact').attr('data-permalink');

			function colorize() {
				$('.header-tomu-container svg').css('color', '#BBD7B3');
				$('.header-tomu-container a').css('color', 'black');
				$('.menu-item a[href="'+ href_contact +'"]').css('color', '#BBD7B3');
				if( !this.$store.state.is_history ) this.pushHistory( href_contact )
				//vue.pushHistory( href_contact )
			}

			/*setTimeout( () => {
				href_contact = $('#contact').attr('data-permalink');
				$('.menu-item a[href="'+ href_contact +'"]').click( () => {
					colorize(this)
				});

			}, 10);*/


			$('[data-state="current"] .contact-tomu div').on('enter-screen', () => {
				console.log('contact enter');
				href_contact = $('#contact').attr('data-permalink');
				colorize()
				
			})

			// $('[data-state="current"] .contact-tomu div').on('leave-screen', () => {

			// })

		}
	}

</script>

<style type="text/css">

/*	.social-links{

		display: flex;
		align-items: center;
		justify-content: end !important;
		margin-left: 245px;
		text-align: left;

	}

	.contact-tomu svg{

		text-align: left;
	}

	.svg-inline--fa{

		width: 50px;
		padding-right: 20px;
	}

	.fa-facebook-f{

		width: 30px;
	}
	*/
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

		box-sizing: content-box;
		margin-left: 245px;
		margin-right: 490px;
		margin-top: auto;
		margin-bottom: auto;
		font-size: 60px;
		line-height: 95%;

	}

	.contact-tomu ul li{
		word-wrap: break-word;
		text-align: left;

	}


	.contact-tomu a{

		cursor: pointer;

	}

	@media  screen and ( max-width: 1305px ) and ( min-width: 700px ){

		.contact-tomu ul{

			/*margin: 60vh 70px 0 auto;*/
			margin-left: 50px;
			margin-right: 245px;

		}

		.social-links{

			margin-left: 50px;
			margin-right: 245px;

		}

	}

   

	@media  screen and ( max-width: 700px ){


		.contact-tomu ul{

			width: auto;
			margin: auto 30px auto 30px;
			font-size: 30px;
			word-wrap: break-word;

		}

		.social-links{

			margin-left: 50px;
			margin-right: 245px;

		}

		.contact-tomu{

			justify-content: start;
			height: 80vh;
			min-height: auto;
		}

		#contact{

			height: 80vh;
			min-height: auto;
		}


	}



</style>

<style scoped>
	
	.section{

		min-height: 80vh;

	}

</style>