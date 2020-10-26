<template>
  <div id="app">
    <Header/>
    <div id="fullpage" class="page sections" v-for="(page, key) in pages" :key="key" :data-state="key">
      <div class="section" 
        v-for="(section, key2) in page" 
        :key="section.post_name" 
        :id="section.post_name" 
        :data-permalink="section.permalink"
        :data-index="key2"
        :data-title="section.post_title"
        :style="section.style" >
          <component   
            :section="section" 
            :is="Templates[section.template]"
            :post="section" 
            :posts="section.children" 
            :tag="wp.wp_query.queried_object"
            :cat="wp.wp_query.queried_object"
            :author="wp.wp_query.queried_object"
            :s="wp.wp_query.query_vars.s"
            @template_mounted="template_mounted" 
            class="section-wrap" ></component>

      </div>
    </div>
    <!-- Footer -->
    <Footer/>
    <!-- <AudioPlayerBottom />
    <Editor v-if="wp.user_can.edit_theme_options" /> -->
  </div>
</template>

<script>

//Header
//import Header from 'Organisms/header.vue'
import Header from 'Organisms/simple-header.vue'
//import Header from 'Organisms/header-light-burger.vue'


//Footer
import Footer from 'Organisms/footer-fromagerie.vue'

//import AudioPlayerBottom from 'Organisms/audio-player-bottom.vue'
//import Editor from 'Organisms/editor.vue'

//Functions
//import is from 'is_js'
import init_scrolltop from 'Libs/init-scrolltop.js'
//import scrollSection from 'Libs/scroll-sections.js'
import scrollSection from 'Libs/scroll-sections-v2.js'
import links_and_anchors from 'Libs/links-and-anchors.js'
import get_new_page from 'Libs/get-new-page.js'
import animate_next_page from 'Libs/animate-next-page.js'
import smart_fonts from 'Libs/smart-fonts.js'
import on_screen from 'Libs/on-screen.js'
//import acf_to_css from 'Libs/acf-to-css.js'

//import fullpage from 'fullpage.js'


function vue_key_to_name(str)
{
  var base = new String(str).substring(str.lastIndexOf('/') + 1); 
  if(base.lastIndexOf(".") != -1) base = base.substring(0, base.lastIndexOf("."));
  return base;
}

export default {
  name: 'App',
  data(){
    return {
      Templates: {},
      pages:{'current':{},'next':{}}
    }
  },
  components: {
    Header,
    Footer,
    //AudioPlayerBottom,
    //Editor
  },
  created ()  {
    //automatically load templates
    const req = require.context('Templates/', true, /\.(js|vue)$/i);
    req.keys().map(key => {

      let name = vue_key_to_name( key )
      let file = key.substring(2)
      
      this.Templates[name] = () => import( `Templates/${file}` )

    });
  },
  mounted (){

    console.log( 'App mounted' );    
    
    this.pages['current'] = this.wp.sections

    this.$store.commit({
        type: 'sections_load',
        sections: this.pages['current'],
      })

    this.$(document).ready( ($) => {
      //console.log('JQuery Ready', $, this.ajaxurl)
      
      //console.log('store', this.$store.state.wp)
      //init scroll if child
      init_scrolltop(this)

      //auto scroll next section
      scrollSection(this)

      //init scroll if child
      init_scrolltop(this)

      //navigate in the website
      links_and_anchors(this)
      
      //new page with transition
      $(document).on('new_page', (event) => { /* event from: links-and-anchors.js */
        
        console.log('new-page');
        
        $('#app').data('scrolling', 'new-page')

        get_new_page( this, event.href, (wp) => {

          

          //console.log( 'app get page', wp )
          let new_sections = wp.sections
          this.wp = wp
          this.$store.state.wp = wp

          $(document).trigger('after_data_next_page')

          //console.log( 'app get page this', this.wp )
          this.pages['next'] = new_sections
          
          setTimeout( ()=>{

            $(document).trigger('before_next_page')

            animate_next_page( this, event.href, () => {
              
              this.pages['current'] = wp.sections

              this.$store.commit({
                type: 'sections_load',
                sections: this.pages['current'],
              })
            
              setTimeout( ()=>{ 
                
                this.pages['next'] = {}

                $('#app').data('scrolling', '')

                init_scrolltop(this)
                
                $(document).trigger('after_next_page')

              }, 1)
            })
          },1)
        })
      });

      //replace body class
      let old_class = this.wp.body_class;
      //console.log('old_class', old_class);

      function replace_body_class( new_class )
      {
        console.log( 'replace_body_class', new_class );
        $('body').removeClass(old_class) 
        $('body').addClass(new_class) 
        old_class = new_class
      }

      this.$store.subscribe((mutation, state) => {
        if( mutation.type == 'section_change' )
        {
          replace_body_class( state.wp.body_class )
        }        
      })

      $(document).on('after_data_next_page', ()=> {
        replace_body_class( this.$store.state.wp.body_class );
      });



      //init on screen detection 
      on_screen()

    });

  },
  methods : {
    template_mounted(){

      //let $ = this.$

      //console.log('template_mounted')

      /*if( is.object(comp) )
      {
        
        let section = this.pages['current'][$(comp.$el).parent('.section').data('index')]

        acf_to_css( comp.$el, {
          'background-color' : 'background->color',
          ':hover' : {
            'background-color' : 'background->color'
          }
        }, section)
      }*/

      smart_fonts()
    }
  },
  computed: {
    wp () {
      //console.log(cap);
      return this.$store.state.wp
    }
  }
}
</script>

<style>
/* width */
::-webkit-scrollbar { 
  width: 5px;
  height: 5px;
}

/* Track */
#app::-webkit-scrollbar-track {
  background: rgba(33,33,33,1);
}
#app *::-webkit-scrollbar-track {
  background: rgba(255,255,255,0.05);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #595959; 
  /*border-radius: 7px;*/
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #595959;
}

html{
  height: 100vh;
  width: 100vw;
  overflow:hidden;
}
#app {
  position: absolute;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100%;
  overflow-y: auto;
  z-index: auto;
}

.clear{
  display: inline-block;
}

.section{
  display: block;
  min-height: 100vh;
  width: 100%;
}

.section-wrap{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  width: 100%;
}

#header{
  z-index: 3000;
}

.page[data-state="next"]{
  z-index: 1000;
}
</style>