<template>
	<div class="section-wrap owy-single-product" :id="'section_' + _uid">
		<div class="clear"></div>
		
			<div class="content-single">
				<div  class="retour">
					<button onclick="window.history.back()" 
					v-html="pll__('Retour')">Retour</button>
				</div>
				<div class="contenu-single">

					<div class="div-image-single">
						<img class="image-single" :src="post.thumb">
					</div>
					<div class="single-text"> 
						<h2 class="open-sans title-single-santospalace" v-html="post.post_title">Colis</h2>
						<p class="approximate-price"><span v-html="post.price"  ></span></p>


						<div class="description-padding">

							<div class="padding-appeare">

								<div class="cafes" v-if="has_term(post, 'product_cat', 'cafes')">
									<div class="parent-taxonomie-info-single">
										<p class="titre-taxonomie" v-html="pll__('Intensité')"></p>
										<div class="valeur-taxonomie" >
											<div v-for="count_intesity in 5" :key="count_intesity" 
											v-bind:class="{ filled: isFilled(post, count_intesity, 'intensity') }">
											</div>
										</div>
									</div>
								</div>

								<div class="cafes acidity-terms" v-if="has_term(post, 'product_cat', 'cafes')">
									<div class="parent-taxonomie-info-single">
										<p class="titre-taxonomie" v-html="pll__('Acidité')"></p>
										<div class="valeur-taxonomie"  >
											<div v-for="acidity_points in 5" :key="acidity_points" 
											v-bind:class="{ filled: isFilled(post, acidity_points, 'acidity') }">
											</div>
										</div>
									</div>
									
								</div>
								<div class="origine"  v-if="post.terms.origine">
									<p class="titre-taxonomie"> 
										<span v-html="pll__('Origine : ')"></span>
										<span class="titre-taxonomie" v-html="get_terms_as_string(post, 'origine')"></span>
									</p> 
								</div>

								<div  class="flavour" v-if="post.terms.flavoring" >
									<p class="titre-taxonomie" >
										<span v-html="pll__('Saveur :')"></span>
										<span v-html="get_terms_as_string(post, 'flavoring')"></span>
									</p>
								</div>

							</div>
							<div style="padding-top: 0px">
								<p v-html="post.post_content" class="descriptif"></p>
							</div>
						</div>

						<div class="vue-wc-variations">
							<div 
							class="vue-wc-variation" 
							v-for="(select, key) in variations_selects" 
							:key="key" 
							v-on:mouseleave="vue_variation_leave(select)"
							:class="select.class">
								<div v-on:click="open_vue_variation(select)">
									<div class="label">{{select.label}}</div>
									<div class="value">{{select.placeholder}}</div>
									<div class="arrow">
										<svg aria-hidden="true" focusable="false" role="presentation" viewBox="0 0 20 38" class=""><path d="M15.932 18.649L.466 2.543A1.35 1.35 0 0 1 0 1.505c0-.41.155-.77.466-1.081A1.412 1.412 0 0 1 1.504 0c.41 0 .756.141 	1.038.424l16.992 17.165c.31.283.466.636.466 1.06 0 .423-.155.777-.466 1.06L2.542 36.872a1.412 1.412 0 0 1-1.038.424c-.41 0-.755-.141-1.038-.424A1.373 1.373 0 0 1 0 35.813c0-.423.155-.776.466-1.059L15.932 18.65z" fill="#726D75" fill-rule="evenodd"></path></svg>
									</div>	
								</div>							
								<div class="options">
									<div class="options-bg">
										<div :class="{selected: option == select.selected}" 
										class="option" v-for="(option, key2) in select.options" :key="key2" 
										v-html="option"
										v-on:click="select_variation(option, select)"></div>	
									</div>								
								</div>
							</div>
						</div>

						<div v-if="type != 'contact_us'" class="total_price">
							<label v-html="pll__('Total')"></label>
							<input type="text" class="tot input-text" readonly>
						</div>

						<div v-if="type != 'contact_us'" class="quantity_label">
							<label v-html="pll__('Quantité')"></label>
							<div class="less">
								<div class="less-bt">-</div>
							</div>
							<div class="more">
								<div class="more-bt">+</div>
							</div>
						</div>

						<div v-if="post.is_in_stock && type != 'contact_us'" class="button-contener" v-html="post.add_to_cart">

						</div>

						<div class="form_contact_us_product" v-if="type == 'contact_us'" v-html="post.form">
						</div>

						<div class="continuer-achat">
							<button onclick="window.history.back()">
								<span v-if="type == 'contact_us'" v-html="pll__('Retour')" ></span>
								<span v-else v-html="pll__('Continuer mes achats')"></span>
							</button>
						</div>

						<div v-if="type != 'contact_us'" id="icons-pay" class="div-parent-icons" >

							<img v-for="child in wp.acf.options.galerie_icons" :key="child.ID" :src="child.url">
							
						</div>

					</div>

				</div>
			</div>
			<div class="descriptif-machine" v-if="post.fields.product_more_info">
				<div class="container-description">
					<div v-for="(info, index) in post.fields.product_more_info" :key="index" class="col-descriptif" :class="info.column_width">
						<h2 v-html="info.title"></h2>
						<div class="wp-content" v-html="info.content"></div>
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
				variations_selects: {},
				quantity: 1,
				sale_price: 0,
				tot_price: '-',
				cart_v2: ''
			}
		},
		components: {
			
		},
		props: {
			'post' : Object
		},
		mounted (){

			var $ = this.$

			console.log(this.post);

			this.variations_data = $('.variations_form').first().data('product_variations')	

			this.type = this.post.terms.product_type[0].slug

			if( this.type != "variable" && Array.isArray(this.post.metas._price) )
			{
				this.sale_price = this.post.metas._price[0]
				this.tot_price = this.sale_price
			}

			this.change_price_tot()

			this.$emit('template_mounted')
		},
		methods: {
			open_vue_variation: function (select) 
			{
				if( select.class == '' )
				{
					select.class = 'open'
				}
				else
				{
					select.class = ''
				}
			},
			vue_variation_leave: function (select) {
				select.class = ''
			},
			select_variation: function (option, select) {
				select.selected = option
				select.placeholder = option
				select.class = ''
				let $ = this.$

				$('#'+select.id).find('option').prop('selected', null)
				$('#'+select.id).find('[value="'+option+'"]').prop('selected', true)
				
				$('[data-state="current"] table.variations select').trigger('change')

				this.change_price_tot()

			},
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
			quantity_change: function (num) {

				let new_result = parseInt(this.quantity) + num

				if( new_result >= 1 )
				{
					this.quantity = new_result

					let $ = this.$
					$('.quantity [name="quantity"]').val(this.quantity)
					this.change_price_tot()

					//console.log(this.quantity);
				}

				

				
			},
			change_price_tot: function(){
				
				var $ = this.$

				if( this.type == "variable" )
				{
					
					var attributes = {}
					var filled_attr = 0

					//console.log( 'serializeArray', $('[data-state="current"] .variations_form').first().serializeArray() );

					$.each( $('[data-state="current"] .variations_form').serializeArray() , (index, field) => {
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
							$('.variation_id').val( results[0].variation_id )
							$('.single_add_to_cart_button').removeClass('disabled wc-variation-selection-needed')

							this.tot_price = this.price_format( results[0].display_price * this.quantity )

							$('.total_price input').val(this.tot_price)
						}
						else
						{
							$('.single_add_to_cart_button').addClass('disabled wc-variation-selection-needed')
							$('.variation_id').val( 0 )
						}
					}

				}
				else
				{

					

					this.tot_price = this.price_format( this.sale_price * this.quantity )

					$('.total_price input').val(this.tot_price)
				}
				
			},
			price_format: function(price){
				
				let return_price = ''
				let currency_format = this.$store.state.wp.get_currency_format
				let pos = currency_format.pos
				let symb = currency_format.symb

				switch (pos) {
					case 'left':
						return_price = symb + price
						break;
					case 'left_space':
						return_price = symb + ' ' + price
						break;
					case 'right':
						return_price = price + symb
						break;
					case 'right_space':
						return_price = price + ' ' + symb
						break;
					default:
						return_price = price
				}

				//console.log('get_currency_format',currency_format);

				return return_price				
			}
		},
		computed: {
			add_to_cart () {
				return this.$store.state.wp.add_to_cart
			},
			wp () {
				return this.$store.state.wp
			}
		},
		watch : {
			'$store.state.wp' : function(){
				console.log('reload product');

				let $ = this.$
				
				setTimeout( ()=>{

					if( this.type != 'contact_us' ) 
					{
						$('.quantity [name="quantity"]').on('change keyup', (event) => {
							this.quantity = $(event.currentTarget).val()
							this.change_price_tot()
						});

						$('table.variations select').on('change', () => {
							this.change_price_tot()
						});
					}

					if( this.type == "variable" )
					{
						$('table.variations').hide();
						
						$('.single_add_to_cart_button').addClass('disabled wc-variation-selection-needed')

						let variations_selects = {}

						$('[data-state="current"] table.variations tr').each( (index, el) => {
							
							variations_selects[index] = {}
							variations_selects[index]['label'] = $(el).find('.label label').text()
							variations_selects[index]['class'] = '';
							variations_selects[index]['selected'] = ''
							variations_selects[index]['id'] = $(el).find('select').prop('id')

							$(el).find('option').each((index2, el2) => {
								if( index2 == 0 )
								{
									variations_selects[index]['placeholder'] = $(el2).text()
									variations_selects[index]['options'] = {}
								}
								else
								{
									if( $(el2).prop('selected') )
									{
										variations_selects[index]['selected'] = $(el2).text()
										variations_selects[index]['placeholder'] = $(el2).text()
									}
									variations_selects[index]['options'][$(el2).attr('value')] = $(el2).text()
								}
							});
						});
						this.variations_selects = variations_selects
					}

					this.change_price_tot()
					

					$('.moved_clone').remove()

					let labelqt = $('[data-state="current"] .quantity_label')
					labelqt.hide()
					let labelqt_clone = labelqt.clone().addClass('moved_clone')
					labelqt_clone.show().prependTo( '[data-state="current"] .quantity')

					labelqt_clone.find('.less-bt').on('click', () => {
						this.quantity_change(-1)
					});

					labelqt_clone.find('.more-bt').on('click', () => {
						this.quantity_change(1)
					});
					
					let tot_price = $('[data-state="current"] .total_price')
					tot_price.hide()
					let tot_price_clone = tot_price.clone().addClass('moved_clone')
					tot_price_clone.show().insertAfter( '[data-state="current"] .quantity')
					

				}, 1 )

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
		width: 400px;
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
		padding-top: 40px;
		padding-bottom: 10px;
	}
	#header{

		/*height: 0px;*/
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
		max-width: 400px;
		/*padding-top: 0 !important;*/
		display: flex;
		flex-direction: column;

	}
	.button-contener a{

		width: 100%;
		
		padding: 20px 0px !important;
	}

	.input-text{
		border-radius: 3px;
		/*border: 1px solid #CECECE !important;*/
		border: none;
		background-color: #F6F6F6;
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
		margin-top: 114px;
		margin-bottom: 50px;
		margin-right: auto;
		margin-left: auto;
		width: 80vw;

	}

	.single-text p{

		margin: 0px;

	}


	.single-text > *{

		font-family: 'Montserrat', sans-serif;
		padding-top: 30px;
	}

	.description-padding {

		padding-top: 0px;
	}

	.padding-appeare > div:first-child{

		padding-top: 30px !important;
	}

	.padding-appeare > div{

		padding-top: 15px !important;
	}

	.padding-appeare{

		padding-top: 0px;
	}

	.padding-change{

		padding-top: 0px;
	}

	.single-text{
		max-width: 40%;
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

	/*.content-single ul li{

		list-style: none;

	}*/
	.content-single ul{

		padding-left: 16px;
	}

	.content-single{

		text-align: left;
		color: #4D4D4D;
		
	}

	.open-sans{
        color: #70625B;
		font-family: 'Montserrat', sans-serif;
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

	/* 
		Variation new design 
	*/
	.vue-wc-variations{
		max-width: 400px;
		margin-top: 30px;
		/*margin-bottom: 20px;*/
		padding-top: 0;
		/*border-top: solid 1px #CECECE;*/
	}
	.vue-wc-variation {
		font-size: 16px;
		cursor: pointer;
		border-bottom: solid 1px #CECECE;
		padding: 15px 0px;
	}

	.vue-wc-variation:last-child {
		border-bottom: none;
		padding-bottom: 0;
	}

	.vue-wc-variation > div > div{
		display: inline-block;
		vertical-align: middle;
		box-sizing: border-box;
	}

	.vue-wc-variation .label{
		width: 20%;
	}

	.vue-wc-variation .value{
		width: calc(80% - 30px);
		text-align: right;
		padding-right: 10px;
	}

	.vue-wc-variation .arrow{
		/*background: #000000;*/
		width: 30px;
		height: 30px;
	}

	.vue-wc-variation .arrow svg{
		height: 30px;
		transform-origin: 7px 15px;
		/*transform: rotate(90deg) translateY(-7px) scale(0.5);*/
		transform: rotate(90deg) translateY(-7px) translateX(1px) scale(0.5);
		transition: all 0.5s ease;

	}

	.vue-wc-variation.open .arrow svg{
		transform: rotate(90deg) translateY(-7px) translateX(1px) scaleY(0.5) scaleX(-0.5);
	}

	.vue-wc-variation .options{
		display: block;
		width: 100%;
		height: 0px;
		overflow: visible;
	}

	.vue-wc-variation.open .options{
		/*display: block;
		overflow: visible;*/
	}

	.vue-wc-variation .options-bg{
		position: relative;
		background: #FFFFFF;
		border: solid 1px #CECECE;
		box-shadow: 0px 0px 12px -7px #000000;

		width: 100%;
		z-index: 2000;
		padding: 15px 20px;
		text-align: center;
		box-sizing: border-box;

		pointer-events: none;
		transform: translateY(-20px);
		opacity: 0;
		transition: all 0.5s ease;
	}

	.vue-wc-variation.open .options-bg{
		pointer-events: auto;
		transform: translateY(0px);
		opacity: 1;
		transition: all 0.5s ease;
	}

	.vue-wc-variation .options-bg .option{
		padding: 15px;
	}

	.vue-wc-variation .options-bg .option.selected{
		font-weight: bold;
		color: #888320;
	}



	/* end: variation new design */

	.owy-single-product .quantity{

		padding-top: 0px !important;
	}

	.owy-single-product .quantity .screen-reader-text,
	.reset_variations
	{
		display: none !important;
	}

	.owy-single-product .quantity, .total_price {
		display: inline-block;
		width: 50%;
		box-sizing: border-box;
	}

	.owy-single-product .quantity {
		padding-right: 5px;
	}

	.total_price {
		padding-left: 5px;
	}

	.owy-single-product .quantity label, .total_price label {
		font-size: 9px;
		margin: 7px 12px;
		position: absolute;
	}

	.owy-single-product .quantity .less, .owy-single-product .quantity .more{
		height: 0;
		overflow: visible;
		font-size: 30px;
	}
	
	.owy-single-product .quantity .less{
		float: left;
	}

	.owy-single-product .quantity .more{
		float: right;
	}

	.owy-single-product .quantity .less .less-bt, .owy-single-product .quantity .more .more-bt {
		margin-top: 16px;
		position: absolute;
		height: 30px;
		line-height: 30px;
		cursor: pointer;
		user-select: none;
	}

	.owy-single-product .quantity .less .less-bt{
		margin-left: 12px;
	}

	.owy-single-product .quantity .more .more-bt {
		margin-left: -30px;
	}



	.owy-single-product .quantity .qty, .total_price .tot{
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
	.owy-single-product .quantity .qty::-webkit-outer-spin-button,
	.owy-single-product .quantity .qty::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	.owy-single-product .quantity .qty {
		-moz-appearance: textfield;
	}

	.woocommerce-variation-price{

		display: none;

	}

	.title-single-santospalace{

		padding: 0px 0px 0px 0px;
		margin: 0px;
		font-size: 30px;
		color: #422112;
	}

	.form_contact_us_product{
		margin-top: 30px;
	}

	.col-descriptif{

		margin-top: 40px ;
		padding: 0px 4.1%;
	}

	.col-descriptif h2{

		font-size: 25px !important;
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

		margin-top: -70px;
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
		width: calc(50% - 8.2%);
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

	.continuer-achat{

		padding: 30px 0px ;
	}

	.continuer-achat button{
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
	.approximate-price{

		padding-top: 20px !important;
	}
	.cafes{

		padding-top: 0px;
	}

	.div-parent-icons{

		/*margin-top: 40px;
		margin-bottom: 20px;*/
	}
	.image-single{

		width: 80% !important;
		margin-top: auto;
		margin-bottom: auto;
		margin-left: auto;
		margin-right: auto;

	}


	@media screen and (min-width: 1100px){

		.parent-taxonomie-info-single{
			
			max-width: 250px;
		}

		.div-image-single{

			width: 40%;
			height: 40vw;
		}

		.contenu-single{

			margin-bottom: 100px;

		}


	}


	@media screen and (max-width: 1100px){

		.description-padding{

			padding-top: 0px !important
		}

		



	}





	


	@media only screen and (max-width: 1400px) and (min-width: 1100px){

		.div-image-single {
			width: 40%;
			height: 40vw;
		}

	}


	@media screen and (max-width: 1100px) and (min-width: 1000px ){

		.container-description{

			width: calc( 100% - 140px)
		}

		.single-text {

			max-width: 100%;

		}

	}

	@media screen and (max-width: 1025px) and (min-width: 600px ){

		.div-parent-icons img{
			width: 400px;
		}
	
		.container-description{

			width: calc( 100% - 140px)	
		}

		.col-descriptif{
			margin-left: auto;
			margin-right: auto;
			width: calc(100% - 8.2%) !important;
		}

		.descriptif-machine{

			margin-top: -70px;
		
			
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
			margin-top: 100px;
			margin-bottom: 150px;
		}

		.single-text{

			padding-top: 5vh;
			padding-left: 0px;
			max-width: 100%;

		}

		.image-single {
			/*min-width: auto !important;*/
			width: 80% !important;
			margin-top: auto;
			margin-bottom: auto;
			margin-left: auto;
			margin-right: auto;
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

		.descriptif-machine{

			margin-top: 0px;
		
		}

		.div-parent-icons img{
			width: 250px;
		}

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
			margin-top: 73px;
			margin-left: 30px;
			margin-right: 30px;
			width: auto;
		}

		.single-text{

			padding-left: 0;
			padding-top: 2.5vh;
			max-width: 100%;

	

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

		.woocommerce .owy-single-product .quantity .qty{

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