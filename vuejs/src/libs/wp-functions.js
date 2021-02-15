function has_term(post, taxonomy, term_slug, operator = 'or') 
{
	//console.log(post.terms[taxonomy], taxonomy, term_slug);

	let $ = window.jquery

	let found = 0
	
	if( Array.isArray(term_slug) )
	{
		let max = term_slug.length
		let count = 0

		$.each(term_slug, function(index, val) {
			if( has_term(post, taxonomy, val, operator)  )
			{
				count++
			}
		});

		if( operator == 'or' && count > 0 )
		{
			return true
		}
		else if( operator == 'and' && count == max )
		{
			return true
		}
		else
		{
			return false
		}
		
	}

	$.each(post.terms[taxonomy], function(index, val) {
		//console.log(index, val)
		if( val.slug == term_slug )
		{
			found = true
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