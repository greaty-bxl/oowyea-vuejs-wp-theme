<template>
	<MainContainer>
		<h1>workflow</h1>
		<p>
			Define how your webapp will works.
		</p>
		<div class="option"
			v-for="(option, key) in options"
			:key="key">
			<h2 v-html="option"></h2>
		</div>
	</MainContainer>
</template>

<script>
	import MainContainer from 'PluginComponents/organisms/menu-main-container.vue'
	export default{
		name: 'workflow',
		components : {
			MainContainer
		},
		data(){
			return {
				options: {
					pages: 'pages',
					blog: 'blog',
					events: 'events',
					forms: 'forms',
					users: 'users',
					payments: 'payments',
					languages: 'languages',
					live: 'live apps',
					cloud: 'cloud apps',
					post_type: 'custom data object',
				}
			}
		},
	}
</script>

<style scoped>
	.option{
		width: 400px;
		max-width: 100%;
		padding: 15px;
		box-sizing: border-box;
		margin-bottom: 10px;
		border: solid 1px #fff;
		background-color: rgba(0,0,0,0.1);
		transition: all 0.6s;
	}

	.option:hover{
		background-color: rgba(0,0,0,0.4);
	}

	.option h2{
		margin: auto;
		letter-spacing: 5px;
	}
</style>