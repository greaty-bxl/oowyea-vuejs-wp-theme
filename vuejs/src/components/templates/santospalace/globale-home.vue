<template>
	
	<div class="globale-page-home">
		
		<div>
			
			<img src="https://demo-santospalace.greaty.be/bruxelles/wp-content/uploads/sites/2/2021/01/santos-palace_logo-rond.svg">

			<a href="" class="button-santos-vert" v-html="pll__('VISITER LE SITE BRUXELLES')">
				
			</a>

			<a href="" class="button-santos-vert" v-html="pll__('VISITER LE SITE KOKSIJDE')">
				
			</a>	

		</div>
	

	</div>

</template>

<script type="text/javascript">
	

	export default{

		mounted(){

			var $ = this.$

			$('#header').hide()

			$('#footer').hide()
		},

		beforeDestroy(){

			var $ = this.$

			$('#header').show()
			
			$('#footer').show()
		},


	}

</script>



<style type="text/css">
	
	.globale-page-home {

		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.globale-page-home div {

		width: 20vw;
		display: flex;	
		flex-direction: column;
	
	}

	.globale-page-home img {

		margin-left: auto;
		margin-right: auto;
		margin-bottom: 30px;
		width: 90%;

	
	}

	.globale-page-home a {

		margin-top: 20px;
		width: 100%;
		box-sizing: border-box;
	
	}

@media screen and ( max-width: 1125px) and ( min-width: 600px){

	.globale-page-home{

		font-size: 17px;
	}

	.globale-page-home div {

		width: 50%;
		padding-left: auto;
		padding-right: auto;
		display: flex;	
		flex-direction: column;
		box-sizing: border-box;
	
	}

}
 
@media screen and (max-width: 600px){


	.globale-page-home{

		font-size: 14px;
	}


	.globale-page-home div {

		width: 100%;
		padding-left: 30px;
		padding-right: 30px;
		display: flex;	
		flex-direction: column;
		box-sizing: border-box;
	
	}

	.globale-page-home a{

		width: auto;
		margin-left: auto;
		margin-right: auto;
		min-width: 80%;
	}

	.globale-page-home img{

		width: 55%;
	}
}

</style>