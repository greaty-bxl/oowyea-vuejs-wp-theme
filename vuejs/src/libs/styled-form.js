export default function ( selector ){

	let $ = window.jquery

	$(selector).each( (index, el) => {

		let input = $(el)
		let id = input.prop('id')
		let label = $(el).parents('form').find('label[for="'+id+'"]')
		let label_txt = label.text()

		label.hide()

		input.attr('placeholder', label_txt);

		check_state( input, label )

		input.unbind('change keyup').on("change keyup", () => {

			check_state( input, label )
		
		});
		
	});

	function check_state(input, label) {
		if (input.parents('.acfe-form').length )
		{
			input.addClass('paddingTop-animation-acf')
			label.addClass('appear-label-acf')
		}
		else
		{
			input.addClass('paddingTop-animation')
			label.addClass('appear-label')
		}

		if (input.val() === '')
		{
			if (input.parents().hasClass('acfe-form') )
			{
				label.removeClass('appear-label-acf')
			}
			else
			{
				label.removeClass('appear-label')

			}
			input.removeClass('paddingTop-animation')
			input.removeClass('paddingTop-animation-acf')			
		}
	}

}	