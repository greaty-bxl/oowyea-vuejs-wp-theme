<!-- @date 2020-07-25 -->
<template>
	<div class="section-wrap">
		<div class="clear"></div>
		<section>
		<div class="div-text-homepage">
			<p class="text-homepage">
			Greaty est un studio de création graphique et digital basé à Bruxelles. Nous conceptualisons, concevons et codons toutes sortes de projets pour les marques, les startups et nous-mêmes.	
			</p>
		</div>

		<div class="post-client">

			<div class="row">


				<div class="global-project">

					<div class="client">
						<div class="image-client"></div>
					</div>
						
						<p class="name-client">Lorem ipsum</p>
						<p class="role-greaty">Corporated Website</p>
					
				</div>

				<div class="global-project">

					<div class="client">
						<div class="image-client"></div>
					</div>
						
						<p class="name-client">Lorem ipsum</p>
						<p class="role-greaty">Corporated Website</p>
					
				</div>

			</div>

			<div class="row">


				<div class="global-project">

					<div class="client">
						<div class="image-client"></div>
					</div>
						
						<p class="name-client">Lorem ipsum</p>
						<p class="role-greaty">Corporated Website</p>
					
				</div>

				<div class="global-project">

					<div class="client">
						<div class="image-client"></div>
					</div>
						
						<p class="name-client">Lorem ipsum</p>
						<p class="role-greaty">Corporated Website</p>
					
				</div>

			</div>

			<div class="row">


				<div class="global-project">

					<div class="client">
						<div class="image-client"></div>
					</div>
						
						<p class="name-client">Lorem ipsum</p>
						<p class="role-greaty">Corporated Website</p>
					
				</div>

				<div class="global-project">

					<div class="client">
						<div class="image-client"></div>
					</div>
						
						<p class="name-client">Lorem ipsum</p>
						<p class="role-greaty">Corporated Website</p>
					
				</div>

			</div>
			
		</div>
		<section>	
			
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
			
		}
	},
	components:{
		
	},
	mounted(){
		let $ = this.$

		$('#header, #footer').hide()
		$('#app').css('overflow-y', 'hidden')

		wp_ajax('is_user_logged', null, (result)=>{
			if( result ) this.login = true
		})
		
		//if( is.mobile() ) this.is_mobile = true

		this.$emit('template_mounted');
		
	}
}
</script>

<style>

</style>