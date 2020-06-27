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

          <Index v-if="section.template === 'index'" 
              :post="section" 
              @template_mounted="template_mounted"/>

          <Archive v-if="section.template === 'archive'" 
              :posts="wp.wp_query.posts" 
              :title="wp.wp_query.queried_object.label"
              @template_mounted="template_mounted"/>

          <Page v-if="section.template === 'page'" 
              :post="section" 
              @template_mounted="template_mounted"/>

          <Comp404 v-if="section.template === '404'" 
              :post="section" 
              @template_mounted="template_mounted"/>

          <Demo1 v-if="section.template === 'template-demo1'" 
              :post="section" 
              @template_mounted="template_mounted"/>

          <Demo2 v-if="section.template === 'template-demo2'" 
              :post="section" 
              @template_mounted="template_mounted"/>
      </div>
    </div>
    <!-- Footer -->
    <Footer/>
  </div>
</template>

<script>

//Header
import Header from 'Organisms/header.vue'

//template hierarchy
import Index from 'Templates/index.vue'
import Archive from 'Templates/archive.vue'
import Page from 'Templates/page.vue'
import Comp404 from 'Templates/404.vue'

//custom template
import Demo1 from 'Templates/template-demo1.vue'
import Demo2 from 'Templates/template-demo2.vue'

//Footer
import Footer from 'Organisms/footer.vue'

//Functions
import init_scrolltop from 'Libs/init-scrolltop.js'
import scrollSection from 'Libs/scroll-sections.js'
import links_and_anchors from 'Libs/links-and-anchors.js'
import get_new_page from 'Libs/get-new-page.js'
import animate_next_page from 'Libs/animate-next-page.js'
import smart_fonts from 'Libs/smart-fonts'
import on_screen from 'Libs/on-screen'

export default {
  name: 'App',
  data(){
    return {
      pages:{'current':{},'next':{}}
    }
  },
  components: {
    Header,
    Index,
    Archive,
    Page,
    Comp404,
    Demo1,
    Demo2,
    Footer,
  },
  mounted (){
    console.log('App mounted');
    console.log( this.wp );

    this.pages['current'] = this.wp.sections

    this.$(document).ready( ($) => {

      //console.log('JQuery Ready', $, this.ajaxurl)
      
      //init scroll if child
      init_scrolltop(this)

      //auto scroll next section
      scrollSection(this)

      //navigate in the website
      links_and_anchors(this)
      
      //new page with transition
      $(document).on('new_page', (event) => { /* event from: links-and-anchors.js */
      
        get_new_page( this, event.href, (wp) => {

          console.log( wp )
          
          this.pages['next'] = wp.sections
          
          setTimeout( ()=>{

            $(document).trigger('before_next_page')

            animate_next_page( this, event.href, () => {
              this.wp = wp
              this.pages['current'] = wp.sections
            
              setTimeout( ()=>{ 

                init_scrolltop(this) 
                this.pages['next'] = {}

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
    template_mounted(){
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
  position: fixed;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100%;
  overflow-y: scroll !important;
}

.clear{
  display: inline-block;
}

.section{
  min-height: 100vh;
  width: 100%;
  background-color: #fff;
}

#header{
  z-index: 3000;
}

.page[data-state="next"]{
  z-index: 1000;
}

</style>
