import defaultsFonts from 'Src/fonts.js'
export default function (fonts = {}){
	
	var $ = window.jquery

	
	if(  typeof window.smartFonts !== 'object' || window.smartFonts === null )
	{
		window.smartFonts = {}
	}

	window.smartFonts = Object.assign( defaultsFonts, window.smartFonts, fonts)

	console.log( window.smartFonts, $('#app').innerWidth())

	function update_size()
	{
		$.each(window.smartFonts, function(selector, fontSize) {
			$( selector ).css('font-size', (((( $('#app').innerHeight() + $('#app').innerWidth() ) / 2)  / 34 / 20) * fontSize) + 'px' );
		});
	}

	update_size()

	$(window).resize( () => {
		update_size()
	});
	
}