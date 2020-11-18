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
		'z-index' : 2000
	});

	$('[data-state="next"]').find('.section').hide();

	$('[data-permalink="'+permalink+'"]').show();

	current.animate({
		'opacity': 0,
		},
		450, () => {
	});

	next.animate({
		'opacity': 0,
		},
		450, 
		() => {

			//$('#app').scrollTop(0)
			
			callback()

			setTimeout( () => {
				current.animate({
					'opacity': 1
					},
					450, () => {
				});

				setTimeout( () => {
					next.css({
						'opacity' : 0,
						'display' : 'none'
					})
				}, 1)

			}, 1 )
	});
	
}