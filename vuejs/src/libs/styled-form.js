export default function ( selector ){

	let $ = window.jquery

	$(selector).each( (index, el) => {
		
				$(el).parent().prev().find('label').css('display', 'none');
					$(el).parent().parent().prev().find('label').css('display', 'none');


				var placehold 

				if ($(el).parents().hasClass('acfe-form') ) {

					placehold = $(el).parent().parent().parent().find('label').text().replace('*', '\n');
					$(el).parent().parent().parent().find('label').text(placehold)
					$(el).parent().parent().parent().find('label').addClass('third-child')

					if ( $(el).is("textarea") ) {

						placehold = $(el).parent().parent().find('label').text().replace('*', '\n');
						$(el).parent().parent().find('label').text(placehold)
						$(el).parent().parent().find('label').addClass('second-child')
					}

				}
				else{

					placehold = $(el).parent().parent().find('label').text().replace('*', '\n');
					$(el).parent().parent().find('label').text(placehold)
					$(el).parent().parent().find('label').addClass('second-child')
				}

			$(el).attr('placeholder', placehold);

	});



		$(selector).on("change paste keyup", function() {

			$(this).addClass('paddingTop-animation')

			if ($(this).parents().hasClass('acfe-form') ){

				console.log('qfpo');

			}
			else{

				$(this).parent().parent().find('label').addClass('appeare-label')
			}

			if ($(this).val() === '') {

				$(this).removeClass('paddingTop-animation')
				$(this).parent().parent().find('label').removeClass('appeare-label')
				
				console.log('vide');
			}
			else{

				console.log('rempli');
			}
		
		});



}	