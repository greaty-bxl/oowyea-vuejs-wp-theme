<template>
	<Page class="owy-templates">
		<h1>Design your WebApp <span class="pointer" ><font-awesome-icon icon="cogs" /></span> <span class="pointer" ><font-awesome-icon icon="book" /></span></h1>
		<div class="owy-colors">
			<div class="owy-color" style="background: #1BC8CA;"></div>
			<div class="owy-color" style="background: #6953ED;"></div>
			<div class="owy-color" style="background: #66976F;"></div>
			<div class="owy-color" style="background: #CAAB1B;"></div>
		</div>
		<div v-for="(group, key) in group_templates" :key="key">
			<h2 v-html="key"></h2>
			<div class="row">
				<div v-for="(template, key) in group" :key="key">
					<ItemTemplate :post="template" />
				</div>
			</div>
		</div>
	</Page>
</template>

<script>
	import Page from 'PluginComponents/containers/page-container'
	import ItemTemplate from 'PluginComponents/molecules/item-owytemplate.vue'

	export default{
		name: 'templates',
		components : {
			Page,
			ItemTemplate
		},
		mounted(){
			//console.log( this.$store.state.wp.owy_template )
		},
		computed:{
			group_templates : function () {
				return this.$store.state.wp.owy_templates
			}
		}
	}
</script>

<style>
	.owy-templates .row {
		white-space: nowrap;
	}
	.owy-templates .row > *{
		display: inline-block;
		margin-right: 10px;
		white-space: all;
	}

	.owy-colors .owy-color{
		display: inline-block;
		height: 40px;
		width: 40px;
		border-radius: 40px;
		margin-right: 10px;
		border: 2.5px solid rgba(255,255,255,0.8);
	}

	.owy-templates h1 span{
		font-size: 70%;
	}
</style>