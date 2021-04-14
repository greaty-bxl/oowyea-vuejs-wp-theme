<template>
	<div>
		<div class="filtre-container">
			
			<div class="lists-filter-taxonomie">

				<header class="collection-filter__header">
					<h2 class="collection-filter__title" v-html="pll__('Filtres')"></h2>
					<p class="collection-filter__description" v-html="pll__('Sélectionnez une catégorie ou plus pour affiner votre recherche.')">
						
					</p>
					<button class='icon-close-filter' v-on:click="close_filter">
						<svg aria-hidden="true" focusable="false" role="presentation"   viewBox="0 0 25 25"><path d="M14.023 12.5L24.685 1.839A1.077 1.077 0 1 0 23.16.315L12.5 10.977 1.839.315A1.077 1.077 0 1 0 .315 1.84L10.977 12.5.315 23.161a1.077 1.077 0 1 0 1.524 1.524L12.5 14.023l10.661 10.662a1.077 1.077 0 1 0 1.524-1.524L14.023 12.5z"></path></svg>
					</button>
				</header>

				<section class="filters">
					
					<div class="coll-filters">

						<div class="collection-filter__list-wrapper" v-for="(taxonomy, index) in shop_filter" :key="index">
							<h3 class="collection-filter__list-title">
								
								<p class="title-filter"  v-html="taxonomy.label"></p>

								<div class="collection-filter__arrow" >

									<svg aria-hidden="true" focusable="false" role="presentation" class="icon-santos icon-arrow-right" viewBox="0 0 20 38">

										<path d="M15.932 18.649L.466 2.543A1.35 1.35 0 0 1 0 1.505c0-.41.155-.77.466-1.081A1.412 1.412 0 0 1 1.504 0c.41 0 .756.141 	1.038.424l16.992 17.165c.31.283.466.636.466 1.06 0 .423-.155.777-.466 1.06L2.542 36.872a1.412 1.412 0 0 1-1.038.424c-.41 0-.755-.141-1.038-.424A1.373 1.373 0 0 1 0 35.813c0-.423.155-.776.466-1.059L15.932 18.65z" fill="#726D75" fill-rule="evenodd">
										</path>

									</svg>

								</div>

							</h3>
							<ul class="collection-filter__list">

								<li class="collection-filter__item" 
									v-for="(term, term_index) in taxonomy.terms" :key="term_index"
									v-on:click="select_term(term)"
									v-bind:class="{'selected': term.selected, 'disabled': term.disabled}"
									>
									
									<div class="hover">

											<span class="label-content" v-html="term.name"></span>

											<span class="collection-filter__item-check-mark">

												<svg aria-hidden="true" focusable="false" role="presentation"  class="icon-check icon-check-mark" viewBox="0 0 17 17">

													<path fill="#888320" d="M8.5 0a8.5 8.5 0 1 0 .001 17.001A8.5 8.5 0 0 0 8.5 0zm4.36 5.658L7.582 12.43c-.042.042-.11.133-.194.133-.087 0-.144-.06-.193-.11-.05-.05-2.994-2.88-2.994-2.88l-.057-.057a.222.222 0 0 1-.042-.121c0-.046.019-.088.042-.122a314.834 314.834 0 0 1 .964-1.013c.049-.05.09-.114.182-.114.095 0 .155.08.2.125.046.046 1.708 1.643 1.708 1.643l4.224-5.426a.216.216 0 0 1 .133-.053.21.21 0 0 1 .133.05l1.16.914c.031.038.05.083.05.133a.197.197 0 0 1-.038.125z">												
													</path>

												</svg>

											</span>

									</div>
								</li>
					
							</ul>

						</div>

					</div>

				</section>

				<footer class="collection-filter__footer">

					<button class="collection-filter__clear" v-on:click="clear_selection" v-html="pll__('Effacer la sélection')">

					</button>
					<a :href="done_url" class="collection-filter__done button-santos-vert" v-on:click="done" v-html="pll__('Filtrer')"></a>
				</footer>
				

			</div>

		</div>
	</div>
</template>

<script>
	
	function url_search_to_object( search )
	{

		if( !search )
		{
			return {}
		}		

		let $ = window.jquery

		let search_object = {};

		$.each(search.substr(1).split('&'), function(index, result) {
			let result_split = result.split('=');
			let regex_array = /\[[0-9]+\]/g
			let match_array = result_split[0].match(regex_array)
			if( match_array == null)
			{
				search_object[result_split[0]] = result_split[1]
			}
			else
			{
				let regex_key = /[0-9]+/g
				let key = match_array[0].match(regex_key)
				if( key !== null )
				{
					let result_no_key = result_split[0].replace(match_array[0], '')
					if( !Array.isArray( search_object[result_no_key] ) )
					{
						search_object[result_no_key] = []
					}
					search_object[result_no_key][key] = result_split[1]
				}
			}
		});
		
		return search_object
	}

	export default {


		data(){
			return {
				shop_filter: {},
				product_cat_child: [],
				terms_combos: {},
				selecteds: {},
				done_url: window.location,
				base_query: '?filter-taxonomy=1'
			}
		},
		props: {
			'post' : Object,
			'posts' : Array,
			'product_cat' : String
		},

		mounted(){

			this.$emit('template_mounted', this);
							
		},
		watch: {
			'$store.state.wp.product_cat_child': function() {

				console.log('watch filter');
				
				this.clear_selection()

				var $ = this.$

				var lang = this.$store.state.wp.current_language


				if (lang === 'nl') {

					$('.title-filter:contains("Origines")').text('Afkomst')
					$('.title-filter:contains("Variétés")').text('Koffiesoort')
					$('.title-filter:contains("Arômes")').text('Aroma')
					$('.title-filter:contains("Intensités")').text('Intensiteit')
					$('.title-filter:contains("Acidités")').text('Aciditeit')
					$('.title-filter:contains("Types de thé")').text('Soorten thee')
					$('.title-filter:contains("Type d&#130;infusion")').text('Type infusie')
					$('.title-filter:contains("Saveur du Thé")').text('Smaak van thee')

				}

				$('.open-filters, .open-filter-rotation').removeClass('open-filters open-filter-rotation')

				$('.collection-filter__list-title').unbind('click').click(function() {

					var contenair_globale = ''

					contenair_globale = $(this).parents('.collection-filter__list-wrapper')


					if (contenair_globale.find('.collection-filter__list').hasClass('open-filters')) {

						contenair_globale.find('.collection-filter__list').removeClass('open-filters')

						contenair_globale.find('.collection-filter__list').removeClass('open-filters')

						contenair_globale.find('.icon-arrow-right').removeClass('open-filter-rotation')

					}
					else{

						contenair_globale.find('.collection-filter__list').addClass('open-filters')

						contenair_globale.find('.collection-filter__list').addClass('open-filters')

						contenair_globale.find('.icon-arrow-right').addClass('open-filter-rotation')
						
					}

				});

				this.product_cat_child = this.$store.state.wp.product_cat_child

				var current_url = new URL(location.href)
				var current_params = current_url.searchParams;

				var filter_taxonomy = current_params.get('filter-taxonomy');
				var product_cat = current_params.get('product_cat');

				if( filter_taxonomy && product_cat && this.product_cat_child)
				{
					this.base_query = '?filter-taxonomy=1&product_cat='+product_cat
					$.each(this.product_cat_child, (index, child_tax) => {
						if( child_tax.slug == product_cat )
						{
							this.shop_filter = child_tax.relations					
						}					
					});
				}
				else
				{
					this.shop_filter = this.$store.state.wp.shop_filter
				}

				if( current_url.search )
				{
					let url_selection = url_search_to_object( current_url.search );
					$.each(url_selection, (tax_slug, selections) => {
						if( !Array.isArray( selections ) )
						{
							selections = [selections]
						}
						if( tax_slug != 'filter-taxonomy' ){
							$.each(this.shop_filter, (shop_filter_index, shop_filter_val) => {
								if( shop_filter_val.slug == tax_slug )
								{
									$.each(shop_filter_val.terms, (index_term, val_term) => {
										if( selections.includes( val_term.slug ) )
										{
											this.select_term( val_term )
										}
									});
								}
							});
						}
						
					});

					this.$parent.count_filter = Object.keys(this.selecteds).length
				}				

				if( this.shop_filter )
				{
					if( this.shop_filter.length == 0 )
					{
						$('.filtre-parent-div').addClass('no-filter')
					}
					else
					{
						$('.filtre-parent-div').removeClass('no-filter')
					}
				}

				/*
				*/
				this.terms_combos = this.$store.state.wp.terms_combos



			}
		},
		methods: {

			done: function(){

				if( Object.keys(this.selecteds).length > 0 )
				{
					let $ = this.$
					let query_url = {}
					let query_string = this.base_query
					let selecteds_arr = Object.values(this.selecteds)

					$.each(this.shop_filter, (index_tax, tax) => {
						$.each(tax.terms, (index_term, term) => {
							
							if( selecteds_arr.includes(term.term_id) ){
								if( !Array.isArray( query_url[tax.slug] ) )
								{
									query_url[tax.slug] = []
								}
								let new_key = query_url[tax.slug].length

								query_url[tax.slug][new_key] = term.slug

								query_string += '&' + tax.slug + '[' + new_key + ']=' + term.slug
							}
						});
						
					});

					
					var current_url = new URL(location.href);
					var new_url = current_url.origin + current_url.pathname + query_string
					this.done_url = new_url


				}


				this.close_filter()
			},

			clear_selection: function(){

				let $ = this.$

				$.each(this.shop_filter, function(index, tax) {
					$.each(tax.terms, function(index, term) {
						term.selected = false
						term.disabled = false
					});
				});

				this.selecteds = {}

				var current_url = new URL(location.href);
				var new_url = current_url.origin + current_url.pathname + this.base_query

				this.done_url = new_url

			},

			close_filter: function(){

				var $ = this.$

				$('.filtre-container').animate({
					left: '-100%',
					backgroundColor: 'transparent',
					easing: 'easeInOut ease',
					duration: 500,
				} );

				$('#app').data('scrolling', '')
			},


			select_term: function(term){

				let $ = this.$
				
				if( term.selected == false && !term.disabled )
				{
					term.selected = true

					this.selecteds[term.term_id] = term.term_id
				}
				else
				{
					term.selected = false

					delete this.selecteds[term.term_id]
				}

				let selectables = {};

				$.each(this.terms_combos, (terms_str) => {
					let ids = terms_str.split('-')
					let ids_object = {}

					$.each(ids, function(index, val) {
						ids_object[val] = val
					});

					let combo_max = Object.keys(this.selecteds).length 
					let combo_count = 0

					$.each(this.selecteds, (term_id) => {
						if( ids.includes(term_id) )
						{
							combo_count++;
						}
					});
					
					if( combo_max == combo_count && combo_max != 0 )
					{
						Object.assign(selectables, ids_object);
					}
				});

				$.each(this.shop_filter, (index_tax, taxonomy) => {
					
					$.each(taxonomy.terms, (term_index, term) => {
						term.disabled = false
						if( !selectables[term.term_id] && Object.keys(this.selecteds).length >= 1 )
						{
							term.disabled = true
						}
					});
				});
			}	

		}

	}
</script>

<style>

	@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

	.filters::-webkit-scrollbar-thumb{
		background: #e1e1e1 !important;
	}

	.filters::-webkit-scrollbar-thumb, ::-webkit-scrollbar-thumb:hover{
		background: #e1e1e1 !important;
	}


	@media only screen and (min-width: 1101px){


		.collection-filter__clear {
			padding: 20px 25px;
		}

		.collection-filter__item.selected+.collection-filter__item {

			border-top-color: #888320;

		}

		.collection-filter__item+.selected:last-child {

			border-bottom-color: #888320;

		}

		.lists-filter-taxonomie{

			padding: 90px 80px 0px 75px;
			max-width: 70%;
			min-width: 50%;
			position: relative;

		}

		.lists-filter-taxonomie > section.filters{
			overflow: auto;
			margin-bottom: auto;
			height: 100%;
			text-align: left;

		}

		.icon-close-filter svg{

			right: 0px;
			fill: #000000;
		}

		.icon-close-filter {

			left: 100%;
		}

		.coll-filters{
			white-space: nowrap;
			text-align: left;

		}	

		.collection-filter__list-title{

			font-weight: 700;	
			margin-bottom: 20px;

		}

		.collection-filter__list{

			padding-inline-start: 0px; 
			

		}

		.collection-filter__item{

			padding-bottom: 20px;
			padding-top: 20px;
			border-top: solid 1px #dcdcdc;
		}

		.collection-filter__item span{

			font-size: 14px;
			font-weight : 500;
		}

		.collection-filter__item:last-of-type{

			border-bottom: solid 1px #dcdcdc;

		}

		.label-content:hover{

			color: #888320;
			transition: all .2s ease-in-out;

		}

		.collection-filter__list-wrapper * {

			font-family: open sans;
			text-align: left;
			
		}
		.collection-filter__list-wrapper {

			font-family: open sans;
			width: 195px;
			margin-right: 50px;
			display: inline-block;
			vertical-align: top;
		}

		.collection-filter__item-check-mark svg{

			right: 15px;
		}

		.icon-santos{

			display: none;
		}

		.icon-close-filter svg{

			height: 25px;
			width: 25px;

		}

		.icon-close-filter{

			background-color: white;
		}

		.collection-filter__title {

			font-weight: 700;
			font-size: 14px;
			margin-top: 5px;
			margin-bottom: 5px;
			text-transform: uppercase;
			
		}


		.collection-filter__footer{

			right: 80px;
			bottom: 45px;
			flex-direction: row;
			border: 0;
			display: flex;
			justify-content: flex-end;

		}

		.collection-filter__clear {

			padding: 20px 25px;

		}


		.lists-filter-taxonomie{

			background-color: white;
		}

	}



	@media only screen and (max-width: 1100px){

		.icon-arrow-right{

			top: calc( 50% - 8px );
		}

		.coll-filters{
			
			display: block !important;
			
		}	

		section.filters{

			margin-bottom: auto;
		}
		.icon-close-filter svg {

			height: 18px;
			width: 18px;

		}

		.label-content{

			max-width: 50px;
			word-wrap: break-word;
			
		}
		

		.collection-filter__header{

			display: flex;
			flex-direction: column;
			position: relative;
			background-color: #888320;

		}

		.collection-filter__header{

			padding: 30px 20px;
			height: 20px;
		}

		.label-content{

			font-size: 14px;
		}

		.collection-filter__description{

			display: none;
		}

		.collection-filter__title{

			text-align: center;
			color: white;
			font-weight: 700;
			font-size: 14px;
			margin-top: 5px;
			margin-bottom: 5px;
			text-transform: uppercase;
		}

		.collection-filter__checkbox{

			height: 1px;
			width: 1px;
		}

		.icon-close-filter svg{

			right: 0px;
			fill: white;
		}

		.collection-filter__item-check-mark {

			top: 50%;
			left: 25px;
		}

		.collection-filter__item-check-mark svg {

			transition: all .1s ease-in-out;
			width: 100%;
			height: 100%;

		}

		.lists-filter-taxonomie{

			width: 100%;
			background-color: #f4f4f4;

		}

		.open-filter-rotation{
			transition: all .4s ease-in-out;
			transform: rotate(90deg);
		}

		.open-filters{
			transition: all .4s ease-in-out;
			display: block !important;
		}


		.collection-filter__list-title {

			position: relative;
			margin: 0;
			padding: 30px 20px;
			border-bottom: solid 1px #dcdcdc;
			font-weight: 700;
			font-size: 16px;
			text-align: center;
			text-transform: uppercase;
			display: flex;
			justify-content: center;
			color : #422112;
			line-height: 16px;
			background-color: white;

		}

		.collection-filter__list-title .collection-filter__arrow svg {

			width: 16px;
			height: 16px;
			vertical-align: middle;
			fill: #422112;
			font-size: 3px;

		}

		.collection-filter__list{

			transition: all .4s ease-in-out;
			display: none;
			list-style: none;
			padding: 40px 30px;
			margin: 0px;	
			background-color: white;

		}

		.collection-filter__item{

			padding: 30px 20px;
			border: 1px solid #4D4D4D;
			border-radius: 3px;
			margin-bottom: 15px;
		}

		.collection-filter__item:last-of-type{

			margin-bottom: 0px;

		}

		.icon-close-filter{

			left: inherit;
			transform: translateY(0);
			color: #000000;
			position: absolute;
			background-color: #888320;
			border: 0px;

		}

		.collection-filter__item-check-mark {
			position: absolute;
			transform: translateY(-50%);
			top: 50%;
			left: 25px;
			width: 17px;
			height: 17px;
			color: #ee1d24;
			background-color: #ffffff;

			transition: all .1s ease-in-out;
			box-sizing: content-box;
		}


/*		.collection-filter__title {

			font-size: 14px;
			margin-top: 2px;
			margin-bottom: 5px;
			font-weight: 500;
		}
*/

		.collection-filter__footer{

			right: 80px;
			bottom: 45px;
			flex-direction: row-reverse;
			border: 0;
			display: flex;
			justify-content: flex-end;

		}

		.collection-filter__clear {

			padding: 20px 0 20px 32px;
		
		}


		.filters{

			/*max-height: calc( 100% - 167px);
			overflow: scroll;*/
			overflow: auto;
		}


	}


	@media only screen and (max-width: 1100px) and (min-width: 600px){


		.collection-filter__item{

			max-width: 50%;
			margin-left: auto;
			margin-right: auto;
		} 

		.collection-filter__arrow {
			position: absolute;
			right: 70px;
			top: calc( 50% - 10px );
		}
	}


	@media only screen and (max-width: 600px){

		.collection-filter__arrow {
			position: absolute;
			right: 30px;
			top: calc( 50% - 10px );
		}

		.small--hide{

			display: none;
		}
		.title-filter{

			max-width: 50%;
			word-wrap: break-word;
			line-height: 24px;
		}
	}

	.collection-filter__done {
		padding: 21px 15px !important;
		height: auto;
		max-width: 180px;
		font-size: 14px;
		width: 100px;
		line-height: 100%;
	}

	.collection-filter__clear {

		border: 0;
		width: auto;
		font-weight: 400;
		font-size: 14px;
		color: #000000;
		text-decoration: underline;
		text-transform: capitalize;
		background-color: transparent;
	}


	.show-check-icon{

		display: inline-block !important;
		transition: all .1s ease-in-out;
	}

	.selected{

		border-color: #888320;
		color: #888320; 

	}


	.collection-filter__item-check-mark svg {
		position: absolute;
		width: 17px;
		height: 17px;
		transition: all .1s ease-in-out;
		box-sizing: content-box;
		display: inline-block;
		vertical-align: middle;
	}

	.collection-filter__item{
		position: relative;
	}


	.hover {

		/*pointer-events: auto;*/
		cursor: pointer

	}

	.collection-filter__item.disabled .hover{
		opacity: 0.3;
	}



	.hover:hover span{

		color: #888320;
		transition: all .2s ease-in-out;
	}


	.collection-filter__list{


		list-style: none;
		/*z-index: 100000 !important;*/
		

	}



	.collection-filter__item-check-mark{

		opacity: 0;
	}

	.selected .collection-filter__item-check-mark{

		opacity: 1;
	}	

	.collection-filter__list-wrapper *{

		font-family: open sans;
	}

	.filtre-container{

		display: flex;
		height: 100vh;
		width: 100%;
		position: fixed;
		left: -100%;
		z-index: 10000;
		background-color: rgba(255,255,255,0.9);
		transition: left .1s ease-in-out, opacity .3s ease .4s;
		/*transition: left .1s ease-in-out, opacity .3s ease .4s;*/
	}

	.lists-filter-taxonomie{

		box-shadow: 30px 32px 34px 0 rgba(0,0,0,0.11);
	
	}


	.icon-close-filter svg:hover{

		fill: black;

	}


	.icon-close-filter{

		margin-top: 3px;
		transform: translateY(0);
		color: #000000;
		position: absolute;
		border: 0px;

	}

	.collection-filter__header{

		display: flex;
		flex-direction: column;
		position: relative;

	}

	.collection-filter__header{

	text-align: left;

	}


	.collection-filter__description {

		font-size: 12px;
		line-height: 2.25;

	}

	.lists-filter-taxonomie{

		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		
	}

	.collection-filter__footer{

		/*position: absolute;*/
		right: 0;
		bottom: 0;
		z-index: 10;
		display: flex;
		justify-content: center;
		align-items: left;
		padding: 12px 0;
		border-top: solid 1px #dcdcdc;
		width: 100%;
		background-color: #ffffff;

	}

	* :focus {

		outline: none;

	}

	*{
	-webkit-tap-highlight-color: transparent;
	}





</style>