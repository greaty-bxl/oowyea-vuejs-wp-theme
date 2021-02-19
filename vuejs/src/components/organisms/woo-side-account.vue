<template>
	<transition name="fade">
		<div class="side-account" v-show="open" @click="click_to_close">
			<div class="left-col" >

				<div class="header-account">
					
					<h4 class="product__add__success__title" v-html="pll__('Mon compte')">
					</h4>

					<span  class="close"  style="cursor: pointer;" @click="click_to_close" >
						<svg   class="close" viewBox="0 0 27 27"><g stroke="#422112" fill="none" fill-rule="evenodd" stroke-linecap="square"><path d="M.5.5l26 26M26.5.5l-26 25"></path></g>
						</svg>
					</span>
		
				</div>

				<div class="account-container" v-if="is_user_logged_in">
					<div class="account-nav" v-bind:class="{ step1 : step == 1, step2 : step == 2 }">
						<div class="user-resume">						
							<div v-html="user.display_name"></div>
							<div v-html="user.user_email"></div>
							<div><a href="" v-html="pll__('Mettre à jour vos informations')" v-on:click="change_menu(1, 'account-info')"></a></div>
							<div><a :href="logout.url" v-on:click="change_menu(0, '', '')" v-html="logout.title"></a></div>
						</div>
						<div class="orders" v-html="navigation.orders.html"></div>
					</div>
					

					<div class="account-info right-content" v-show="current1 == 'account-info'" >
						<a href="" v-html="pll__('Retour à mon compte')" v-on:click="change_menu(0)"></a>
						<div v-html="tabs['edit-account'].html"></div>
						<div v-html="tabs['edit-address'].html"></div>
					</div>

					<div class="edit-address-billing right-content" v-show="current2 == 'billing'" >
						<a href="" v-html="pll__('Retour à mes informations')" v-on:click="change_menu(1, 'account-info', 'billing')"></a>
						<div v-html="woo_account['edit_address_billing']"></div>
					</div>

					<div class="edit-address-delivery right-content" v-show="current2 == 'shipping'">
						<a href="" v-html="pll__('Retour à mes informations')" v-on:click="change_menu(1, 'account-info', 'shipping')"></a>
						<div v-html="edit_address_delivery"></div>
					</div>

					<div class="order" v-show="current1 == 'order'">
						<a href="" v-html="pll__('Retour à mon compte')" v-on:click="change_menu(0)"></a>
						<div v-html="order_html">
							
						</div>
					</div>

				</div>
				<div v-else class="account-container" >
					<div class="account-nav" v-bind:class="{ step1 : step == 1, step2 : step == 2 }">
						<div v-html="login"></div>
						<a href="" v-html="pll__('Créer un compte')" @click="change_menu(1, 'register')"></a>
					</div>
					<div v-show="current1 == 'register'">
						<div v-html="register" ></div>
						<a href="" v-html="pll__('J\'ai un compte')" @click="change_menu(0, 'register')"></a>
					</div>
					
					<div v-show="current1 == 'lost-password'" >
						<div v-html="lost_password" ></div>
						<a href="" v-html="pll__('J\'ai retrouvé mes informations')" @click="change_menu(0, 'lost-password')"></a>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>

	import links_and_anchors from 'Libs/links-and-anchors.js'
	import init_styled_form from 'Libs/styled-form.js'
	import wp_ajax from 'Libs/wp-ajax.js'

	export default {
		data(){
			return {
				open: 0,
				step: 0,
				current1: '',
				current2: '',
				order_html: 'loading...'
			}
		},
		mounted(){
			let $ = this.$

			$(document).on('open_account', () => {
				this.open = 1
			});

			$(document).on('wc_account_link_open', (event, target) => {
				if( $(target).hasClass('invoice-address') )
				{
					this.change_menu(2, this.current1, 'billing' )
				}
				if( $(target).hasClass('delivery-address') )
				{
					this.change_menu(2, this.current1, 'shipping' )
				}
				if( $(target).parent().hasClass('order-number') )
				{
					this.change_menu(1, 'order', '' )
					let order = $(target).attr('href').split('/').reverse()[1]

					this.order_html = 'loading...'
					wp_ajax('woo_account_get_order',{id:order}, (data)=>{
						this.order_html = data
						links_and_anchors( this );
					})
				}
				if( $(target).parent().hasClass('lost_password') )
				{
					this.change_menu(1, 'lost-password', '' )
				}
			
			});

			

			
		},
		methods:{
			click_to_close : function(event){
				let $ = this.$

				if( $(event.target).hasClass('side-account') || $(event.target).hasClass('close') )
				{
					this.open = 0
				}				
			},
			change_menu : function(step, current1 = this.current1, current2 = this.current2){
				this.step = step
				this.current1 = current1
				this.current2 = current2
			},
			/*a_to_none: function(html){

				html
			}*/
		},
		computed:{
			edit_address_delivery: function()
			{
				let $ = this.$
				let html = $('<div>' + this.$store.state.wp.woo_account.edit_address_delivery + '</div>' );
				let find_url = $('<div>' + this.$store.state.wp.woo_account.navigation['edit-address'].html + '</div>' );
				let url = find_url.find('a.delivery-address')
					.attr('href')
					.replace( window.location.origin + window.location.pathname, this.$store.state.wp.woo_account.page_url )
				url
				return html.first().html()
			},
			woo_account: function(){
				return this.$store.state.wp.woo_account
			},
			user: function(){
				return this.$store.state.wp.woo_account.user.data
			},
			logout: function(){
				return this.$store.state.wp.woo_account.logout
			},
			navigation : function(){
				return this.$store.state.wp.woo_account.navigation
			},
			tabs : function(){
				let $ = this.$
				let my_return = {}
				$.each(this.$store.state.wp.woo_account.navigation, function(index, val) {
					if (index != 'customer-logout') {
						let html = $('<div>' + val.html + '<div>') 
						html.find('a').attr('data-trigger', 'wc_account_link_open');
						if( index == 'edit-address' )
						{
							html.find('.woocommerce-Address').eq(0).find('a').addClass('invoice-address')
							html.find('.woocommerce-Address').eq(1).find('a').addClass('delivery-address')
						}
						val.html = html.first().html();
						my_return[index] = val
					}
				});

				links_and_anchors( this );

				return my_return
			},
			is_user_logged_in : function(){
				return this.$store.state.wp.woo_account.is_user_logged_in
			},
			login : function(){
				let $ = this.$

				let login_store = this.$store.state.wp.woo_account.login
				let login_div = $(login_store).find('.u-column1')

				login_div.find('a').attr('data-trigger', 'wc_account_link_open');
				login_div.find('.woocommerce-form-login__rememberme').remove()

				if( login_div.length )
				{
					return login_div.html()
				}
				else
				{
					return this.pll__('You can\'t login in this website');
				}
				
			},
			register : function(){
				let $ = this.$

				let login_store = this.$store.state.wp.woo_account.login
				let register_div = $(login_store).find('.u-column2')
				if( register_div.length )
				{
					return register_div.html()
				}
				else
				{
					return ''
				}
			},
			lost_password : function(){
				return this.$store.state.wp.woo_account.lost_password
			}
		},
		watch : {
			'$store.state.wp' : function(){

				this.change_menu(0, '', '')
				
			},
			'$store.state.wp.sections' : function(){

				// this.open = 0
			},

			'$store.state.wp.woo_account' : function(){

				setTimeout(function() {

					init_styled_form('.side-account input')

				}, 1);
			}
		}
	}
</script>

<style scoped>
	.side-account{
		position: fixed;
		width: 100%;
		height: 100vh;
		top: 0;
		left: 0;
		text-align: right;
		z-index: 4000;
		background: rgba(255,255,255,0.6);

	}

	.fade-enter-active, .fade-leave-active, .fade-leave-to {
		background: rgba(255,255,255,0);
		transition: background 0.6s;
	}

	.fade-enter-to{
		background: rgba(255,255,255,0.6);
	}

	.left-col {
		height: 100vh;
		width: 500px;
		max-width: 95%;
		background: #fff;
		display: inline-block;
		margin-right: 0px;
		box-shadow: -4px 0px 20px -11px #000000;
		padding: 27px 40px 85px 50px;
		text-align: left;
		box-sizing: border-box;
	}

	.left-col .orders{

		margin-bottom: 50px;
	}

	.fade-enter-active .left-col, .fade-leave-active .left-col, .fade-leave-to .left-col {
		margin-right: -500px;
		transition: margin-right 0.6s;
	}

	.fade-enter-to .left-col{
		margin-right: 0px;
	}

	.user-resume{
		margin-top: 30px; 
		padding: 25px;
		background: #FAFAFA;
		font-size: 15px;
		font-weight: 500;
	}

	.user-resume > div{
		padding-bottom: 10px; 
	}

	.user-resume > div:last-child{
		padding-bottom: 0;
	}

	.account-container{
		margin-top: 30px;
		margin-bottom: 30px;
		white-space: nowrap;
		overflow-x: hidden;
	}
	.account-container > div{
		width: calc(100% - 20px);
		padding: 0px 10px; 
		display: inline-block;
		white-space: normal;
		vertical-align: top;
	}

	.account-nav{
		margin-left: 0%;
		transition: margin-left 0.6s; 
	}

	.account-nav > a{

		line-height: 40px;

	}
	.account-nav.step1{
		margin-left: -100%;
	}
	.account-nav.step2{
		margin-left: -200%;
	}
	
	.woocommerce-form-row.right-content{

		margin-top: 30px;
		margin-bottom: 30px;

	}

	.account-info.right-content > div{

		margin-top: 20px;
	}


	.account-container > div{

		overflow: auto;
		margin-bottom: auto;
		max-height: calc( 100vh - 180px);

	}

	/*.account-info.right-content{

		overflow: auto;
		margin-bottom: auto;
		padding-bottom: 50px;
		max-height: 80vh;

	}

	.account-nav{

		overflow: auto;
		margin-bottom: auto;
		padding-bottom: 50px;
		max-height: 80vh;
	}

	.edit-address-billing.right-content{

		overflow: auto;
		margin-bottom: auto;
		max-height: 80vh;
	}

	.edit-address-delivery.right-content{

	}*/

	.left-col *::-webkit-scrollbar-thumb{
		background: #e1e1e1 !important;
	}

	.left-col *::-webkit-scrollbar-thumb, ::-webkit-scrollbar-thumb:hover{
		background: #e1e1e1 !important;
	}

	.account-info .account-container  * {

		font-size: 14px !important;
		line-height: 1.45 !important;
	}

	.woocommerce-EditAccountForm div p{

		margin-top: 15px !important;

	}

	@media screen and (max-width: 600px ){

		.left-col{

			padding: 27px 30px 85px 30px;

		}

	}
</style>

<style type="text/css">

	.side-account .close {

		width: 21px;
		height: 21px;
		display: flex;
		margin-top: auto;
		margin-bottom: auto;
		fill: #422112;


	}

	.side-account .header-account{

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-content: center;
		height: 60px;
		border-bottom: 1px solid rgb(220, 220, 220);

	}

	.side-account .header-account h4{

		color: #422112 ;
		font-size: 20px;
		font-weight: 700;
		line-height: 61px;
		text-transform: uppercase;
		padding-bottom: 5px;
		text-align: left;
		margin-bottom: 0;
		margin: 0px

	}

	.side-account .side-account h2{
		font-size: 150%;
		font-weight: bolder;
		color: #422112;
	}

	.side-account a{
		color: #888320;
		font-size: 15px;
	}

	.right-content {

		padding-top: 30px;
		padding-bottom: 30px;
	}

	.side-account .orders .order-actions{
		display: none;
	}
	.side-account .orders .shop_table{
		width: 100%;
	}

	.side-account tbody td{

		padding: 10px 5px;
	}	

	.side-account .my_account_orders thead th{

		padding: 10px 5px;
	}
	.side-account input{

		border: 1px transparent solid;
		background-clip: padding-box;
		display: block;
		box-sizing: border-box;
		width: 100%; 
		padding-left: 8px;
		padding-top: 11.5px !important;
		padding-bottom: 11.5px  !important;
		word-break: normal;
		line-height: inherit;
		border-color: #d9d9d9;
		font-size: 14px;

	}

	.side-account .paddingTop-animation{

		padding-top: 18px !important;
		padding-bottom: 5px  !important;
		font-size: 14px;
	}

	.side-account .appear-label{

		margin-left: 8px;
		display: flex !important;
		position: relative;
		top: 5px;
		
	}

	.side-account .woocommerce-form-row{

		padding-top: 15px;

	}


	.side-account .form-row{

		padding-top: 15px;

	}

	.woocommerce-form-row label{

		height: 0px;
		
	}

	.woocommerce-address-fields label{

		height: 0px;
	}

	.edit-account fieldset{
		margin-top: 15px;
		background-color: #f7f7f7;
	}

	.edit-account legend{

		font-weight: 500;
		font-size: 16px;
		color: #422112;

	}

	.side-account h3{

		color: #422112;
	}

	.side-account address {
		font-size: 14px;
		line-height: 140%;
	}

	.side-account header{

		margin-bottom: 10px;
	}

	.side-account button{

		margin-top: 15px;
		margin-bottom: 15px;
		background-color: #888320;
		color: white !important;
		border: 1px solid #888320 !important;
		border-radius: 3px;
		border-width: 1px;
		min-width: 200px;
		width: 100% !important;
		font-size: 16px;
		transition: 0.3s !important;
		text-align: center;
		padding: 15px 18px;
		box-sizing: border-box;
		
	}

	.side-account button:hover{

		background-color: white !important;
		color: #888320 !important;
		transition: 0.3s !important;
		
	}

	.side-account button, input, select, textarea{

		width: 100%;
		border: 1px #d9d9d9 solid;
/*		padding-top: 11.5px !important;
		padding-bottom: 11.5px !important;*/

	}

	.country_select {
		position: relative;
		font-size: 14px;
		margin-top: 10px;
	}

	#billing_country_field .appear-label{

		display: flex !important;
		height: auto;
		top: 0px;
	}

	#billing_country_field strong{

		margin-left: 8px;
		margin-top: 5px;
		color: #422112;
	}

	#shipping_country_field strong{

		margin-left: 8px;
		margin-top: 5px;
		color: #422112;

	}

	.woocommerce-input-wrapper{

		display: flex;
		flex-direction: column;

	}

/*	.side-account p.woocommerce-LostPassword.lost_password{

		margin-top: 15px;
	}
*/
	

	@media screen and (max-width: 600px){

		.account-info .u-column1.col-1.woocommerce-Address{

			flex-direction: column;
		}

		.account-info .woocommerce-Address{

			flex-direction: column;
			margin-bottom: 30px;
		}

		.account-nav{

			padding-left: 0px;
			padding-right: 0px;

		}

		.left-col {

			padding: 27px 30px 27px 30px !important;
			
		}

	}



</style>