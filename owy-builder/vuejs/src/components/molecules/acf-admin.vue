<template>
	<div class="acf-admin" v-html="form_html">

	</div>
</template>

<script>
	import wp_ajax from 'Libs/wp-ajax.js'
	import is from 'is_js'

	export default {
		data(){
			return {
				form_html : '',
				form_jq : null,
				Acf_model : false,
				settings : {},
				acf_setting : {},
				form_data : {},
				last_change : {}
			}
		},
		mounted() {

			/*if ( this.settings ) 
			{
				this.load_form(this.settings)
			}*/

			//let $ = this.jquery

			/*this.Acf_model = new this.acf.Model({
				initialize: function(){
					console.log('init acf Api');
					//this.$el = jq_acf_form;
				},
				events: {
					'change': 'change',
					'submit' : 'submit'
					//'change input[type="text"]': 'onChangeText',
				},
				change: function(e, $el){
					console.log( 'change', $el )
				},
				submit : function(e){
					e.preventDefault()
					console.log('submit');
				}
			})*/

		},
		methods : {
			load_form : function (settings = {}) {
				
				let $ = this.jquery

				let settings_remove = [
					'autosave', 
					'ready', 
					'submit', 
					'saved', 
					'change', 
					'filter_jq_html'
				]

				this.settings = settings

				
				let acf_setting = Object.assign( {}, settings )

				$.each(settings_remove, function(index, val) {
					if( acf_setting[val] ) delete acf_setting[val]
				});

				this.acf_setting = acf_setting

				wp_ajax('owy_acf_admin_get_form', acf_setting, (form) => {
					
					let form_html = $('<div>'+form+'</div>')
					if( settings.autosave )
					{
						form_html.find('.acf-form-submit input').remove()
					}

					form_html.find('form').append('<input type="hidden" name="vue_acf_admin_form" value="true">')

					if( is.function( this.settings['filter_jq_html'] ) )
					{
						form_html = this.settings['filter_jq_html'](form_html)
					}

					this.form_html = form_html.html()

					$(window).trigger('load')					

					setTimeout( ()=>{
						this.loaded()
					}, 1 )
				})
			},
			loaded : function()
			{
				let $ = this.jquery

				this.form_jq = $(this.$el).find('form')

				if( is.function( this.settings['ready'] ) )
				{
					this.settings['ready'](this)
				}

				this.form_jq.on('submit', (e) => {

					e.preventDefault();

					if( is.function( this.settings['submit'] ) )
					{
						this.settings['submit'](this)
					}
					
					this.save_form()
				});

				this.form_jq.on('change', (e) => {
					let field = $(e.target).parents('.acf-field').first()
					this.last_change = {
						name : field.data('name'),
						key : field.data('key'),
						value : $(e.target).val(),
						target : e.target
					}

					if( is.function( this.settings['change'] ) )
					{
						this.settings['change']( this )
					}
					this.update_form_data()
				});
			},
			update_form_data : function(){
				this.form_data.serializeObject = this.form_jq.serializeObject()
				this.form_data.serializeArray = this.form_jq.serializeArray()
				this.form_data.serialize = this.form_jq.serialize()

				if( this.settings.autosave )
				{
					this.form_jq.submit();
				}
			},
			reload : function() {
				this.load_form( this.settings )
			},
			save_form : function() {
				if( is.function( this.settings['save'] ) )
				{
					this.settings['save'](this)
				}
				let $ = this.jquery
				let form_data = this.form_data.serializeObject
				form_data.action = 'owy_acf_admin_save_form'

				console.log( 'ajaxurl' ,this.ajaxurl );

				$.post(this.ajaxurl, form_data, (data) => {
					console.log('saved', data);
				})
				
			}
		}
	}
</script>

<style>
	.acf-admin form * {
		background-color: transparent !important;
	}

	.acf-admin .acf-input-wrap > *:first-child {
		border: none;
		outline: none;
		color: inherit;
		background-color: rgba(0,0,0,0.2) !important;
	}
</style>