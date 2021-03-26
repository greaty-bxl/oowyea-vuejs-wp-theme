<template>
	<RightMenu >
		<div class="sites">
			<h3 class="clear">My websites</h3>
			<div class="site" v-for="(item, key) in $store.state.wp.builder_my_sites" :key="key">
				<a :href="item.oowyea_url">{{item.blogname}}</a>
			</div>
			<div class="site">
				<button @click="$store.state.right_menu = 'wp-frame'; open_new_site() ">
					Create a new website
				</button>
			</div>
		</div>
	</RightMenu>
</template>
<script>
	import RightMenu from 'PluginComponents/containers/right-menu.vue'

	export default {
		components : {
			RightMenu
		},
		methods : {
			open_new_site : function () {
				this.$store.state.wp_frame = this.$store.state.wp.network_admin_url + 'site-new.php'
			}
		}
	}
</script>
<style scoped>
	.sites{
		box-sizing: border-box;
		padding: 15px;
	}
	.site{
		padding: 15px 0px;
		border-bottom: rgba(255,255,255,0.5) solid 1px;
	}
</style>