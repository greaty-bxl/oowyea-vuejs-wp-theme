export default function(vue, permalink, callback){

	var $ = vue.$

	let next = $('[data-state="next"]')

	$('[data-state="next"]').css({
		'position' : 'fixed',
		'width': '100%',
		'top' : '0px',
		'left' : '0px',
		'height' : '100vh',
		'overflow-y' : 'scroll',
		'opacity' : 0,
		'display' : 'block'
	});

	$('[data-state="next"]').find('.section').hide();

	$('[data-permalink="'+permalink+'"]').show();

	next.animate({
		'opacity': 1,
		},
		200, 
		() => {

			$('#app').scrollTop(0)
			
			callback()

			setTimeout( () => {
				$('[data-state="next"]').css({
					'position' : 'relative',
					'opacity' : 0,
					'display' : 'none'
				});
			}, 2 )
	});
}