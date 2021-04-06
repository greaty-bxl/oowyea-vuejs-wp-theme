<template>
	<div class="template-add" @mouseleave="_close">
		<button @click="_open"><font-awesome-icon icon="plus" /></button>
		<div class="drop" v-show="open">
			<ul class="gjs-four-color">
				<li>Page</li>
				<li>Hierarchy</li>
				<li>Block</li>
				<li>Header</li>
				<li>Footer</li>
				<li>Group</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				open : false
			}
		},
		methods : {
			_open : function(){
				this.open = true
			},
			_close : function(){
				this.open = false
			}
		}
	}
</script>
<style scoped>
	button {
		font-size: 11px;
		background: transparent;
		outline: none !important;
		color: inherit;
		width: 22px;
		height: 22px;
		border: solid 1px #fff;
		border-radius: 32px;
		line-height: 22px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 10px;
		margin-top: 7px;
	}

	.template-add {
		display: inline-block;
	}

	.drop {
		margin-top: -6px;
		height: 0px;
		width: 0px;
		display: block;
		position: relative;
		overflow: visible;
	}

	ul {
		list-style: none;
		padding: 0px;
		margin: 0;
		font-size: .75rem;
		margin-top: 10px;
		margin-left: -35px;
		display: block;
		margin-top: 10px;
	}

	li {
		background: #fff;
		border-bottom: dashed 1px #23363D;
		padding: 8px 12px;
		box-sizing: border-box;
		text-align: center;
		width: 120px;
		font-weight: normal;
		cursor: pointer;
		color: #23363D;
	}

	ul > li:last-child {
		border-bottom: none;
	}
</style>