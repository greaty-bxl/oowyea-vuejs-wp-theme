<template>
	<div>
		<div class="filtre-container">
			<div class="lists-filter-taxonomie">
				<header class="collection-filter__header">
					<h2 class="collection-filter__title">FILTRERS</h2>
					<p class="collection-filter__description">
					Select one or more filters from the options below.
					</p>
					<button class='icon-close-filter' v-on:click="close_filter">
						<svg aria-hidden="true" focusable="false" role="presentation"   viewBox="0 0 25 25"><path d="M14.023 12.5L24.685 1.839A1.077 1.077 0 1 0 23.16.315L12.5 10.977 1.839.315A1.077 1.077 0 1 0 .315 1.84L10.977 12.5.315 23.161a1.077 1.077 0 1 0 1.524 1.524L12.5 14.023l10.661 10.662a1.077 1.077 0 1 0 1.524-1.524L14.023 12.5z"></path></svg>
					</button>
				</header>

				<section class="filters">
					
					<div class="coll-filters">

						<div class="collection-filter__list-wrapper" v-for="(taxonomy, index) in shop_filter" :key="index">
							<h3 class="collection-filter__list-title">
								
								<p class="title-filter" v-html="taxonomy.label"></p>

								<span class="collection-filter__arrow" >

									<svg aria-hidden="true" focusable="false" role="presentation" class="icon-santos icon-arrow-right" viewBox="0 0 20 38">

										<path d="M15.932 18.649L.466 2.543A1.35 1.35 0 0 1 0 1.505c0-.41.155-.77.466-1.081A1.412 1.412 0 0 1 1.504 0c.41 0 .756.141 	1.038.424l16.992 17.165c.31.283.466.636.466 1.06 0 .423-.155.777-.466 1.06L2.542 36.872a1.412 1.412 0 0 1-1.038.424c-.41 0-.755-.141-1.038-.424A1.373 1.373 0 0 1 0 35.813c0-.423.155-.776.466-1.059L15.932 18.65z" fill="#726D75" fill-rule="evenodd">
										</path>

									</svg>

								</span>

							</h3>
							<ul class="collection-filter__list">

								<li class="collection-filter__item" 
									v-for="(term, term_index) in taxonomy.terms" :key="term_index"
									v-on:click="click_term(term)"
									v-bind:class="{'selected': term.selected, 'disabled': term.disabled}"
									>
									
									<div class="hover">

											<span class="label-content" v-html="term.name + ' (' + term.term_id + ') '+ term.disabled"></span>

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

					<button class="collection-filter__clear">

					Clear All <span class="small--hide">Selections</span>

					</button>
					<button class="collection-filter__done button-santos-vert" v-on:click="close_filter">Done</button>
				</footer>
				

			</div>

		</div>
	</div>
</template>

<script>
	
	export default {

		data(){
			return {
				shop_filter: [],
				terms_combos: {},
				selecteds: {},
			}
		},

		props: {
			'post' : Object,
			'posts' : Array
		},

		mounted(){

			this.shop_filter = this.$store.state.wp.shop_filter
			this.terms_combos = this.$store.state.wp.terms_combos

			console.log( 'wc-filter', this.shop_filter );

			console.log( 'wc-filter', this.terms_combos);

			this.$emit('template_mounted', this);

			var $ = this.$

			$('.icon-santos').click(function() {

				var contenair_globale = ''

				contenair_globale = $(this).parents('.collection-filter__list-wrapper')

				if ($(this).hasClass('open-filter-rotation')) {

					contenair_globale.find('.collection-filter__list').removeClass('open-filters')

					contenair_globale.find('.icon-arrow-right').removeClass('open-filter-rotation')

				}
				else{

					contenair_globale.find('.collection-filter__list').addClass('open-filters')

					contenair_globale.find('.icon-arrow-right').addClass('open-filter-rotation')

				}

			});


			/*$('.collection-filter__item').click(function() {

				if ($(this).hasClass('selected')) {

					$(this).removeClass('selected')

						$(this).find('.collection-filter__item-check-mark').fadeTo( "fast" , 0, function() {
						});

				}

				else{

					$(this).addClass('selected')

					$(this).find('.collection-filter__item-check-mark').fadeTo( "fast" , 1, function() {
				
					});
				
				}
			});*/
		},

		methods: {

			close_filter: function(){

				var $ = this.$

				$('.filtre-container').animate({
					left: '-100%',
					backgroundColor: 'transparent',
					easing: 'easeInOut ease',
					duration: 500,
				} );

				// $('.filtre-container').css('background-color', 'transparent');

					// background-color: rgba(255,255,255,0.9);

				$('#app').data('scrolling', '')

			},

			click_term: function(term){

				let $ = this.$
				//find combo
				console.log(term.term_id, this.terms_combos);

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
				
				console.log( 'selecteds 1', this.selecteds, Object.keys(this.selecteds).length  );

				$.each(this.terms_combos, (terms_str) => {
					let ids = terms_str.split('-')
					let ids_object = {}

					$.each(ids, function(index, val) {
						ids_object[val] = val
					});

					let combo_max = Object.keys(this.selecteds).length 
					let combo_count = 0

					$.each(this.selecteds, (term_id) => {
						console.log( 'find', term_id, ids )
						if( ids.includes(term_id) )
						{
							console.log( 'found', term_id, ids )
							combo_count++;
						}
					});
					
					if( combo_max == combo_count && combo_max != 0 )
					{
						Object.assign(selectables, ids_object);
					}

					console.log('combo_max', combo_max, combo_count);
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

				console.log( 'selecteds', this.selecteds, selectables );		
			}


	
		}

	}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
	
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

			padding: 90px 80px 45px 75px;
			max-width: 70%;
			min-width: 50%;
			position: relative;

		}

		.icon-close-filter svg{

			right: 0px;
			fill: #000000;
		}



		.icon-close-filter {

			left: 100%;
		}

		.coll-filters{

			display: flex;
			flex-direction: row;
			justify-content: start;
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

			font-size: 14px;
			margin-top: 5px;
			margin-bottom: 5px;
			font-weight: 500;
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

		section.filters{

			width: calc()
		}
		.icon-close-filter svg {

			height: 15px;
			width: 15px;

		}

		.label-content{

			max-width: 50px;
			word-wrap: break-word;
			padding-left: 50px;
			padding-right: 50px;

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
			transition: all .1s ease-in-out;
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


		.collection-filter__title {

			font-size: 14px;
			margin-top: 2px;
			margin-bottom: 5px;
			font-weight: 500;
		}


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

			max-height: calc( 100% - 167px);
			overflow: scroll;
		}


	}


	@media only screen and (max-width: 1100px) and (min-width: 600px){


		.collection-filter__item{

			max-width: 50%;
			margin-left: auto;
			margin-right: auto;
		} 
	}


	@media only screen and (max-width: 600px){

		.small--hide{

			display: none;
		}
	}

	.collection-filter__done {
		padding: 21px 15px;
		height: auto;
		max-width: 180px;
		font-size: 14px;
		width: 180px;
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

		pointer-events: auto;
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

	}

	.collection-filter__footer{

		position: absolute;
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




</style>