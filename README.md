# [Vue.js WordPress Theme](https://greaty.be)

Get the power to create the new generation of websites :sunglasses:

## Features
* Auto animated scroll by section
* Pages transitions (update url)
* Fullscreen & fluid design
* Child pages as sections 
* Support WordPress hierarchy
* It doesn't use WordPress API
* Vue.js include the jquery var of WordPress

## Installation

### Install the theme in WordPress
Download or clone in your WordPress theme folder
```
your-wordpress/wp-content/themes/oowyea-vuejs-wp-theme
```
Import demo content
```
Tools > import > WordPress (install/run)
Upload: demo-content.xml
```
### Vue.js install
```sh
cd path-to-your-themes/oowyea-vuejs-wp-theme/vuejs
npm install

#development
npm run serve
#build for production /vuejs/dist
npm run build
```

### Use Vue.js dev server in WP
In ```vue.config.php``` change ```'is_vuejs_dev'``` const to true  
```php
define('is_vuejs_dev', true);
define('vuejs_server', 'http://localhost:8080');
```

## Code References

### Create a Vue.js WordPress page or hierarchy template
Create a vue file in ```vuejs/src/components/templates```  
for example: 
* for custom post event: ```single-event.vue```  
* for a custom page template: ```cool-design.vue```  
  
Refering it in ```vue.config.php```
```php
$vue_hierarchy = array(
    'single-event'
);

$vue_hierarchy = array(
    'cool-design' => 'Cool Design'
);
```

### Add a variable from WordPress to Vue.js

In your WordPress Plugin or Theme
```php
function your_function () {
	/*
	wp_vue_add_var($key, string || object || array);
	*/
	wp_vue_add_var('your_vue_var_1', 'hello world !');
	wp_vue_add_var('your_vue_var_2', array(1,2,3));
}

add_action( 'wp_head', 'your_function' ); // used on load
add_action( 'wp', 'your_function' ); // json page transition
```
In Vue.js Template
```js
export default {
	mounted (){
		console.log(this.wp.your_vue_var_1);
	}
}
```

### Smart Fonts
Make fonts proportional to the ratio screen  
Edit your font in ```src/fonts.js```  

or 

init fonts with the js function
```js
smart_fonts({
	'h1' : 22,
	'p' : 14,
})
```
or 

just init the function in your component mounted event
```js
smart_fonts()
```

This function is used in App.vue for each template mounted

### On screen event
Detect an element which appear in screen with JQuery  

First, init the class on your element
```html
<div class="any-class on-screen"></div>
```

in your vue
```js
$('.any-class').on('enter-screen', (event) => {

	
})

//on leave screen (also tiggered on init)
$('.any-class').on('leave-screen', () => {

})
```

## To do

- [ ] use swipper slider for horizontal post list
- [x] on element enter in or leave screen (enter-screen / leave-screen, jquery event)
- [ ] elements fixed in section
- [ ] scroll with gradient opacity
- [ ] vertical scroll crossed lines photos gallery
- [ ] section with video background (mp4, vimeo, youtube, iframe)