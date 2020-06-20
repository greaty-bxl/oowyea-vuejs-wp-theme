### Create a Vue.js WordPress page or hierarchy template
Create a vue file in ```vuejs/src/components/templates```  
for example: 
* custom post event: ```single-event.vue```  
* custom page template: ```cool-design.vue```  
  
Refering it in ```vue.config.php```
```php
$vue_hierarchy = array(
    'single-event'
);

$vue_hierarchy = array(
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