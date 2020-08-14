import is from 'is_js'
//import get_parent_section from 'get-parent-section-object.js'


export default function (field = String, section = Object)
{
	let $ = window.jquery

	let acf_field = {}
	let selected_field

	let is_sub_fields = false
	let sub_fields = []

	if ( is.include(field, '->') ) 
	{
		is_sub_fields = true
		sub_fields = field.split('->')
		field = sub_fields[0]
	}	

	function get_field_or_subs(fields) 
	{
		if( !is_sub_fields )
		{
			return fields[field]	
		}
		else
		{
			var next_search = fields
			$.each(sub_fields, function(index, val) {
				next_search = next_search[val]
			});
			return next_search
		}
	}

	let option_field = get_field_or_subs(window.wp.acf.options)
	
	let meta_field = false

	/*if( is.empty( section ) )
	{
		console.log('no section');
	}*/

	if( section && is.object( section.acf_fields )  )
	{
		meta_field = get_field_or_subs(section.acf_fields)
	}

	if( meta_field )
	{
		//console.log('get from meta');
		selected_field = meta_field
	}
	else if( option_field )
	{
		//console.log('get from option');
		selected_field = option_field
	}
	else
	{
		return false
	}

	acf_field.value = selected_field

	function search_key_name(sub_fields, key) {
		var result
		$.each(sub_fields, function(index, val) {
			if( key == val.name ) result = val
			
		});
		return result
	}

	if( !is_sub_fields )
	{
		acf_field.type = window.wp.acf.field_objects[field].type	
	}
	else
	{
		let next_search = window.wp.acf.field_objects[sub_fields[0]]
		$.each(sub_fields, function(index, val) {
			if( index > 0 )
			{
				next_search = search_key_name( next_search['sub_fields'], val);
			}
		});
		acf_field.type = next_search.type
	}
	

	return acf_field
}