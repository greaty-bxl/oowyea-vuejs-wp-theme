
<template>
    <div class="section-wrap">
        <div class="clear"></div>
		<div>

		<div class="div-text-homepage">
			<p class="text-homepage">
			Greaty est un studio de création graphique et digital basé à Bruxelles. Nous conceptualisons, concevons et codons toutes sortes de projets pour les marques, les startups et nous-mêmes.	
			</p>
		</div>

		</div>
		<div class="post-client">

				<div class="global-project">

					<div class="client">
						<div class="image-client"></div>
					</div>
						
						<p class="name-client">Lorem ipsum</p>
						<p class="role-greaty">Corporated Website</p>

				</div>

				<div class="global-project">

					<div class="client">
						<div class="image-client"></div>
					</div>
						
						<p class="name-client">Lorem ipsum</p>
						<p class="role-greaty">Corporated Website</p>
					
				</div>

				<div class="global-project">

					<div class="client">
						<div class="image-client"></div>
					</div>
						
						<p class="name-client">Lorem ipsum</p>
						<p class="role-greaty">Corporated Website</p>
					
				</div>

				
	
		</div>



       
        <div class="clear"></div>
    </div>
 
</template>

<script>

export default {
	components: {

	},
	props: {
		'post' : Object
	},
	mounted (){


		var $ = this.$

		$(this.$el).parents('.section').css({
			'background-color': this.post.metas.background_color[0],
		});

		this.$emit('template_mounted')

			console.log(this.wp.projects);
	}
}

</script>

<style scoped >
	
body {
margin: 0 !important;
padding: 0;

}

a{
color: #e1e1e1;
text-decoration: none;
}

.hello{

height: auto;
}

.hello li {
text-decoration: none;
height: auto;
}

.polo {
width: 100%;
position: fixed;
top:0%;
z-index: 20;
}

.global-project p{

text-align: left;
}

nav{

width: 100%;
/*height: 35px;*/
/*background: #191a1c;*/
/*box-shadow: 0 0 15px 20px #191a1c;*/
}
nav ul{
list-style: none;
display: flex;
flex-wrap: wrap;
align-items: left;
justify-content: left;
padding-top: 15px;
padding-bottom: 15px;
margin: 0;
height: 100%;
text-align: left;
display: flex;
flex-direction: column;

}
nav ul li{
cursor: pointer;
}
/*nav ul li.items{
position: relative;
width: auto;
margin: 0 16px
text-align: center;
order: 3;
}*/
/*li:last-child{
margin: 0px !important;
position: absolute;
} 
nav ul li.items:after{
position: absolute;
content: '';
left: 0;
top: 40px;
height: 2px;
width: 100%;
background: gray;
opacity: 0;
transition: all 0.2s linear;
}
nav ul li.items:hover:after{
opacity: 1;
top: 20px;
}

.logo{
padding-top: 4px;
padding-left: 30px;
text-decoration: none
}
nav ul li a{
color: white;
font-size: 0.9em;
text-decoration: none;
transition: .4s;
}
nav ul li:hover a{
color: gray;
}
nav ul li i{
font-size: 23px;
}
nav ul li.btn{
display: none;
}
.fa-bars:before {
color: white;
}*/




@media all and (max-width: 1200px){
nav{
width: 100%;
}
nav ul li.items{
width: 100%;
/*display: none;*/
}
nav ul li.items.show{
display: block;
background: #191a1c;
flex-basis: 100%;
}
nav ul li.btn{
display: block;
}
nav ul li.items:hover{
border-radius: 5px;
box-shadow: inset 0 0 5px gray,
inset 0 0 10px white;
}

nav ul li.items:hover:after{
opacity: 0;

}

nav ul{
text-align: left;
padding-right: 30px;
padding-left: 30px

}

}

body,html
{ 
padding: 0%;
margin: 0;
background-color:#191a1c;
font-family: 'Myriad pro', sans-serif; 
color: #e1e1e1;
}

a{color: #e1e1e1 ;}

.div-text-homepage{
display: flex;
height: 100vh;
width: 100%;
/*padding-top: 100px;*/
padding-left: auto;
padding-right: auto;


}

.image-client{

width: 100%;

background-color: white;

}
.client{

width: 45%;
height: 59vh;

}


.image-client-1{

height: 100%;
/*background:  no-repeat  center/100% url( "images/Greaty_axa_cover.jpg") ;*/
/*background-repeat: 'no-repeat';*/
background-size: 'cover';
/*background-position: 'left';*/
width: 100%;
}

.image-client-2{

height: 100%;
/*background:  no-repeat  center/100% url( "images/Greaty_Eveil_cover.jpg") ;*/
/*background-repeat: 'no-repeat';*/
background-size: 'cover';
/*background-position: 'left';*/
}

.image-client-3{

height: 100%;
/*background:  no-repeat  center/100% url( "images/Greaty_vauban_cover.jpg") ;*/
/*background-repeat: 'no-repeat';*/
background-size: 'cover';
/*background-position: 'left';*/
}

.image-client-4{

height: 100%;
/*background:  no-repeat  center/100% url( "images/Greaty_vauban_cover-1.jpg") ;*/
/*background-repeat: 'no-repeat';*/
background-size: 'cover';

}

.image-client-5{

height: 100%;
/*background:  no-repeat  center/100% url( "images/Majolie_cover.jpg") ;*/
/*background-repeat: 'no-repeat';*/
background-size: 'cover';

}



.name-client{

font-size: 20px;
margin-bottom: 5px;
font-family: 'Gotham Book Regular', sans-serif; 

}

.role-greaty{

font-size: 12px;
margin-top: 0px;
font-family: 'Gotham Book Regular', sans-serif; 

}

@media screen and (min-width: 1200px) {

	.post-client{
		padding-left: 35px;
		padding-right: 35px;
		display: flex;
		flex-direction: row;
	}

.global-project{

	z-index: 10;
	width: 50% !important;
	height: auto;
	min-height: 400px;
	margin-left: 35px;
	margin-right: 35px; 

}



.client{

width: 100% !important;
height: 60vh;
min-height: 400px;
background-color: white;

}

.text-homepage{

margin: 0px 70px;
width: 100%;
font-size: 50px;
/*margin-left: 70px;*/
margin-right: auto;
text-align: left;


}

.row{

padding:  35px 35px;
display: flex;
flex-direction: row;
justify-content: space-between;

}

.text-homepage{
padding-top: 15%;
padding-bottom: 15%;
width: 80% !important;
margin: auto 70px;
width: 100%;
font-size: 5.5em;
color: #e1e1e1;
font-family: 'Montserrat', sans-serif; 
}


}

@media screen and (max-width: 1200px) {
.client{

width: 100% !important;
height: 60vw;

margin-left: auto;
margin-right: auto;


}

.global-project{
z-index: 10;
width: 90% !important;
margin-left: auto;
margin-right: auto;
margin-top: 40px;
margin-bottom: 20px;

}

.image-client{

height: 100%;
background-color: white;
}


.text-homepage{
text-align: left;
padding-top: 50px;
font-size: 35px;
display: block;
margin-top: 0px;
padding-left: auto;
padding-right: auto;
width: auto;

}

.row{
width: 100%;
display: flex;
flex-direction: column;
}

.div-text-homepage{ 

	height: 100vh;
	min-height: 100vh;
	padding-top: auto;
	padding-left: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	padding-top: 0px;
}

}



.confidentialite p a {

text-decoration: none;
}
.reseaux-sociaux p a {

text-decoration: none;
}

/*footer*/
footer{

font-family: 'Gotham Book Regular', sans-serif; 
}


@media screen and (min-width: 1200px) {

footer{
padding: 40px 30px;
display: flex;
-webkit-box-orient: vertical;
flex-direction: column;

}

.footer-text{

display: flex;
flex-direction: row;
justify-content: space-between;

}

.reseaux-sociaux{
display: flex;
flex-direction: column;

}
.adresse-social {
text-align: left;



}

.reseaux-sociaux p {
margin: 5px  0px;
}

.confidentialite{

display: flex;
flex-direction: column;

}

.confidentialite p {
margin: 5px  0px;
text-align: right;
}



}

@media screen and (max-width: 1200px) {

footer{
padding: 40px 5vw;
color: white;
display: flex;
-webkit-box-orient: vertical;
flex-direction: column;

}

.reseaux-sociaux{
display: flex;
flex-direction: column;
justify-content: center;

}

.reseaux-sociaux p {
margin: 4px  0px;
}

.confidentialite{

display: flex;
flex-direction: column;

}

.confidentialite p {
margin: 5px  0px;
text-align: left;
}

}

.text-contact a{
font-family: 'Gotham Bold', sans-serif; 
color: white;
}



@media screen and (min-width: 1200px) {

.div-text-contact{

padding-left: 20px;
padding-right: 20px;
/*width: 80%;*/
font-size: 3em;
margin-left: 0;
margin-right: 0;
padding-top: 100px;
padding-bottom: 70px;

}

.textbox {
margin:5em;

}


}

@media screen and (max-width: 1200px) {

.div-text-contact{

padding-left: 5vw;
padding-right: 5vw;
width: 80%;
font-size: 2em;
color: white;
margin-left: 0;
margin-right: 0;
padding-top: 50px;

}
}

.row{

overflow: hidden;
}


.img{

margin-left: 30px;
}

@import url(https://fonts.googleapis.com/css?family=Karla);

body {
  /*font-family: "Karla", sans-serif;*/
   text-align: center;
   /*font-size: 50px;*/ 
   padding-top: 100px;
  /*background-color: #202020;*/
  color: #f9f9f9;
}

@keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
}
@-webkit-keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
}
@-moz-keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
}

.cursor {
    animation: blink 0.7s infinite;
}

#quote{

  margin: auto auto;
  /*width: 90%;*/
  /*font-size: 3em;*/
}

.typing-animation{

  display: flex;
  height: 100%;
}


* {
  box-sizing: border-box;
}

.item {
  width: 200px;
  height: 200px;
  margin: 50px auto;
  padding-top: 75px;
  background: #ccc;
  text-align: center;
  color: #FFF;
  font-size: 3em;
}

.img{

    margin-left: 30px;
}




</style>