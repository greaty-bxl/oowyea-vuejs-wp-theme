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

          <Comp404 v-if="section.template === '404'" 
              :post="section" 
              @template_mounted="template_mounted"/>

          <Archive v-if="section.template === 'archive'" 
              :posts="section.children" 
              :title="wp.wp_query.queried_object.label"
              @template_mounted="template_mounted"/>

          <Category v-if="section.template === 'category'"  
              :cat="wp.wp_query.queried_object"
              @template_mounted="template_mounted"/>

          <Author v-if="section.template === 'author'"  
              :author="wp.wp_query.queried_object.data"
              @template_mounted="template_mounted"/>

          <Index v-if="section.template === 'index'" 
              :post="section" 
              @template_mounted="template_mounted"/>

          <Page v-if="section.template === 'page'" 
              :post="section" 
              @template_mounted="template_mounted"/>

          <Search v-if="section.template === 'search'" 
              :posts="wp.wp_query.posts" 
              :s="wp.wp_query.query_vars.s"
              @template_mounted="template_mounted"/>

          <Single v-if="section.template === 'single'" 
              :post="wp.wp_query.queried_object" 
              @template_mounted="template_mounted"/>

          <Tag v-if="section.template === 'tag'"  
              :tag="wp.wp_query.queried_object"
              @template_mounted="template_mounted"/>

          <Demo1 v-if="section.template === 'template-demo1'" 
              :post="section" 
              @template_mounted="template_mounted"/>

          <Demo2 v-if="section.template === 'template-demo2'" 
              :post="section" 
              @template_mounted="template_mounted"/>

          <Phaser v-if="section.template === 'phaser'" 
              :post="section" 
              @template_mounted="template_mounted"/>

          <Greatyhome v-if="section.template === 'greaty-home'" 
              :post="section" 
              @template_mounted="template_mounted"/>

          <Greatyprojects v-if="section.template === 'greaty-projects'" 
              :post="section" 
              @template_mounted="template_mounted"/>

          <Greatysingle v-if="section.template === 'greaty-single'" 
              :post="section" 
              @template_mounted="template_mounted"/>

          <Greatyservices v-if="section.template === 'greaty-services'" 
            :post="section" 
            @template_mounted="template_mounted"/>

          <Greatyservicestitle v-if="section.template === 'greaty-services-title'" 
            :post="section" 
            @template_mounted="template_mounted"/>


          <Greatystudio v-if="section.template === 'greaty-studio'" 
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
import Comp404 from 'Templates/404.vue'
import Archive from 'Templates/archive.vue'
import Author from 'Templates/author.vue'
import Category from 'Templates/category.vue'
import Index from 'Templates/index.vue'
import Page from 'Templates/page.vue'
import Search from 'Templates/search.vue'
import Single from 'Templates/single.vue'
import Tag from 'Templates/tag.vue'

//custom template
import Demo1 from 'Templates/customs/demo1.vue'
import Demo2 from 'Templates/customs/demo2.vue'
import Phaser from 'Libs/phaser/phaser.vue'
import Greatyhome from 'Templates/greaty/greaty-home.vue'
import Greatyprojects from 'Templates/greaty/greaty-projects.vue'
import Greatysingle from 'Templates/greaty/greaty-single.vue'
import Greatyservices from 'Templates/greaty/greaty-services.vue'

import Greatyservicestitle from 'Templates/greaty/greaty-services-title.vue'
import Greatystudio from 'Templates/greaty/greaty-studio.vue'


//footer
import Footer from 'Organisms/footer.vue'

//Functions
import init_scrolltop from 'Libs/init-scrolltop.js'
import scrollSection from 'Libs/scroll-sections.js'
import links_and_anchors from 'Libs/links-and-anchors.js'
import get_new_page from 'Libs/get-new-page.js'
import animate_next_page from 'Libs/animate-next-page.js'
import smart_fonts from 'Libs/smart-fonts'
import on_screen from 'Libs/on-screen'
// import on_screen from 'Libs/on-screen'
// import Funtion_animation_line_per_line from 'Libs/on-screen'


export default {
  name: 'App',
  data(){
    return {
      pages:{'current':{},'next':{}}
    }
  },
  components: {
    Header,
    Comp404,
    Archive,
    Author,
    Category,
    Index,
    Page,
    Search,
    Single,
    Tag,
    Demo1,
    Demo2,
    Phaser,
    Greatyhome,
    Greatyprojects,
    Greatysingle,
    Greatyservices,
    Greatyservicestitle,
    Greatystudio,
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
