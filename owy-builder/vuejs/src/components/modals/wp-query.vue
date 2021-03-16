<template>
	<div id="owy-wp-query-vue">
		<div class="col1">
			<AcfAdmin ref="form"/>	
		</div>
		<div class="col2">
			preview
		</div>
	</div>
</template>

<script>
	import AcfAdmin from 'PluginComponents/molecules/acf-admin.vue'
	export default {
		components : {
			AcfAdmin
		},
		methods : {
			opened : function(post_id) {
				console.log('wp-query-vue opened',post_id);

				let wp_query_form = this.$refs.form
				
				wp_query_form.load_form({
					id : 'owy-wp-query-form',
					field_groups : ['group_owy_wp_query_generator'],
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
	}
</script>

<style>
	#owy-wp-query-vue {
		display: flex;
	}

	#owy-wp-query-vue > .col1 {
		width: 70%;
	}
</style>