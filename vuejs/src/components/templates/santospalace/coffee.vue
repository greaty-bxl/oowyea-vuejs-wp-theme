
<template>
    <div class="section-wrap">
		<div class="clear"></div>

		<h1>holla</h1>
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



		$('h1').on('click',function(event){

			event.preventDefault()


			var form = 'lallalal';

			// console.log( form.serializeArray() );

			$.ajax({
				type: 'post',
				url: window.ajaxurl,
				data:{
					action: 'global_funtion_filter',
					form: form
				},


				success: function(result){
					console.log(result);

					console.log(result);

						$('.alert-envoi-assortiment').show('slow/400/fast', function() {
							
						});

							$('.alert-envoi-assortiment').animate({
								// targets: $('.menu_link').target,
								opacity: '1',
								easing: 'easeInOutSine',
								duration: 200,
							});

							$('.alert-envoi-assortiment').animate({
							// targets: $('.menu_link').target,
							display: 'block',
							easing: 'easeInOutSine',
							duration: 200,
							});


						setTimeout(function() {

							$('.alert-envoi-assortiment').animate({
								opacity: '0',
								easing: 'easeInOutSine',
								duration: 200,
							});
							$('.alert-envoi-assortiment').hide('slow/400/fast', function() {
								
							});

						}, 3000);
		
			}
			});

		// Prevents default submission of the form after clicking on the submit button. 
		return false;   
		});


		// setTimeout(function() {

		// 		var myVar = $('#fullpage').find('div:first').attr('id');

		// 		console.log(myVar , ' ID');

		// 		// var dataJson = JSON.stringify(myVar);

		// 		console.log(myVar);

		// 		$.ajax({
		// 			type: 'post',
		// 			url: AjaxUrl,
		// 			data:{
		// 			action: 'global_funtion_filter',
		// 			category_global: myVar
		// 		},

			

		// 		});

		// }, 1000);



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






