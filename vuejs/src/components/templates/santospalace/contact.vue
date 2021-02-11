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

					<p>
						<a target="_blank" href="https://www.google.com/maps/place/Rue+de+Manchester+32%2F34,+1080+Molenbeek-Saint-Jean/data=!4m2!3m1!1s0x47c3c40a726afb45:0xe72e76a148f96c47?sa=X&ved=2ahUKEwih7uPE7LbuAhUM-6QKHQpNC7IQ8gEwAHoECAYQAQ">Cliquez ici pour connaître l’emplacement.</a>
					</p>
				</ul>
			</div>
			<div class="child-info">
				<h4>E-MAIL</h4>
				<ul>

					<li>
						Pour des informations générales et des questions relatives à la commande, envoyez-nous un e-mail à:<a href="info@santospalace.be"> info[at]santospalace.be</a>
					</li>
		
				</ul>
			</div>
			<div class="child-info">
				<h4>TÉLÉPHONE / FAX</h4>
				<ul>

					<li><a href="tel: +32 2 410 44 75">Tel: +32 2 410 44 75</a></li>
					<li><a href="fax:+3224100138">Fax: +32 2 410 01 38</a></li>

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
		margin-top: 100px;
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
		padding-left: 7vw;
		padding-bottom: 0px;
		margin-bottom: 30px;
	}

	.container-info-contact{
		margin-left: auto;
		margin-right: auto;
		margin-top: 50px;
		margin-top: 75px;
		margin-bottom: 150px;
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
	.image-contact h1 {

		font-weight: bold;
	}

	.child-info ul *{

		color: #666666;
		font-size: 16px;
		line-height: 24px;
		text-decoration: none;
	}
	.child-info ul{

		padding-left: 70px;
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


	@media screen and ( max-width: 1150px ) and ( min-width: 600px ) {

		.image-contact h1 {

			font-size: 10vw !important ;
			margin: 0px !important;
		}

		.image-contact{

			margin-top: 100px;
		}

		.image-contact h3 {

			font-size: 4vw !important ;
			margin: 0px !important;
			padding-bottom: 20px;
		}

		.container-info-contact{
		
			width: calc( 100% - 140px)		
		}
	}

	@media screen and ( max-width: 600px ){

		.container-info-contact{
		
			width: calc( 100% - 60px)		
		}

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

		.child-info ul{

			padding-left: 15px;
		}

		.image-contact{

			margin-top: 73px;
		}
	
	}
	
	
</style>


