
<template>
    <div class="section-wrap">
		<div class="clear"></div>

		<h1>holla Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h1>
		<div class="clear"></div>
    </div>
 
</template>

<script>

import smart_fonts from 'Libs/smart-fonts.js';


export default {
	components: {

	},
	props: {
		'post' : Object
	},



	mounted(){


		smart_fonts({
			'.titre-home' : 85 ,
		})

		this.$emit('template_mounted', this);

		var $ = this.$


			// event.preventDefault()


			var form1 =  'cafes';

			console.log(form1 , 'cafesss');

			$.ajax({
				type: 'post',
				url: window.ajaxurl,
				data:{
					action: 'global_funtion_filter',
					'form12': form1
				},


				success: function(result){
					console.log(result);
			}
			});

			return false;

			// console.log(this.wp.cafes);


	}

}



</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');


</style>


<style scoped >

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

	h1 {
		font-size: 250px;
		margin: .67em 0;
	}

</style>






