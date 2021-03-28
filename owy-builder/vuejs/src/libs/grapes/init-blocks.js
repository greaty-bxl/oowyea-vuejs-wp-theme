import basics from 'PluginLib/grapes/blocks/basics.js'

import * as Vue from "vue";

export default function () {
	console.log('init blocks', this.editor);
	
	let $ = this.jquery

	console.log('blocks', this.editor.BlockManager.getAll() );

	let blocks = []
	$.each(this.editor.BlockManager.getAll().models, (index, val) => {
		blocks[ blocks.length ] = val.id
	});

	$.each(blocks, (index, val) => {
		this.editor.BlockManager.remove(val)
	});

	const blocks_vue = require.context('Blocks/', true, /\.(block\.vue)$/i);
	blocks_vue.keys().map(key => {

		/*let name = vue_key_to_name( key )*/

		console.log('context ', key);
		/*this.Templates[name] = () => import( `Templates/${file}` )*/

	});

	const blocks_config = require.context('Blocks/', true, /\.(config\.js)$/i);
	blocks_config.keys().map(key => {

		/*let name = vue_key_to_name( key )*/
		let file = key.substring(2)
		//let vue_file = file.replace('config.js', 'block.vue') 
		
		let block_object = require( `Blocks/${file}` ).default
		//let vue_object = () => import( `Blocks/${vue_file}` ).default
		
		let el = document.createElement('div');
		Vue.createApp(block_object.vue).mount(el)

		//let el = document.createElement('div');
		

		//console.log('block_vue ', block_object.vue, el );

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
			content: $(el).html()
		}

		block_object = Object.assign( default_block, block_object )


		this.editor.BlockManager.add(block_object.slug, block_object);
		/*this.Templates[name] = () => import( `Templates/${file}` )*/

	});

	basics(this.editor.BlockManager)

	this.editor.DomComponents.addType('test', {
			isComponent: function(el) {
				if( $(el).data('widget') == 'test' )
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
					traits: [
						// Strings are automatically converted to text types
						'id', // Same as: { type: 'text', name: 'name' }
						'title',
						'data-test',
						{
							type: 'button',
							//label: 'hello',
							text: 'Click me',
							full: true,
							command: () => alert('Hello'),
						},
						{
							type: 'select', // Type of the trait
							label: 'Type', // The label you will see in Settings
							name: 'type', // The name of the attribute/property to use on component
							options: [
								{ id: 'text', name: 'Text'},
								{ id: 'email', name: 'Email'},
								{ id: 'password', name: 'Password'},
								{ id: 'number', name: 'Number'},
							]
						}, 
						{
							type: 'checkbox',
							name: 'required',
						}
					],
					// As by default, traits are binded to attributes, so to define
					// their initial value we can use attributes
					//attributes: { type: 'text', required: true },
				},
			},
			init() {
				this.on('change:attributes:id', () => {
					console.log('change id');
				});
			},

			/*handleTypeChange() {
				console.log('Input type changed to: ', this.getAttributes().type);
			},*/
	});
}