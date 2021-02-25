<template>
  <div id="grapesjs" v-show="display">
    <div id="editor-container">
      <div id="gjs">
      </div>    
    </div> 
    <div class="panel__wordpress">
    </div>
    <div class="editor_select_template">
      <select>
        <optgroup v-for="(group, label) in owy_templates" :key="label" :label="label">
          <option v-for="(template, key) in group" :key="key" :selected="template.post_name == current_template">
            {{template.post_title}}
          </option>
        </optgroup>
      </select>
    </div>
    <div class="panel__more">
      
    </div>
  </div>
</template>

<script>
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';

//Custom grapes libs
import owy_storage from 'PluginLib/grapes/storage.js'

export default {
  data(){
    return {
      editor : null,
      project: null,
      html: '',
      css: '',
      js: '',
    }
  },
  components: {
      
  },
  mounted(){
    
    let $ = this.jquery
    let Vue = this

    require('grapesjs-preset-webpage')
    require('grapesjs-blocks-flexbox')


    this.editor = grapesjs.init({
      autorender: false,
      // Indicate where to init the editor. You can also pass an HTMLElement
      container: '#gjs',
      // Get the content for the canvas directly from the element
      // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
      fromElement: false,
      // Size of the editor
      height: '100%',
      width: '100%',
      // Disable the storage manager for the moment
      storageManager: {
          type: 'local',
          stepsBeforeSave: 1
      },

      styleManager: {},
      // Avoid any default panel
      panels: { defaults: [] },
      // Disable alert "save before refresh"
      noticeOnUnload: false,

      plugins: ['gjs-preset-webpage', 'gjs-blocks-flexbox'],
    });

    //let editor = this.editor
    

    this.editor.on('load', () => {
      console.log( 'remove elements' );

      $('.gjs-pn-options').find('span[title="Fullscreen"], span[title="View code"], .fa-download').remove()

      $('.gjs-pn-options').find('span[title="View components"]').trigger('click')

      $('.gjs-block-categories .gjs-title').trigger('click')
    });

    this.editor.StorageManager.add('local', owy_storage(Vue) );

    this.editor.render();

    this.editor.BlockManager.getCategories().each(ctg => ctg.set('open', false))

    this.editor.Panels.addPanel({
      id: 'panel__wordpress',
      el: '.panel__wordpress',
      buttons: [
        {
          id: 'editor-wp-back',
          active: false, // active by default
          className: 'editor-wp-back',
          label: '<div><span class="fa fa-close"></span></div>',
          command: 'editor-wp-back',
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

    this.editor.Panels.addPanel({
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

    this.editor.Panels.addPanel({
      id: 'editor_select_template',
      el: '.editor_select_template',
    });
    

    this.editor.Commands.add('editor-wp-back', () => {
      console.log('close', this);
      this.close()
    });

    this.editor.Commands.add('editor-save', (editor) => {
      console.log( editor.getHtml(), editor.getCss(), editor.getJs() );
    });

    // 'my-first-block' is the ID of the block
    this.editor.BlockManager.add('my-first-block', {
      label: 'Simple block',
      category: 'test',
      content: '<div class="my-block">This is a simple block</div>',
    });


    console.log(this.editor);
  },
  computed : {
    display : function () {
      if( this.$store.state.grapes_template == null)
      {
        return false  
      }
      else
      {
        return true
      }
    },
    owy_templates : function () {
      return this.$store.state.wp.owy_templates
    },
    current_template: function () {
      return this.$store.state.grapes_template
    }
  },
  methods : {
    close : function () {
      this.$store.state.grapes_template = null
    }
  },
  watch : {
    '$store.state.grapes_template' : function(){

      console.log('watch grapes_template', this.$store.state.grapes_template);

      let grapes_template = this.$store.state.grapes_template

      if( grapes_template !== null )
      {
        let metas = grapes_template.metas
        this.html = metas.html[0]
        this.css = metas.css[0]
        this.editor.load() 
      }
      else
      {
        this.html = ''
        this.css = ''
        this.editor.load()
      }
      
    }
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
  position: absolute;
  top: 0;
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