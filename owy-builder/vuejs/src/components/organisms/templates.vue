<template>
	<Page class="owy-templates">
		<h1>Design your WebApp</h1>
		<p>
			Need more info and docs? <a href="">Check our website to find doc and tutorials.</a>
		</p>
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
</style>