export default function (action, data = {}, callback) {

	let $ = window.jquery

	$.ajax({
		url: window.ajaxurl,
		type: 'post',
		data: {action: action, vars: data},
	})
	.done(function(data) {
		callback(data)
	})
	.fail(function() {
		callback(false)
	})
}