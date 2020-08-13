import is from 'is_js'

export default function (field = String, section = Object)
{

	let acf_field = {}

	let selected_field
	let option_field = window.wp.acf.options[field]
	let meta_field = false

	if( section && is.object( section.acf_fields )  )
	{
		meta_field = section.acf_fields[field]
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
	acf_field.type = window.wp.acf.field_objects[field].type

	return acf_field
}