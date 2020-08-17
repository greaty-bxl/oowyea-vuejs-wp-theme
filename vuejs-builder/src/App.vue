<template>
  <div id="app">
    <div id="builder"></div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

//import grapesjs from 'vue-grapesjs'
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs'
import gjs_preset_webpage from 'grapesjs-preset-webpage'

export default {
  name: 'App',
  components: {
    
  },
  mounted(){
    const editor = grapesjs.init({
      // Indicate where to init the editor. You can also pass an HTMLElement
      container: '#builder',
      plugins: [gjs_preset_webpage],
      styleManager: {},
      // Get the content for the canvas directly from the element
      // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
      //fromElement: true,
      // Size of the editor
      height: '100%',
      width: '100%',
      // Disable the storage manager for the moment
      //storageManager: false,
      // Avoid any default panel
      // panels: { defaults: [] },
    });


    console.log(editor);
  }
}


</script>

<style lang="scss">
#wpcontent{
  padding-left: 0px;
}
#wpbody-content {
  padding-bottom: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #79BEEE;
  width: 100%;
  height: calc(100vh - 32px);
}
</style>
