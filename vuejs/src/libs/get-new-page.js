import is_json from 'Libs/is-json.js'

function get_new_page(vue, href, callback) {
	
	var $ = vue.$
	var timer
	var old_url = new URL(window.location)
	var url

	function insertParam(href, key, value) {
		url = new URL(href);
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

		console.log( 'get page', old_url, url );
		var json_data

		clearTimeout( timer )
		if( 
			( 
				url.searchParams.get('_wpnonce') 
				||
				old_url.pathname == url.pathname
			)
			&& is_json( data ) )
		{


			json_data = JSON.parse( data )

			if( json_data.reload )
			{
				get_new_page(vue, old_url.href, callback)
				return
			}

			console.log('UPDATE WP', json_data);
			vue.$store.state.wp = json_data
			vue.$store.commit({
				type: 'update_wp',
				wp: json_data,
			})

			if( old_url.search != url.search && !url.searchParams.get('_wpnonce') )
			{
				$(document).trigger('reload_query', json_data)
				$(document).trigger('before_next_page')

				vue.pushHistory( href )

				$(document).trigger('after_next_page')
			}
			else if( url.searchParams.get('_wpnonce') )
			{
				$(document).trigger('after__wpnonce')
			}
		}
		else if ( is_json( data ) ) 
		{
			vue.pushHistory( href )
			json_data = JSON.parse( data )
			callback( json_data )
		}

		$('#page-loader').css('display', 'none');
		
	}).fail(function() {

		/*if( url.searchParams.get('_wpnonce') && url.searchParams.get('action') )
		{
			//reload current to update wp
			console.log( "fail to load", href );
			get_new_page(vue, old_url.href, callback)
			return;
		}*/

		$('#page-loader').css('display', 'none');	
		
	})

	
}

export default get_new_page