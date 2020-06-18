function wp_content_filter(vue){
	console.log('wp_content_filter')

	vue.$("[data-wp=title]").text( vue.wp.title )
}

function wp_get_sections(vue){
	if( is_page_template(vue) )
	{
		var page_template = "index"
		return page_template
	}
	else
	{
		get_hierarchy()
	}
	console.log('wp_get_sections')
}

function is_page_template(vue){
	console.log(vue);
	return true
}

function get_hierarchy(){
	return 'index'
}

export {wp_content_filter,wp_get_sections};