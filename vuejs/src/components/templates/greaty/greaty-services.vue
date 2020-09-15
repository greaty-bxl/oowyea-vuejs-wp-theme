<template>
	<div class="section-wrap">
		<div class="clear"></div>


    <div>

        <div class="center-flex" >
            <div class="div-text-homepage">
                <Alpl class="title-page">Services</Alpl>
                <Alpl class="text-homepage">Greaty est spécialisée dans la communication, l’élaboration d’images de marque, les solutions digitales et les supports imprimés.</Alpl>
            </div>
        </div>



    </div>

	</div>
</template>
 


<script>
// import textcotact from './components/text-contact';
import smart_fonts from "Libs/smart-fonts.js";
import anime from 'animejs/lib/anime.es.js';
import Alpl from 'Molecules/animation-line-per-line';
export default {
	components: {
        // textcotact,
        Alpl,


},
	props: {
		'post' : Object
	},
	mounted (){
        
        var $ = this.$

            //Important to let works basic functions
            this.$emit('template_mounted', this)

            /* var test =  document.getElementsByClassName("title"); */
            $(".item-text").css("opacity","0");

            $('.item-text').on('leave-screen', (event) => {
                $(event.target).css("opacity","0");
            })

            $( ".item-text" ).each( function(index, el) {
                // console.log(el);
                $(el).on('enter-screen', (event) => {
                    anime({
                        targets: event.target,
                        // translateY: -100,
                        opacity: 1,
                        easing: 'easeInOutSine',
                        duration: 200,
                        delay: index * 50
                        });
                    })
            
            smart_fonts({
            '.smallTile' :54,
            '.item-text' : 22,
            '.text-homepage' : 52.8,
            })
	
            });
	}
}

</script>

<style >
    
    body div .section-wrap {

    font-family: 'Montserrat', sans-serif;
    background-color: #282828; ;

    }


</style>

<style scoped >

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;1,300;1,400&display=swap');


#animate1{

    transform: translateY(100px);
}

lottie-animation{

    height: 50vh;
    width: 50%;
}

/*.g-project{
    opacity: 0;
}*/
    
/*h1{


    color: #e1e1e1;
    font-family: 'Montserrat', sans-serif;
    font-weight: lighter;

}*/

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


.div-text-project{
display: flex;
/*height: 100vh;/*/
width: 80%;
/*padding-top: 100px;*/
padding-left: auto;
padding-right: auto;

}

.image-client{

width: 100%;

/*background-color: white;*/

}

.name-client{

font-size: 20px;
margin-bottom: 5px;
font-family: 'Montserrat', sans-serif; 

}

.role-greaty{

font-size: 12px;
margin-top: 0px;
font-family: 'Montserrat', sans-serif; 

}

.g-project {
    padding-left: 35px ;
    padding-right: 35px;
}

                /* maximum */

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


.textbox {
margin:5em;

}

.img{

margin-left: 30px;
}

@import url(https://fonts.googleapis.com/css?family=Karla);

body {
    font-family: 'Montserrat', sans-serif !important;
    font-weight: lighter;
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

}

.typing-animation{

  display: flex;
  height: 100%;
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


strong {
  text-transform: uppercase;
  display: block;
  margin: 0.25em 0;
}

.icon {
  font-size: 200%;  
  /*border-radius: 0.5em;*/
  /*padding:0.5em;*/
  height: 100%;
  /*height: 60vw !important;*/
}

.title-page{

    font-size: 10px !important;
    padding-bottom: 5%;
    text-transform: capitalize;
    letter-spacing: 10px;
    color: #e1e1e1;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    text-align: left;
    width: 20%;
}

.div-text-homepage{

    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;

}
            

.banner{

    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.banner div{

    margin-top: auto;
} 

                @media screen and (min-width: 1100px) {

                        .center-flex{

                            min-height: 100vh;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            margin: auto 0px;

                        }


                        .post-client{

                            padding:  30px 35px;
                        }

                        .text-homepage{

                            /*padding-top: 70px;*/
                            /*padding-bottom: 150px;*/
                            /*width: 70% ;*/
                            /*margin: auto 70px;*/
                            /*width: 100%;*/
                            /*font-size: 3.3em;*/
                            color: #e1e1e1;
                            font-family: 'Montserrat', sans-serif !important;
                            font-weight: lighter;
                            text-align: left;

                        }


                        .client img{

                        width: 100%;

                        }

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

                        .confidentialite p {
                        margin: 5px  0px;
                        text-align: right;
                        }

        
                        .g-project{
                                width: calc(50% - 70px) !important;
                                display: inline-block;
                                margin-bottom: 3%;
                        }

                        .div-text-homepage{

                            width:  80%;
                        }


                }

                @media screen and (max-width: 1100px) and  (min-width: 600px) {

                        .banner{

                            min-height: 50vh;
                            display: flex;
                            flex-direction: column;
                        }

                        .banner div{

                            margin-top: auto;
                        } 

                        .text-homepage{

                            font-family: 'Montserrat', sans-serif !important;
                            font-weight: lighter;
                            color: white;
                            /*padding-left: 5%;*/
                            height: auto;
                            text-align: left;
                            /*padding-top: 20%;*/
                            /*font-size: 35px;*/
                            display: block;
                            margin-top: 0px;
                            padding-left: 70px;
                            padding-right: 70px;
                            width: auto;
                            /*line-height: 60px;*/

                        }

                        .g-project {
                            padding-left: 10%;
                            padding-right: 10%;
                            padding-bottom: 5%
                        }

    
                        .client{

                        width: 100% !important;
                        /*height: 60vw;*/

                        margin-left: auto;
                        margin-right: auto;


                        }

                        .global-project{
                        z-index: 10;
                        width: 100% !important;


                        }

                        .image-client{

                        height: 100%;
                        background-color: white;
                        }




                        .row{
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        }

                        .div-text-project{ 

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
                        .div-text-homepage{

                            height: 100vh;
                        }

                        .title-page{
                            font-size: 14px;
                            padding-left: 70px;
                        }

                }


                @media screen and (max-width: 600px) {

                        .center-flex{

                            min-height: 100vh;
                            /*  display: flex;
                            flex-direction: column;
                            justify-content: center;*/
                            margin: auto 0px;

                        }

                        .banner{

                            min-height: 50vh;
                            display: flex;
                            flex-direction: column;
                        }

                        .banner div{

                            margin-top: auto;
                        }

                        .global-project{
                        z-index: 10;
                        width: 100% !important;

                        }

                        .g-project{

                            width: calc(100% - 70px) !important;
                            height: auto;
                            display: inline-block;
                            padding-right: 30px;
                            padding-left: 30px;
                            padding-bottom: 5%

                        }

                        .div-text-project{

                            width:100%;

                        }

                        .title-page{

                        font-size: 10px !important;
                        padding-bottom: 7%;
                        text-transform: capitalize;
                        letter-spacing: 10px;
                        padding-top: 10%;
                        text-align: left;
                        }

                        .client img{

                            width: 100% !important;
                            /*height: 60vh;*/
                            min-height: 200px;
                            /*background-color: white;*/

                        }

                        .row{

                            padding:  30px 30px;
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;

                        }

                        .text-homepage{

                            padding-bottom: 5%;
                            margin: auto 30px;
                            font-size: 3.1em;
                            color: #e1e1e1;
                            font-family: 'Montserrat', sans-serif !important;
                            font-weight: lighter;
                            text-align: left;
                            width: calc(100% - 60px);


                        }


                        .textbox{

                            margin: 50px 30px !important;
                            height: 70vh;


                        }

                        .post-client{

                            padding-top: 100px;
                            padding-bottom: 120px;

                        }

                        .text-homepage{

                            /*padding-top: 70px;*/
                            padding-top: 0px;
                            /*width: 70% ;*/
                            /*margin: auto 70px;*/
                            /*width: 100%;*/
                            font-size: 3.3em;
                            color: #e1e1e1;
                            font-family: 'Montserrat', sans-serif !important;
                            font-weight: lighter;
                            text-align: left;

                        }
                        .title-page{
                            margin-left: 30px;
                            width: auto;
                            margin-top: 95px;
                        }


                }




</style>



