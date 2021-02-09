<template>

	<div>
	
	<div class="parent-text">
		
		<div v-html="post.post_content"> 
	</div>

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

