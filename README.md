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
make sure about your Vue.js server
```php
define('is_vuejs_dev', true);
define('vuejs_server', 'http://localhost:8080');
```

## Code Development

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

just init the function in your component
```js
smart_fonts()
```
