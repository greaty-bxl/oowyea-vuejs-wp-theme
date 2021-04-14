<template>
	<component :is="tag_comp" v-for="item in items" :key="item">
		<!-- <LoopComponents :html="innerHtml" /> -->
	</component>
</template>
<script>

	export default{
		props: {
			html : String,
		},
		data() {
			return {
				tag_comp: 'div',
				innerHtml : null,
				test: ['1','2']
			}
		},
		created () {

			/*var doc = new DOMParser().parseFromString(this.html, "text/xml");*/
			let $ = this.jquery

			console.log('html', $( this.html ) );
		},
		mounted () {

		}
	}
</script>