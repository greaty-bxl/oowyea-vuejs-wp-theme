<?php

define('is_vuejs_dev', true);
define('vuejs_server', 'http://localhost:8080/');

//Register Vue.js templates components 

$template_words = array(
    'index',
    'archive',
    'blog',
    'front-page',
    'page',
    'index',
    'single',
    'archive',
    'category',
    'taxonomy',
    'tag',
    '404',
    'search',
    'author',
    'shop',
    'attachment'
);


function is_hierarchical_template($name)
{
    global $template_words;

    foreach ($template_words as $value) 
    {
        if( strpos(basename( $name ), $value) === 0 )
        {
            return true;
            break;
        }
    }
    return false;
}

/*if( is_vuejs_dev )
{*/
    $vue_hierarchy = array();
    $vue_templates = array();
    //Get vue template
    function get_vue_templates($dir, $lvl = -1) {
        global $vue_hierarchy, $vue_templates;

        $files = scandir($dir);

        $lvl ++;

        if( $lvl > 1 ) return;

        foreach ($files as $key => $value) {

            $path = realpath($dir . DIRECTORY_SEPARATOR . $value);

            if (!is_dir($path)) {
                $info = pathinfo( $path );
                if( $info['extension'] == 'vue' )
                {
                    preg_match('#templates\\\(.*)\\\#', $path, $matches, PREG_OFFSET_CAPTURE);
                    if( @$matches[1][0] )
                    {
                        $__dir = $matches[1][0];
                        $title_dir = ucwords( $__dir . ' - ' );
                    }
                    else
                    {
                        $title_dir = '';
                    }

                    $basename = substr(basename( $path ), 0, -4);

                    if( is_hierarchical_template( $path ) )
                    {
                        $vue_hierarchy[$basename] = $basename;
                    }
                    else
                    {
                        $new_name = ucwords( str_replace('-', ' ', $basename ) );
                        $vue_templates[$basename] = $title_dir . $new_name;
                    }
                }            
            } 
            else if ($value != "." && $value != "..") 
            {
                get_vue_templates($path, $lvl);
            }
        }
    }
    get_vue_templates(GREATY_TEMPLATE_PATH.'/vuejs/src/components/templates');

    global $builder_templates;
    global $builder_templates_list;

    $builder_templates = get_posts( array(
        'post_type' => 'owy_template',
        'posts_per_page' => -1
    ) );

    $builder_templates_list = array();

    foreach ($builder_templates as $key => $template) 
    {
        $name = str_replace('owy-template-', '', $template->post_name );

        if( is_hierarchical_template( $name ) )
        {
            $vue_hierarchy[$name] = $name;
            $builder_templates_list[$name] = $template;
            /*echo "h:" . $template->post_name;
            echo "<br/>";*/
        }
        else
        {
            $vue_templates[$name] = $template->post_title;
            $builder_templates_list[$name] = $template;
            /*echo "t:" . $template->post_name;
            echo "<br/>";*/
        }
    }

    /*echo "<pre>";
    print_r( $vue_templates );
    echo "<pre>";
    print_r( array_values( $vue_hierarchy ) );
    exit();*/

/*
}
else
{
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
        'radio' => 'Radio',
    );
}*/