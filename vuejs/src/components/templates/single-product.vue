<template>
	<div class="section-wrap" :id="'section_' + _uid">
		<div class="clear"></div>
		
			<div class="content-single">
				<div  class="retour">
					<button onclick="window.history.back()">Retour</button>
				</div>
				<div class="contenu-single">

					<div class="div-image-single">
						<img class="image-single" :src="post.thumb">
					</div>
					<div class="single-text"> 
						<h2 class="open-sans title-single-santospalace" v-html="post.post_title">Colis</h2>
						<p class="approximate-price"><span v-html="post.price"  ></span></p>

						<div>
							<div class="description-padding">
								<div class="cafes" v-if="has_term(post, 'product_cat', 'cafes')">
									<div class="parent-taxonomie-info-single">
										<p class="titre-taxonomie">Intensité</p>
										<div class="valeur-taxonomie" >
											<div v-for="count_intesity in 5" :key="count_intesity" 
											v-bind:class="{ filled: isFilled(post, count_intesity, 'intensity') }">
											</div>
										</div>
									</div>
								</div>

								<div class="cafes" v-if="has_term(post, 'product_cat', 'cafes')">
									<div class="parent-taxonomie-info-single">
										<p class="titre-taxonomie">Acidité</p>
										<div class="valeur-taxonomie"  >
											<div v-for="acidity_points in 5" :key="acidity_points" 
											v-bind:class="{ filled: isFilled(post, acidity_points, 'acidity') }">
											</div>
										</div>
									</div>
									
								</div>

								<div class="cafes" v-if="post.terms.origine">
									<p class="titre-taxonomie">Origine : <span v-html="get_terms_as_string(post, 'origine')"></span></p>
								</div>

								<div>
									<p class="flavour" >Notes : <span v-html="get_terms_as_string(post, 'flavoring')"></span></p>
								</div>
								
								<div>
									<p class="descriptif" v-html="post.post_content"></p>
								</div>
							</div>
						</div>
															
						<div v-if="type != 'contact_us'" id="icons-pay" class="div-parent-icons" v-html="this.wp.payment_methods_images">
							
						</div>

						<div v-if="type != 'contact_us'" id="total_price">
							<label>Total:</label>
							<input type="text" class="tot input-text" :value="tot_price" readonly>
						</div>

						<label v-if="type != 'contact_us'" id="quantity_label">Quantity</label>

						<div v-if="post.is_in_stock && type != 'contact_us'" class="button-contener" v-html="post.add_to_cart">

						</div>

						<div v-if="type == 'contact_us'" v-html="post.form">						
						</div>

						<div>
							


						</div>
						
					</div>
					
				</div>

			</div>
			<div class="descriptif-machine">
				<div class="container-description">
			<!-- 		<div class="col-descriptif more-info-width-1-2">
						<h2>Caractéristiques</h2>
						<div><p>Réservoir à grains : 125 g Réservoir à eau: 1,2 l Réservoir à marc : 8 tasses Entretien : Facile Nettoyage et rinçage : Programme automatique</p></div>
					</div> -->
					<div class="col-descriptif more-info-width-1-3">
						<h2>Caractéristiques</h2>
						<div>Capacité journalière : 1 à 10 tasses Eau chaude pour le thé / soupe : Non Cafés : Espresso - Long Cafés / Boissons à base de lait : Non</div>
					</div>

					<div class="col-descriptif more-info-width-1-3">
						<h2>Caractéristiques</h2>
						<div>Capacité journalière : 1 à 10 tasses Eau chaude pour le thé / soupe : Non Cafés : Espresso - Long Cafés / Boissons à base de lait : Non</div>
					</div>

					<div class="col-descriptif more-info-width-1-3">
						<h2>Caractéristiques</h2>
						<div>Capacité journalière : 1 à 10 tasses Eau chaude pour le thé / soupe : Non Cafés : Espresso - Long Cafés / Boissons à base de lait : Non</div>
					</div>
				
					<div class="col-descriptif more-info-width-1-3">
						<h2>Caractéristiques</h2>
						<div>Capacité journalière : 1 à 10 tasses Eau chaude pour le thé / soupe : Non Cafés : Espresso - Long Cafés / Boissons à base de lait : Non</div>
					</div>
					<div class="col-descriptif more-info-width-2-3">
						<h2>Caractéristiques</h2>
						<div>Capacité journalière : 1 à 10 tasses Eau chaude pour le thé / soupe : Non Cafés : Espresso - Long Cafés / Boissons à base de lait : Non</div>
					</div>
					<div class="col-descriptif more-info-width-100">
						<h2>Caractéristiques</h2>
						<div>Capacité journalière : 1 à 10 tasses Eau chaude pour le thé / soupe : Non Cafés : Espresso - Long Cafés / Boissons à base de lait : Non Capacité journalière : 1 à 10 tasses Eau chaude pour le thé / soupe : Non Cafés : Espresso - Long Cafés / Boissons à base de lait : Non Capacité journalière : 1 à 10 tasses Eau chaude pour le thé / soupe : Non Cafés : Espresso - Long Cafés / Boissons à base de lait : NonCapacité journalière : 1 à 10 tasses Eau chaude pour le thé / soupe : Non Cafés : Espresso - Long Cafés / Boissons à base de lait : Non Capacité journalière : 1 à 10 tasses Eau chaude pour le thé / soupe : Non Cafés : Espresso - Long Cafés / Boissons à base de lait : Non</div>
					</div>
				</div>	
			</div>
		
		<div class="clear"></div>
	</div>
</template>

<script>
	import {has_term, get_terms_as_string} from 'Libs/wp-functions.js'
	export default {
		data(){
			return {
				type: 'simple',
				variations_data: [],
				quantity: 1,
				sale_price: 0,
				tot_price: '-'
			}
		},
		components: {
			
		},
		props: {
			'post' : Object
		},
		mounted (){

			var $ = this.$

			this.variations_data = $('.variations_form').first().data('product_variations')	

			console.log( this );

			$('#total_price').insertAfter( '[data-state="current"] .quantity')

			$('#quantity_label').prependTo( '[data-state="current"] .quantity')

			$('#icons-pay').insertBefore('.button-contener button[type="submit"]')

			$('.quantity [name="quantity"]').on('change keyup', (event) => {
				console.log('change');
				this.quantity = $(event.currentTarget).val()
				this.change_price_tot()
			});

			$('select').on('change', () => {
				this.change_price_tot()
			});
			
			this.type = this.post.terms.product_type[0].slug

			if( this.type != "variable" && Array.isArray(this.post.metas._sale_price) )
			{
				this.sale_price = this.post.metas._sale_price[0]
				this.tot_price = this.sale_price
			}
			
			console.log( 'type', this.type, this.post )

			this.$emit('template_mounted')
		},
		methods: {

			has_term,
			get_terms_as_string,

			isFilled: function(post, count , keyword){

				if( post.terms[keyword] ) 
				{
					if( post.terms[keyword][0].fields[keyword+'_points'] >= count )
					{
						return true
					}	
				}
			},
			change_price_tot: function(){
				
				var $ = this.$

				if( this.type == "variable" )
				{
					
					var attributes = {}
					var filled_attr = 0

					console.log( 'serializeArray', $('.variations_form').first().serializeArray() );

					$.each( $('.variations_form').serializeArray() , (index, field) => {
						if( field.name.search('attribute') === 0 )
						{
							attributes[field.name] = field.value
							if( field.value )
							{
								filled_attr++;
							}
						}
					});

					if( Object.keys(attributes).length == filled_attr )
					{
						let results = []

						$.each(this.variations_data, (index, variation) => {

							let valide = 0
							let need = Object.keys(variation.attributes).length

							$.each(variation.attributes, function(variation_name, variation_value) {

								$.each(attributes, function(attr_name, attr_val) {

									if( variation_name == attr_name && (variation_value == attr_val || variation_value == '') )
									{
										valide++
									}

								});
							});

							if( valide == need )
							{
								results[ results.length ] = variation
							}
						});

						if( results.length > 1 )
						{
							//remove any
							$.each(results, function(index, variation) {
								$.each(variation.attributes, function(variation_name, variation_value) {
									if( variation_value == '' )
									{
										results.splice(index, 1)
									}
								});
							});
						}

						if( results.length == 1 )
						{
							console.log('variations_form', this);

							this.tot_price = results[0].display_price * this.quantity
						}
					}

				}
				else
				{
					this.tot_price = this.sale_price * this.quantity
				}

				//$('#total_price .tot').val(this.tot_price)

				console.log( 'tot_price', this );
			}
		},
		computed: {
			add_to_cart () {
				return this.$store.state.wp.add_to_cart
			},
			wp () {
				return this.$store.state.wp
			}
		}
	}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

	.woocommerce img, .woocommerce-page img{

		max-width: auto !important;
	}

	.valeur-taxonomie{
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.div-parent-icons img{
		width: 100px;
		border: none;
	}
	
	.valeur-taxonomie div{

		border: 1px solid #888320;
		border-radius: 100%;
		height: 10px;
		width: 10px;
		margin-left: 11px; 

	}

	.valeur-taxonomie div.filled{
		background-color: #888320;
	}

	.wc-stripe-card-icon{

		margin-right: 2px;
	}

	.descriptif{

		font-size: 14px !important;
		/*margin-top: 15px !important;*/
	}
	#header{

		height: 0px;
	}
	.bancontact{

		height: 40px !important;
	}

	.list-colis{
		padding-top: 0px !important;
	}

	.list-colis p {
		padding-top: 16px !important;
	}
	
	.button-contener{
		max-width: 300px;
		/*padding-top: 0 !important;*/
		display: flex;
		flex-direction: column;

	}
	.button-contener a{

		width: 100%;
		
		padding: 20px 0px !important;
	}

	.input-text{

		border: 1px solid #808080 !important;
		color: #808080;
	}

	.button-contener p{
		padding: 0px !important;
		margin-top: 15px;
		/*background-color: #A59890;*/
		color: white;
		border-width: 0 ;
		border:0px !important ;
		text-align: center;

	}

	.composition{

		margin-bottom: 15px !important;
	}

	*:focus {
		outline: none !important;
	}


	.button-contener button{

		text-align: center;
		padding: 20px 0px;

	}
	
	.content-single{

		display: flex;
		flex-direction: column;
		margin-top: 110px;
		margin-bottom: 50px;
		margin-right: auto;
		margin-left: auto;

		width: 60vw;

	}
	.image-single{

		margin-top: auto;
		margin-bottom: auto;
		width: 40vw  !important;
		min-width: 300px;
	}

	.single-text p{

		margin: 0px;

	}


	.single-text > *{

		font-family: 'open sans';
		padding-top: 30px;
	}

	.description-padding > *{

		padding-top: 20px;
	}

	.single-text{

		padding-left: 10vh;
	}
	.single-text p {

		font-size: 16px !important;
		font-weight: 400;
		line-height: 24px;

	}

	.single-text li {

		font-size: 16px !important;
		font-weight: 500;
	}

	.content-single ul li{

		list-style: none;

	}
	.content-single ul{

		padding-left: 0;
	}

	.content-single{

		text-align: left;
		color: #4D4D4D;
		
	}

	.open-sans{
        color: #70625B;
		font-family: 'open sans';
		font-weight: bold ;
	}

	.price-single{

		font-size: 20px !important;
	}

	table.variations{
		width: 100%;
		margin-bottom: 20px;
	}

	table.variations td {
		height: 40px;
		vertical-align: middle;
	}

	table.variations td.label {
		font-size: 16px;
		padding-right: 10px;
	}

	table.variations td.value select {
		/*height: 30px;*/
		width: 100%;
		line-height: 200%;
		border-color: #4D4D4D;
		padding: 8px;
	}

	table.variations td{
		padding-bottom: 15px;
	}

	.quantity{

		padding-top: 0px !important;
	}

	.quantity .screen-reader-text,
	.reset_variations
	{
		display: none !important;
	}

	.quantity, #total_price {
		display: inline-block;
		width: 50%;
		box-sizing: border-box;
	}

	.quantity {
		padding-right: 5px;
	}

	#total_price {
		padding-left: 5px;
	}

	.quantity label, #total_price label {
		font-size: 9px;
		margin: 3px 5px;
		position: absolute;
	}

	.quantity .qty, #total_price .tot{
		display: block;
		text-align: center;
		width: 100% !important;
		padding-top: 20px;
		padding-bottom: 20px;
		font-size: 16px;
		box-sizing: border-box;
		height: auto;
		margin-top: auto;
	}

	/* Chrome, Safari, Edge, Opera */
	/*.quantity .qty::-webkit-outer-spin-button,
	.quantity .qty::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}*/

	/* Firefox */
	/*.quantity .qty {
		-moz-appearance: textfield;
	}*/

	.woocommerce-variation-price{

		display: none;

	}

	.title-single-santospalace{

		padding: 0px 0px 0px 0px;
		margin: 0px;
		font-size: 40px;
		color: #422112;
	}

	.col-descriptif{

		margin-top: 40px ;
		padding: 0px 4.1%;
	}

	.col-descriptif h2{
		font-size: 40px !important;
		color: #422112;
		font-weight: bold;
		margin-top: 0px; 

	}

	.col-descriptif div{

		font-size: 16px;
		line-height: 24px;
		color: #666666;

	}

	.descriptif-machine{

		background-color: #F6F6F6;
		width: 100%;
		padding-top: 30px;
		padding-bottom: 70px;
		
	}

	.container-description{
		justify-content: space-between;
		flex-wrap: wrap;
		display: flex;
		width: 70vw;
		margin-left: auto;
		margin-right: auto;
		display: flex;
		flex-direction: row;
		text-align: left;
	}

	.more-info-width-1-2{

		width: 50%;
		/*padding: 0px 4.1%;*/
	}

	.more-info-width-1-3{

	/*	width: 25%;*/
	width: calc(33% - 8.2%);
	}

	.more-info-width-2-3{

		width: calc(66% - 8.2%);
	}

	.more-info-width-100{

		/*width: 100%;*/
		width: calc(100% - 8.2%);
	}

	.approximate-price{
		display: flex;
		color: #808080;
	}

	.approximate-price span{

		color: #422112;
		font-weight: bold;
	}

	.price{

		/*margin-left: 10px;*/

	}

	.content-single input{

		/*margin-top: 5px;*/
		/*height: 30px;*/
		/*width: 30%;*/
	}

	.single-text div p:nth-child(2){

		padding-top: 10px;
	}

	.single-text ul li{

		padding-top: 3px;
	}

	.nbrpersonne{

		padding-bottom: 10px !important;
	}

	.retour{

		padding: 47px 0px ;
	}

	.retour button{
		font-size: 16px !important;
		border: none;
		background-color: white;
		text-decoration-line: none;
		color: #888320 !important;
		padding-left: 0px;

	}
	


	.div-image-single{

		background-color: #FAFAFA;
		padding: 30px 50px;
		display: flex;
	}

	.contenu-single{

		display: flex;
		flex-direction: row;
	}

	.button-contener form{
		flex-direction: column;
	}

	.button-contener button[type="submit"]{
		margin-top: 20px;
	}

	.button-contener input{

		margin-right: 15px;
	}

	.parent-taxonomie-info-single{

		display: flex;
		justify-content: space-between;
		flex-direction: row;
		
	}
	/* de la merda */
	/*.single-text div:first-child{

		padding-top: 0px;
	}*/

	.cafes{

		padding-top: 15px;
	}

	.div-parent-icons{

		margin-top: 20px;
	}

	@media screen and (min-width: 1100px){

		.parent-taxonomie-info-single{
			/*width: 50%;*/
			max-width: 250px;
		}

		.div-image-single{

			height: 50vh;
		}


	}

	@media screen and (max-width: 1100px) and (min-width: 1000px ){

		.container-description{

			width: calc( 100% - 140px)
		}

	}

	@media screen and (max-width: 1025px) and (min-width: 600px ){
	
		.container-description{

			width: calc( 100% - 140px)	
		}

		.col-descriptif{
			margin-left: auto;
			margin-right: auto;
			width: calc(100% - 8.2%) !important;
		}
	}
	@media screen and (max-width: 1100px) and (min-width: 600px ) {

		.col-descriptif{

			padding: 0px;
		}

		.single-text > *{
			padding-top: 30px;
		}

		.parent-taxonomie-info-single{
			max-width: 150px;
			max-width: 200px;
		}

		.content-single{

			display: flex;
			flex-direction: column;
			margin-top: 150px;
			margin-bottom: 150px;
		}

		.single-text{

			padding-top: 5vh;
			padding-left: 0px;

		}

		.image-single {
			min-width: auto !important;
			width: 80vw !important;
			margin-top: auto;
			margin-bottom: auto;
		}

		.button-contener p{

			width: 50%;
		}

		.contenu-single {
			display: flex;
			flex-direction: column;
		}

		.div-image-single{

			height: auto;
		}

	}

	@media screen and (max-width: 600px){


		.container-description{

			width: calc( 100% - 60px)	
		}

		.col-descriptif{

			width: 100% !important;
			padding: 0px;
		}
		.single-text > *{

			padding-top: 30px;

		}

		.title-single-santospalace{

			font-size: 30px;
		}

		.col-descriptif h2{

			font-size: 30px;

		}

		.contenu-single{

			flex-direction: column;

		}

		.div-image-single{

			padding: 0px;

		}

		.content-single{

			display: flex;
			flex-direction: column;
			padding-top: 0vh;
			margin-bottom: 50px;
			margin-top: 130px;
			margin-left: 30px;
			margin-right: 30px;
			width: auto;
		}

		.single-text{

			padding-left: 0;
			padding-top: 2.5vh;

		}
		.image-single {
			min-width: auto !important;
			width: calc(100vw - 60px) !important;

		}

		.button-contener p{

			width: 50%;
			/*padding: 10px 0px;*/

		}
		.button-contener a{

			width: 100%;
			/*padding: 10px 0px;*/

		}

		.woocommerce .quantity .qty{

			width: 70px;
		}


	}

	.woocommerce #respond input#submit, .woocommerce a.button, .woocommerce button.button, .woocommerce input.button{

		border-radius: 0 !important;
	}

</style>

<style scoped>



	.woocommerce #respond input#submit, .woocommerce a.button, .woocommerce button.button, .woocommerce input.button{

		text-align: center;
	}

	.content-single del{

		display: none !important;
	}

	.content-single bdi {

		display: none !important;
	}


</style>