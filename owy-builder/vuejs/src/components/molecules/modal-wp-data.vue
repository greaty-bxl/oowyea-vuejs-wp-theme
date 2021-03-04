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

	export default {
		/*props : {
			selected : Object
		}*/
		data(){
			return {
				wp_data_form : null,
			}
		},
		mounted(){
			
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

					$(document).trigger('acf/setup_fields', $('.acf-container'))
					$(window).trigger('load')

					$('.acf-form-submit input').hide()//.addClass('gjs-btn-prim gjs-btn--full')
					$('.acf-container').show()

					console.log('init acf', this.attr.ccid);

					let form_jq = $('.acf-container form')

					form_jq.find('[data-name="query_from"] select').unbind('change').on('change', (e) => {
						console.log('query type change', $(e.currentTarget) );

					});

					form_jq.on('submit', function(event) {
						event.preventDefault();
						console.log('submit');
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