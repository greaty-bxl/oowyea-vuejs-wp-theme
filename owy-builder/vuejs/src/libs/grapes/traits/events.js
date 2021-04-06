function new_event(el, count, index){

	el.addTrait({
		type: 'separator',
		name: 'data-owy-event-separator',
	}, {at: index})

	el.addTrait({
		type: 'text',
		name: 'data-owy-event-value-'+count,
		label: 'State value',
	}, {at: index})

	el.addTrait({
		type: 'text',
		name: 'data-owy-event-state-'+count,
		label: 'Update state',
	}, {at: index})

	el.addTrait({
		type: 'select',
		name: 'data-owy-event-trigger-'+count,
		label: 'event',
		options: [ // Array of options

			{ id: 'click', name: 'Click'},
			{ id: 'mouseover', name: 'Mouse over'},
			{ id: 'mouseout', name: 'Mouse out'},
			{ id: 'keydown', name: 'Key down'},
			{ id: 'change', name: 'Change'},
			{ id: 'enterscreen', name: 'Enter in screen'},
			{ id: 'inscreen', name: 'Is in screen'},
			{ id: 'leavescreen', name: 'Leave screen'},
			{ id: 'any', name: '- Enter an event -'},
			{ id: 'none', name: '- Remove event -', value:false},
		],
	}, {at: index})

}

let count = 1
let $ = window.jquery

function add_event(editor){

	let el = editor.getSelected()
	let add_index = null
	
	$.each(el.attributes.traits.models, function(index, val) {
		if( val.attributes.name == 'add-event' )
		{
			add_index = el.getTraitIndex(val.attributes.name)
		}
	});

	new_event(el, count, add_index)
	count++
}

export default function (editor) {

	editor.on('component:selected', (el) => {

		setTimeout( () => {
			if( !el.getTrait('data-owy-event'))
			{
				el.addTrait({
					type: 'grp-title',
					name: 'data-owy-event',
					label: 'Event to state'
				})

				el.addTrait({
					type: 'button',
					name: 'add-event',
					label: false,
					text: 'Add an event',
					full: 1,
					command: add_event,
				})

				add_event(editor)

				let count_attr = 0
				$.each(el.attributes.attributes, function(index) {
					if( index.indexOf('data-owy-event-trigger') === 0 ){
						count_attr++
						if( count_attr > 1 )
						{
							add_event(editor)
						}
					}
				});
			}
		}, 1)		
	});	
}