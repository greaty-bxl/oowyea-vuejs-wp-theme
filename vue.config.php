<?php

define('is_vuejs_dev', true);
define('vuejs_server', 'http://localhost:8080');

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
    'tag'
);

//custom page templates
$vue_templates = array(

    'demo1' => 'Template Demo 1', 
    'demo2' => 'Template Demo 2',
    'phaser' => 'Phaser',
    'greaty-home' => 'Greaty home',
    'greaty-services' => 'Greaty Services',
    'greaty-projects' => 'Greaty Project',
    'greaty-single' => 'Greaty Single',
    'services-title' => 'Services title',
    'greaty-studio' => 'Greaty Studio',
    'studio-title' => 'Studio Title'

);

