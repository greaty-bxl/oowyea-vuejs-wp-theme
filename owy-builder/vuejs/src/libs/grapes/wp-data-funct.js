export default {
	wp_data_simulate : function(el = null){
		let grapes_template = this.$store.state.grapes_template
		if( grapes_template != null )
		{
			let $ = this.jquery 
			let values = []

			console.log('simulate', el);	
			
			//list values
			$('[data-name="value"] select option').each(function(index, el) {
				let str = $(el).text().split('(')[1]
				str = str.substr(0, str.length - 1)
				let key = $(el).val()
				values[ key ] = str		
			});

			let query_from = $('[data-name="query_from"] select').val()
			let example = $('[data-name="example"] select').val()

			if( el == null )
			{
				//Multi simulation by query
				//get elements with the same query
				let els = this.wp_data_get_els_by_query(query_from)

				$.each(els, (index, el) => {
					this.wp_data_do_action(el, query_from, values)
					if( example != 'none' && example != undefined )
					{
						this.wp_data_update_other_examples(el, example)	
					}					
				});	
			}
			else
			{
				this.wp_data_do_action(el, query_from, values)
			}
		}
	},
	wp_data_do_action : function(el, query_from, values){
		let $ = this.jquery
		
		let data =  this.wp_data_get_formated_data_from_acf_attr(el) 

		console.log('do_action', el, query_from, data, values);

		if( query_from == 'none' )
		{
			el.set({
				'editable' : true
			})
		}
		else
		{
			$.each(data.apply_result_to, function(index, row) {
				if( row.action_type == 'content' )
				{
					el.components(values[row.value])
					el.set({
						'editable' : false
					})
				}
			});
		}
	},
	wp_data_get_formated_data_from_acf_attr : function(el){
		let $ = this.jquery
		let data_wp_attr = el.attributes.attributes['data-wp-data']
		
		if( data_wp_attr )
		{
			let wp_data_acf = JSON.parse( data_wp_attr )
			let acf = []

			let text_key_replace = this.wp_data_get_acf_key_to_name()

			let row = -1
			$.each(wp_data_acf, (index, val) => {
				let eval_key = val.name.replaceAll('[', '[\'').replaceAll(']', '\']')
				let eval_str

				$.each(text_key_replace, (acf_key, acf_name) => {
					eval_key = eval_key.replaceAll(acf_key, acf_name)
				})

				if( val.value )
				{
					eval_str = eval_key + "=" + '"' + val.value + '"'
				}
				else if( val.name == "acf[field_603c04b6e48c4]")
				{
					row++
					eval_str = eval_key + "= {'row-"+row+"':[]}" 
				}

				if( eval_str && val.name.indexOf('acf') === 0 )
				{
					eval( eval_str )
				}
			})
			return acf;
		}
		else
		{
			return false
		}
	},
	wp_data_get_acf_key_to_name : function(){
		return {
			'field_604098c5b5dd6' : 'template',
			'field_604098d5b5dd7' : 'component_id',
			'field_603c0194e42bd' : 'query_from',
			'field_60423db0a7b8a' : 'example',
			'field_6040dad4eb7b9' : 'parent_query',
			'field_603c020fe48c2' : 'custom_query',
			'field_603c04b6e48c4' : 'apply_result_to',
			'field_603c076293de1' : 'value',
			'field_603c0660e48c6' : 'action_type',
			'field_6042296de9935' : 'filter'
		}
	},
	wp_data_update_other_examples : function(el, example){
		//grapes dom
		let $ = this.jquery
		let wp_data_acf = JSON.parse( el.attributes.attributes['data-wp-data'] )
		$.each(wp_data_acf, (index, val) => {
			if( val.name == "acf[field_60423db0a7b8a]" )
			{
				wp_data_acf[index].value = example
				el.attributes.attributes['data-wp-data'] = JSON.stringify(wp_data_acf)
			}			
		})
	},
	wp_date_get_example_from_others : function(query_from){
		let $ = this.jquery

		let __return = 'none'

		$.each(this.wp_data_get_els_by_query(query_from), (index, el) => {
			let data =  this.wp_data_get_formated_data_from_acf_attr(el) 
			if( data.example != 'none')
			{
				__return = data.example
			}
		});

		return __return
	},
	wp_data_get_els_by_query : function(query_from){
		let $ = this.jquery
		let els_return = []

		$.each(this.editor.getComponents().models, (index, el) => {
			if( el.attributes.attributes['data-wp-data'] )
			{
				let data =  this.wp_data_get_formated_data_from_acf_attr(el) 

				if( query_from == 'current' && data.query_from == 'current' )
				{
					els_return[ els_return.length ] = el
				}
			}
		});

		return els_return
	}
}