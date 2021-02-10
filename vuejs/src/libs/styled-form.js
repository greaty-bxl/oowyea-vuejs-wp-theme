export default function ( selector ){

	let $ = window.jquery

	$(selector).each( (index, el) => {

		// $(el).find('label').hide();

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
		
		/*$(el).parent().prev().find('label').css('display', 'none');

		$(el).parent().parent().prev().find('label').css('display', 'none');


		var placehold 



		if ($(el).parents().hasClass('acfe-form') ) {

			console.log('acfe-form');

			placehold = ""

			console.log($(el));

			placehold = $(el).parent().parent().parent().find('label').text().replace('*', '');
			$(el).parent().parent().parent().find('label').addClass('third-child')

			$(el).attr('placeholder', placehold);

			if ( $(el).is("textarea") ) {

				placehold = ""

				placehold = $(el).parent().parent().find('label').text().replace('*', '');
				// $(el).parent().parent().find('label').css('display', 'none');
				$(el).parent().parent().find('label').text(placehold)
				$(el).parent().parent().find('label').addClass('second-child')

				$(el).attr('placeholder', placehold);
			}

		}
		else{

			console.log('not acf');

			placehold = ""

			let placehold_el = $(el).parent().parent().find('label')

			if( placehold_el.length == 0 )
			{
				placehold_el = $(el).parent().find('label')
			}
			// console.log(placehold_el.text());

			if( placehold_el.length == 1 )
			{

				placehold = " ";

				placehold = $(el).parent().parent().find('label').text()

				console.log($(el));

				console.log($(el).parent().parent().find('label'));

				$(el).parent().find('label').css('display', 'none');

				// $(el).parent().parent().find('label').css('display', 'none');
				// $(el).parent().parent().find('label').text(placehold)

				$(el).parent().parent().find('label').addClass('second-child')

				$(el).attr('placeholder', placehold);
			}
			
			
		}*/

			

		// console.log(placehold);

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