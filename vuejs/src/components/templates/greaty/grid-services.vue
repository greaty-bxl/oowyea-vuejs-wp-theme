<template>
	<div class="section-wrap">
		<div class="clear"></div>


<!--     <div class="div-text-homepage">

        <div class="center-flex" >

            <Alpl class="text-homepage"><h1 class="title-page">Services</h1>
                Greaty est spécialisée dans la communication, l’élaboration d’images de marque, les solutions digitales et les supports imprimés.
            </Alpl>

        </div>

    </div> -->
            <div class="firstSection">
                <div class="grid-services">
                    <div class="item-services">
                        <div class="item-text on-screen">
                            <div class="smallTile">Stratégie</div>
                                <ul>
                                    <li> Consultance graphique</li>
                                    <li> Audit stratégie</li>
                                    <li> Stratégie de communication</li>
                                    <li> Conception publicitaire</li>
                                </ul>
                        </div>

                        <div class="item-text on-screen">
                            
                                <div class="smallTile">Design</div>
                                    <ul>
                                        <li> Identité visuelle</li>
                                        <li> Charte graphique</li>
                                        <li> Création de logo</li>
                                        <li> Brochure &amp; catalogue</li>
                                        <li> Magazine &amp; éditorial</li>
                                        <li> Rapport annuel </li>
                                        <li> Illustation</li>
                                        <li> Matériels promotionnels</li>
                                        <li> Packaging</li>
                                        <li> Etc</li>
                                    </ul>
                        </div>

                        <div class="item-text on-screen">
                            <div class="smallTile">Impression</div>
                                <ul>
                                    <li> Papeterie</li>
                                    <li> Panneau</li>
                                    <li> Bâche</li>
                                    <li> Stand</li>
                                    <li> Vitrine</li>
                                    <li> Autocollant</li>
                                    <li> Véhicule</li>
                                    <li> Textile</li>
                                    <li> Etc</li>
                                </ul>
                        </div>
              </div>
              <div class="item-services">
                        <div class="item-text on-screen">
                            <div class="smallTile">Digital design</div>
                                <ul>
                                    <li> UI/UX design</li>
                                    <li> Direction artistique digitale</li>
                                    <li> Webdesign sites internet</li>
                                    <li> Webdesign applications</li>
                                    <li> Motion design</li>
                                </ul>
                            </div>

                        <div class="item-text on-screen">
                            <div class="smallTile">Dev Web</div>
                                <ul>
                                    <li> Intégration HTML5/CSS3</li>
                                    <li> Développement PHP/MYSQL</li>
                                    <li> Développement de sites Web</li>
                                    <li> Application mobile</li>
                                    <li> Développement frontend</li>
                                    <li> CMS</li>
                                    <li> Intranets</li>
                                    <li> Développement Backend</li>
                                    <li> E-Commerce / Webshops</li>
                                </ul>
                        </div>
                        <div class="item-text on-screen">
                            <div class="smallTile">Tech Web</div>
                                <ul>
                                    <li> (Web-)Hosting</li>
                                    <li> Domaines</li>
                                    <li> Serveur et stockage</li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
          
<!--     <div>
        <textcotact>
        </textcotact>
    </div> -->
	</div>
</template>
 


<script>
// import textcotact from './components/text-contact';
import smart_fonts from "Libs/smart-fonts.js";
import anime from 'animejs/lib/anime.es.js';
// import Alpl from 'Molecules/animation-line-per-line';
export default {
	components: {
        // textcotact,
        // Alpl,


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
                console.log(el);
                $(el).on('enter-screen', (event) => {
                    anime({
                        targets: event.target,
                        translateY: -100,
                        opacity: 1,
                        easing: 'easeInOutSine',
                        duration: 200,
                        delay: index * 50
                        });
                    })
            
            smart_fonts({
            '.smallTile' :54,
            '.item-text' : 22,
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

<style lang="scss" scoped>

.smallTile{

    font-family: 'Montserrat', sans-serif;
    background-color: #282828; 
    color: #e1e1e1;

    }


    .title-page{

        font-size: 10px !important;
        padding-bottom: 5%;
        text-transform: capitalize;
        letter-spacing: 10px;
        // padding-top: 20%;
    }


.firstSection {
    padding: 0 auto;
}

.grid-services {
    padding-top: 9rem;
}

// .smallTile {
//     font-family: 'Gotham-Bold';
// }


.item-text {
    margin-top: 5%;
    text-align: left;
    opacity: 0;
}

.div-text-homepage{

    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;

}

ul li{

    list-style: none;
    padding-bottom: 10px;
    
}
ul{
    padding-left: 0px;
}
// @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;1,300;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');

    .global-descriptif{

        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: rgb(25, 26, 28);
        min-height: 100vh;
        padding-top: 150px;
        padding-bottom: 150px;

    }

    .services-fourni ul{
        color: #e1e1e1;
        list-style-type: none;
        text-align: left;
        padding-left: 0px;
    }

    .all-description{

        height: 100%;
        width: 80%;
        background-color: rgb(25, 26, 28);
        margin:  0px 70px;

    }

    .all-description p{

        line-height: 30px;
        font-size: 18px !important;
    }
    .image{

        height: 100%;
        width: 90%;
        /*background-color: #e1e1e1;*/
        background-position: center;
        background-size: cover;
        background-repeat: none;
        margin-left: 5%;
        margin-right: 5%;
    }
    p{
        text-align: left;
        margin-bottom: 10%;
        color: #e1e1e1;
    }


    .info p {
        
        margin-bottom: 5%;

    }

    .notre-service{
        
        margin-top: 5%;
        margin-bottom: 2%;


    }

   a{
   color: #e1e1e1;
   text-decoration: none;
   }

   p{

    color: #e1e1e1 ;
    text-align: left;

   }

   .global-project p{

   text-align: left;
   }



   a{color: #e1e1e1 ;}

   .div-text-homepage{
   display: flex;
   /*height: 100vh;/*/
   /*width: 80%;*/
   /*padding-top: 100px;*/
   padding-left: auto;
   padding-right: auto;

   }

   .image-client{

   width: 100%;

   /*background-color: #e1e1e1;*/

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

    .g-project {
        padding-left: 35px;
        padding-right: 35px;
    }

    ul li:before  {

        content: "–";

    }

    /*********/


    /*DESCKTOP*/
  


    /*********/

 @media screen and (min-width: 1100px) {


        .item-services {
            margin: 0px auto;
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: 90%;

            
        }

        .center-flex{

        min-height: 100vh;
        display: flex;
        // flex-direction: row;
        // justify-content: center;

        }


        .post-client{

        padding:  30px 35px;
        }

        .text-homepage{

        // padding-top: 70px;
        /*padding-bottom: 150px;*/
        width: 70% ;
        margin: auto 70px;
        /*width: 100%;*/
        font-size: 3.3em;
        color: #e1e1e1;

        font-weight: lighter;
        text-align: left;

        }

        .text-homepage h1{

            text-align: left;
            // margin: 5% 0px;
        }
        .item-text{
            // display: inline-block;
            width: auto;
            margin: 2.5% 4%;

        }


 }

 @media screen and (max-width: 1100px) and  (min-width: 600px) {

        .item-services {
            display: grid;
            flex-wrap: wrap;
            grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));
            grid-column-gap:50px;
            grid-row-gap: 80px;
            color: #e1e1e1;
        }


        .text-homepage{

            // font-family: 'Open Sans', sans-serif!important;
            font-weight: lighter;
            color: #e1e1e1;
            /*padding-left: 5%;*/
            height: auto;
            text-align: left;
            /*padding-top: 20%;*/
            font-size: 35px;
            display: block;
            margin-top: 0px;
            padding-left: 70px;
            padding-right: 70px;
            width: auto;
            line-height: 60px;

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
        background-color: #e1e1e1;
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

 }


 @media screen and (max-width: 600px) {

        .item-services {
            display: grid;
            flex-wrap: wrap;
            grid-template-columns: repeat(auto-fit, minmax(90%, 1fr));
            grid-column-gap:50px;
            grid-row-gap: 80px;
            color: #e1e1e1;
        }

        .global-project{
        z-index: 10;
        width: 100% !important;

        }

        .title-page{

            padding-top: 20%;

        }


        .g-project{

            width: calc(100% - 70px) !important;
            height: auto;
            display: inline-block;
            padding-right: 30px;
            padding-left: 30px;

        }
        .div-text-project{

            width:100%;
            font-family: 'Open Sans', sans-serif;

        }

        .client img{

            width: 100% !important;
            /*height: 60vh;*/
            min-height: 200px;
            /*background-color: #e1e1e1;*/

        }



        .row{

            padding:  30px 30px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;

        }

        .text-homepage{

            padding-top: 150px;
            padding-bottom: 5%;
            /*width: 100% !important;*/
            margin: auto 30px;
            
            font-size: 3.1em;
            color: #e1e1e1;
            // font-family: 'Open Sans', sans-serif;
            font-weight: lighter;
            text-align: left;

        }

        .textbox{

            margin: 50px 30px !important;
            height: 70vh;


        }

        .post-client{

            padding-top: 100px;
            padding-bottom: 120px;

        }

        .firstSection{

            padding: 0 30px;
        }



 }


</style>

