import noty from 'noty'
import 'noty/lib/noty.css';
import 'noty/lib/themes/relax.css';
import 'Styles/noty.css';

import links_and_anchors from 'Libs/links-and-anchors.js'
import is_json from 'Libs/is-json.js'
import get_new_page from 'Libs/get-new-page.js'

export default function(vue){
	let $ = vue.$

	//add product
	let formsSelectors = '.woocommerce-cart-form, [data-state="current"].woocommerce form.cart, .woocommerce-form-login, .woocommerce-form-register, .woocommerce-ResetPassword, .woocommerce-EditAccountForm, .edit-address-billing form, .edit-address-delivery form';
	let noticeTypes = {
		'error': 'error',
		'success': 'success',
		'notice' : 'notification'
	};

	$(document).on('submit', formsSelectors, function(event) {
		
		event.preventDefault();

		let form = $(event.currentTarget)
		let fields = form.serialize()
		let url = form.attr('action')

		if( !url || url == '' )
		{
			url = window.location.href
		}

		console.log('form', form, url);

		/*if( form.hasClass('woocommerce-form-login') )
		{
			$('#page-loader').css('display', 'flex');
		}*/

		let is_add_to_cart = 0

		if( $('[data-state="current"]').hasClass('single-product') && form.hasClass('cart') )
		{
			is_add_to_cart = 1
		}

		let submit_btn = $(event.currentTarget).find('button')
		if( submit_btn.length && submit_btn.prop('value') )
		{
			fields += '&'+submit_btn.prop('name')+'='+submit_btn.prop('value')
		}

		form.find('input, select, textarea, button').each( (index, el) => {
			if( !$(el).prop('disabled') )
			{
				$(el).addClass('disabled-by-ajax').prop('disabled', true)
			}
		});

		$.ajax({
			type: "POST",
			url: url,
			data: fields, // serializes the form's elements.
			success: function(json)
			{
				
				if( !is_json(json) )
				{
					console.log('not json', json);
					get_new_page(vue, window.location)
					return
				}
				
				let data = JSON.parse( json )

				console.log('ajax json', data)
				//console.log( data, noticeTypes ); 

				//$('.woocommerce-cart-quantity').text(data.cart_quantity)

				if( data.notices )
				{

					$.each(data.notices, function(type_key, notices_by_group) {
						//Can return type: error, notice, success
						//We adapt types for Noty
						let type = noticeTypes[type_key]
						
						$.each(notices_by_group, function(index, notice) {
							//console.log(type, notice.notice);
							if( type != 'success' && !is_add_to_cart )
							{
								new noty({
									type: type, //alert, information, error, warning, notification, success
									text: notice.notice,
									timeout: 7000,
									layout: "bottomRight",
									theme: "relax"
								}).show();
							}
						});
						
					});
				}

				if( is_add_to_cart )
				{
					vue.$store.state.wp.cart = data.cart
					vue.$store.state.wp.count = data.cart_quantity
					
					$(document).trigger('add_to_cart')
				}

				if( data.wp && data.wp_query )
				{
					vue.$store.state.wp.woo_account = data.woo_account
					vue.$store.state.wp.cart = data.cart
					vue.$store.state.wp.count = data.cart_quantity
					/*vue.$store.commit({
						type: 'update_wp',
						wp: data,
					})*/
				}
				
				

				links_and_anchors(vue)

				$('.disabled-by-ajax').removeProp('disabled')

				$('.disabled-by-ajax').prop('disabled', false)

				$('.disabled-by-ajax').removeClass('disabled-by-ajax')
			}
		});
	});

	$(document).on('after_next_page first_page_ready after__wpnonce', () =>{
		setTimeout( ()=> {
			console.log( 'find forms', $(formsSelectors) );
			$(formsSelectors).append('<input type="hidden" name="is_woocommerce_ajax" value="1" />')
			//console.log( $(formsSelectors) );

			$('[name="_wp_http_referer"]').each(function(index, el) {
				let val = $(el).val()
				val = val.replace('&add_to_json=1', '')
				val = val.replace('?add_to_json=1', '?')
				$(el).val( val )
			});
		}, 1);
		
	})


	//remove item
	/*$('.remove').each( (index, el) => {
		let href = $(el).prop('href')
		$(el).prop('href', href + '&test-var=1')
	});*/
}