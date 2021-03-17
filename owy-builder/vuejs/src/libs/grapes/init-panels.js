export default function(){
	let $ = this.jquery
	let Vue = this
	//add top panels
	this.editor.Panels.addPanel({
		id: 'panel__wordpress',
		el: '.panel__wordpress',
		buttons: [
			{
				id: 'editor-wp-back',
				active: false, // active by default
				className: 'editor-wp-back',
				label: '<div title="Close editor"><span class="fas fa-times"></span></div>',
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
				id: 'editor-publish',
				active: false,
				className: 'editor-publish',
				label: '<div title="Publish"><span class="fa fa-upload"></span></div>',
				command: 'owy-publish-template'
			}
		],
	});

	this.editor.Panels.addPanel({
		id: 'editor_select_template',
		el: '.editor_select_template',
	});


	const pn = this.editor.Panels
	//init wp data panel	
	let wp_data_panel = null

	pn.addButton('views', {
		id: 'wp-data-panel',
		attributes: {
			class: 'fab fa-wordpress-simple',
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

					$('#vue-for-grapes > #modal-wp-data').appendTo('#panel-wp-data')
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
					wp_data_panel.style.display = 'none'
				}
			}
		}
	})

	//init state interaction panel
	let state_panel = null

	pn.addButton('views', {
		id: 'wp-data-panel',
		attributes: {
			class: 'fa fa-bolt', 
			title: "Edit States interaction"
		},
		active: false,
		command: {
			run: function (/*editor*/) {
				if(state_panel == null)
				{
					const editMenuDiv = document.createElement('div')
					editMenuDiv.innerHTML = `
						<div id="panel-states-interact">
						</div>
						`
					const panels = pn.getPanel('views-container')
					panels.set('appendContent', editMenuDiv).trigger('change:appendContent')
					
					state_panel = editMenuDiv
				}
				
				
				state_panel.style.display = 'block'
			},
			stop: function (/*editor*/) {
				if(state_panel != null)
				{
					state_panel.style.display = 'none'
				}
			}
		}
	})

	/*
		Replace Fontawesome oldated icones
	*/
	let replace_icos = {
		'fa fa-square-o' : 'far fa-square',
		'fa fa-repeat' : 'fas fa-redo',
		'fa fa-mobile' : 'fas fa-mobile-alt',
		'fa fa-tablet' : 'fas fa-tablet-alt'
	}

	$.each(this.editor.Panels.getPanels().models, function(i_pan, panel) {
		$.each(panel.buttons.models, function(i_bt, button) {
			
			let fa_class = button.attributes.className

			$.each(replace_icos, function(replace, by) {
				fa_class = fa_class.replace(replace, by)
			});

			button.set('className', fa_class)
		});
	});
	
}