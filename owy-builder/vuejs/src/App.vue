<template>
  <OwyTemplates />
  <Grapes />
  <OwyShortcuts />
</template>

<script>
  import Grapes from 'PluginComponents/organisms/grapesjs'
  import OwyTemplates from 'PluginComponents/organisms/templates'
  import OwyShortcuts from 'PluginComponents/organisms/shortcuts'

  export default {
    data(){
      return {
        
      }
    },
    components: {
      OwyTemplates,
      Grapes,
      OwyShortcuts,
    },
    beforeCreate(){
      this.jquery('body').removeClass('wp-core-ui')
    },
    created ()  {
    },
    mounted(){      
      console.log('Store:',this.$store.state);
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
  
  #editor{
    font-family: 'Montserrat', sans-serif;
    color: $font-color !important;
  }

  h1, h2, h3, h4, h5, h6{
    color: inherit;
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

  
</style>