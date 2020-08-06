<template>
	<div class="section-wrap">
		<div class="clear"></div>
  <section class="firstSection">
        <div class="grid-services ">
            <div class="item-services">
                <div class="item-text on-screen"><strong class="smallTile">Stratégie</strong><br><br>- Consultance graphique<br>- Audit stratégie<br>- Stratégie de communication<br>- Conception publicitaire</div>
                <div class="item-text on-screen"><strong class="smallTile">Desing</strong><br><br>- Direction artistique<br>- Identité visuelle<br>- Charte graphique<br>- Création de logo<br>- Brochure &amp; catalogue<br>- Magazine &amp; éditorial<br>- Rapport annuel <br>- Illustation<br>- Signalétique<br>- Matériels promotionnels<br>- Packaging<br>- Etc</div>
                <div class="item-text on-screen"><strong class="smallTile">Impression</strong><br><br>- Papeterie<br>- Panneau<br>- Bâche<br>- Stand<br>- Vitrine<br>- Autocollant<br>- Véhicule<br>- Textile<br>- Etc</div>
                <div class="item-text on-screen"><strong class="smallTile">Digital design</strong><br><br>- UI/UX design<br>- Direction artistique digitale<br>- Webdesign sites internet<br>- Webdesign applications<br>- Motion design</div>
                <div class="item-text on-screen"><strong class="smallTile">Dev Web</strong><br><br>- Intégration HTML5/CSS3<br>- Développement PHP/MYSQL<br>- Développement de sites Web<br>- Application mobile<br>- Développement frontend<br>- CMS<br>- Intranets<br>- Développement Backend<br>- E-Commerce / Webshops</div>
                <div class="item-text on-screen"><strong class="smallTile">Tech Web</strong><br><br>- (Web-)Hosting<br>- Domaines<br>- Serveur et stockage</div>
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
import anime from 'animejs/lib/anime.es.js';
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
                        delay: index * 100
                        });
                    })
            });



             
                


	}
}

</script>


<style lang="scss" scoped>
body, html { 
    padding:0;
	margin: 0 ;
	font-family: 'Myriad pro', sans-serif; 
	color: #e1e1e1;
	box-sizing: border-box;
	}
.firstSection {
    padding: 0 4.5rem;
}


.smallTile {
    font-size: 1.5em;
}

.grid-services {
    padding-top: 9rem;
}

.item-services {
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: repeat(auto-fit, minmax(405px, 1fr));
    grid-column-gap:50px;
    grid-row-gap: 80px;
    color: white;
    font-family: 'Myriad pro', sans-serif;
}
.item-text {
    font-size: 30px;
    text-align: left;
    opacity: 0;
}



</style>

