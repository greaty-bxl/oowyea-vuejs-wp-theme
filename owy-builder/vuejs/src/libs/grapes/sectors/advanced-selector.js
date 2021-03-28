export default function (editor, $) {

	let StyleManager = editor.StyleManager

	StyleManager.addSector('advanced-selector',{
		name: 'Advanced Selector',
		open: true,
		properties: []
	}, { at: 0 });


	let parentSelector = StyleManager.addProperty('advanced-selector',{
		name: 'Parent Selector',
		property: 'parent-selector',
		type: 'text',
		defaults: '',
		/*full: 1,*/
	},{ at: 1 });


	parentSelector.view.model.on('change:value', (result) => {
		
		let value = result.attributes.value
		let current_selector = $('.gjs-clm-sel-id').text() + $('.gjs-clm-sel-rule').text()
		
		if( value == 'body' ) value = '#wrapper'

		parentSelector.set('value', false)

		setTimeout( () => {
			$('#gjs-sm-parent-selector .gjs-sm-label').removeClass('gjs-four-color')
		}, 10);

		if( value )	StyleManager.setTarget(value + ' ' + current_selector)

	});

	StyleManager.addProperty('advanced-selector',{
		name: 'Dynamic State',
		property: 'dynamic-state',
		type: 'select',
		defaults: 'none',
		list: [{
			value: 'none',
			name: '- none -',
		}],
	},{ at: 1 });
	
}