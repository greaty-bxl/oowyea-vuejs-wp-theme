export default function () {
	let $ = this.jquery

	console.log(this.editor.StyleManager.getTypes());

	// var properties = styleManager.getProperties('mySector');

	this.editor.StyleManager.addSector('mySector',{
	name: 'Layout 2',
	open: true,
	properties: 
	[
	{ 
	name: 'My property',
	type: 'my-custom-prop'
	},
	]
	}, { at: 0 });


	//$('#vue-for-grapes > #sector-margin-padding').appendTo( el )
	let create_count = 0
	this.editor.StyleManager.addType('myType', {

	create({ props, change }) {

	const el = $('<form>');

	console.log('create', props.properties[0] , 'props');
	console.log(change , 'change');

	console.log('create vue', $('#sector-margin-padding') );
	//el.innerHTML = $('#sector-margin-padding').html();

	//const inputEl = el.querySelector('.my-input');
	el[0].addEventListener('change', event => change({ event })); // change will trigger the emit
	el[0].addEventListener('input', event => change({ event, complete: false }));

	/*setTimeout(function() {

	}, 10);
	*/
	// inputEl.addEventListener('input', event { props.properties[0], change }=> change({ event, complete: false }));
	return el[0];
	},

	emit({ props, updateStyle }, { event, complete }) {

	console.log('emit');

	const { value } = event.target;

	console.log(props);
	console.log(complete , 'complete');
	const valueRes = value + 'px';
	// Pass a string value for the exact CSS property or an object containing multiple properties
	// updateStyle({ [props.property]: valueRes, color: 'red' });
	props.property = 'padding-top'
	updateStyle(valueRes, { complete });
	console.log(props);
	},

	update({ value, el }) {
	console.log('update', value, el, $(el).find('.gjs-fields'));
	if( create_count == 1 ) $(el).find('.gjs-fields form').append( $('#vue-for-grapes > #sector-margin-padding') )
		create_count++
	},
	destroy() {
	// In order to prevent memory leaks, use this method to clean, eventually, created  instances, global event listeners, etc.
		console.log('destroy')
	}

	})


	this.editor.StyleManager.addProperty('mySector',{

	name: 'custom',
	properties: ['padding-top','padding-bottom','padding-left','padding-right'],
	type: 'myType',

	}, { at: 0 });

	console.log($);
}