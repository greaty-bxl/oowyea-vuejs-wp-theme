export default function () {
	console.log('init blocks', this.editor);
	
	let $ = this.jquery

	console.log('blocks', this.editor.BlockManager.getAll() );

	/*let blocks = []
	$.each(this.editor.BlockManager.getAll().models, (index, val) => {
		blocks[ blocks.length ] = val.id
	});

	$.each(blocks, (index, val) => {
		this.editor.BlockManager.remove(val)
	});*/

	//block test
	this.editor.BlockManager.add('my-first-block', {
		label: 'Simple block',
		category: 'test',
		content: '<div data-gjs-type="test" data-widget="test" class="my-block">This is a simple block</div>',
		attributes: {
			test: 'Insert h1 block'
		}
	});
	
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