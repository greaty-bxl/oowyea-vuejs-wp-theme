<template>
  <BackgroundVideo />
  <Menu />

  <div v-for="(Template, key) in Templates" :key="key">
    <component :is="Template"></component>
  </div>

  <Grapes />
</template>

<script>
  import { defineAsyncComponent } from 'vue'

  import Grapes from 'PluginComponents/grapesjs'
  import Menu from 'PluginComponents/menu'
  import BackgroundVideo from 'PluginComponents/background-video'

  function vue_key_to_name(str)
  {
    var base = new String(str).substring(str.lastIndexOf('/') + 1); 
    if(base.lastIndexOf(".") != -1) base = base.substring(0, base.lastIndexOf("."));
    return base;
  }

  export default {
    data(){
      return {
        ready: false,
        Templates: {},
      }
    },
    components: {
      BackgroundVideo,
      Menu,
      Grapes,
    },
    created ()  {
      //automatically load menus content
      const req = require.context('PluginComponents/menus/', true, /\.(js|vue)$/i);
      req.keys().map(key => {
        let name = vue_key_to_name( key )
        let file = key.substring(2)
        this.Templates[name] = defineAsyncComponent(() => import(`PluginComponents/menus/${file}`))
      });
    },
    mounted(){      
      console.log('Store:',this.$store.state);
      console.log('Templates', this.Templates);
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

  /* width */
  ::-webkit-scrollbar { 
    width: 5px;
    height: 5px;
  }

  /* Track */
  #editor::-webkit-scrollbar-track {
    background: rgba(33,33,33,1);
  }
  #editor *::-webkit-scrollbar-track {
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

  #editor,
  h1,h2,h3,h4,h5,h6{
    font-family: 'Montserrat', sans-serif;
    color: rgba(255,255,255,0.92);
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

  p {
    font-size: 100%;
    line-height: 160%;
  }
  
  #grapesjs {
    display: none;
  }

  
</style>