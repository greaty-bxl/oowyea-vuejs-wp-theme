<template>
	<div class="section-wrap">
		<div class="clear"></div>
		<h1 v-html="post.post_title"></h1>
		<div v-html="post.post_content"></div>
		<div class="clear"></div>
	</div>
</template>

<script>
	export default {
		components: {
			
		},
		props: {
			'post' : Object
		},
		mounted (){
			//var $ = this.$
			
			this.$emit('template_mounted')

			/*$('[data-srcset]').each(function(index, el) 
			{
				$(el).attr('srcset', $(el).data('srcset') )
			});*/
		}
	}
</script>

<style>

</style>