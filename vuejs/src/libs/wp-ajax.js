import isJson from 'Libs/is-json.js'


export default function (action, data = {}, callback) {

	let $ = window.jquery
	let result

	$.ajax({
		url: window.ajaxurl,
		type: 'post',
		data: {
			action: action, 
			vars: data,
			is_vue: true,
		},
	})
	.done(function(data) {

		if( isJson(data) )
		{
			result = JSON.parse(data);
		}
		else
		{
			result = data;
		}		    
		callback(result)
	})
	.fail(function() {
		callback(false)
	})
}