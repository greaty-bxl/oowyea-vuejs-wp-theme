<template>
			<div class="item-product">
				<a :href="item.permalink">
					<div class="div-grey">
						<div>
							
						</div>

							<div class="cadre">
							<img class="image-product" v-bind:src="item.thumb">

						</div>

						<p class="title-product" v-html="item.post_title"></p>

						<div class="div-terms" v-if="has_term(item, 'product_cat', 'cafes') || has_term(item, 'product_cat', 'koffies')">
							
							<div class="parent-taxonomie-info">
								<p class="titre-taxonomie" v-html="pll__('Intensité')"></p>
								<div class="valeur-taxonomie" >
									<div v-for="count_intesity in 5" :key="count_intesity" 
									v-bind:class="{ filled: isFilled( item, count_intesity, 'intensity' ) }">
									</div>
								</div>
							</div>
							
						</div>

						<div class="div-terms" v-if="has_term(item, 'product_cat', 'cafes') || has_term(item, 'product_cat', 'koffies')">
							
							<div class="parent-taxonomie-info">
								<p class="titre-taxonomie" v-html="pll__('Acidité')"></p>
								<div class="valeur-taxonomie" >
									<div v-for="acidity_points in 5" :key="acidity_points" 
									v-bind:class="{ filled: isFilled( item, acidity_points, 'acidity' ) }">
									</div>
								</div>
							</div>
							
						</div>

						<div class="div-terms thes" v-if="has_term(item, 'product_cat', 'thes') || has_term(item, 'product_cat', 'thees')">
							
							<div class="parent-taxonomie-info parent-taxonomie-info-thes">
								<p class="titre-taxonomie" v-html="pll__('Thé')"></p>
								<div class="valeur-taxonomie" >
									<p class="value-terms-thes" v-html="get_terms_as_string(item, 'type_the')"></p>
								</div>
							</div>
							
						</div>

						<div class="div-terms thes" v-if="has_term(item, 'product_cat', 'thes') || has_term(item, 'product_cat', 'thees')">
							
							<div class="parent-taxonomie-info parent-taxonomie-info-thes">
								<p class="titre-taxonomie" v-html="pll__('Type d’infusion')"></p>
								<div class="valeur-taxonomie" >
									<p class="value-terms-thes" v-html="get_terms_as_string(item, 'type_infusion')"></p>
								</div>
							</div>
							
						</div>

						<p class="flavour" v-if="has_term(item, 'product_cat', 'cafes') || has_term(item, 'product_cat', 'koffies') && get_terms_as_string(item, 'flavoring')" >
							<span v-html="get_terms_as_string(item, 'origine')"></span> | <span v-html="get_terms_as_string(item, 'flavoring')"></span>
						</p>

						<p class="flavour" v-if="has_term(item, 'product_cat', 'thes') && get_terms_as_string(item, 'flavor_the')" >
							<span v-html="get_terms_as_string(item, 'origine_the')"></span> | <span v-html="get_terms_as_string(item, 'flavor_the')"></span>
						</p>

						<p class="flavour" v-if="
							( 
								has_term(item, 'product_cat', 'machines-a-cafes-at-home') 
								||
								has_term(item, 'product_cat', 'machines-a-cafes-horeca') 
							)
							&& 
							get_terms_as_string(item, 'cup_day')" >
							<span v-html="get_terms_as_string(item, 'cup_day')"></span>
						</p>

						<p class="flavour" v-if="
							has_term(item, 'product_cat', 'machines-a-cafes-entreprise')
							&& get_terms_as_string(item, 'number_usage')" >
							<span v-html="get_terms_as_string(item, 'number_usage')"></span>
						</p>
					</div>
					

					<Price :item="item" />
				</a>
			</div>

</template>

<script>

import {has_term, get_terms_as_string} from 'Libs/wp-functions.js'
import Price from 'Organisms/santos-price.vue'

export default {
	props: {
		'item' : Object,
	},
	components: {
		Price
	},

	mounted () {
		//console.log('item', this.item);
		
	},

	methods: {

		has_term,

		isFilled: function(post, count, keyword){

			if( post.terms[keyword] ) 
			{
				if( post.terms[keyword][0].fields[keyword+'_points'] >= count )
				{
					return true
				}	
			}
		},

		get_terms_as_string,

	}

}



</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

	.div-grey{

		background-color: #FAFAFA;
		padding-bottom: 30px;

	}

	.image-product{

		width: 100%;
	}

	.item-product .mtw-woo-price{
		margin-left: auto;
		margin-right: auto;
		width: 100%;
	}
	

	.item-product .mtw-woo-price, .item-product .mtw-woo-price strong {

		text-align: left;
		color: #422112;
		font-size: 15px;
		font-weight: normal;
		padding-top: 20px;

	}
	
	.value-terms-thes{

		color:#888320;
	}

	.thes{

		border-bottom: 1px solid #dddddd;
		margin-bottom:10px; 
		margin-left:20px;
		margin-right:20px;

	}

	.image-shop{

		margin-top: 100px;
		background-color: #FAFAFA;
		padding-bottom: 50px;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	.image-shop{
		padding-top: 143px;
		padding-bottom: 143px;
	}

	.title-product{

		color: #422112;
		font-weight: 700;
		margin-right: 25px;
		margin-left: 25px;
		text-transform: uppercase;
		
	}



	.parent-taxonomie-info{

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-left: auto;
		margin-right: auto;
		width: 80%;

	}

	.div-terms.thes .parent-taxonomie-info{
		width: 100%;
	}

	.titre-taxonomie{
		font-weight: 700;
		color: #666666;
		font-size: 14px;
		line-height: 14px;
		text-align: left;
	}

	.valeur-taxonomie{

		display: flex;
		flex-direction: row;

	}

	.valeur-taxonomie div{

		border: 1px solid #888320;
		border-radius: 100%;
		height: 10px;
		width: 10px;
		margin-left: 8px; 

	}

	.valeur-taxonomie div.filled{
		background-color: #888320;
	}

	.flavour{

		margin-left: 20px;
		margin-right: 20px;
		font-size: 14px;
		color: #666666;
	}

	.parent-taxonomie-info-thes{
		font-weight: 600;
	
	}

	.value-terms-thes{
		font-size: 14px;
		line-height: 14px;
	}

	@media screen and (min-width: 1100px){


		.title-product{ 

			font-size: 15px;
			margin-bottom: 25px;
		}

		.cadre{

		padding: 30px 30px 25px 30px;
		}
		
		.parent-taxonomie-info{

			margin-bottom: 20px;
		}

		.parent-taxonomie-info-thes{

			margin-bottom: 10px !important;
		
		}

	}

	@media only screen and (max-width: 1100px) and (min-width: 600px){

		.parent-taxonomie-info-thes{

			margin-left: 0px !important;
			margin-right:  0px !important;
			width: 100%;
			margin-bottom: 10px !important;

		}
		.thes{

			margin-left: 10%;
			margin-right: 10%;
		}

		.title-product{

			font-size: 16px;
			margin-bottom: 25px;
		}
		
		.cadre{

			padding: 30px 30px 25px 30px;
		}

		.parent-taxonomie-info{

			margin-bottom: 20px;
		}


	}

	@media only screen and (max-width: 600px) {

		.title-product{

			font-size: 14px;
			margin-bottom: 25px;
		}

		.cadre{

			padding: 30px 30px 20px 30px ;
		}

		.parent-taxonomie-info{

			margin-bottom: 15px;
		}

	}
</style>


<style scoped >
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

a{
	text-decoration: none;
	color: inherit;
}
</style>






