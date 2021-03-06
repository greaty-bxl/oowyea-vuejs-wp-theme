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
				history : false
			}
		},
		mounted(){
			let $ = this.jquery 

			//convert form in serialized object (for name as array)
			$.fn.serializeObject = function() {
				var data = {};

				function buildInputObject(arr, val) {
				if (arr.length < 1) {
				return val;  
				}
				var objkey = arr[0];
				if (objkey.slice(-1) == "]") {
				objkey = objkey.slice(0,-1);
				}  
				var result = {};
				if (arr.length == 1){
				result[objkey] = val;
				} else {
				arr.shift();
				var nestedVal = buildInputObject(arr,val);
				result[objkey] = nestedVal;
				}
				return result;
				}

				function gatherMultipleValues( that ) {
				var final_array = [];
				$.each(that.serializeArray(), function( key, field ) {
				// Copy normal fields to final array without changes
				if( field.name.indexOf('[]') < 0 ){
				final_array.push( field );
				return true; // That's it, jump to next iteration
				}

				// Remove "[]" from the field name
				var field_name = field.name.split('[]')[0];

				// Add the field value in its array of values
				var has_value = false;
				$.each( final_array, function( final_key, final_field ){
				if( final_field.name === field_name ) {
				has_value = true;
				final_array[ final_key ][ 'value' ].push( field.value );
				}
				});
				// If it doesn't exist yet, create the field's array of values
				if( ! has_value ) {
				final_array.push( { 'name': field_name, 'value': [ field.value ] } );
				}
				});
				return final_array;
				}

				// Manage fields allowing multiple values first (they contain "[]" in their name)
				var final_array = gatherMultipleValues( this );

				// Then, create the object
				$.each(final_array, function() {
				var val = this.value;
				var c = this.name.split('[');
				var a = buildInputObject(c, val);
				$.extend(true, data, a);
				});

				return data;
			};

			
			setTimeout(() => {
				//restor field values about history and save
				this.$parent.editor.on('run:core:undo', () => {
					let data = this.attr.selected.getAttributes()['data-wp-data']
					if( is_json(data) )
					{
						let fields = JSON.parse( data )
						$.each(fields, function(index, val) {
							
							$('[name="'+val.name+'"]').val(val.value)
						});

						this.history = true
						$('.acf-container form').trigger('change')
					}
				});

				//delete wp data post on delete element
				this.$parent.editor.on('component:remove', (el) => {
					if( el.attributes.attributes['data-wp-data-id'] )
					{
						console.log(el);
					}
				});
			}, 1);
			
		},
		computed : {
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
					let form_jq = $('.acf-container form')

					$(document).trigger('acf/setup_fields', $('.acf-container'))
					$(window).trigger('load')

					$('.acf-container form').append('<input type="hidden" name="vue_wp_data" value="true">')

					$('.acf-form-submit input').hide()//.addClass('gjs-btn-prim gjs-btn--full')
					$('.acf-container').show()
					form_jq.attr('action', window.location.href );

					$('[data-name="template"] input').val(this.grapes_template.post_name)
					$('[data-name="component_id"] input').val(this.attr.ccid)

					console.log('init acf', this.attr.ccid);

					

					form_jq.unbind('change').on('change', (e) => {
						//

						var form_data = $(e.currentTarget).serializeObject()
						var form_serialize = $(e.currentTarget).serializeArray()	

						console.log('form_serialize', form_serialize );

						form_data.action = "owy_save_wp_data"

						console.log('form_data', form_data, this.ajaxurl );

						$.post(this.ajaxurl, form_data, (data) => {
							let json = $.parseJSON( data )
							console.log('save wp data', json, this.attr );
							if( !this.history )
							{
								this.attr.selected.setAttributes({ 
									'data-wp-data': JSON.stringify(form_serialize), 
									'data-wp-data-id' : json.post_id  
								});
							}

							this.history = false
							
						});

						
					});

					form_jq.on('submit', function(event) {
						event.preventDefault();
					});

				}, 1 )
			}
		},
		watch : {
			'$store.state.grapes_template' : function(){
				this.wp_data_form = null
			},
			'$store.state.modal_wp_data_attrs' : function(){
				
				let $ = this.jquery

				let current = this.$store.state.modal_wp_data_attrs

				console.log('selected', current);
				
				this.wp_data_form = null
				$('.acf-container').hide()

				let data = {
					template: this.grapes_template.post_name,
					id : this.attr.ccid
				}

				wp_ajax('owy_get_builder_wp_data_form_ajx', data, (result)=>{
					this.wp_data_form = result
					this.init_acf()
				})
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