# Create a Vue.js WordPress page or hierarchy template
Create a vue file in ```vuejs/src/components/templates```  
for example: 
* custom post event: ```single-event.vue```  
* custom page template: ```cool-design.vue```  
  
Refering it in ```vue.config.php```
```php
$vue_hierarchy = array(
    'single-event'
);

$vue_templates = array(
    'cool-design' => 'Cool Design'
);
```
Refering it in ```App.vue```   
Template part
```html
<div class="section" 
  ...>

    <SingleEvent v-if="section.template === 'single-event'" 
        :post="section" 
        @template_mounted="template_mounted"/>

    <CoolDesign v-if="section.template === 'cool-design'" 
        :post="section" 
        @template_mounted="template_mounted"/>
</div>
```

Js part
```js
//custom template
import SingleEvent from 'Templates/single-event.vue'
import CoolDesign from 'Templates/cool-design.vue'

export default {
	//...
	components: {
		//...
		SingleEvent,
		CoolDesign,
	},
}
```

Template structure

```html
<template>
    <div class="section-wrap">
        <div class="clear"></div>
        <h1 v-html="post.post_title"></h1>
        <div v-html="post.post_content"></div>
        <div class="clear"></div>
    </div>
</template>
```

```js
export default {
    components: {
        
    },
    props: {
        'post' : Object
    },
    mounted (){

        //Important to let works basic functions
        this.$emit('template_mounted')
    }
}
```