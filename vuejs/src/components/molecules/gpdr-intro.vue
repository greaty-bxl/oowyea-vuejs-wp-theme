<template>
	<div id="gpdr-intro" v-if="!wp.gpdr_accepted">
      <div id="gpdr-message">
        <div>
          <div v-html="wp.sidebars['gpdr-intro']"></div>
          <button v-on:click="accept">Je comprends</button>  
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
	padding: 20px;
	overflow-y: auto;
}
</style>