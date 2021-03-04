export default function( editor, Vue ){
	let $ = window.jquery
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


	const pn = editor.Panels
	let wp_data_panel = null

	pn.addButton('views', {
		id: 'wp-data-panel',
		attributes: {
			class: 'fa fa-wordpress', 
			title: "Edit WordPress data"
		},
		active: false,
		command: {
			run: function (editor) {
				if(wp_data_panel == null)
				{
					const editMenuDiv = document.createElement('div')
					editMenuDiv.innerHTML = `
						<div id="panel-wp-data">
						</div>
						`
					const panels = pn.getPanel('views-container')
					panels.set('appendContent', editMenuDiv).trigger('change:appendContent')
					
					wp_data_panel = editMenuDiv

					$('#vue-modals > #modal-wp-data').appendTo('#panel-wp-data')
				}
				if( editor.getSelected() )
				{
					Vue.$store.state.modal_wp_data_attrs = {
						editor : editor,
						selected : editor.getSelected(),
						ccid: editor.getSelected().ccid
					}	
				}
				
				
				wp_data_panel.style.display = 'block'
			},
			stop: function (/*editor*/) {
				if(wp_data_panel != null)
				{
					//$('#panel-wp-data > #modal-wp-data').appendTo('#vue-modals')
					wp_data_panel.style.display = 'none'
				}
			}
		}
	})
}