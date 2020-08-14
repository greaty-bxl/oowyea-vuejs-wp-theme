<template>
    <div class="section-wrap">
        <div class="clear"></div>
        <h1 v-html="post.title">lallalalal</h1>
        <div v-html="post.post_content"></div>
        <div class="clear"></div>
        <h1>66464</h1>
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

		// var $ = this.$


		this.$emit('template_mounted', this)


	}
}

</script>