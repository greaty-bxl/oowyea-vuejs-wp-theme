

//import fa_get_svg from 'PluginLib/fontawesome-get-svg.js'
//import { dom } from '@fortawesome/fontawesome-svg-core'

export default function (BlockManager){
	//block test	

	

	BlockManager.add('my-first-block', {
		label: '<i class="far fa-square"></i>Simple block',
		category: 'test',
		content: '<div data-gjs-type="test" data-widget="test" class="my-block">This is a simple block</div>',
		attributes: {
			test: 'Insert h1 block'
		}
	});


	/*setTimeout(function() {
		dom.watch() 
	}, 1000);*/


}