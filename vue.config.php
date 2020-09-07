<?php

define('is_vuejs_dev', true);

define('vuejs_server', 'http://localhost:8080/');
// define('vuejs_server', 'http://localhost:8080/');

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
    'greaty-home' => 'Greaty home',
    'greaty-services' => 'Greaty Services',
    'greaty-projects' => 'Greaty Project',
    'greaty-single' => 'Greaty Single',
    'services-title' => 'Services title',
    'greaty-studio' => 'Greaty Studio',
    'studio-title' => 'Studio Title',
    'projets-3d' => 'Projets 3d',
    'projets-3d-project' => 'Projets 3d project',
    'descritifHome' => 'Descritif Home',
    'descritifStudio' => 'Descritif studio',
    'descritifProjets' => 'Descritif projets',
    'video-animation' => 'Video animation',
    'grid-services' => 'Grid Services',
    'members' => 'Members',
    'text-clients' => 'Text client',
    'grid-clients' => 'Grid Clients',

    

    
);

