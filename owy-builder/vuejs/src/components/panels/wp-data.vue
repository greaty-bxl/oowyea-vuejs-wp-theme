<template>
	<div id="modal-wp-data">
		<div class="gjs-sm-header" v-show="!attr.selected">Select an element before apply WordPress Data</div>

		<div v-show="attr.selected && attr.ccid">
			<div class="gjs-sm-header">
				Use WordPess data on your elements
			</div>
			<div class="gjs-sm-header">
				Selected: #{{attr.ccid}}
			</div>			
			<div class="acf-container" v-html="wp_data_form">
				
			</div>
		</div>		
	</div>
</template>
<script>

	import wp_ajax from 'Libs/wp-ajax.js'
	import is_json from 'Libs/is-json.js'

	export default {
		/*props : {
			selected : Object
		}*/
		data(){
			return {
				wp_data_form : null,
				restoring : false,
				form_selector : '#modal-wp-data .acf-container form',
				is_saving : false,
				exclude_types : [],
				update_content : false
			}
		},
		mounted(){
			//setTimout 1ms to avoid async issue
			setTimeout(() => {
				//restor field values about history and save
				this.$parent.editor.on('run:core:undo', () => {
					this.restore_fields_from_attrs()
				});

				this.$parent.editor.on('run:core:redo', () => {
					this.restore_fields_from_attrs()
				});

				//delete wp data post on delete element
				//issue on close
				/*this.$parent.editor.on('component:remove', (el) => {
					if( el.attributes.attributes['data-wp-data-id'] )
					{
						console.log('remove',el);
					}
				});*/
				
				this.$parent.editor.on('component:selected', (el) => {
					//add wp icon on toolbar if data saved
					this.toolbar_wp_data(el)
				});

			}, 1);
			
		},
		computed : {
			editor : function () {
				return this.$parent.editor
			},
			attr : function () {
				let current = this.$store.state.modal_wp_data_attrs
				return current
			},
			grapes_template : function (){
				return this.$store.state.grapes_template
			}
		},
		methods : {
			init_acf(){
				setTimeout( ()=>{
					let $ = this.jquery
					let form_jq = $(this.form_selector)
					let queryfrom_input = $('[data-name="query_from"] select')
					let example_input = form_jq.find('[data-name="example"] select')

					//init acf scripts on the form loaded
					$(document).trigger('acf/setup_fields', $('.acf-container'))
					$(window).trigger('load')

					//append field to know than the form is called from the builder
					$(this.form_selector).append('<input type="hidden" name="vue_wp_data" value="true">')

					//remove the submit button (auto save as ajax)
					$(this.form_selector).find('.acf-form-submit input').hide()//.addClass('gjs-btn-prim gjs-btn--full')
					
					//pointer event auto
					this.active_form()

					$(this.form_selector).find('[data-name="template"] input').val(this.grapes_template.post_name)
					$(this.form_selector).find('[data-name="component_id"] input').val(this.attr.ccid)

					//if query from or example change then reload form with new values
					$(this.form_selector).find('[data-name="query_from"] select, [data-name="example"] select')
					.unbind('change')
					.on('change', () => {
						this.reload_form_and_save()
					});

					//any value change then save
					form_jq.unbind('change').on('change', () => {
						this.save_acf_form()
					});

					example_input.on('change', () => {
						this.update_content = true
					});

					$('[data-name="open_query_generator"] ').on('click', () => {
						this.editor.Modal
						.onceOpen( () => {

							$('#vue-for-grapes > #owy-wp-query-vue').appendTo('#gjs-mdl-c')

							let wp_query_modal = this.$parent.$refs.WpQuery

							wp_query_modal.opened('new_post')
							
						}).onceClose( () => {
							$('#gjs-mdl-c > #owy-wp-query-vue').appendTo('#vue-for-grapes')
							this.editor.Modal.setContent('').setTitle('')
						}).open({
							title : 'WP Query Generator'
						})
					});

					//disable submit form
					form_jq.on('submit', function(event) {
						event.preventDefault();
					});

					//simulate if needed
					if( this.update_content )
					{
						this.wp_data_simulate()
						this.update_content = false
					}

					//get current example from data or from other same queries
					let acf_attr = this.wp_data_get_formated_data_from_acf_attr(this.attr.selected)
					if( acf_attr )
					{
						//if example has been changed by another similar query then reload the form with new info
						if( example_input.val() != acf_attr.example && acf_attr.example != undefined )
						{
							example_input.val( acf_attr.example )
							this.reload_form_and_save()
						}
						//On choose current check if a same query has an example then reload the form
						if( example_input.val() == 'none' && queryfrom_input.val() == 'current' )
						{
							example_input.val( this.wp_date_get_example_from_others('current') )
							this.reload_form_and_save()
						}
					}					
				}, 1 )
			},
			get_acf_form : function(){
				
				this.disable_form()

				let data = {
					template: this.grapes_template.post_name,
					id : this.attr.ccid
				}

				wp_ajax('owy_get_builder_wp_data_form_ajx', data, (result)=>{
					this.wp_data_form = result
					this.init_acf()
				})
			},
			save_acf_form : function(callback = null){
				let $ = this.jquery 
				if( !this.is_saving )
				{
					this.is_saving = true

					var form_data = $(this.form_selector).serializeObject()

					//console.log('serializeObject', form_data);

					form_data.action = "owy_save_wp_data"

					$.post(this.ajaxurl, form_data, (data) => {
						let json = $.parseJSON( data )
						console.log('save wp data', json, this.attr );
						if( !this.restoring )
						{
							this.attr.selected.setAttributes({ 
								'data-wp-data': this.get_data_attr_for_grapes_comp(), 
								'data-wp-data-id' : json.post_id  
							});
						}

						this.restoring = false
						this.is_saving = false

						this.wp_data_simulate(this.attr.selected)

						if( callback !== null )
						{
							callback()
						}
					});
				}
			},
			get_data_attr_for_grapes_comp : function(){
				let $ = this.jquery

				var form_serialize = $(this.form_selector).serializeArray()	
				
				let to_splice = []
				$.each(form_serialize, function(index, val) {
					if( val.name.indexOf( '_' ) === 0 )
					{
						to_splice[to_splice.length] = index
					}					
				});

				$.each(to_splice, function(index, val) {
					form_serialize.splice(val-index, 1)
				});

				return JSON.stringify(form_serialize)
				
			},
			reload_form_and_save : function(){
				this.disable_form()
				this.save_acf_form( () => {
					this.get_acf_form()
				})
			},
			disable_form : function(){
				this.jquery('#modal-wp-data .acf-container').css('pointer-event', 'none');
			},
			active_form : function(){
				this.jquery('#modal-wp-data .acf-container').css('pointer-event', 'auto');
			},
			restore_fields_from_attrs : function(){
				let $ = this.jquery
				let data = this.attr.selected.getAttributes()['data-wp-data']
				if( is_json(data) )
				{
					let fields = JSON.parse( data )
					$.each(fields, function(index, val) {
						$('[name="'+val.name+'"]').val(val.value)
					});

					this.restoring = true
					this.reload_form_and_save()
				}
			},
			toolbar_wp_data : function(el){
				if( el.view.$el.data('wp-data') !== undefined )
				{
					let toolbar = el.attributes.toolbar
					let toolbar_str = JSON.stringify( toolbar )

					if( toolbar_str.search("owy-cmd-wp-data") == -1 )
					{
						toolbar[toolbar.length] = {
							attributes: {class: 'fab fa-wordpress-simple'},
							command: 'owy-cmd-wp-data'
						}
					}
				}
			}
		},
		watch : {
			'$store.state.grapes_template' : function(){
				this.wp_data_form = null
			},
			'$store.state.modal_wp_data_attrs' : function(){
				this.get_acf_form()
			}
		}
	}
</script>

<style>
	#modal-wp-data{
		text-align: left;
	}
	#modal-wp-data .gjs-sm-header{
		text-align: center;
	}
	.acf-fields.-border {
		border: #fff solid 1px !important;
		background: transparent !important;
	}

	.acf-table>tbody>tr>th, .acf-table>tbody>tr>td, .acf-table>thead>tr>th, .acf-table>thead>tr>td {
		background: transparent !important;
	}

	.acf-field input[type="text"], .acf-field input[type="password"], .acf-field input[type="date"], .acf-field input[type="datetime"], .acf-field input[type="datetime-local"], .acf-field input[type="email"], .acf-field input[type="month"], .acf-field input[type="number"], .acf-field input[type="search"], .acf-field input[type="tel"], .acf-field input[type="time"], .acf-field input[type="url"], .acf-field input[type="week"], .acf-field textarea, .acf-field select{
		font-size: inherit !important;
	}

	.acf-form-submit{
		padding: 10px;
	}

	.acf-fields>.acf-field{
		border-top: none !important;
		padding: 15px 12px 0px !important;
	}

	.acf-fields>.acf-field:last-child{
		padding: 15px 12px !important;
	}

	.acf-repeater .acf-row-handle{
		width: 4px !important;
	}

	.acf-field .acf-label {
		margin: 0 0 5px !important;
	}

</style>