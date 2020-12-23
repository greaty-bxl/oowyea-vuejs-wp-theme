<template>
	<div class="section-wrap">
		<div class="clear"></div>



			<div class="globales-client-list">

				<div class="clientrow" v-for="child in wp.clients" :key="child.ID">
					<p class="clientText" v-html="child.post_title" ></p>
				</div>

			</div>

			
		<!-- 	<textcotact>
			</textcotact> -->
		<!-- </div> -->
	</div>	
</template>

<script>
import smart_fonts from "Libs/smart-fonts.js"
// import textcotact from './components/text-contact'
// import Alpl from 'Molecules/animation-line-per-line';
export default {
	components: {
		// textcotact,
		// Alpl,
	},
	props: {
		'post' : Object
	},
	mounted (){

		var $ = this.$

		console.log(this.wp);
		
		$(this.$el).css({
			'justify-content':'center'
		})
		smart_fonts({
		'.text-homepage' : 52.8
		})
		
		//Important to let works basic functions
		this.$emit('template_mounted', this)
	
	}
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap');
	

	.text-homepage{

		font-family:'Montserrat', sans-serif !important; 
	}


	.globales-client-list{
		display: flex;
		flex-direction: column;
		margin: 70px 70px;
		font-family: 'Montserrat', sans-serif !important;
		font-weight: lighter;
	}

	.globales-client-list div:last-child{

		border-bottom-style: solid;
		border-width: 0.5px 0.5px;
	}

	.clientrow{

		/*width: calc(100% - 140px);*/
		border-top-style: solid;
		border-color: #e1e1e1b0;
		border-width: 0.5px 0.5px;

	}


	.clientText{

		padding-left: 35%;
		color: #e1e1e1;

	}

	.title-page{
		text-align: left;
	}

    .nom{

		margin-top: 10% !important;
		margin-bottom: 10px !important;
		color: #e1e1e1 !important;
		font-weight: bold;
		font-size: 18px !important;


	}

	.fuction{

		margin-top: 4% !important;
		color: #e1e1e1 !important;
		font-weight: lighter;
		font-size: 16px !important;

	}



	@media screen and (max-width: 600px ){

		.globales-client-list{
			display: flex;
			flex-direction: column;
			align-content: flex-end;
			margin: 30px 30px;
		}


	.clientText{

		padding-left: 0%;
		color: #e1e1e1;

	}

	.title-page{

		font-size: 10px !important;
		padding-bottom: 5%;
		text-transform: capitalize;
		letter-spacing: 10px;
		color: #e1e1e1;
	}


	}



</style>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap');



.div-text-homepage{

	min-height: 100vh;
}




.image {
	background-image: url("https://images.unsplash.com/photo-1575659868234-aae7cc621f8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80");
}

.div-text-homepage{

	display: flex;
	// flex-direction: column;
	justify-content: center;

}

.title-page{

	font-size: 10px !important;
	padding-bottom: 5%;
	text-transform: capitalize;
	letter-spacing: 10px;
	color: #e1e1e1;
	font-family: 'Montserrat', sans-serif !important;
}

p{
	text-align: left;
}

@media screen and (min-width: 1100px   ) {


		.center-flex{

		min-height: 100vh;
		display: flex;
		flex-direction: row;
		justify-content: center;

		}

		.post-client{

		min-height: 100vh;

		padding:  30px 35px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-content: center;
		}

		.text-homepage{

		// padding-top: 70px;
		/*padding-bottom: 150px;*/
		width: 80% ;
		margin: auto 70px;
		/*width: 100%;*/
		font-size: 3.3em;
		color: #e1e1e1;
		font-family: 'Montserrat', sans-serif !important;
		text-align: left;

		}

}

@media screen and (max-width: 1100px) and  (min-width: 600px) {

		.image{

		// height: 60vh;
		width: 100%;
		}

		.content {
			display: flex;
			flex-direction: row;
			justify-content: center;
		}

		.text-homepage{

			font-family: 'Montserrat', sans-serif !important;
			color: #e1e1e1;
			/*padding-left: 5%;*/
			height: auto;
			text-align: left;
			/*padding-top: 20%;*/
			font-size: 35px;
			display: block;
			margin-top: 0px;
			padding-left: 70px;
			padding-right: 70px;
			width: auto;
			min-height: 4em;

		}

		.clientrow{

			// width: calc( 100% - 140px ) ;
			border-top-style: solid;
			border-color: #e1e1e1b0;
			border-width: 0.5px 0.5px;

		}



		.client{

			width: 100% !important;
			margin-left: auto;
			margin-right: auto;


		}

		.global-project{

			z-index: 10;
			width: 100% !important;

		}

		.image-client{

			height: 100%;
			background-color: #e1e1e1;
		}

		.row{
		width: 100%;
		display: flex;
		flex-direction: column;
		}

		.div-text-project{ 

		height: 100vh;
		min-height: 100vh;
		padding-top: auto;
		padding-left: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		padding-top: 0px;
		}


		.reseaux-sociaux{
		display: flex;
		flex-direction: column;
		justify-content: center;

		}

		.reseaux-sociaux p {
		margin: 4px  0px;
		}

		.confidentialite{

		display: flex;
		flex-direction: column;

		}

		.confidentialite p {
		margin: 5px  0px;
		text-align: left;
		}
		.div-text-homepage{

			height: 100vh;
		}

		.post-client{

			display: flex;
			flex-direction: column;
		}

		.image{

			// height: 60vh;
		}
		.center-flex{

			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}

		.post-client{

			margin: 35px 35px;
			display: inline-block;
		}

		.div-text-studio{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-content: center;
			min-height: 100vh;

		}

}


@media screen and (max-width: 600px) {

		.global-project{
		z-index: 10;
		width: 100% !important;


		}
		.div-text-project{

			width:100%;

		}

		.title-page{

			padding-top: 20%;
		}



		.client img{

			width: 100% !important;
			/*height: 60vh;*/
			min-height: 200px;
			/*background-color: #e1e1e1;*/

		}



		.row{

			padding:  30px 30px;
			display: flex;
			flex-direction: row;
			justify-content: space-between;

		}

		.text-homepage{

			padding-top: 100px;
			padding-bottom: 5%;
			/*width: 100% !important;*/
			margin: auto 30px;
			
			font-size: 3.1em;
			color: #e1e1e1;
			font-family: 'Montserrat', sans-serif !important;
			text-align: left;

		}

		.textbox{

			margin: 50px 30px !important;
			height: 70vh;


		}

		.post-client{

			padding-top: 100px;
			padding-bottom: 120px;

		}

		.clientrow{

			width:  100% ;
		

		}



}


</style>