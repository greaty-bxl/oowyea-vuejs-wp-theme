<template>

	<div class="global-css-pages-legale">

		<div v-html="post.post_content"> 
		</div>
			
	</div>

</template>

<script>

export default {
	components: {

	},
	props: {
		'post' : Object
	},

	mounted(){
	
		this.$emit('template_mounted', this);
		console.log(this.wp);

	},

}

</script>