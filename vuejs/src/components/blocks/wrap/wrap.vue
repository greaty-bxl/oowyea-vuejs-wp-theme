<template>
	<component 
		data-owy-block="wrap" 
		:is="tagname" 
		v-html="innerHTML"
		>
	</component>
</template>
<script>
	export default {
		props : {
			innerHTML : String,
			tagname : {
				type: String,
				default: 'div',
			}
		},
	}
</script>
<style>
	/* grapes_canvas */
	[data-owy-block="wrap"].is_empty {
		min-height: 100px
	}
</style>