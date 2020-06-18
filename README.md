# [Vue.js WordPress Theme](http://html5blank.com)

Get the power to create the new generation of websites :sunglasses:

## Installation

### install the theme in WordPress
your-wordpress/wp-content/themes/oowyea-vuejs-wp-theme

## Vue.js

### install
```
cd path-to-your-themes/oowyea-vuejs-wp-theme/vuejs
npm install

//development
npm run serve
//build for production /vuejs/dist
npm run build
```
### development
in function.php change is_vuejs_dev const to true
make sure about your Vue.js server
```php
define('is_vuejs_dev', true);
define('vuejs_server', 'http://localhost:8080');
```