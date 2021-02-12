function has_term(post, taxonomy, term_slug) 
{
	//console.log(post.terms[taxonomy], taxonomy, term_slug);

	let $ = window.jquery

	let found = 0

	$.each(post.terms[taxonomy], function(index, val) {
		//console.log(index, val)
		if( val.slug == term_slug )
		{
			found = 1
		}
	});

	return found
}

function get_terms_as_string(post, tax){
	let $ = this.$

	if( post.terms[tax] )
	{
		let my_array = []

		$.each(post.terms[tax], function(index, term) {
			my_array[ my_array.length ] = term.name
		});

		let result = my_array.join(', ')
		let n = result.lastIndexOf(',');

		result = result.slice(0, n) + result.slice(n).replace(',', ' '+ this.pll__('et') );


		return result
	}
	else
	{
		return ''
	}
}

export {has_term, get_terms_as_string}