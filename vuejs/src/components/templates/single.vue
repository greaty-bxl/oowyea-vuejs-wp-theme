
<template>
	<div class="section-wrap">
		<div class="clear"></div>
			
			<div class="content-single">

				<div>
					<img class="image-single-post" :src="this.post.thumb">
				</div>

				<div class="single-text-post "> 

					<h2 class="montserrat-bold title-single-fromagerie" v-html="post.post_title">Colis</h2>

					<div v-html="this.post.acf_fields.list_colis" class="list-colis">

					</div>

					<div>
						<p class="commande-prete"> Si vous commandez après <strong>19h30</strong>, votre commande sera prête le <strong>surlendemain</strong>.</p>
					</div>			

					<h2 class="montserrat-bold title-single-fromagerie-1">Commandes et demandes spéciales</h2>

					<div class="contener-single">

					<formulaire></formulaire>

					</div>

					<div class="retour">

					<button onclick="window.history.back()">Retour</button>

					</div>
					
				</div>
			</div>
		
		<div class="clear"></div>
	</div>
</template>


<script>

	import smart_fonts from 'Libs/smart-fonts.js';
	import formulaire from 'Molecules/formulaire';
	export default {
		components: {
			formulaire
		},
		props: {
			'post' : Object
		},
		mounted (){
			var $ = this.$



			// this.$emit('template_mounted')

			console.log(this.wp);
	
	
			$('.title-21').attr('placeholder', this.post.post_title );
			$('.title-21').attr('value', this.post.post_title );			

		

			smart_fonts({
	
				'.input-single' : 18,
			})


		}
	}
</script>

<style>


</style>

<style scoped>


</style>










