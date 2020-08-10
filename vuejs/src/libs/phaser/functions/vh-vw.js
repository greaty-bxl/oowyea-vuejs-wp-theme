function vh(percent) {
	let $ = window.jquery
	return /*Math.round*/( $('#app').outerHeight() * (percent / 100) )
}

function vw(percent) {
	let $ = window.jquery
	return /*Math.round*/( $('#app').outerWidth() * (percent / 100) )
}

export {vh, vw}