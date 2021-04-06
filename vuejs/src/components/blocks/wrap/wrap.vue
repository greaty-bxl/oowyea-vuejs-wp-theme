<template>
	<component data-owy-block="wrap" :is="tagname" style="min-height: 20px">
		
	</component>
</template>
<script>
	export default {
		props : {
			tagname : {
				type: String,
				default: 'div',
				field: 'select',
				values: ['div', 'ul', 'li', 'ANY']
			}
		}
	}
</script>