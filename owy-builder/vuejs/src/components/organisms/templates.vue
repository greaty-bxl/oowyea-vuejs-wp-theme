<template>
	<Page class="owy-templates">
		<h1>
			Design your website
			&nbsp;<span class="pointer" @click="$store.state.right_menu = 'main'" ><font-awesome-icon icon="cogs" /></span>
			&nbsp;<span class="pointer" @click="$store.state.right_menu = 'docs'"><font-awesome-icon icon="book" /></span>
		</h1>
		<div class="owy-colors">
			<div class="owy-color" style="background: #1BC8CA;"></div>
			<div class="owy-color" style="background: #6953ED;"></div>
			<div class="owy-color" style="background: #66976F;"></div>
			<div class="owy-color" style="background: #CAAB1B;"></div>
		</div>

		<div class="groups">
			<div class="group" v-for="(group, key) in group_templates" :key="key">
				<h2><Editable type="text" :value="key" /><AddTemplate class="add" /><span class="dragger"><font-awesome-icon icon="arrows-alt" /></span></h2>
				<div class="row drag-row">
					<div v-for="(template, key) in group" :key="key">
						<ItemTemplate :post="template" />
					</div>
				</div>
			</div>
		</div>

		<div>
			<div v-for="(group, key) in vue_templates" :key="key">
				<h2 v-html="key"></h2>
				<div class="row">
					<div v-for="(template, key) in group" :key="key">
						<ItemTemplate :post="template" />
					</div>
				</div>
			</div>
		</div>

	</Page>
</template>

<script>
	import Page from 'PluginComponents/containers/page-container'
	import ItemTemplate from 'PluginComponents/molecules/template-item.vue'
	import AddTemplate from 'PluginComponents/molecules/template-add.vue'
	import Editable from 'PluginComponents/molecules/editable.vue'
	import Sortable from 'sortablejs'
	import interact from 'interactjs'

	export default{
		name: 'templates',
		data(){
			return {
				page_drag: null
			}
		},
		components : {
			Page,
			ItemTemplate,
			AddTemplate,
			Editable
		},
		mounted(){
			//console.log( Sortable, interact )
			this.init_sortable()

			let $ = this.jquery 
			//const page_scroll = { x: 0, y: 0 }

			this.page_drag = interact('.owy-templates').draggable({
				ignoreFrom: '.owy-item-template, .pointer, h2, .owy-colors',
				listeners: {
					move (event) {

						let x = $('.page').scrollLeft()
						x = x + (event.dx * -1)
						$('.page').scrollLeft(x)

						let y = $('.page').scrollTop()
						y = y + (event.dy * -1)
						$('.page').scrollTop(y)
					}
				},
				cursorChecker () {
					return 'move'
				}
			})
		},
		methods : {
			init_sortable : function(){
				let $ = this.jquery
				$('.drag-row').each(function(index, el) {
					Sortable.create( el , {
						group: {
							name : 'row',
							put: ['row']
						},
					});
				});

				$('.groups').each(function(index, el) {
					Sortable.create( el , {
						handle: ".dragger",
					});
				});
				
			}
		},
		computed:{
			group_templates : function () {
				return this.$store.state.wp.owy_templates
			},
			vue_templates : function () {
				return this.$store.state.wp.owy_vue_templates
			}
		},
		watch : {
			'$store.state.wp.owy_templates' : function(){				
				this.init_sortable()
			},
		}
	}
</script>

<style>
	.owy-templates .row {
		display: flex;
		white-space: nowrap;
		margin-bottom: 30px;
	}
	.owy-templates .row > *{
		display: inline-block;
		margin-right: 10px;
		white-space: all;
	}

	.owy-colors {
		display: inline-block;
		clear: both;
	}

	.owy-colors .owy-color{
		display: inline-block;
		height: 40px;
		width: 40px;
		border-radius: 40px;
		margin-right: 10px;
		border: 2.5px solid rgba(255,255,255,0.8);
	}

	.owy-templates h1{
		-webkit-user-select: none; /* Safari */
		-ms-user-select: none; /* IE 10 and IE 11 */
		user-select: none; /* Standard syntax */
	}

	.owy-templates h1 span{
		font-size: 70%;
	}
</style>

<style scoped>
	h2{
		display: inline-block;
	}

	.group .dragger, .group .add{
		display: none;
	}

	.group:hover .dragger, .group:hover .add{
		display: inline-block;
	}

	.dragger{
		cursor: pointer;
		font-size: 18px;
		margin-left: 10px;
		margin-top: 7px;
	}
</style>