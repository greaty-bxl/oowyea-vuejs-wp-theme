<template>
	<div class="section-wrap">
		<div class="clear"></div>
			<div class="div-text-homepage">

				<div class="center-flex" >

					<Alpl class="text-homepage"><h1 class="title-page"></h1>

					Greaty est spécialisée dans la communication,
					l’élaboration d’images de marque, les solutions digitales
					et les supports imprimés.

					</Alpl>

				</div>

			</div>

				<div class="post-client">

					<div class="g-project">
						<div>
						<div class="image"></div><p>John Doe <br>Lorem Ipsum</p>
					</div>

				</div>
					<div class="g-project">
						<div>
						<div class="image"></div><p>John Doe <br>Lorem Ipsum</p>
					</div>

				</div>
					<div class="g-project">
						<div>
						<div class="image"></div><p>John Doe <br>Lorem Ipsum</p>
						</div>

					</div>
				</div>
			<div>
			<textcotact>
			</textcotact>
		</div>
	</div>	
</template>

<script>
import smart_fonts from "Libs/smart-fonts.js"
import textcotact from './components/text-contact'
import Alpl from 'Molecules/animation-line-per-line';
export default {
	components: {
		textcotact,
		Alpl,
	},
	props: {
		'post' : Object
	},
	mounted (){


		var $ = this.$

		$(this.$el).css({
			'justify-content':'center'
		})
		smart_fonts({
			'h1' :54,
			// 'p' : 14,
			'.text-homepage' : 52.8

		})
	

		//Important to let works basic functions
		this.$emit('template_mounted', this)
	
	}
}
</script>

<style >
	
	.text-homepage{

		font-family:'Montserrat', sans-serif !important; 
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

	display: none;
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

		padding:  30px 35px;
		}

		.text-homepage{

		padding-top: 70px;
		/*padding-bottom: 150px;*/
		width: 70% ;
		margin: auto 70px;
		/*width: 100%;*/
		font-size: 3.3em;
		color: #e1e1e1;
		font-family: 'Montserrat', sans-serif !important;
		font-weight: lighter;
		text-align: left;

		}

		.text-homepage h1{

			text-align: left;
			margin: 5% 0px;
		}



		.g-project{
				width: calc(33% - 70px) !important;
				display: inline-block;
				margin-bottom: 3%;
				margin: 0px 35px;
		}

		.image{

			height: 60vh;
			width: 100%;
		}





}

@media screen and (max-width: 1100px) and  (min-width: 600px) {

		.g-project{
			width:100% !important;
			display: inline-block;
			margin-bottom: 3%;
			// margin: 35px 35px;
		}
		.image{

		height: 60vh;
		width: 100%;
		}

		.content {
			display: flex;
			flex-direction: row;
			justify-content: center;
		}

		.text-homepage{

			font-family: 'Montserrat', sans-serif !important;
			font-weight: lighter;
			color: white;
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
			background-color: white;
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

			height: 60vh;
		}
		.center-flex{

			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}

		.post-client{

			margin: 35px 70px;
		}

}


@media screen and (max-width: 600px) {

		.global-project{
		z-index: 10;
		width: 100% !important;


		}

		.g-project{

			width: calc(100% - 70px) !important;
			height: auto;
			display: inline-block;
			padding-right: 30px;
			padding-left: 30px;

		}
		.div-text-project{

			width:100%;

		}

		.title-page{

			font-size: 2em !important;
		}


		.client img{

			width: 100% !important;
			/*height: 60vh;*/
			min-height: 200px;
			/*background-color: white;*/

		}



		.row{

			padding:  35px 35px;
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
			font-weight: lighter;
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


}


</style>