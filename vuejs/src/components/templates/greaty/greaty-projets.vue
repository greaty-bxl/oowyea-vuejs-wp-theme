<template>
    <div class="section-wrap">
        <div class="clear"></div>
       <section>
		<div class="grid">
		<div class="grid-inner">
		<div class="item">
			<div class="textinfo">
				<h1>Nom du client</h1>
				<p class="description">Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure modi corrupti recusandae consequatur dignissimos nemo beatae adipisci commodi reiciendis quia fugiat consectetur vero qui, vel ad. Repellat quae labore deserunt.</p><br>
				<p><span><strong> Client : </strong></span>Lorem ipsum dolor</p>
				<p><span><strong> Services : </strong></span>Lorem ipsum dolor</p>
				<p><span><strong> Web : </strong></span>Lorem ipsum dolor</p>
			</div>
		</div>
		<div class="item">
		<div class="item-inner"></div>
		</div>
		</div>
		</div>

		
		
    </section>

		<section>

			<div class="grid">
			<div class="grid-inner">
			<div class="item">
			<div class="test"></div><br>
					<p class="name-client">Lorem ipsum</p>
					<p class="role-greaty">Corporated Website</p>
			</div>
			<div class="item">
			<div class="test"></div>
					<p class="name-client">Lorem ipsum</p>
					<p class="role-greaty">Corporated Website</p>
			</div>
			</div>
			</div>


		</section>
    <section>

		<textcotact>	
		</textcotact>

	</section>
    </div>
 
</template>

<script>
import textcotact from './components/text-contact'
export default {
	components: {
		textcotact,
	},
	props: {
		'post' : Object
	},
	mounted (){

		var $ = this.$

		$(this.$el).parents('.section').css({
			'background-color': this.post.metas.background_color[0],
		});

		//Important to let works basic functions
		this.$emit('template_mounted')

		console.log('test');
	}
}

</script>
<style scoped>
body, html 
	{ 
        padding:0;
		margin: 0 ;
		background-color:#191a1c;
		font-family: 'Myriad pro', sans-serif; 
		color: #e1e1e1;
		box-sizing: border-box;
		
	}

a{
  color: #e1e1e1 !important;
  text-decoration: none !important;
}
a:visited{
  color: #e1e1e1 !important;
  text-decoration: none !important;
}

.footer {
    margin-top: 50px;
    
}

.grid {
 padding: 150px 70px;
}

.grid-inner {
 display: flex;
 flex-wrap: wrap;
 justify-content: space-between;
 
 
}

.item {
 flex: 1 1 100%;
 padding: 0.5em;
 text-align: left;
}

.item-inner {
 background-size: cover;
 background-image: url('https://images.unsplash.com/photo-1590301772617-933a6ed56f84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1901&q=80');
 padding-top: calc(100% / (16/16));
}

.test {
	background-size: cover;
	background-image: url('https://images.unsplash.com/photo-1590301772617-933a6ed56f84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1901&q=80');
	padding-top: calc(100% / (1/1));
}

.textinfo {
	font-size: 20px;
	width: 90%;
	text-align: left;
}

@media screen and (min-width: 480px) {
 .item {
  flex: 1 1 80%;
 }
}


@media screen and (min-width: 768px) {
 .item {
  flex: 1 1 60%;
 }
}

@media screen and (min-width: 980px) {
 .item {
	flex: 1 1 00%;
 }
 .item-inner {
	height: 30vh;
	width: 100%;
	background-size: cover;
 }
}

@media screen and (min-width: 1639px) {
 .item {
	flex: 1 1 00%;
 }
 .item-inner {
	height: 60vh;
	width: 60vw;
	background-size: cover;
 }
}

</style>