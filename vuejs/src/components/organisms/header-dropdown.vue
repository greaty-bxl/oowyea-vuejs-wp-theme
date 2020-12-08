<template>
	<div id="header" class="header-greaty">
		<div class="clear"></div>

		<div id="right-panel">


			<div class="icon button-header close-simple">
			<div class="burger"></div>
			</div>

			<ul class="parent">
				<li class="dropdown" v-for="child in wp.menus" :key="child.ID" >

					<a class="ligne-animation" v-html="child.title" >Mouse over me</a>

					<div  v-if="child.child">

					<ul v-for="child in child.child" :key="child.ID" class="dropdown-content">


						<a class="sousmenus" v-html="child.title" >Hello World!</a>
						
					</ul>							
					</div>

				</li>
			</ul>

				
		</div>

		<div>
		

		</div>
		<div class="clear"></div>
	</div>
</template>

<script>
// import Acf from 'Organisms/acf.vue'


export default {
	components:{
		// Acf
	},
	data(){
		return {
			sideEl : ''
		}
	},
	mounted(){
		// var $ = this.$

		this.$emit('template_mounted', this)

		// console.log(this.wp.menus);


	}
}

</script>

<style>


/*styleglobal*/

	.parent li{

		list-style: none;
		/*text-align: left;*/

	}


/*styleglobal*/


/*animation header pc*/

@media only screen and (min-width: 1100px){


	.parent{

		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-top: 0px;
		border-bottom: 1px solid #dddddd;;
		/*border-width: 0.5px;*/
	}    

	.parent li{

		list-style: none;
		display: inline-block;
		font-size: 14px;
		font-weight: 700;
	}

	.parent li a:hover {
		color: #888320;
	}

	.ligne-animation:after {
		content: "";
		position: absolute;
		opacity: 0;
		top: calc(100% - 7px);
		left: 0;
		z-index: 5010;
		width: 100%;
		height: 7px;
		background-color: #888320;
		transition: opacity .3s ease-in-out;
	}

	.parent li a {
		position: relative;
		padding-bottom: 50px;
		color: #000;
		white-space: nowrap;
		transition: opacity .3s ease-in-out;
	}

	.parent li:hover a:after {
		opacity: 1;
	}

	.parent li {
		padding: 47px 24px;
	}

	.dropdown-content {
		display: none;
		width: 100%;
		/*background: lightblue;*/
		position: absolute;
		box-sizing: border-box;
		right: 0px;
		top:110px;
		vertical-align:baseline;
		z-index :5000;
		-webkit-font-smoothing: antialiased;
		padding: 47px 24px;
	}

	.dropdown:hover .dropdown-content {
		display: block;
	}
		.dropdown:hover .dropdown-menu {
		display: block;
	}

	.sousmenus{
	
	}


}

/*animation header pc*/



</style>

<style scoped>
 

		@media screen and (max-width: 600px) {

			nav{
			margin:  30px 30px;
			width: calc(100% - 60px);
			}
	

			

			.icon{

				margin-right: 20px;
			}

		}

		.icon{

		position: absolute;
		display: block;
		left: calc( 100% - 45px );
		width: 45px;
		height: 40px;
		cursor: pointer;
		background-color: #70625b;
		z-index: 11000;
		
		/*margin-top: 20px;*/
		}
		.burger{
		width: 30px;
		height: 3.3px;
		background-color: #fff;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		box-shadow: 0 2px 5px rgba(0,0,0,0.2);
		transition: 0.5s;
		}
		.burger::before,
		.burger::after{
		content: '';
		position: absolute;
		width: 30px;
		height: 3.3px;
		left: 0;
		background: #fff;
		box-shadow: 0 2px 5px rgba(0,0,0,0.2);
		transition: 0.5s;
		}
		.burger::before{
		top: -8px;
		}
		.burger::after{
		top: 8px;
		}

		.icon.active .burger{
		background: rgba(0,0,0,0);
		}
		.icon.active .burger::before{
		top: 0;
		transform: rotate(45deg);
		}
		.icon.active .burger::after{
		top: 0;
		transform: rotate(135deg);
		}












</style>

<style scoped>
	
	a{

		text-decoration: none;
	}
</style>