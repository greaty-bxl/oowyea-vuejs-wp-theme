<template>
	<div id="gpdr-intro" v-if="!wp.gpdr_accepted">
      <div id="gpdr-message">
        <div>
			<h3><strong>POLITIQUE DE COOKIE</strong></h3>
			<div v-html="wp.sidebars['gpdr-intro']"></div>
			<button class="button-cookie" v-on:click="accept">J'accepte</button>        
        </div>        
      </div>
    </div>
</template>

<script>
	export default {
		mounted () {
			let $ = this.$

			if( !this.$store.state.wp.gpdr_accepted )
			{
				$('#app').on('section-top-ready', () => {
					$('#app').data('scrolling', 'gpdr')
				});
			}
		},
		methods:{
			accept: function(event){

				let $ = this.$

				$(event.toElement).prop('disabled', true)

				this.wp_ajax('gpdr_update_state', true, (result) => {
					
					if( result )
					{
						let wp = this.$store.state.wp
						wp.gpdr_accepted = true

						this.$store.commit({
							type: 'update_wp',
							wp: wp
						})

						$('#app').data('scrolling', '')
					}
					else
					{
						$(event.toElement).prop('disabled', false)
					}

				})
			}
		},
		computed: {
			wp () {
				return this.$store.state.wp
			}
		}
	}
</script>

<style>
#gpdr-intro {
	position: fixed;
	z-index: 9000;
	width: 100%;
	height: 100vh;
	top: 0;
	background: rgba(0,0,0,0.5);
	display: flex;
	align-items: center;
	justify-content: center;	
}

#gpdr-message {
	width: 400px;
	height: 700px;
	max-width: 90%;
	max-height: 90vh;
	background: #FFFFFF;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 40px;
	overflow-y: auto;

}

.widget_text * {

	color: #666;
}

.widget_text h4{

	font-size: 18px;
}

.widget_text p{

	font-size: 16px;
	line-height: 24px;
	
}

h3{

	font-size: 22px;
}

.button-cookie {

	background-color: #70625B !important;
	color: white !important;
	margin-top: 16px;
	border: solid #70625B;
	border-width: 1px;
	min-width: 200px;
	padding-top: 25px;
	padding-bottom: 25px;
	line-height: 0;
	border-radius: 0px;
	margin-bottom: 16px;
	font-size: 18px;
	line-height: 0px;
	margin-top: 22px;

}

.button-cookie:hover {

	background-color: white !important;
	color: #70625B !important;
	transition: 0.3;
	

}


@media screen and (max-width: 600px){



}



</style>