<template>
	<div class="owy-item-template" @click="open_template(post)" >
		<div class="thumb" v-bind:style="thumb_style"></div>
		<div class="content">
			<p v-html="post.post_title"></p>
		</div>		
	</div>
</template>

<script>
	export default{
		data(){
			return {
				thumb_style: {
					'background-image' : this.get_thumb()
				}
			}
		},
		props : {
			'post' : Object
		},
		methods:{
			wp_store : function(){
				return this.$store.state.wp
			},
			get_thumb : function(){
				return 'url(' + this.wp_store().owy_builder_url + "assets/thumb.svg" + ')'
			},
			open_template : function(post){
				console.log('open');
				this.$store.state.grapes_template = post
			}
		}
	}
</script>

<style lang="scss">
	.owy-item-template {
		cursor: pointer;
		border: 1px solid #FFFFFF;
		width: 180px;
	}
	.owy-item-template .thumb{
		height: 100px;
		background-repeat: no-repeat;
		background-size: 30%;
		background-position: center;
	}
	.owy-item-template .content{
		padding: 10px;
		text-align: center;
	}
</style>