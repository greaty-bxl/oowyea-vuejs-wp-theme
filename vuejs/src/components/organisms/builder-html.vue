<template>
	<div v-html="html">
		
	</div>
</template>

<script>
	export default{
		props : {
			section : Object
		},
		mounted(){
			console.log('custom html', this.$store.state.wp.builder_templates_list, this.section);

		},
		computed : {
			html : function () {
				let template_name = this.section.template
				let templates = this.$store.state.wp.builder_templates_list
				let html = templates[template_name]['metas']['html'][0]
				
				return html
			}
		}
	}
</script>