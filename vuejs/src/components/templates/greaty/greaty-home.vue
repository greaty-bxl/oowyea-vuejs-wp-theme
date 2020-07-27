
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

	        //Important to let works basic functions
	        this.$emit('template_mounted')
	    }
	}

</script>