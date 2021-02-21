export default function ( selector ){

	let $ = window.jquery

	$(selector).each( (index, el) => {

		let input = $(el)
		let id = input.prop('id')
		let label = $(el).parents('form').find('label[for="'+id+'"]')
		label.find('.optional').remove()
		let label_txt = label.text()

		label.hide()


		// console.log(input.parents('.acfe-form').length);

		// label_txt = label_txt.replace('*','')
		
		if (input.parents('.acfe-form').length === 0 )
		{
			label_txt = label_txt.replace('*','')

		}

		input.attr('placeholder', label_txt);

		check_state( input, label )

		if(input.attr('type') === 'hidden'){

			var id_input_hide =  input.prop('id');

			if( id_input_hide != undefined  ) {

				input.parents('form').find('[for="'+id+'"]').remove();
	
			}
			
		}
		else{

			input.unbind('change keyup').on("change keyup", () => {

				check_state( input, label )
			
			});

		}
		
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


	// $('[type="hidden"]').find('')

}	