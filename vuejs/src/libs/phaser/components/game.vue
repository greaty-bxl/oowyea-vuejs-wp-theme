<!-- @date 2020-07-25 -->
<template>
	<div>
		<Tanks v-if="mode === 'tanks'" />
	</div>	
</template>

<script>

import Tanks from '../modes/tanks'

export default {
	components : {
		Tanks
	},
	data(){
		return {
			board: false,
			mode: 'tanks'
		}
	},
	mounted(){
		
	}
}
</script>

<style>

</style>