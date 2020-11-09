import noty from 'noty'
import 'noty/lib/noty.css';
import 'noty/lib/themes/semanticui.css';

export default function(vue){
	let $ = vue.$

	//console.log( $('.woocommerce') );

	let formsSelectors = '[data-state="current"].woocommerce form.cart'
	let noticeTypes = {
		'error': 'error',
		'success': 'success',
		'notice' : 'notification'
	};

	$(document).on('submit', formsSelectors, function(event) {
		event.preventDefault();

		let fields = $(event.currentTarget).serialize()
		let url = $(event.currentTarget).prop('action')

		let submit_btn = $(event.currentTarget).find('button')
		if( submit_btn.length && submit_btn.prop('value') )
		{
			fields += '&'+submit_btn.prop('name')+'='+submit_btn.prop('value')
			console.log('include button');
		}

		console.log( 'add to cart', url, fields );

		$.ajax({
			type: "POST",
			url: url,
			data: fields, // serializes the form's elements.
			success: function(json)
			{
				let data = JSON.parse( json )
				console.log( data, noticeTypes ); 

				$('.woocommerce-cart-quantity').text(data.cart_quantity)
				$.each(data.notices, function(type_key, notices_by_group) {
					let type = noticeTypes[type_key]
					
					$.each(notices_by_group, function(index, notice) {
						console.log(type, notice.notice);
						new noty({
							type: type, /*alert, information, error, warning, notification, success*/
							text: notice.notice,
							timeout: 7000,
							layout: "bottomRight",
							theme: "semanticui"
						}).show();
					});
				});
				//Can return type: error, notice, success
				

				// show response from the php script.
			}
		});
	});

	$(document).on('after_next_page first_page_ready', () =>{
		$(formsSelectors).append('<input type="hidden" name="is_woocommerce_ajax" value="1" />')
		console.log( $(formsSelectors) );
	})
}