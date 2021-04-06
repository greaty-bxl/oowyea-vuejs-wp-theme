<template>
	<div class="owy-item-template" :class="'type-'+type" @click="open_template(post)" >
		<div class="thumb">
			<font-awesome-icon v-if="type == 'hierarchy'" :icon="['fas','copy']" />
			<font-awesome-icon v-else-if="type == 'page'" :icon="['fas','file']" />
			<font-awesome-icon v-else-if="type == 'block'" :icon="['fas','cube']" />
			<font-awesome-icon v-else-if="type == 'master'" :icon="['fas','columns']" />
			<font-awesome-icon v-else-if="type == 'vue'" :icon="['fab','vuejs']" />
			<font-awesome-icon v-else :icon="'layer-group'" />
		</div>
		<div class="content">
			<p v-html="post.post_title"></p>
		</div>		
	</div>
</template>

<script>
	export default{
		data(){
			return {
				type : this.post.metas.type
			}
		},
		props : {
			'post' : Object
		},
		methods:{
			wp_store : function(){
				return this.$store.state.wp
			},
			open_template : function(post){
				if( this.type != 'vue' )
				{
					window.location.hash = post.post_name
					this.$store.state.grapes_template = post
				}
			}
		}
	}
</script>

<style lang="scss">
	.owy-item-template {
		cursor: pointer;
		border: 1px solid #FFFFFF;
		width: 150px;
		height: 150px;
	}

	.owy-item-template.type-vue {
		cursor: auto;
	}
	.owy-item-template .thumb{
		height: 90px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 36px;
		font-weight: normal;
	}
	.owy-item-template .content{
		font-size: 0.75rem;
		padding: 10px;
		text-align: center;
		white-space: normal;
	}
	.owy-item-template.type-hierarchy .thumb{
		color: #557EE6;
	}
	.owy-item-template.type-page .thumb{
		color: #55B5E6;
	}
	.owy-item-template.type-block .thumb{
		color: #E69D55;
	}
	.owy-item-template.type-footer .thumb, .owy-item-template.type-header .thumb{
		color: #CC55E6;
	}  
	.owy-item-template.type-master .thumb{
		color: #55E670;
	}
	.owy-item-template.type-vue .thumb{
		color: #41B883;
	}
</style>