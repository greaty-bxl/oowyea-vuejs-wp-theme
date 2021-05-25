<template>
	<RightMenu>
		<AcfAdmin ref="form"/>
	</RightMenu>
</template>
<script>
	import RightMenu from 'PluginComponents/containers/right-menu.vue'
	import AcfAdmin from 'PluginComponents/molecules/acf-admin.vue'
	//import ftp from 'basic-ftp'

	export default {
		components : {
			RightMenu,
			AcfAdmin
		},
		mounted(){
			let options_form = this.$refs.form
			
			options_form.load_form({
				id : 'owy-options',
				field_groups : ['group_owy_options'],
				autosave : true,
				new_post : false,
				post_id : 'option',
				saved : () => {
					console.log('saved');
				},
				change : function(acf) {
					console.log('change', acf);
				},
			})

			console.log('acf', this.acf);

			/*const ftp = require("basic-ftp")

			console.log('ftp', ftp);*/


			this.acf.addAction('acfe/fields/button/success/name=theme_export', function($el, data){
				
				// do_something();
				console.log('acf', 'export', $el, data);
			});
		}
	}
</script>