export default function ( selector ){

	let $ = window.jquery

	$(selector).each( (index, el) => {
		
				$(el).parent().prev().find('label').css('display', 'none');


					$(el).parent().parent().prev().find('label').css('display', 'none');


				var placehold 


				if ($(el).parents().hasClass('acfe-form') ) {

					console.log('acfe-form');

					placehold = ""

					console.log($(el));

					placehold = $(el).parent().parent().parent().find('label').text().replace('*', '\n');
					$(el).parent().parent().parent().find('label').addClass('third-child')

					$(el).attr('placeholder', placehold);

					if ( $(el).is("textarea") ) {

						placehold = ""

						placehold = $(el).parent().parent().find('label').text().replace('*', '\n');
						// $(el).parent().parent().find('label').css('display', 'none');
						$(el).parent().parent().find('label').text(placehold)
						$(el).parent().parent().find('label').addClass('second-child')

						$(el).attr('placeholder', placehold);
					}

				}
				else{

					console.log('not acf');

					placehold = ""

					placehold = $(el).parent().parent().find('label').text().replace('*', '\n');
					$(el).parent().parent().find('label').css('display', 'none');
					$(el).parent().parent().find('label').text(placehold)
					$(el).parent().parent().find('label').addClass('second-child')

					$(el).attr('placeholder', placehold);
				}

			

			console.log(placehold);

	});



		$(selector).on("change paste keyup", function() {

			if ($(this).parents().hasClass('acfe-form') ){

				$(this).addClass('paddingTop-animation-acf')

				if ( $(this).is("textarea") ){

					$(this).parent().parent().find('label').addClass('appear-label-acf')
				}
				else{

					$(this).parent().parent().parent().find('label').addClass('appear-label-acf')
				}

			}
			else{

				$(this).addClass('paddingTop-animation')
				
				$(this).parent().parent().find('label').addClass('appear-label')
			}

			if ($(this).val() === '') {


				if ($(this).parents().hasClass('acfe-form') ){

					if ( $(this).is("textarea") ){

						$(this).parent().parent().find('label').removeClass('appear-label-acf')
					}
					else{

						$(this).parent().parent().parent().find('label').removeClass('appear-label-acf')

					}


				}

				else{

					if ( $(this).is("textarea") ){

						$(this).parent().parent().find('label').removeClass('appear-label')
					}
					else{

						$(this).parent().parent().parent().find('label').removeClass('appear-label')

					}

				}

					$(this).removeClass('paddingTop-animation')
					$(this).removeClass('paddingTop-animation-acf')			

			}
			else{

				console.log('rempli');
			}
		
		});



}	