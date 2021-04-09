export default function(){
	let $ = this.jquery
	//let Vue = this
	//add top panels
	this.editor.Panels.addPanel({
		id: 'panel__wordpress',
		el: '.panel__wordpress',
		buttons: [
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
			},
			{
				active: false,
				label: '<div title="Show"><span class="fa fa-rocket"></span></div>',
				command: ''
			}
		],
	});

	this.editor.Panels.addPanel({
		id: 'panel__left',
		el: '.panel__left',
		buttons: [
			{
				id: 'editor-wp-back',
				active: false, // active by default
				label: '<div title="Close editor"><span class="fas fa-times"></span></div>',
				command: 'editor-wp-back',
			},
			{
				active: false, // active by default
				label: '<div><span class="fas fa-columns"></span><p>Models</p></div>',
				command: '',
			},
			{
				active: false, // active by default
				label: '<div><span class="fas fa-upload"></span><p>Media</p></div>',
				command: '',
			},
			{
				active: false, // active by default
				label: '<div><span class="fas fa-image"></span><p>Photos</p></div>',
				command: '',
			},
			{
				active: false, // active by default
				label: '<div><span class="fas fa-shapes"></span><p>Elements</p></div>',
				command: '',
			},
			{
				active: false, // active by default
				label: '<div><span class="fas fa-paragraph"></span><p>Text</p></div>',
				command: '',
			},
			{
				active: false, // active by default
				label: '<div><span class="fas fa-music"></span><p>Audio</p></div>',
				command: '',
			},
			{
				active: false, // active by default
				label: '<div><span class="fas fa-video"></span><p>Video</p></div>',
				command: '',
			},
			{
				active: false, // active by default
				label: '<div><span class="fas fa-square"></span><p>Backg...</p></div>',
				command: '',
			},
			{
				active: false, // active by default
				label: '<div><span class="fas fa-bolt"></span><p>Effects</p></div>',
				command: '',
			},
			{
				active: false, // active by default
				label: '<div><span class="fas fa-database"></span><p>API\'s</p></div>',
				command: '',
			},
			
		],
	});

	this.editor.Panels.addPanel({
		id: 'editor_select_template',
		el: '.editor_select_template',
	});

	this.editor.Panels.addPanel({
		el: '.panel__bottom',
		buttons: [
			{
				active: false, // active by default
				className: 'editor-wp-back',
				label: '<div><span class="fas fa-columns"></span></div>',
				command: '',
			}
		]
	});
	

	/*const pn = this.editor.Panels
	let assets_panel = null

	pn.addButton('views', {
		id: 'owy-assets',
		attributes: {
			class: 'fas fa-photo-video',
			title: "Edit WordPress data"
		},
		active: false,
		command: {
			run:	() => {
				if(assets_panel == null)
				{
					const panel_container = document.createElement('div')
					panel_container.innerHTML = `
						<div id="panel-owy-assets">
						</div>
						`
					const panels = pn.getPanel('views-container')
					panels.set('appendContent', panel_container).trigger('change:appendContent')
					
					assets_panel = panel_container


					this.editor.BlockManager.add('my-first-block', {
						label: 'Simple block',
						content: '<div class="my-block">This is a simple block</div>',
						category: 'owy-assets'
						});

					this.editor.BlockManager.render()

					$( ".gjs-block-category:contains('owy-assets')" ).appendTo('#panel-owy-assets').find('.gjs-title').remove()
					console.log( 'test' )
				}
				
				assets_panel.style.display = 'block'

			},
			stop: function () {
				if(assets_panel != null)
				{
					assets_panel.style.display = 'none'
				}
			}
		}
	})*/

	/*const pn = this.editor.Panels
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
			stop: function () {
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
			run: function () {
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
			stop: function () {
				if(state_panel != null)
				{
					state_panel.style.display = 'none'
				}
			}
		}
	})*/

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