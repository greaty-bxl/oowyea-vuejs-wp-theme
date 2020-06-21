# [Vue.js WordPress Theme](https://greaty.be)

Get the power to create the new generation of websites :sunglasses:

## :hamburger: Features
* Auto animated scroll by section
* Pages transitions (update url)
* Fullscreen & fluid design
* Child pages as sections 
* Support WordPress hierarchy
* Vue.js include JQuery from WordPress

## :floppy_disk: Installation

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

## :mortar_board: Code References

### [Create a Vue.js WordPress page or hierarchy template](doc/code-references/create-a-vuejs-wordpress-page-or-hierarchy-templat.md)

### [Add a variable from WordPress to Vue.js](doc/code-references/add-a-variable-from-wordpress-to-vuejs.md)

### [Smart Fonts (fluid responsive)](doc/code-references/smart-fonts.md)

### [On screen (event)](doc/code-references/on-screen.md)

## To do

- [ ] use swipper slider for horizontal post list
- [x] on element enter in or leave screen (enter-screen / leave-screen, jquery event)
- [ ] elements fixed in section
- [ ] scroll with gradient opacity
- [ ] vertical scroll crossed lines photos gallery
- [ ] section with video background (mp4, vimeo, youtube, iframe)