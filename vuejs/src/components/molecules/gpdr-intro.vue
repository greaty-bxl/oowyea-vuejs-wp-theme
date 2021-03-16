<template>
	<div id="gpdr-intro" v-if="!wp.gpdr_accepted && !is_privacy_policy_page">
      <div id="gpdr-message">
        <div>
			<h3><strong v-html="pll__('POLITIQUE DE COOKIE')" ></strong></h3>
			<div v-html="$store.state.wp.sidebars['gpdr-intro']"></div>

			<p class="google-analytic" v-html="pll__('Google Analytic')"></p>
			<div class="div-button" >

			<button v-on:click="accept({gpdr: true, google: true})" class="button-santos-vert google-accepter" v-html="pll__('Accepter')">
			</button>

			<button v-on:click="accept({gpdr: true, google: false})" class="button-santos-vert  google-refus" v-html="pll__('Refuser')">
			</button>

			</div>

        </div>        
      </div>
    </div>
</template>

<script>

	// import VueAnalytics from 'vue-analytics'
	// import Vue from 'vue';
	export default {

		data(){
			return {
				google_boolean: true,
			}
		},
		mounted () {
			let $ = this.$

			console.log(this.$store.state.wp.sidebars);

			console.log(this.google_boolean);

			
			$('#app').on('section-top-ready', () => {
				
				console.log( 'store gpdr_accepted', this.$store.state.wp.gpdr_accepted );

				if( !this.$store.state.wp.gpdr_accepted )
				{		
					$('#app').data('scrolling', 'gpdr')
				}

				if ( this.$store.state.wp.google_accepted ) 
				{
					//this.init_google()
				}
			});
		},
		methods:{

			accept: function(arg){

				let $ = this.$

				console.log(arg);

					$(event.toElement).prop('disabled', true)

					this.wp_ajax('gpdr_update_state', arg, (result) => {
						
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

					console.log(arg.google, 'arg.google');

					if( arg.google === true ){

						this.$store.state.wp.google_accepted = true
					} 

			},
			// init_google : function(){
				
			// 	// 	Vue.use(VueAnalytics, {
			// 	// 	id: 'UA-XXX-X'
			// 	// })
			// 	// (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			// 	// (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			// 	// m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			// 	// })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

			// 	// ga('create', 'UA-XXXXX-Y', 'auto');
			// 	// ga('send', 'pageview');
				
			// }
		},
		computed: {
			wp () {
				return this.$store.state.wp
			},
			is_privacy_policy_page (){
				if( this.$store.state.wp.body_class.search("privacy-policy") >= 0 )
				{
					return true
				}
				else
				{
					return false
				}				
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


.google-refus{
	margin-top: 15px;
	background-color: white !important;
	color: #888320 !important;
	border: 1px solid #888320 !important;
	transition: all 0.2s ease-out;
	font-size: 16px;

}

.google-refus:hover{

	background-color: white;
	color: #f55;

}

.google-accepter{

	font-size: 16px;

}

.google-accepter:hover{

	background-color: white;
	color: #888320;
}

.google-analytic{

	margin-top: 30px;
	margin-bottom: 15px;
	font-weight: 600;
	font-size: 16px;

}

.div-button {
    display: flex;
    flex-direction: column;
}

.div-button button{

	width: 50%;
	margin-left: auto;
	margin-right: auto;
}

@media screen and (max-width: 600px){



}



</style>