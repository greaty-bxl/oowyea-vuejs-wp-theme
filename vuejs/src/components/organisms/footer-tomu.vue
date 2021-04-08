<template>

		<div id="footer" class="footer-tomu">
		<p><span id='year'></span> TOMU studio / GREATY</p>
		</div>

</template>

<script type="text/javascript">
	
	export default{

		mounted(){

			document.getElementById("year").innerHTML = new Date().getFullYear();

			let $ = this.$

			$('.contact-tomu div').on('enter-screen', () => {
					console.log('enter-screen');
					$('.header-tomu-container').css('color', '#fdd498');
					$('.current-menu-item a').css('color', '#fdd498');
					
			})
		}
	}


</script>

<style type="text/css">
	
	.footer-tomu{
		text-align: right;
		padding-right: 70px;
		margin-top: -50px;
		font-size: 16px;
	}
	@media  screen and ( max-width: 700px ){

		.footer-tomu{
			padding-right: 30px;;
		}
	}

</style>