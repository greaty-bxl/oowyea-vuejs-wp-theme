<template>
	<RightMenu>
		<AcfAdmin ref="form"/>
	</RightMenu>
</template>
<script>
	import RightMenu from 'PluginComponents/containers/right-menu.vue'
	import AcfAdmin from 'PluginComponents/molecules/acf-admin.vue'

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
				saved : () => {
					console.log('saved');
				},
				change : function(acf) {
					console.log('change', acf);
				},
			})
		}
	}
</script>