<template>
	<RightMenu >
		<iframe :src="$store.state.wp_frame"></iframe>
	</RightMenu>
</template>
<script>
	import RightMenu from 'PluginComponents/containers/right-menu.vue'

	export default {
		components : {
			RightMenu
		},
	}
</script>
<style scoped>
	iframe{
		height: 100vh;
		width: 100%;
	}
</style>