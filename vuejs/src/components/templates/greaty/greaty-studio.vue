<template>
	<div class="section-wrap">
		<div class="clear"></div>
		<div class="content">
			<div class="box">A</div><p>John Doe <br>Lorem Ipsum</p>
			<div class="box">A</div><p>John Doe <br>Lorem Ipsum</p>
			<div class="box">A</div><p>John Doe <br>Lorem Ipsum</p>
		</div>
		<div>
			<textcotact>
			</textcotact>
		</div>
	</div>	
</template>

<script>
import smart_fonts from "Libs/smart-fonts.js"
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

		$(this.$el).css({
			'justify-content':'center'
		})
		smart_fonts({
			'h1' :54,
			'p' : 14,
		})
	

		//Important to let works basic functions
		this.$emit('template_mounted')

	
	}
}
</script>

<style lang="scss" scoped>

.content {
	display: inline-flex;
	gap:102px;
	flex-wrap: wrap;
	justify-content: center;
}

.content div {
	display: flex;
	width:503px;
	height:646px;
	border: 3px solid rgba(0,0,0,.2);

  
}

.box {
	background-image: url("https://images.unsplash.com/photo-1575659868234-aae7cc621f8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80");
}

p {
	color:white
}

</style>