<template>
		
		<div class="contact-tomu on-screen">

			<div class="on-screen">
				<ul>
					<li>AVENUE BRUGMANN 16</li>
					<li>1060 BRUSSELS</li>
					<li> <a href="mailto: HELLO@TOMUSTUDIO.COM">HELLO@TOMUSTUDIO.COM</a> </li>
					<li>+32 2 897 15 33</li>
				</ul>
			</div>
			

		</div>

</template>

<script type="text/javascript">
	
	export default{

		mounted(){

			let $ = this.$
			
			$('.contact-tomu div').on('enter-screen', () => {
				console.log('enter-screen');
				$('.header-tomu-container').css('color', '#BBD7B3');
				$('.current-menu-item a').css('color', '#BBD7B3');
				
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

		width: 20%;
		margin: 40vh 70px 0px auto;

	}

	.contact-tomu ul li{

		text-align: right;
	}

	@media  screen and ( max-width: 700px ){


		.contact-tomu ul{

			width: auto;
			margin: 40vh 30px 0px auto;

		}
	}



</style>