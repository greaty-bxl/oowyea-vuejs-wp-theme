import acf_get_field from 'Libs/acf-get-field'

export default function (selector, css_rules, section = Object) {

	let $ = window.jquery

	let css_hover_rules = {}

	$.each(css_rules, function(index, val) {
		if( index == ':hover' )
		{
			$.each(val, function(index2, val2) {
				css_hover_rules[index2] = acf_get_field(val2, section).value
			});
		}
		else
		{
			css_rules[index] = acf_get_field(val, section).value	
		}
		
	});

	$(selector).css( css_rules )

	$(selector).hover( () => {
		//hover state
		$(selector).css( css_hover_rules )
	}, () => {
		//normal state
		$(selector).css( css_rules )
	})
}