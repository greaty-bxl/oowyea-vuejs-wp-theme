import noty from 'noty'
import 'noty/lib/noty.css';
import 'noty/lib/themes/relax.css';
import 'Styles/noty.css';

import links_and_anchors from 'Libs/links-and-anchors.js'

export default function(vue){
	let $ = vue.$


	//add product
	let formsSelectors = '[data-state="current"].woocommerce form.cart'
	let noticeTypes = {
		'error': 'error',
		'success': 'success',
		'notice' : 'notification'
	};

	$(document).on('submit', formsSelectors, function(event) {
		
		event.preventDefault();

		let form = $(event.currentTarget)
		let fields = form.serialize()
		let url = form.prop('action')

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
				let data = JSON.parse( json )
				//console.log( data, noticeTypes ); 

				$('.woocommerce-cart-quantity').text(data.cart_quantity)

				$.each(data.notices, function(type_key, notices_by_group) {
					//Can return type: error, notice, success
					//We adapt types for Noty
					let type = noticeTypes[type_key]
					
					$.each(notices_by_group, function(index, notice) {
						//console.log(type, notice.notice);
						new noty({
							type: type, /*alert, information, error, warning, notification, success*/
							text: notice.notice,
							timeout: 7000,
							layout: "bottomRight",
							theme: "relax"
						}).show();
					});
				});

				links_and_anchors(vue)

				//console.log( 'success', $('.disabled-by-ajax') );

				$('.disabled-by-ajax').removeProp('disabled')

				$('.disabled-by-ajax').prop('disabled', false)

				$('.disabled-by-ajax').removeClass('disabled-by-ajax')
			}
		});
	});

	$(document).on('after_next_page first_page_ready', () =>{
		$(formsSelectors).append('<input type="hidden" name="is_woocommerce_ajax" value="1" />')
		//console.log( $(formsSelectors) );

		$('[name="_wp_http_referer"]').each(function(index, el) {
			let val = $(el).val()
			val = val.replace('&add_to_json=1', '')
			val = val.replace('?add_to_json=1', '?')
			$(el).val( val )
		});
	})


	//remove item
	/*$('.remove').each( (index, el) => {
		let href = $(el).prop('href')
		$(el).prop('href', href + '&test-var=1')
	});*/
}