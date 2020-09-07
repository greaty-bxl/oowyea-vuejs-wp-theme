<template>
	<div>
		<slot/>
	</div>
</template>

<script>
	
	// console.log(anime);	

export default{

mounted(){



	var $ = this.$

	var width_window = $(window).width()

	console.log(width_window);

	if (width_window < '500')  {

		var selector_1 =  ""

		selector_1.remove()

	}

	else{


			$(function(){
			boxRollovers();
		});



	}




	var oLayer;
	let selector = $(".g-project")
	let XAngle = 0;
	let YAngle = 0;
	let Z = 20;	
			// var topPost = 0
		
			function boxRollovers()
			{
				selector.on("mousemove",function(e){

					var $this = $(this);
					var XRel = e.pageX - $this.offset().left;
					var YRel = e.pageY - $this.offset().top ;
					var width = $this.width();

					YAngle = -(0.5 - (XRel / width)) * 8; 
					XAngle = (0.5 - (YRel / width)) * 8;
					updateView($this.children(".icon"));

				});

				selector.on("mouseleave",function(){
				oLayer = $(this).children(".icon");
				oLayer.css({"transform":"perspective(525px) translateY(0px) translateZ(0) rotateX(0deg) rotateY(0deg)","transition":"all 300ms linear 0s","-webkit-transition":"all 300ms linear 0s"});
				oLayer.find("strong").css({"transform":"perspective(525px) translateZ(0) rotateX(0deg) rotateY(0deg)","transition":"all 300ms linear 0s","-webkit-transition":"all 300ms linear 0s"});
				});
				}

				function updateView(oLayer)
				{
				oLayer.css({"transform":"perspective(525px) translateY(0px) translateZ(" + Z + "px) rotateX(" + XAngle + "deg) rotateY(" + YAngle + "deg)" ,"transition":"all 300ms linear 0s","-webkit-transition":"all 300ms linear 0s"});
				oLayer.find("strong").css({"transform":"perspective(525px) translateZ(" + Z + "px) rotateX(" + (XAngle / 0.22) + "deg) rotateY(" + (YAngle / 0.66) + "deg)","transition":"all 300ms linear 0s","-webkit-transition":"all 300ms linear 0s"});
				}




	this.$emit('template_mounted')
}
}
</script>

<style>


.g-project strong {
  text-transform: uppercase;
  margin: 0.25em 0;

}

.icon {
  font-size: 200%;  
  /*border-radius: 0.5em;*/
  /*padding:0.5em;*/
  height: 100%;
  /*height: 60vw !important;*/
}


h1{

	font-size: 4em !important;
}



</style>