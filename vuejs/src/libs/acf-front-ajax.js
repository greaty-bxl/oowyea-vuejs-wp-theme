export default function (vue) {

	let $ = vue.$

	let formsSelectors = '.acf-form'


	$(document).on('submit', formsSelectors, function(event) {

		event.preventDefault();
		$('.acf-spinner').remove()


		let form = $(event.currentTarget)
		let fields = form.serialize()
		let url = form.attr('action')

		if( !url || url == '' )
		{
			url = window.location.href
		}

		form.find('input, select, textarea, button').each( (index, el) => {
			if( !$(el).prop('disabled') )
			{
				$(el).addClass('disabled-by-ajax').prop('disabled', true)
			}
		});

		$('#page-loader').css('display', 'flex');

		
		form.prev('.updated').remove()
		form.prev('.acfe-form-success').remove()

		console.log('acf send');

		$.ajax({
			type: "POST",
			url: url,
			data: fields, // serializes the form's elements.
			success: function(result)
			{
				console.log('acf return');
				let json = JSON.parse( result )
				
				form.replaceWith(json.new_acf);

				$(formsSelectors).append('<input type="hidden" name="is_acf_ajax" value="1" />')

				$('#page-loader').css('display', 'none');
			}
		}).fail( ()=>{

			//let fields_err = $('.acf-field.acf-error input, .acf-field.acf-error textarea')
			

			$('.disabled-by-ajax').removeProp('disabled')

			$('.disabled-by-ajax').prop('disabled', false)

			$('.disabled-by-ajax').removeClass('disabled-by-ajax')

			$('#page-loader').css('display', 'none');
		});
	});

	$(document).on('after_next_page first_page_ready after__wpnonce', () =>{
		setTimeout( ()=> {
			
			$(formsSelectors).append('<input type="hidden" name="is_acf_ajax" value="1" />')
			//console.log( $(formsSelectors) );			
		}, 1);
		
	})
}