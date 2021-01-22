<template>
	<div class="section-wrap contact-santos" >

		<div class="image-contact">
			<h3>Contact</h3>
			<h1>Nous contacter</h1>
		</div>

		<div class="container-info-contact">
			<div class="child-info">
				<h5>Nous aimons entendre nos clients. Vous trouverez ci-dessous des options pour nous contacter. Toutes les communications sont gérées par le personnel de Santos Palace sur place et ne sont jamais externalisées.</h5>
			</div>
			<div class="child-info">
				<h4>ADRESSE</h4>
				<ul>
					<li>Rue de Manchester 32-34</li>
					<li>1080 – Bruxelles</li>

					<p><a href="Rue de Manchester 32-34 1080 – Bruxelles">Cliquez ici pour connaître l’emplacement.</a></p>
				</ul>
			</div>
			<div class="child-info">
				<h4>E-MAIL</h4>
				<ul>

					<li>Pour des informations générales et des questions relatives à la commande, envoyez-nous un e-mail à: info[at]santospalace.be</li>
		
				</ul>
			</div>
			<div class="child-info">
				<h4>TÉLÉPHONE / FAX</h4>
				<ul>

					<li>Tel: +32 2 410 44 75<a href="Tel: +32 2 410 44 75"></a></li>
					<li>Fax: +32 2 410 01 38<a href="Fax: +32 2 410 01 38"></a></li>

				</ul>
			</div>
		</div>

	</div>
</template>

<script>
	
	export default {

		props: {
			'post' : Object
		},

		mounted()
		{


		}

	}
</script>

<style type="text/css">
	
	.child-info{

		border: ;
	}
		
	.image-contact{
		color: white;
		background-image: url('https://demo-santospalace.greaty.be/bruxelles/wp-content/uploads/sites/2/2021/01/santos-palace_contact.png');
		background-position: center;
		background-size: cover; 
		margin-top: 114px;
		background-color: #FAFAFA;
		padding-bottom: 50px;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	.image-contact{
		padding-top: 143px;
		padding-bottom: 143px;
	}

	.container-info-contact ul{

		list-style: none;
	}

	.container-info-contact{
		margin-left: auto;
		margin-right: auto;
		margin-top: 50px;
		margin-bottom: 100px;
		width: 50%;
		text-align: left;
	}

	.child-info{

		border-bottom: 1px solid #666666;
	}

	.child-info h5{
		margin-top: 0px;
		margin-bottom: 30px;
		color: #878220;
		font-size: 16px;
		line-height: 24px;
		font-weight: 500;
	}

	.child-info h4{
		margin-top: 30px;
		margin-bottom: 0px;
		color: #878220;
		font-size: 16px;
		line-height: 24px;
		font-weight: bold;
	}

	.child-info ul *{

		color: #666666;
		font-size: 16px;
		line-height: 24px;
	}

	.child-info ul{

		padding-left: 70px;
	}

	.child-info ul li{

		/*padding-left: 70px;*/
	}


	

	@media screen and (min-width: 1100px){

		.image-contact h1 {

			font-size: 7vw !important ;
			margin: 0px !important;
		}

		.image-contact h3 {

			font-size: 2vw !important ;
			margin: 0px !important;
			padding-bottom: 25px;
		}
	}
²
	@media screen and (max-width: 1000px){

		.image-contact h1 {

			font-size: 7vw !important ;
			margin: 0px !important;
		}

	}


	@media screen and ( max-width: 1100px ) and ( min-width: 600px ) {

		.image-contact h1 {

			font-size: 10vw !important ;
			margin: 0px !important;
		}

		.image-contact h3 {

			font-size: 4vw !important ;
			margin: 0px !important;
			padding-bottom: 20px;
		}
	}

	@media screen and ( max-width: 600px ){

		.image-contact h1 {

			font-size: 15vw !important ;
			padding:  0px 30px  !important;
			margin: 0px  !important;
		}

		.image-contact h3 {

			font-size: 6vw !important ;
			padding-left: 30px  !important;
			padding-right: 30px  !important;
			margin: 0px !important;
			padding-bottom: 20px;
		}
	
	}
	
	
</style>


