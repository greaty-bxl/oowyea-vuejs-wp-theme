function pll__(string_array, find_and_replace = false){
	
	let $ = this.$

	if( Array.isArray( string_array ) )
	{
		let return_array = []

		$.each(string_array, (index, val) => {
			return_array[index] = this.pll__(val, find_and_replace)
		});

		return return_array
	}

	

	let string = string_array
	let is_selector;
	let dom_selected;
	try 
	{
		dom_selected = $(string)
		is_selector = true
	} 
	catch (error) 
	{ 
		is_selector = false 
	}
	

	let pll_strings = this.$store.state.wp.pll_strings

	if( pll_strings )
	{
		if( pll_strings[string] )
		{
			if( find_and_replace )
			{
				if( is_selector )
				{
					dom_selected.text(pll_strings[string])
				}
				else
				{
					$("*").filter(function() {
						return $.trim($(this).text()) === string;
					}).text(pll_strings[string]);
				}
			}
			return pll_strings[string]
		}
	}
	return string
}

export default pll__