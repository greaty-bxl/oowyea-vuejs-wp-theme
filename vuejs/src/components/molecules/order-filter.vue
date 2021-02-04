<template>
	<div class="order-filter" @mouseleave="_close">
		<div class="order-filter-wrap">
			<div class="label" @click="_open">
				<div class="label-wrap">
					<span v-html="pll__('TRIER PAR :')"></span> <span v-html="current_order"></span>
				</div>
			</div>
			<transition name="fade">
				<div class="choices" v-show="open">
					<div class="choices-wrap">
						<div class="choice" v-for="(choice, key) in choices" :key="key" @click="_filter(choice, key)">
							<span v-html="choice"></span>
						</div>
					</div>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
	import get_new_page from 'Libs/get-new-page.js'
	export default{
		data(){
			return {
				open : 0,
				current_order: this._label_max_letter('En vedette'),
				choices : {
					'featured' : this.pll__('En vedette'),
					'best-selling' : this.pll__('Meilleure vente'),
					'a-z' :  this.pll__('A - Z'),
					'z-a' : this.pll__('Z - A'),
					'price-l-h' : this.pll__('Price : Low to High'),
					'price-h-l' : this.pll__('Price : High to Low'),
					'newest': this.pll__('Newest'),
					'oldest' : this.pll__('Oldest')
				}
			}
		},
		mounted(){
			
		},
		methods : {
			_open : function () {
				this.open = 1
			},
			_close : function() {
				this.open = 0
			},
			_filter : function ( choice, key ) {
				this.open = 0
				this.current_order = this._label_max_letter(choice)
				
				let new_url = new URL( window.location.href )
				new_url.searchParams.set('order_by', key);

				get_new_page( this, new_url.href );
			},
			_label_max_letter : function(string){
				console.log( string.length );
				if( string.length > 12 )
				{
					return string.substring(0, 12) + '...'
				}
				else
				{
					return string
				}				
			}
		}

	}
</script>

<style scoped>
	.order-filter * {
		box-sizing: border-box;
	}

	.order-filter{
		font-size: 15px;
		font-weight: bold;
		margin-left: 10px;
	}

	.order-filter-wrap {
		display: flex;
		flex-direction: column;
	}

	.label{
		width: 250px;
		padding: 15px 0px;
		border: solid 1px #CECECE;
		border-radius: 3px;
		text-transform: uppercase;
		display: flex;
		justify-content: center;
	}

	.label-wrap{
		white-space: nowrap;
		display: inline;
	}
	
	.choices{
		height: 0;
		overflow: visible;
		margin-top: -3px;
	}

	.choices-wrap{
		height: auto;
		position: relative;
		border: solid 1px #CECECE;
		border-color: #CECECE;
		border-radius: 0px 0px 3px 3px;
		border-top: none;
		padding: 15px 25px;
		background: #fff;
	}

	.choice{
		cursor: pointer;
		font-size: 80%;
		line-height: 220%;
	}

	.fade-enter-active, .fade-leave-active, .fade-leave-to {
		opacity: 0;
		transform: translateY(-20px);
		transition-property: opacity, transform;
		transition-duration: 0.6s;
		transition-timing-function: ease-in-out;
	}

	.fade-enter-to{
		opacity: 1;
		transform: translateY(0px);
	}
	
</style>