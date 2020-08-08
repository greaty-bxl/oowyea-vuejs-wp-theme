//import is from 'is_js'

export default function (field = String, section = Object)
{

	let acf_field = {}

	let selected_field
	let option_field = window.wp.acf.options[field]
	let meta_field = false

	console.log( section );

	if( section /*&& Object.keys(section).length !== 0*/ )
	{
		meta_field = section.acf_fields[field]
	}

	if( meta_field )
	{
		//console.log('get from meta');
		selected_field = meta_field
	}
	else
	{
		//console.log('get from option');
		selected_field = option_field
	}

	acf_field.value = selected_field
	acf_field.type = window.wp.acf.field_objects[field].type

	return acf_field
}