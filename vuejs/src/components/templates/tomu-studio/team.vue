<template>

	<div class="Team-section ">

		<div class="team-image">
			<img :src="post.thumb">
		</div>
		
		<div class="team-name ">
			<p class="principal on-screen">TUNG</p>
			<p>SANDRINE</p>
			<p>MORGANE</p>
			<p>WALDO</p>
		</div>
	
	</div>
	
</template>

<script type="text/javascript">
	
	export default{

		props: {
			'post' : Object
		},

		mounted(){

		let $ = this.$

		console.log(this.post, 'posts');

		$('[data-state="current"] .principal').on('enter-screen', () => {
			console.log('enter-screen');

			$('.header-tomu-container').css('color', '#FCD190');
			$('.header-tomu-container a').css('color', 'black');
			var href = $('.Team-section').parent().attr('data-permalink');
			this.pushHistory( href )
			$('a[href="'+ href +'"]').css('color', '#FCD190');

			
		})

		}

	}

</script>

<style type="text/css">

	.Team-section.section-wrap{

		flex-direction: row;
	}
	
	.Team-section img{

		width: 30vw;
		height: 40vw;
		height: auto;

	}

	.Team-section {
		
		padding-left: 70px;
		display: flex;
		flex-direction: row;
		color: #fdd498;
		font-size: 19px;
	}

	.Team-section *{

		all: unset;
		line-height: 120%;
	}

	.team-name {
		
		padding-left: 70px;
		text-align: left;
		padding-top: 60vh;
		display: flex;
		flex-direction: column;
		font-weight: 800;
		
	}

	.team-image{

		text-align: left;
		justify-content: center;
		display: flex;
		flex-direction: column;

	}

	@media screen and ( max-width: 1130px ) and ( min-width: 700px ){

		.Team-section img {

			width: 50vw;
			/*height: 40vw;*/
		}

	}

	@media screen and ( max-width: 700px ){

		.Team-section{

			display: flex;
			flex-direction: column-reverse;
			width: calc( 100% - 60px );
			padding-left: 30px;
		}

		.Team-section img {

			width: 100%;
	
		}

		.team-name {
			
			padding-left: 30px;
			text-align: left;
			padding-bottom: 5vh;
			padding-top: 10vh;
			display: flex;
			flex-direction: column;
			font-weight: 800;
			
		}


	}




</style>
