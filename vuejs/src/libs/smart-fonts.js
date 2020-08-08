import defaultsFonts from 'Src/fonts.js'
export default function (fonts = {}){
	
	var $ = window.jquery

	
	if(  typeof window.smartFonts !== 'object' || window.smartFonts === null )
	{
		window.smartFonts = {}
	}

	window.smartFonts = Object.assign( defaultsFonts, window.smartFonts, fonts)

	function update_size()
	{
		$.each(window.smartFonts, function(selector, fontSize) {
			
			
			//var divider = $('#app').innerHeight() / $('#app').innerWidth()

			//console.log(fontSize, ( ( $('#app').innerHeight() + $('#app').innerWidth() / 2 ) / 999 ) * fontSize )

			$( selector ).css('font-size', ( ( ( $('#app').innerHeight() + $('#app').innerWidth() + 6000 ) / 2 ) / 4200 ) * fontSize  + 'px' );
		});
	}

	update_size()

	$(window).resize( () => {
		update_size()
	});
	
}