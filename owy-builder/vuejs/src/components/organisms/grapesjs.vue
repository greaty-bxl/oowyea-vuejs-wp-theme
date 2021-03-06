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
          <option v-for="(template, key) in group" :key="key" :selected="template.post_name == current_template_name">
            {{template.post_title}}
          </option>
        </optgroup>
      </select>
    </div>
    <div class="panel__more">
      
    </div>

    <div id="vue-modals" style="display: none">
      <WpData/>
    </div>
  </div>
</template>

<script>
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';

//Custom grapes libs
import owy_storage from 'PluginLib/grapes/storage.js'
import owy_panels from 'PluginLib/grapes/owy-panels.js'

//Import modals
import WpData from 'PluginComponents/molecules/modal-wp-data'

export default {
  data(){
    return {
      editor : null,
      project: null,
      html: '',
      css: '',
      js: '',
      current_panel: ''
    }
  },
  components: {
      WpData
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

      //$('.gjs-pn-options').find('span[title="Fullscreen"], span[title="View code"], .fa-download, .fa-trash').remove()
      $('.gjs-pn-options').find('span[title="Fullscreen"], .fa-download, .fa-trash').remove()

      $('.gjs-pn-options').find('span[title="View components"]').trigger('click')

      $('[title="Open Blocks"]').trigger('click')

      $('.gjs-block-categories .gjs-title').trigger('click')

      $('[title="Open Style Manager"]').trigger('click')

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

    //keep current panel open
    $(document).on('click', '.gjs-pn-views .gjs-pn-btn', (event)=> {
      console.log( $(event.currentTarget).attr('title') );
      this.current_panel = $(event.currentTarget).attr('title')
    });

    this.editor.on('component:selected', (/*el*/) => {

      //add buttons on toolbar component
      /*let excludeTypes = ['wrapper']

      let toolbar = el.attributes.toolbar
      let toolbar_str = JSON.stringify( toolbar )

      if( toolbar_str.search("owy-cmd-wp-data") == -1 && !excludeTypes.includes(el.attributes.type) )
      {
        toolbar[toolbar.length] = {
          attributes: {class: 'fa fa-wordpress'},
          command: 'owy-cmd-wp-data'
        }

        toolbar[toolbar.length] = {
          attributes: {class: 'fa fa-bolt'},
          command: 'owy-cmd-actions'
        }
      }*/

      //keep current panel open
      let pn_bt = $('[title="'+this.current_panel+'"]')
      if( !pn_bt.hasClass('gjs-pn-active') )
      {
        pn_bt.trigger('click')
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

    owy_panels( this.editor, Vue )
    
    //add commands
    this.editor.Commands.add('editor-wp-back', () => {
      console.log('close', this);
      this.close()
    });

    this.editor.Commands.add('editor-save', (editor) => {
      editor.store()
    });

    this.editor.Commands.add('owy-publish-template', () => {
      console.log('publish');
    });


    /*this.editor.Commands.add('owy-cmd-wp-data', (editor) => {
      console.log('open modal wp data', editor.getSelected() );
      Vue.$store.state.modal_wp_data_attrs = {
        editor : editor,
        selected : editor.getSelected()
      }

      editor.Modal.open({
        title : 'Apply WordPess data',
        content : '<div id="modal-content"></div>'
      }).onceClose( () =>{
        //move modal vue out
        $('#modal-content > #modal-wp-data').appendTo('#vue-modals')
      })

      //move modal vue in
      $('#vue-modals > #modal-wp-data').appendTo('#modal-content')
    })

    this.editor.Commands.add('owy-cmd-actions', (editor) => {
      editor.Modal.open({
        title : 'Create interaction between elements and context',
        content : '<div id="modal-content"></div>'
      })
    })*/
    

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

    $( this.editor.SelectorManager.selectorTags.$states ).append('<option>test</option>')
    
    

    console.log('gjs Editor', this.editor);

    console.log( 'undo', this.editor.UndoManager )
    
    
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
    current_template_name: function () {
      let current_template = this.$store.state.grapes_template

      if( typeof current_template === 'object' && current_template !== null )
      {
        return current_template.post_name
      }
      else
      {
        return ''
      }
      
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
      
      this.owy_html = ''

      if( grapes_template !== null )
      {
        let metas = grapes_template.metas

        if( metas.owy_html )
        {
          this.owy_html = metas.owy_html  
        }
            
        this.editor.load() 
      }
    }
  }
}
</script>

<style lang="scss">
.gjs-cv-canvas{
  width: calc(100% - 280px)
}

.gjs-pn-views{
  width: 280px;
}

.gjs-pn-views .gjs-pn-buttons{
  justify-content: stretch;
}

.gjs-pn-views .gjs-pn-buttons .gjs-pn-btn{
  width: 100%;
}

.gjs-pn-views-container{
  width: 280px;
}

.gjs-pn-options{
  right: 280px;
}

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
  z-index: 99;
  left: 115px;
  text-align: left;
  width: 150px;
  height: 40px;
  border-right: solid 1px rgba(0,0,0,0.3);
  padding-top: 8px;
}

select{
  height: 24px;
}

select, select optgroup, select option{
  border: none;
  outline: none;
  box-shadow: none;
  background: #23363D;
  color: #fff;
}

#editor {
  
}

#grapesjs {
  position: absolute;
  top: 0;
  height: calc(100% - 40px);
  width: 100%;
  z-index: 1000;
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
  left: 270px;
}

/* .gjs-layer__t-wrapper:first-child .gjs-layer-children > .gjs-layers > .gjs-layer:last-child {
  display: none !important; 
}*/

/* .gjs-layer__t-wrapper > .gjs-layer-count , .gjs-layer__t-wrapper > .gjs-layer-vis  {
  display: none;
}   */
</style>