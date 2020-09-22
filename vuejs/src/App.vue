<template>
  <div id="app">
    <Header/>
    <div class="page sections" v-for="(page, key) in pages" :key="key" :data-state="key">
      <div class="section" 
        v-for="(section, key2) in page" 
        :key="section.post_name" 
        :id="section.post_name" 
        :data-permalink="section.permalink"
        :data-index="key2"
        :data-title="section.post_title">

          <component 
            :is="Templates[section.template]"
            :post="section" 
            :posts="section.children" 
            :tag="wp.wp_query.queried_object"
            :cat="wp.wp_query.queried_object"
            :author="wp.wp_query.queried_object.data"
            :s="wp.wp_query.query_vars.s"
            @template_mounted="template_mounted" ></component>

      </div>
    </div>
    <!-- Footer -->
    <Footer/>
  </div>
</template>

<script>

//Header
//import Header from 'Organisms/header-light-burger.vue'
import Header from 'Organisms/header-light-burger.vue'



//Footer
import Footer from 'Organisms/footer.vue'

//Functions
import is from 'is_js'
import init_scrolltop from 'Libs/init-scrolltop.js'
import scrollSection from 'Libs/scroll-sections.js'
import links_and_anchors from 'Libs/links-and-anchors.js'
import get_new_page from 'Libs/get-new-page.js'
import animate_next_page from 'Libs/animate-next-page.js'
import smart_fonts from 'Libs/smart-fonts.js'
import on_screen from 'Libs/on-screen.js'
import acf_to_css from 'Libs/acf-to-css.js'


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
    Footer
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
    // console.log( 'App mounted' );
    // console.log('wp', this.wp)

    this.pages['current'] = this.wp.sections


    this.$(document).ready( ($) => {

      // console.log('JQuery Ready', $, this.ajaxurl)
      
      //init scroll if child
      init_scrolltop(this)

      //auto scroll next section
      scrollSection(this)

      //navigate in the website
      links_and_anchors(this)
      
      //new page with transition
      $(document).on('new_page', (event) => { /* event from: links-and-anchors.js */
        
        console.log('new-page');
        
        $('#app').data('scrolling', 'new-page')

        get_new_page( this, event.href, (wp) => {

          // console.log( wp )
          
          this.pages['next'] = wp.sections
          
          setTimeout( ()=>{

            $(document).trigger('before_next_page')

            animate_next_page( this, event.href, () => {
              this.wp = wp
              this.pages['current'] = wp.sections
            
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

      on_screen()

    });

  },
  methods : {
    template_mounted(comp){

      let $ = this.$

      //console.log('template_mounted')

      if( is.object(comp) )
      {
        
        let section = this.pages['current'][$(comp.$el).parent('.section').data('index')]

        acf_to_css( comp.$el, {
          'background-color' : 'background->color',
          ':hover' : {
            'background-color' : 'background->color'
          }
        }, section)
      }

      smart_fonts()
    }
  }
}
</script>

<style>
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
  overflow-y: scroll;
}

.clear{
  display: inline-block;
}

.section{
  display: block;
  min-height: 100vh;
  width: 100%;
  background-color: #fff;
}

.section-wrap{
  display: flex;
  flex-direction: column;
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
