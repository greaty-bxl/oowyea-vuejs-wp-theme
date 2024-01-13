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
	$('#page-loader').css('display', 'flex');	
	timer = setTimeout( ()=>{		
		console.log('canvas', vue.$store.state.loader);
		let w = window.innerWidth
		let h = window.innerHeight
		let fabric = vue.$store.state.loader.fabric
		let canvas = vue.$store.state.loader.canvas
		let group = vue.$store.state.loader.group
		let path = vue.$store.state.loader.path

		$('#logo-loader img').addClass('hello')
		//entrée
		fabric.util.animate({
				startValue: -(h),
				endValue: h / 4,
				duration: h * 0.9,
				easing: fabric.util.ease.easeInQuad,
				onChange: function(value) {			
					group.set('top', (group.height / 2 - value));
					canvas.renderAll();
				},
				onComplete: function() {
					console.log('animation complete');

					//sortie inverser sens de la courbe
					group.set({
						angle: 180,
						originX: 'center',
						originY: 'center',
					}).setCoords();

					group.left = w / 2;
					group.top = group.height / 2 ;

					group.setCoords();

					vue.$store.state.menu_degrade = true
					vue.$store.state.header = true
					vue.$store.state.footer = true

					setTimeout( () => {
						
						$('#logo-loader img').removeClass('hello')

						fabric.util.animate({
								startValue: 0,
								endValue: group.height,
								duration: h * 0.9,
								easing: fabric.util.ease.easeInQuad,
								onChange: function(value) {			
									group.set('top', group.height / 2 - value);
									canvas.renderAll();
								},
								onComplete: function() {
									console.log('animation complete');
								}
							});
						fabric.util.animate({
							startValue: h / 4,
							endValue: 0,
							duration: h * 0.9,
							easing: fabric.util.ease.easeInQuad,
							onChange: function(value) {			
								path.set('path', [['M', 0, value], ['Q', w / 2, (value) * -1, w, value], ['L', w, h + h / 4], ['Q', w / 2, h + h / 4, 0, h + h / 4], ['Z']]);
							},
							onComplete: function() {
								console.log('animation complete');
								group.set({
									angle: 0,
									originX: 'center',
									originY: 'center',
								}).setCoords();

								group.left = w / 2;
								group.top = h * 2 - ( h / 2 ) + 100;
								$('#page-loader').css('display', 'none');
							}
						});
					}, 500)
					//sortie
					// Animer la courbe et déplacer le groupe
					
				}
		});

		fabric.util.animate({
			startValue: h / 4,
			endValue: 0,
			duration: h * 0.9,
			easing: fabric.util.ease.easeInQuad,
			onChange: function(value) {			
				path.set('path', [['M', 0, value], ['Q', w / 2, (value) * -1, w, value], ['L', w, h + h / 4], ['Q', w / 2, h + h / 4, 0, h + h / 4], ['Z']]);
			},
			onComplete: function() {
				console.log('animation complete');
			}
		});

	}, 10 )




	$.get( insertParam( href, 'add_to_json', 1 ), (data) => {

		//console.log( 'get page', old_url, url );
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

		//$('#page-loader').css('display', 'none');
		
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