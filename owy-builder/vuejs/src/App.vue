<template>
  <OwyTemplates />
  <Grapes ref="grapes"/>
  <OwyCode v-if="$store.state.code_page" />
  <OwyShortcuts/>
  <OwyChatBuilder />
  <OwyOptions v-show="$store.state.right_menu == 'main'" />
  <OwyDocs v-show="$store.state.right_menu == 'docs'" />  
  <OwySites v-show="$store.state.right_menu == 'my-sites'" />
  <OwyWpFrame v-show="$store.state.right_menu == 'wp-frame'" />
</template>

<script>
  import Grapes from 'PluginComponents/organisms/grapesjs'
  import OwyTemplates from 'PluginComponents/organisms/templates'
  import OwyShortcuts from 'PluginComponents/organisms/shortcuts'
  import OwyChatBuilder from 'PluginComponents/organisms/chat-2'
  import OwyCode from 'PluginComponents/organisms/code'
  import OwyOptions from 'PluginComponents/organisms/options'
  import OwyDocs from 'PluginComponents/organisms/docs'
  import OwySites from 'PluginComponents/organisms/my-sites'
  import OwyWpFrame from 'PluginComponents/organisms/wp-frame'

  export default {
    data(){
      return {
        
      }
    },
    components: {
      OwyTemplates,
      Grapes,
      OwyCode,
      OwyShortcuts,
      OwyChatBuilder,
      OwyOptions,
      OwyDocs,
      OwySites,
      OwyWpFrame
    },
    beforeCreate(){
      this.jquery('body').removeClass('wp-core-ui')
    },
    created ()  {
    },
    mounted(){      
      console.log('Store:',this.$store.state);
      let $ = this.jquery

      //open template on refresh based on hash
      let re_open = window.location.href.split('#')[1]
      if( re_open != undefined )
      {
        $.each(this.$store.state.wp.owy_templates, (i_grp, grp) => {
          $.each(grp, (index, post) => {
            if( re_open == post.post_name )
            {
              this.$store.state.grapes_template = post
            }
          });
        });
      }

      this.init_peer_collab()


      
    }
  }
</script>

<style lang="scss">
  
  $font-color: rgba(255,255,255,0.92);
  $action-color: #A2F7F4;
  $action-hover: #CAF6F4;

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

  /* width */
  ::-webkit-scrollbar { 
    width: 5px !important;
    height: 5px !important;
  }

  /* Track */
  #editor::-webkit-scrollbar-track {
    background: rgba(33,33,33,1);
  }
  #editor *::-webkit-scrollbar-track {
    background: rgba(255,255,255,0.05);
  }

  #editor *::-webkit-scrollbar-corner { background: rgba(255,255,255,0.05); }


  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #595959; 
    /*border-radius: 7px;*/
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #595959;
  }
  
  #editor{
    font-family: 'Montserrat', sans-serif;
    color: $font-color !important;
  }

  h1, h2, h3, h4, h5, h6{
    color: inherit;
    box-sizing: border-box;
  }

  .clear{
    display: inline-block;
    width: 100%;
    float: none;
  }

  body,
  #editor{
    font-size: 16px; 
    font-weight: 300;
    line-height: initial;
  }

  h1{
    font-size: 300%;
    font-weight: 100;
  }

  h2{
    font-size: 170%;
    font-weight: 200;
  }

  h3{
    font-size: 130%;
    font-weight: 100;
  }


  p {
    font-size: 100%;
    line-height: 160%;
  }

  a {
    color: $action-color;
    transition: color 0.5s;
  }

  a:hover {
    color: $action-hover;
  }
  
  #grapesjs {
    
  }

  .pointer {
    cursor: pointer;
  }

  
</style>