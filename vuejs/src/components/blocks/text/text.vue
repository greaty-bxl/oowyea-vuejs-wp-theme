<template>
	<component data-owy-block="text" :is="tagname" >
		Your text here
	</component>
</template>
<script>
	export default {
		props : {
			tagname : {
				type: String,
				default: 'p',
				field: 'select',
				values: ['p', 'h1', 'h2', 'h3', 'h4', 'span', 'ANY']
			}
		}
	}
</script>