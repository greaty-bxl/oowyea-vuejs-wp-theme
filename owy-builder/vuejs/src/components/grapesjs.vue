<template>
  <div id="grapesjs">
    <div id="editor-container">
      <div id="gjs"></div>    
    </div> 
    <div class="panel__wordpress">
    </div>
    <div class="editor_select_template">
      <select>
        <option>test</option>
      </select>
    </div>
    <div class="panel__more">
      
    </div>
  </div>
</template>

<script>
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';

export default {
  data(){
    return {
      project: null
    }
  },
  components: {
      
  },
  mounted(){
    
    let $ = this.jquery

    //console.log('ajaxurl', window.wp);

    require('grapesjs-preset-webpage')

    const editor = grapesjs.init({
      autorender: false,
      // Indicate where to init the editor. You can also pass an HTMLElement
      container: '#gjs',
      // Get the content for the canvas directly from the element
      // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
      fromElement: true,
      // Size of the editor
      height: '100%',
      width: '100%',
      // Disable the storage manager for the moment
      storageManager: {
          type: 'local',
          stepsBeforeSave: 1
      },
      // Avoid any default panel
      panels: { defaults: [] },
      // Disable alert "save before refresh"
      noticeOnUnload: false,

      plugins: ['gjs-preset-webpage'],
    });

    editor.on('load', () => {
      console.log( 'remove elements' );
      $('.gjs-pn-options').find('span[title="Fullscreen"], span[title="View code"], .fa-download').remove()

      $('.gjs-pn-options').find('span[title="View components"]').trigger('click')

      $('.gjs-block-categories .gjs-title').trigger('click')
    });

    editor.StorageManager.add('local', {
      // New logic for the local storage
      load() {
        console.log('load');
      },

      store() {
        console.log('store');
        console.log( editor.getHtml(), editor.getCss(), editor.getJs() );
      },
    });

    editor.render();

    editor.BlockManager.getCategories().each(ctg => ctg.set('open', false))

    editor.Panels.addPanel({
      id: 'panel__wordpress',
      el: '.panel__wordpress',
      buttons: [
        {
          id: 'editor-wp-back',
          active: false, // active by default
          className: 'editor-wp-back',
          label: '<a href="'+window.wp.admin_url+'admin.php?page=oowyea-home"><div><span class="fa fa-wordpress"></span></div></a>',
          command: 'editor-wp-back', // Built-in command
        },
        {
          id: 'editor-save',
          active: false, // active by default
          className: 'editor-save',
          label: '<div><span class="fa fa-save"></span></div>',
          command: 'editor-save', // Built-in command
        },
      ],
    });

    editor.Panels.addPanel({
      id: 'panel__more',
      el: '.panel__more',
      buttons: [
        {
          id: 'editor-wp-back',
          active: false, // active by default
          className: 'editor-wp-back',
          label: '<div><span class="fa fa-comment"></span></div>',
          command: '', // Built-in command
        }
      ],
    });

    editor.Panels.addPanel({
      id: 'editor_select_template',
      el: '.editor_select_template',
    });
    

    editor.Commands.add('editor-wp-back', () => {
      console.log('back to wp admin');
    });

    editor.Commands.add('editor-save', (editor) => {
      console.log( editor.getHtml(), editor.getCss(), editor.getJs() );
    });

    // 'my-first-block' is the ID of the block
    editor.BlockManager.add('my-first-block', {
      label: 'Simple block',
      category: 'test',
      content: '<div class="my-block">This is a simple block</div>',
    });

    console.log(editor);


  }
}
</script>

<style lang="scss">

.gjs-one-bg{
  background: #23363D;
}
.gjs-two-color {
  color: #E8F6FB;
}
.gjs-three-color {
    
}
.gjs-three-bg{
  background: #4D94AE;
}
.gjs-four-color {
    color: #4D94AE;
}
.gjs-four-color-h:hover{
  color: #4D94AE;
}

.gjs-pn-btn a{
  color: inherit;
}

.editor_select_template{
  position: absolute;
  top: 0px;
  z-index: 1000;
  left: 80px;
}

.editor_select_template select{

}

#editor {
  
}

#grapesjs {
  height: 100%;
  width: 100%;
}
#editor-container {
  height: 100%;
  width: 100%;
}
.panel__wordpress{
  position: absolute;
  top: 0;
}
.panel__more{
  width: 100%;
}

.gjs-pn-devices-c{
  left: 34%;
}
</style>