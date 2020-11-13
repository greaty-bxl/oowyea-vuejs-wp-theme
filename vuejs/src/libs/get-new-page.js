function get_new_page(vue, href, callback) {
	
	var $ = vue.$
	var timer

	function insertParam(href, key, value) {
		var url = new URL(href);
		var search_params = url.searchParams;

		// new value of "id" is set to "101"
		search_params.set(key, value);

		// change the search property of the main url
		url.search = search_params.toString();

		// the new url string
		var new_url = url.toString();

		// output : http://demourl.com/path?id=101&topic=main
		return new_url;
	}

	//insertParam( href, 'add_to_json', 1 );
	timer = setTimeout( ()=>{
		$('#page-loader').css('display', 'flex');	
	}, 500 )

	

	$.get( insertParam( href, 'add_to_json', 1 ), (data) => {
		console.log('get page', data );
		clearTimeout( timer )
		if( data == 'refresh' )
		{
			get_new_page(vue, window.location.href, callback)
			return;
		}

		$('#page-loader').css('display', 'none');
		vue.pushHistory( href )
		var json_data = JSON.parse( data )
		callback( json_data )
	});

	
}

export default get_new_page