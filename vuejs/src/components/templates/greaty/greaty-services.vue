<template>
	<div class="section-wrap">
		<div class="clear"></div>


    <div class="div-text-homepage">

        <div class="center-flex" >

            <Alpl class="text-homepage"><h1 class="title-page"></h1>

                Greaty est spécialisée dans la communication,
                                l’élaboration d’images de marque, les solutions digitales
                                et les supports imprimés.
            </Alpl>

        </div>

    </div>
<!--             <div class="div-text-homepage">
                <div class="center-flex">

                <Alpl class="text-homepage on-screen">Greaty est spécialisée dans la communication,
                l’élaboration d’images de marque, les solutions digitales
                et les supports imprimés.
                </Alpl>

                </div>
            </div> -->
            <div class="firstSection">
                <div class="grid-services  ">
                    <div class="item-services">
                        <div class="item-text on-screen"><div class="smallTile">Stratégie</div><br><br>- Consultance graphique<br><br>- Audit stratégie<br><br>- Stratégie de communication<br><br>- Conception publicitaire</div>
                        <div class="item-text on-screen"><div class="smallTile">Desing</div><br><br>- Direction artistique<br><br>- Identité visuelle<br><br>- Charte graphique<br><br>- Création de logo<br><br>- Brochure &amp; catalogue<br><br>- Magazine &amp; éditorial<br><br>- Rapport annuel <br><br>- Illustation<br><br>- Signalétique<br><br>- Matériels promotionnels<br><br>- Packaging<br><br>- Etc</div>
                        <div class="item-text on-screen"><div class="smallTile">Impression</div><br><br>- Papeterie<br><br>- Panneau<br><br>- Bâche<br><br>- Stand<br><br>- Vitrine<br><br>- Autocollant<br><br>- Véhicule<br><br>- Textile<br><br>- Etc</div>
                        <div class="item-text on-screen"><div class="smallTile">Digital design</div><br><br>- UI/UX design<br><br>- Direction artistique digitale<br><br>- Webdesign sites internet<br><br>- Webdesign applications<br><br>- Motion design</div>
                        <div class="item-text on-screen"><div class="smallTile">Dev Web</div><br><br>- Intégration HTML5/CSS3<br><br>- Développement PHP/MYSQL<br><br>- Développement de sites Web<br><br>- Application mobile<br><br>- Développement frontend<br><br>- CMS<br><br>- Intranets<br><br>- Développement Backend<br><br>- E-Commerce / Webshops</div>
                        <div class="item-text on-screen"><div class="smallTile">Tech Web</div><br><br>- (Web-)Hosting<br><br>- Domaines<br><br>- Serveur et stockage</div>
                    </div>
                </div>
            </div>
    <div>
        <textcotact>
        </textcotact>
    </div>
	</div>
</template>
 


<script>
import textcotact from './components/text-contact';
import smart_fonts from "Libs/smart-fonts.js";
import anime from 'animejs/lib/anime.es.js';
import Alpl from 'Molecules/animation-line-per-line';
export default {
	components: {
        textcotact,
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
                console.log(el);
                $(el).on('enter-screen', (event) => {
                    anime({
                        targets: event.target,
                        translateY: -100,
                        opacity: 1,
                        easing: 'easeInOutSine',
                        duration: 500,
                        delay: index * 50
                        });
                    })
            
            smart_fonts({
            '.smallTile' :54,
            '.item-text' : 20,
            })
	
            });
	}
}

</script>


<style lang="scss" scoped>


.title-page{

    display: none;
}

.firstSection {
    padding: 0 70px;
}

.grid-services {
    padding-top: 9rem;
}

.smallTile {
    font-family: 'Gotham-Bold';
}

.item-services {
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: repeat(auto-fit, minmax(405px, 1fr));
    grid-column-gap:50px;
    grid-row-gap: 80px;
    color: white;
}
.item-text {
    text-align: left;
    opacity: 0;
}

.div-text-homepage{

    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;

}


@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;1,300;1,400&display=swap');

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
        /*background-color: white;*/
        background-position: center;
        background-size: cover;
        background-repeat: none;
        margin-left: 5%;
        margin-right: 5%;
    }
    p{
        text-align: left;
        margin-bottom: 10%;
        color: white;
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

   /*background-color: white;*/

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



    /*********/


    /*DESCKTOP*/
  


    /*********/

 @media screen and (min-width: 1100px) {

        .post-client{

            padding:  30px 35px;
        }

        .text-homepage{

            padding-top: 150px;
            padding-bottom: 150px;
            width: 70% ;
            margin: auto 70px;
            /*width: 100%;*/
            font-size: 3.3em;
            color: #e1e1e1;
            font-family: "Open Sans", regular !important;
            font-weight: lighter;
            text-align: left;

        }

        .text-homepage h1{

            text-align: left;
            margin: 5% 0px;
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


 }

 @media screen and (max-width: 1100px) and  (min-width: 600px) {

        .text-homepage{

            font-family: "Open Sans", regular !important;
            font-weight: lighter;
            color: white;
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

        }
        .div-text-project{

            width:100%;

        }

        .client img{

            width: 100% !important;
            /*height: 60vh;*/
            min-height: 200px;
            /*background-color: white;*/

        }



        .row{

            padding:  35px 35px;
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
            font-family: "Open Sans", regular !important;
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

            padding: 0 35px;
        }



 }


</style>

