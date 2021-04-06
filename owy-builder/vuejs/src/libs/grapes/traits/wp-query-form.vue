<template>
	<div>
		<form>
			<select name="query-type">
				<option>- Query type -</option>
			</select>
			<select>
				<option>- Examples - </option>
			</select>
			<br>
			<input type="" name="">
		</form>
	</div>
</template>
<script>
	export default {
		data(){
			return {

			}
		},
		props : {
			editor: Object
		},
		mounted() {
			console.log('wp query',this.editor);
		}
	}
</script>
<style>
	.gjs-field-wrp--wp-query-form .gjs-field{
		background: transparent;
	}
</style>