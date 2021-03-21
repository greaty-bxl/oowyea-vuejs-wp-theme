import noty from 'noty'
import 'noty/lib/noty.css';
import 'noty/lib/themes/relax.css';
//import 'Styles/noty.css';

export default function (args){
	
	let default_args = {
		type: 'success', //alert, information, error, warning, notification, success
		text: '',
		timeout: 7000,
		layout: "bottomRight",
		theme: "relax"
	}

	args = Object.assign(default_args, args)

	new noty(args).show();


}