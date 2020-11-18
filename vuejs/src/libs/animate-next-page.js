export default function(vue, permalink, callback){

	var $ = vue.$

	let next = $('[data-state="next"]')
	let current = $('[data-state="current"]')

	$('[data-state="next"]').css({
		'position' : 'fixed',
		'width': '100%',
		'top' : '0px',
		'left' : '0px',
		'height' : '100vh',
		'overflow' : 'hidden',
		'opacity' : 0,
		'display' : 'block',
		'z-index' : 2900
	});

	$('[data-state="next"]').find('.section').hide();

	$('[data-permalink="'+permalink+'"]').show();

	current.animate({
		'opacity': 0,
		},
		450, () => {
	});

	next.animate({
		'opacity': 1,
		},
		600, 
		() => {

			//$('#app').scrollTop(0)
			
			callback()

			setTimeout( () => {
				current.css({
					'opacity' : 1,
				})

				setTimeout( () => {
					next.css({
						/*'position' : 'relative',*/
						'opacity' : 0,
						'display' : 'none'
					})
				}, 500)

				

				

			}, 150 )
	});
	
}