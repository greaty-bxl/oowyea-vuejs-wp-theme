export default function( editor ){
	//add top panels
	editor.Panels.addPanel({
		id: 'panel__wordpress',
		el: '.panel__wordpress',
		buttons: [
			{
				id: 'editor-wp-back',
				active: false, // active by default
				className: 'editor-wp-back',
				label: '<div title="Close editor"><span class="fa fa-close"></span></div>',
				command: 'editor-wp-back',
			},
			{
				id: 'editor-save',
				active: false, // active by default
				className: 'editor-save',
				label: '<div title="Save as development"><span class="fa fa-save"></span></div>',
				command: 'editor-save', // Built-in command
			},
			{
				id: 'publish',
				active: false,
				label: '<div title="Publish"><span class="fa fa-upload"></span></div>',
				command: 'owy-publish-template'
			}
		],
	});

	editor.Panels.addPanel({
		id: 'panel__more',
		el: '.panel__more',
		buttons: [
			{
				id: 'editor-wp-back',
				active: false, // active by default
				className: 'editor-wp-back',
				label: '<div><span class="fa fa-comment"></span></div>',
				command: '', // Built-in command
			}
		],
	});

	editor.Panels.addPanel({
		id: 'editor_select_template',
		el: '.editor_select_template',
	});
}