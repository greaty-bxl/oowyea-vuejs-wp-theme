<template>
	<div class="section-wrap">
		<div class="clear"></div>
		<div class="wp-content">
			<div class="row">
				<div class="col-xl-12 col-lg-12 px-6 my-6" style="text-align: center; border-right: 1px solid rgba(0, 0, 0, 0.2);">
					<img class="logo-footer my-5" width="300" src="/assets/logo_bruxelles_al-piccolo-mondo.svg">
					<div data-scroll class="post_content" v-html="post.post_content"></div>
					<a :href="$store.state.wp.front_page" data-scroll class="button form-submit my-2" type="submit" v-html="pll__('Confirmer l\'accusé de ce message')"></a>
				</div>
			</div>		
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
			console.log('resa', this.wp);
			this.$store.state.header = false
			this.$store.state.footer = false
		},
		methods : {
			
		}
	}
</script>

<style scoped>
	.form-submit {
		text-decoration: none;
		background-color: #B49E5C;
		margin: auto;
		border: none;
		border-radius: 5px;
		color: #FFFFFFCC;
		padding: 10px 25px;
		font-weight: 600;
	}
</style>