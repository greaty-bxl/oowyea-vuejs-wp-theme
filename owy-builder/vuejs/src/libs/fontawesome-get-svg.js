import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

export default function(fa_type, name){

	let myIco;
	let nameCap = name.charAt(0).toUpperCase() + name.slice(1)

	if( fa_type == 'fas' )
	{
		myIco = fas['fa'+nameCap]
	}else{
		myIco = far['fa'+nameCap]
	}

	let svg = `<svg 
		aria-hidden="true" 
		focusable="false" 
		data-prefix="`+myIco.prefix+`" 
		data-icon="`+myIco.iconName+`" 
		role="img" 
		xmlns="http://www.w3.org/2000/svg" 
		viewBox="0 0 `+myIco.icon[0]+` `+myIco.icon[1]+`">
			<path class="" fill="currentColor" d="`+myIco.icon[4]+`"></path>
		</svg>`

	return svg
}