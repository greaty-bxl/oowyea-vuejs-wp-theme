<template>
	<div class="section-wrap">
		<div class="clear"></div>
		<h1 v-html="post.post_title"></h1>
		<p v-html="post.post_content"></p>
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
			var $ = this.$

			$(this.$el).parents('.section').css({
				'background-color': this.post.metas.background_color[0],
			});

			this.$emit('template_mounted')
		}
	}
</script>

<style>

</style>