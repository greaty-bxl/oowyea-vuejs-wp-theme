<?php

define('is_vuejs_dev', false);
define('vuejs_server', 'http://localhost:8080');

//Register all templates components 

//for the hierarchy
$vue_hierarchy = array(
    'index',
    'page'
);

//custom page templates
$vue_templates = array(
    'template-demo1' => 'Template Demo 1', 
    'template-demo2' => 'Template Demo 2'
);