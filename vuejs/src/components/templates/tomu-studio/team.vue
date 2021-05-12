<template>

	<div class="Team-section ">

		<div class="content-team team-image">
			<img height="100%" :src="post.thumb">
			<!-- <div class="background-team"></div> -->
			<div class="animation-title-team" >
				<p class="principal on-screen">TUNG</p>
				<p>SANDRINE</p>
				<p>MORGANE</p>
				<p>WALDO</p>
			</div>
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

		$('[data-state="current"] .principal').on('enter-screen', () => {

			$('.header-tomu-container').css('color', '#FCD190');
			$('.header-tomu-container svg').css('color', '#FCD190');
			$('.header-tomu-container a').css('color', 'black');
			var href = $('.Team-section').parent().attr('data-permalink');
			if( !this.$store.state.is_history )this.pushHistory( href )
			$('.menu-item a[href="'+ href +'"]').css('color', '#FCD190');
			
		})

		$('[data-state="current"] .principal').on('leave-screen', () => {
			
			
		})

		}

	}

</script>

<style lang="scss">

	* {
		box-sizing: border-box;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
	}

	*, *:before, *:after {
		box-sizing: inherit;
	}


	.content-team {

		cursor: pointer;

	&:hover {

		.animation-title-team {
			opacity: 1 !important;

		}
		.background-project {
			opacity: 1;

		}
	}
	}

</style>

<style type="text/css">

	.background-team{

		height: 300px;
		width: 150px;
		background-color: red;

	}

	.animation-title-team p{

		margin-right: 25px;
		/*margin-top: 20px;*/

	}


	.Team-section.section-wrap{

		flex-direction: row;
	}
	
	.Team-section img{

/*		width: 30vw;
		height: 40vw;*/
		/*height: auto;*/

	}

	.Team-section {
		
		display: flex;
		flex-direction: row;
		color: black;
		font-size: 19px;
	}

	.content-team{

		padding-left: 245px;
	}

	.Team-section *{

		/*all: unset;*/
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

		height: 75vh;
		text-align: left;
		justify-content: center;
		display: block;
		flex-direction: column;
		margin-top: auto;
		margin-bottom: auto;

	}

	#team{

		width: auto !important;
	}

	@media screen and ( min-width: 1130px ){

		.content-team{
			position: relative;
		}

		.animation-title-team *{

			all: unset;
		}
		.animation-title-team{

			height: 100% !important;
			position: absolute;
			width: 100% !important;
			left: 0;
			top: 0 !important;
			background-color: #ffffffd1 !important;
			display: flex;
			align-items: start;
			opacity:0 !important;
			-webkit-transition:all 0.25s ease-in-out;
			-moz-transition:all 0.25s ease-in-out;
			-o-transition:all 0.25s ease-in-out;
			-ms-transition:all 0.25s ease-in-out;
			transition:all 0.25s ease-in-out;
			color: black;
			font-size: 22px;
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			padding-top: 20px;
			font-weight: bold;

		}

		
	}

	@media screen and ( max-width: 1130px ) and ( min-width: 700px ){

		.Team-section img {

			width: 50vw;
			/*height: 40vw;*/
		}



		.content-team {
			
			padding-left: 70px;

		}

		.team-image{

			height: auto;
			
		}

		.animation-title-team p{

			margin-top: 10px;
			margin-bottom: 10px;
			margin-right: 0px;
			text-align: right;
			font-weight: bold;
		}

	}

	@media screen and ( max-width: 700px ){

		.content-team {
			
			padding-left: 0px;
			
		}

		.Team-section{

			display: flex;
			flex-direction: column-reverse !important;
			width: calc( 100% - 60px ) !important;
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

		.team-image{

			height: auto;
		}

		.animation-title-team p:first-child{

			margin-top: 20px;
			/*margin-bottom: 10px;*/
		}

		.animation-title-team p{

			margin-top: 10px;
			margin-bottom: 10px;
			margin-right: 0px;
			text-align: right;
			font-weight: bold;
		}

		.Team-section *{

			/*all: unset;*/
			line-height:90%;
		}

	}




</style>
