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
      
      protectedCss: '',

      styleManager: {},
      // Avoid any default panel
      panels: { defaults: [] },
      // Disable alert "save before refresh"
      noticeOnUnload: false,

      plugins: ['gjs-preset-webpage', 'gjs-blocks-flexbox'],
    });

    //let editor = this.editor
    
    //remove no need elements and close blockmanager cats
    this.editor.on('load', () => {

      $('.gjs-pn-options').find('span[title="Fullscreen"], span[title="View code"], .fa-download, .fa-trash').remove()

      $('.gjs-pn-options').find('span[title="View components"]').trigger('click')

      $('.gjs-block-categories .gjs-title').trigger('click')

      //$('.gjs-block-categories .gjs-title').first().trigger('click')
      
    });

    //re-count body elements excluding other hidden templates
    this.editor.on('run', () => {
      let find = this.jquery('.gjs-layer__t-wrapper > .gjs-layer-count')
      if( find.length )
      {
        find.text( this.editor.DomComponents.getComponents().length - 1 )
      }
    });

    //use wp ajax as storage
    this.editor.StorageManager.add('local', owy_storage(Vue) );
    
    //replace asset modal
    this.editor.Commands.add('open-assets', {
      run() {
        console.log('assets');
      }
    })

    //render editor
    this.editor.render();

    //add top panels
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
    
    //add commands
    this.editor.Commands.add('editor-wp-back', () => {
      console.log('close', this);
      this.close()
    });

    this.editor.Commands.add('editor-save', (editor) => {
      editor.store()
    });

    //block test
    this.editor.BlockManager.add('my-first-block', {
      label: 'Simple block',
      category: 'test',
      content: '<div data-gjs-type="test" data-widget="test" class="my-block">This is a simple block</div>',
      attributes: {
        test: 'Insert h1 block'
      }
    });

    this.editor.DomComponents.addType('test', {
        isComponent: function(el) {
          if( $(el).data('widget') == 'test' )
          {
            return true
          }
          else
          {
            return false
          }
        },
        model: {
          defaults: {
            traits: [
              // Strings are automatically converted to text types
              'id', // Same as: { type: 'text', name: 'name' }
              'title',
              'data-test',
              {
                type: 'button',
                //label: 'hello',
                text: 'Click me',
                full: true,
                command: () => alert('Hello'),
              },
              {
                type: 'select', // Type of the trait
                label: 'Type', // The label you will see in Settings
                name: 'type', // The name of the attribute/property to use on component
                options: [
                  { id: 'text', name: 'Text'},
                  { id: 'email', name: 'Email'},
                  { id: 'password', name: 'Password'},
                  { id: 'number', name: 'Number'},
                ]
              }, 
              {
                type: 'checkbox',
                name: 'required',
              }
            ],
            // As by default, traits are binded to attributes, so to define
            // their initial value we can use attributes
            //attributes: { type: 'text', required: true },
          },
        },
        init() {
          this.on('change:attributes:id', () => {
            console.log('change id');
          });
        },

        /*handleTypeChange() {
          console.log('Input type changed to: ', this.getAttributes().type);
        },*/
    });


    //manage other template as type
    this.editor.DomComponents.addType('other-templates', {
      model : {
        defaults: {
          layerable: false,
          removable: false,

          draggable: false,
          droppable: false,
          badgable: false,
          stylable: false,
          highlightable: false,
          copyable: false,
          resizable: false,
          editable: false
        }
      }
    })    
    

    console.log('gjs Editor', this.editor);
    
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
      
      //this.editor.DomComponents.clear()
      this.html = ''

      if( grapes_template !== null )
      {
        let metas = grapes_template.metas
        if( Array.isArray( metas.html ) )
        {
          if( metas.html[0] )
          {
            this.html = metas.html[0]   
          }
        }      
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

/* .gjs-layer__t-wrapper:first-child .gjs-layer-children > .gjs-layers > .gjs-layer:last-child {
  display: none !important; 
}*/

/* .gjs-layer__t-wrapper > .gjs-layer-count , .gjs-layer__t-wrapper > .gjs-layer-vis  {
  display: none;
}   */
</style>