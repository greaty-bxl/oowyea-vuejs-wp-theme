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
    'template-demo1' => 'Template Demo 1', 
    'template-demo2' => 'Template Demo 2'
);