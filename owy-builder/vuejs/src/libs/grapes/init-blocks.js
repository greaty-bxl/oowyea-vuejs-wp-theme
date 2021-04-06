//import basics from 'PluginLib/grapes/blocks/basics.js'

import * as Vue from "vue";

export default function () {
	//console.log('init blocks', this.editor);
	
	let $ = this.jquery

	//console.log('blocks', this.editor.BlockManager.getAll() );

	let blocks = []
	$.each(this.editor.BlockManager.getAll().models, (index, val) => {
		blocks[ blocks.length ] = val.id
	});

	$.each(blocks, (index, val) => {
		this.editor.BlockManager.remove(val)
	});

	console.log('types', this.editor.DomComponents.getTypes(), this.editor.DomComponents.getType("checkbox") );


	/* Set types */
	const domc = this.editor.DomComponents;
	const textType = domc.getType('text');
	//const textType = domc.getType('text');
	const textModel = textType.model;
	const textView = textType.view;

	const defaultType = domc.getType("cell");
	const defaultModel = defaultType.model;
	const defaultView = defaultType.view;

	this.editor.DomComponents.addType('block', {
		isComponent: function(el) {
			if( $(el).data('owy-block') !== undefined && $(el).data('owy-block') !== 'text' )
			{
				return true
			}
			else
			{
				return false
			}
		},
		model: {
			defaults: {
				...defaultModel.prototype.defaults,
				draggable: 'section, header, footer, [data-owy-block]',
				droppable: true,
				badgable: true,
				editable: true,
			}
		},
		view : defaultView
	});

	this.editor.DomComponents.addType('text', {
		isComponent: function(el) {
			if( $(el).data('owy-block') !== undefined && $(el).data('owy-block') == 'text' )
			{
				return true
			}
			else
			{
				return false
			}
		},
		model: {
			defaults: {
				...textModel.prototype.defaults,
				label: 'my name',
				draggable: 'section, header, footer, [data-owy-block]',
			}
		},
		view : textView
	});

	let main_blocks = ['header', 'section', 'footer']
	
	for (var i = 0; i < main_blocks.length; i++) {

		let val = main_blocks[i]
		this.editor.DomComponents.addType(val, {
			isComponent: function(el) {
				if( $(el).prop('tagName') == val.toUpperCase() )
				{
					return true
				}
				else
				{
					return false
				}
			},
			model: {
				defaults: {
					/*...defaultModel.prototype.defaults,*/
					draggable: false,
					droppable: true,
					badgable: false,
					editable: false,
					removable: false,
					copyable: false
				}
			},
			/*view : defaultView*/
		});
		
	}
		
	
	
	/*this.editor.DomComponents.addType('block', {
		isComponent: el => {
			if( $(el).data('owy-block') !== undefined )
			{
				return true
			}
			else
			{
				return false
			}
		},
		extend: 'text',
		//model: { ... }, // Will extend the model from 'other-defined-component'
		//view: { ... }, // Will extend the view from 'other-defined-component'
	});*/

	/* Auto add blocks */
	const blocks_config = require.context('Blocks/', true, /\.(config\.js)$/i);
	blocks_config.keys().map(key => {

		let file = key.substring(2)		
		let block_object = require( `Blocks/${file}` ).default
		
		let el = document.createElement('div');
		let new_comp = Vue.createApp( block_object.vue, {} )
		new_comp.mount(el)

		$('head style').each( (index, style) => {
			if( $(style).text().indexOf( 'grapesjs add css' ) >= 0 )
			{
				$(el).append( '<style>' + $(style).text() + '<style>' )
			}
		});
		

		let default_block = {
			slug : '',
			label: 'give a name to your block',
			category: 'block',
			content: $(el).html(),
			attributes : {
				'data-owy-block' : $(el).find('>*').first().data('owy-block')
			}
		}

		block_object = Object.assign( default_block, block_object )

		console.log(block_object);
		
		this.editor.BlockManager.add(block_object.slug, block_object);
		/*this.Templates[name] = () => import( `Templates/${file}` )*/

		//let block_name = $(el).find('>*').first().data('block')

		

	});

	
	//basics(this.editor.BlockManager)

	
}