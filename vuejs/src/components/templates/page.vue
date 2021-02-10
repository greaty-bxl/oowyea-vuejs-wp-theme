<template>
	<div class="section-wrap">
		<div class="clear"></div>

	
		<div class="wp-content vue-page ">

			<h1 v-html="post.post_title"></h1>
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




<style scoped >
	
	.vue-page {

		text-align: left;
		width: 70% !important;
		margin: 150px auto;

	}


	@media screen and (max-width: 600px){

		.vue-page{

			text-align: left;
			width: calc(100% - 60px) !important;
			margin: 150px 30px;

		}

	}


	@media screen and (max-width: 1125px) and (min-width: 600px){

			.vue-page{

			text-align: left;
			width: calc(100% - 140px) !important;
			margin: 150px 70px;

		}

	}


</style>