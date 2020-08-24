function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}


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
			post_id: null
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