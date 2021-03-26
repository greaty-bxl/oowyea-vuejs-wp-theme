<template>
	
	<div class="section-global-project">
		
		<div class="background-project" v-for="(item, index) in wp.projects" :key="index"  :style= "{'background-image': 'url('+item.thumb+')' }">

		</div>

	</div>	

	

</template>


<script type="text/javascript">
	
	export default{


	mounted(){
		// this.$emit('template_mounted')
// 
		// console.log(this.wp.projects , 'projects');

		}
	}


</script>

<style type="text/css">

	.current-menu-item a{

		color:#9fade1 !important;
	}

	.header-tomu-container svg{

		color:#9fade1 !important;
	}


	.section-global-project{

		width: calc( 100% - 245px );
	}
	
	.section-global-project div:nth-child(odd) { 

		display: flex;
		justify-content: flex-end;

	}

	.background-project{

		background: no-repeat;
		background-size: cover;

	}

	.section-global-project {

		padding-top: 100px;
		padding-bottom: 100px;
		box-sizing: border-box;
		padding-left: 70px;
	}

	.section-global-project div:nth-child(16n+1){

		width: 30vw;
		height: 40vw;
	}	

	.section-global-project div:nth-child(16n+2){
		width: 30vw;
		margin-top: -22.5vw;
		height: 40vw;
		margin-left : calc( 30vw + 70px );
		margin-bottom: 70px;
	}

	.section-global-project div:nth-child(16n+3){

		margin-top: -17.5vw;
		margin-bottom: 70px;
		width: 30vw;
		height: 25vw;
	}

	.section-global-project div:nth-child(16n+4){

		width: 47vw;
		height: 33vw;
		margin-left: auto;
		margin-bottom: 70px;

	}

	.section-global-project div:nth-child(16n+5){

		width: 30vw;
		height: 40vw;
		margin-left: auto;

	}

	.section-global-project div:nth-child(16n+6){

		width: 35vw;
		height: 22.5vw;
		margin-right: 70px;
		margin-left: calc( 100% - 65vw - 70px );
		margin-top: -40vw;

	}

	.section-global-project div:nth-child(16n+7){

		width: calc( 50vw - 140px)  ;
		height: 50vw;
		margin-right: 70px;
		margin-top: calc(  17.5vw + 100px );
		box-sizing: content-box;

	}

	.section-global-project div:nth-child(16n+8){

		width: 25vw;
		height: 35vw;
		margin-right: 70px;
		margin-top: -35vw;
		margin-bottom: 70px;
		box-sizing: content-box;
		margin-left: calc( 50vw - 70px);

	}

	.section-global-project div:nth-child(16n+9){

		width: 25vw;
		height: 35vw;
		margin-right: 70px;
		/*margin-top: -35vw;*/
		box-sizing: content-box;
		margin-left: calc( 37.5vw - 70px);

	}

	.section-global-project div:nth-child(16n+10){

		width: 30vw;
		margin-top: 100px;
		height: 25vw;
		
	}	

	.section-global-project div:nth-child(16n+11){

		width: calc( 100% - 30vw - 70px );
		margin-top: -12.5vw;
		height: 40vw;	
		margin-left : calc( 30vw + 70px );
		margin-bottom: 70px;
	}

	.section-global-project div:nth-child(16n+12){

		margin-top: -27.5vw;
		margin-bottom: 70px;

		width: 30vw;
		/*margin-left: 70px;*/
		height: 40vw;
	}

	.section-global-project div:nth-child(16n+13){

		width: calc( 100% - 30vw - 70px );
		height: 50vw;
		margin-left: auto;
		/*margin-top: calc(  17.5vw + 100px );*/
		box-sizing: content-box;

	}

	.section-global-project div:nth-child(16n+14){

		width: 30vw;
		margin-top: 100px;
		height: 25vw;

	}

	.section-global-project div:nth-child(16n+15){
	
		width: 30vw;
		margin-top: -25vw;
		margin-bottom: 70px;
		height: 40vw;
		margin-left : calc( 30vw + 70px );

	}

	.section-global-project div:nth-child(16n+16){
	
		width: 30vw;
		/*margin-left: 70px;*/
		height: 33vw;
		margin-left : calc( 30vw + 70px );
		width: calc( 100% - 30vw - 70px );

	}

	.section-global-project div{

		display: flex;
		flex-direction: column;
	}

	.section-global-project img{

		height: 50px;
		width: 50px;
	}

	@media screen and ( max-width: 1125px ) and ( min-width: 600px){


		.section-global-project {
			width: calc( 100% - 180px );
			padding-left: 50px;
		}



		.section-global-project div:nth-child(16n+1){

			width: 30vw;
			height: 40vw;
		}	

		.section-global-project div:nth-child(16n+2){
			width: 30vw;
			margin-top: -22.5vw;
			height: 40vw;
			margin-left : calc( 30vw + 30px );
			margin-bottom: 30px;
		}

		.section-global-project div:nth-child(16n+3){

			margin-top: -17.5vw;
			margin-bottom: 30px;
			width: 30vw;
			height: 25vw;
		}

		.section-global-project div:nth-child(16n+4){

			width: 47vw;
			height: 33vw;
			margin-left: auto;
			margin-bottom: 30px;

		}

		.section-global-project div:nth-child(16n+5){

			width: 30vw;
			height: 40vw;
			margin-left: auto;

		}

		.section-global-project div:nth-child(16n+6){

			width: 35vw;
			height: 22.5vw;
			margin-right: 30px;
			margin-left: calc( 100% - 65vw - 30px );
			margin-top: -40vw;

		}

		.section-global-project div:nth-child(16n+7){

			width: calc( 43.9vw - 30px);
			height: 50vw;
			margin-right: 30px;
			margin-top: calc(  17.5vw + 100px );
			box-sizing: content-box;

		}

		.section-global-project div:nth-child(16n+8){

			width: 25vw;
			height: 35vw;
			margin-right: 30px;
			margin-top: -35vw;
			margin-bottom: 30px;
			box-sizing: content-box;
			margin-left: 43.9vw;

		}

		.section-global-project div:nth-child(16n+9){

			width: 25vw;
			height: 35vw;
			margin-right: 30px;
			box-sizing: content-box;
			margin-left: calc( 37.5vw - 30px);

		}

		.section-global-project div:nth-child(16n+10){

			width: 30vw;
			margin-top: 100px;
			height: 25vw;
			
		}	

		.section-global-project div:nth-child(16n+11){

			width: calc( 100% - 30vw - 30px );
			margin-top: -12.5vw;
			height: 40vw;	
			margin-left : calc( 30vw + 30px );
			margin-bottom: 30px;
		}

		.section-global-project div:nth-child(16n+12){

			margin-top: -27.5vw;
			margin-bottom: 30px;

			width: 30vw;
			/*margin-left: 30px;*/
			height: 40vw;
		}

		.section-global-project div:nth-child(16n+13){

			width: calc( 100% - 30vw - 30px );
			height: 50vw;
			margin-left: auto;
			/*margin-top: calc(  17.5vw + 100px );*/
			box-sizing: content-box;

		}

		.section-global-project div:nth-child(16n+14){

			width: 30vw;
			margin-top: 100px;
			height: 25vw;

		}

		.section-global-project div:nth-child(16n+15){
		
			width: 30vw;
			margin-top: -25vw;
			margin-bottom: 30px;
			height: 40vw;
			margin-left : calc( 30vw + 30px );

		}

		.section-global-project div:nth-child(16n+16){
		
			width: 30vw;
			/*margin-left: 30px;*/
			height: 33vw;
			margin-left : calc( 30vw + 30px );
			width: calc( 100% - 30vw - 30px );

		}

		
	}



</style>