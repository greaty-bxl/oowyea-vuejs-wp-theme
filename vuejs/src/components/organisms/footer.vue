<template>
	<footer data-scroll v-if="$store.state.footer" >
		<div style="min-height: 100vh;padding-top: 100px !important;" class="footer wp-content d-flex flex-column align-items-center justify-content-center p-6">			
			<img class="logo-footer" width="300" src="/assets/logo_bruxelles_al-piccolo-mondo.svg">
			<hr/>
			<div class="row " style="width:100%; text-align: left;">
				<div class="col-xl-5 col-lg-12 no-padding" v-html="this.wp.acf.options.footer_colonne_1">
					
				</div>
				<div class="col-xl-5 col-lg-12 no-padding" v-html="this.wp.acf.options.footer_colonne_2">
					
				</div>
				<div class="col-xl-2 col-lg-12 no-padding" v-html="this.wp.acf.options.footer_colonne_3">
					
				</div>
			</div>
			<hr/>
			<div id="legal" class="d-flex row" style="font-size:15px;width: 100%;">
				<div class="col-lg-6 col-sm-12 no-padding copyright" style="text-align: left;">Copyright © Al Piccolo Mondo 2023 - Powered by <a class="text-grey" target="_blank" href="https://greaty.be">Greaty.be</a></div>
				<div class="col-lg-6 col-sm-12 no-padding mentions" style="text-align: right;">
					<ul>
						<li v-for="(item, index) in menu" :key="index"><a class="text-grey" :href="item.url" v-html="item.title"></a></li>
					</ul>
				</div>
			</div>
			<hr/>
		</div>
	</footer>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				ok : false
			}
		},
		mounted() {
			
			this.$emit('template_mounted')

			console.log('footer', this.wp.acf.options);

		},
		methods : {
			inview () {
				
				if( this.$('footer').hasClass('is-inview') && !this.ok )
				{
					console.log('locomotive.update');
					setTimeout( () => {
						this.$store.state.locomotive.update()
					}, 1500 )
					
					this.ok = true
				}
			}
		},
		computed : {
			menu () {
				return this.wp.menus['footer-legal-menu']
			}
		},
		watch : {
			'$store.state.locomotive' : function (state) {
				
				state.on('scroll', this.inview)
			}
		}

	}
</script>

<style type="text/css">

	#legal .mentions ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	#legal .mentions li {
		display: inline-block;
		margin-left: 20px;
	}

	.footer p{
		font-size: 18px !important;
	}

	.text-grey {
		color: #5C5C5C;
	}

	/*footer {
		padding-bottom: 50px !important;
	}*/

	@media (max-width: 991px) {
		#legal {			
			flex-direction: column-reverse !important;	
			text-align: right;
		}

		#legal .copyright {
			font-size: 12px !important;
			text-align: right !important;
		}

		#legal .mentions ul {
			margin-bottom: 30px;
		}

		#legal .mentions li {
			line-height: 200%;
			display: block;
			margin-left: 20px;
		}

		/*footer {
			padding-bottom: 150px !important;
		}*/
	}

	@media (max-width: 767px) {
		.logo-footer{
			width: 70%;
		}

		/*footer {
			padding-bottom: 300px !important;
		}*/
		
	}
</style>