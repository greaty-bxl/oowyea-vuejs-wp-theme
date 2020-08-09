<!-- @date 2020-07-25 -->
<template>
	<div class="section-wrap">
		<div class="clear"></div>
		<div v-if="!is_mobile">
			<div v-if="login">
				<UserInterface v-if="currentScreen == 'ui'"/>
				<Game v-if="currentScreen == 'game'"/>
				<Editor v-if="currentScreen == 'editor'"/>
			</div>
			<div v-if="!login">
				checking Login...
			</div>
		</div>
		<div v-if="is_mobile">
			Join a screen<br/>
			<input type="text" name="screen-id" />
		</div>
		<div id="yt-music">
			<!-- <iframe width="280" height="160" src="https://www.youtube.com/embed/videoseries?list=PL6lm2r44ZiI7djdnxbNFow2OxDaFXm50E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" autoplay="1" allowfullscreen></iframe> -->
		</div>
		<div class="clear"></div>
	</div>	
</template>

<script>

import is from 'is_js'
import wp_ajax from 'Libs/wp-ajax.js'

import UserInterface from './components/user-interface'
import Game from './components/game'
import Editor from './components/editor'

export default {
	data(){
		return {
			login: false,
			firstaction: false,
			currentScreen: 'game',
			is_mobile: is.mobile()
		}
	},
	components:{
		UserInterface,
		Game,
		Editor,
	},
	mounted(){
		let $ = this.$

		$('#header, #footer').hide()
		$('#app').css('overflow', 'hidden')

		wp_ajax('is_user_logged', null, (result)=>{
			if( result ) this.login = true
		})

		this.$emit('template_mounted');
		
	}
}
</script>

<style>
#yt-music{
	position: absolute;
}
</style>