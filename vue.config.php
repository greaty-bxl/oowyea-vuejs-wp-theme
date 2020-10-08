<?php

define('is_vuejs_dev', true);
// define('is_vuejs_dev', false);


define('vuejs_server', 'http://localhost:8080/');  
// define('vuejs_server', 'http://192.168.1.3:8080');
//Register Vue.js templates components 
//for the hierarchy


$vue_hierarchy = array(
	'404',
    'archive',
    'author',
    'category',
    'index',
    'page',
    'search',
    'single',
    'single-project',
    'tag'
);

//custom page templates
$vue_templates = array(

    'demo1' => 'Template Demo 1', 
    'demo2' => 'Template Demo 2',
    'phaser' => 'Phaser',
    'home' => 'Fromagerie home',
    'propos' => 'A propos',
    'a-propos-galerie' => 'A propos Galerie',
    
    // grid-services-2

    
);

