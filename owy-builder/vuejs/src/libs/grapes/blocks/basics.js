

import fa_get_svg from 'PluginLib/fontawesome-get-svg.js'

export default function (BlockManager){
	//block test
	//class="svg-inline--fa fa-cogs fa-w-20" 
	console.log( fa_get_svg('far', 'square') );
	

	

	BlockManager.add('my-first-block', {
		label: fa_get_svg('far', 'square') +'Simple block',
		category: 'test',
		content: '<div data-gjs-type="test" data-widget="test" class="my-block">This is a simple block</div>',
		attributes: {
			test: 'Insert h1 block'
		}
	});


	


}