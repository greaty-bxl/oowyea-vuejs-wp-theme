function has_term(post, taxonomy, term_slug) 
{
	console.log(post.terms[taxonomy], taxonomy, term_slug);

	let $ = window.jquery

	let found = 0

	$.each(post.terms[taxonomy], function(index, val) {
		console.log(index, val)
		if( val.slug == term_slug )
		{
			found = 1
		}
	});

	return found
}

export {has_term}