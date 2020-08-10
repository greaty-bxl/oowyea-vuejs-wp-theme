<template>
	<div class="section-wrap">
		<div class="clear"></div>
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
import textcotact from './components/text-contact'
import smart_fonts from "Libs/smart-fonts.js"
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
            
            smart_fonts({
            '.smallTile' :54,
            '.item-text' : 20,
            })
	
            });



             
                


	}
}

</script>


<style lang="scss" scoped>

.firstSection {
    padding: 0 4.5rem;
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



</style>

