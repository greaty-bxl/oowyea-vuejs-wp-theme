<template>
	<div class="section-wrap" data-scroll-section>
		<div class="clear"></div>

	
		<div class="wp-content p-6" >

			<h1>
				NOTRE SAVOIR FAIRE, <br>DEPUIS 1979
			</h1>
			<div v-html="post.post_content"></div>
		
		</div>
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
	
		}
	}
</script>

<style scoped>
	.section-wrap {
		text-align: left;
		background-color: #971732;
	}
</style>