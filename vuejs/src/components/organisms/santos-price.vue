<template>
	<div>
		<div v-if="item.terms.product_type[0].slug == 'variable'" class="price" >
			<div class="mtw-woo-price" v-html="get_variable_price()"></div>
		</div>
		<div v-else class="price">
			<div class="mtw-woo-price" v-html="get_price()"></div>
		</div>
	</div>
</template>

<script>
	import {has_term} from 'Libs/wp-functions.js'

	export default {
		data(){
			return {
				'size_var_prefix' : '',
				'vat': false
			}
		},
		props :{
			'item' : Object,
		},
		mounted (){
			//console.log('price', this.item);

			if( this.has_term(this.item, 'product_cat', ['accompagnements','cafes', 'pads-et-capsules', 'thes'], 'or') )
			{
				this.vat = true
				this.$parent.vat = true
			}


			if( this.has_term(this.item, 'product_cat', 'cafes') )
			{
				this.size_var_prefix = '<small> / 250gr </small>'
			}
			else if( this.has_term(this.item, 'product_cat', 'thes') )
			{
				this.size_var_prefix = '<small> / 100gr </small>'
			}
		},
		methods: {
			has_term,

			get_price : function(){
				let metas = this.item.metas
				if( this.item.terms.product_type[0].slug == 'variable' )
				{
					return this.get_variable_price()
				}
				else if( Array.isArray( metas._sale_price ) )
				{
					if( metas._sale_price[0] != metas._regular_price[0] )
					{
						return '<del>' + this.format_price(metas._regular_price[0]) + '</del>&nbsp;' + this.format_price(metas._sale_price[0]) + '&nbsp;' + this.vat_prefix() + this.size_var_prefix
					}
				}
				else if( metas._price )
				{
					return this.format_price(metas._price) + '&nbsp;' + this.vat_prefix() + this.size_var_prefix
				}

				return ''
			},

			format_price: function( string ){
				let number = parseFloat(string)
				if( this.vat )
				{
					number *= 1.21
				}

				return number.toFixed(2) + ' €'
			},

			vat_prefix: function () {
				if( this.vat )
				{
					return '<small class="woocommerce-price-suffix">'+ this.pll__('TVAC') +'</small>'	
				}
				else
				{
					return '<small class="woocommerce-price-suffix">'+ this.pll__('HTVA') +'</small>'
				}
			},

			get_variable_price: function () {
				return this.format_price(this.item.metas._price[0]) + '&nbsp;' + this.vat_prefix() + this.size_var_prefix
			}
		}
	}
</script>