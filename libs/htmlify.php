<?php
class htmlify
{
    public $HTML;
    public $DOMDocument;
    public $object = null;
    public $objects = array();
    public $xpathQueries = array();
    
    private $selector;
    private $loopingIndex = 0;
    private $inlineReplace = array();
    private $newNode;
    private $newNodes = array();
    private $removeList = array();
    
    /*
    *  init
    *
    *  @type    function
    *  @date    07/07/2018
    *  @since   0.0.0
    *
    *  @param   $unknown_html_type (string |or| file path)
    *  @return  -
    */
    public function init( $unknown_html_type ) {
    	
    	libxml_use_internal_errors( true );
    	libxml_clear_errors();

    	if( is_file( $unknown_html_type ) )
    	{
    		$this->HTML = file_get_contents( $unknown_html_type );
    	}
    	else
    	{
    		$this->HTML = $unknown_html_type;
    	}    
        $this->DOMDocument = $this->getDOMDocument();
    }

    /*
    *  saveHTML
    *
    *  Save as html
    *
    *  @type    function
    *  @date    07/07/2018
    *  @since   0.0.0
    *
    *  @param   -
    *  @return  $return (string)
    */
    public function saveHTML() {
        $this->clear();
        $return = $this->DOMDocument->saveHTML();
        $return = $this->inlineReplace_filter( $return );
        return $return;
    }

    /*
    *  saveItem
    *
    *  Save first selected object as html string (no html, no body)
    *
    *  @type    function
    *  @date    07/07/2018
    *  @since   0.0.0
    *
    *  @param   $find (string)
    *  @return  $return (string)
    */
    public function saveItem( $find )
    {
        $this->clear();
        $item = new DOMDocument;
        $item->loadHTML( $this->DOMDocument->saveHTML() );
        $body = $item->getElementsByTagName('body')->item(0);
        $body->nodeValue = "";

        $this->find( $find );
        foreach ($this->objects as $key => $value) 
        {
            $new_child = $item->importNode($value, true);
            $body->appendChild( $new_child );
        }
        
        $return = $item->saveHTML();

        $return = preg_replace( array( "/^\<\!DOCTYPE.*?<html><body>/si", "!</body></html>$!si" ), "", $return );

        $return = $this->inlineReplace_filter( $return );

        return $return;
    }

    /*
    *  write
    *
    *  write as html
    *
    *  @type    function
    *  @date    07/07/2018
    *  @since   0.0.0
    *
    *  @param   $file (path.ext)
    *  @return  -
    */
    public function write( $file ) {
        file_put_contents( $file, $this->saveHTML() );
    }

    /*
    *  writeItem
    *
    *  Save first selected object as html string (no html, no body)
    *
    *  @type    function
    *  @date    07/07/2018
    *  @since   0.0.0
    *
    *  @param   $find (string)
    *  @return  $file (path.ext)
    */
    public function writeItem( $find,  $file ) {
        file_put_contents( $file, trim( $this->saveItem( $find ) ) );
    }

    /*
    *  inlineReplace
    *
    *  add string(s) to replace before save or write
    *
    *  @type    function
    *  @date    07/07/2018
    *  @since   0.0.0
    *
    *  @param   $search (string), $replace (string)
    *  @return  $this (htmlify)
    */
    public function inlineReplace( $search, $replace )
    {
        $this->inlineReplace[$search] = $replace;
        return $this;
    }
    
    /*
    *  inlineReplace_filter
    *
    *  apply filter to replace string(s) before save or write
    *
    *  @type    function
    *  @date    07/07/2018
    *  @since   0.0.0
    *
    *  @param   $inline (html as string)
    *  @return  $inline (html as string)
    */
    private function inlineReplace_filter( $inline )
    {
        foreach ($this->inlineReplace as $key => $value) 
        {
            $inline = str_replace($key, $value, $inline);
        }
        return $inline;
    }
    
    /*
    *  find
    *
    *  Use css selector logic to find nodes
    *
    *  @type    function
    *  @date    07/07/2018
    *  @since   0.0.0
    *
    *  @param   $find (selector)
    *  @return  $this (htmlify)
    */
    public function find( $find )
    {
    	$this->selector = array();
    	$this->objects = array();
        $this->xpathQueries = array();
    	$find = explode(',', $find);
    	foreach ( $find as $key1 => $value1 ) 
    	{
    		$this->get_objects_by_selector( $value1 );
    	}
        $xpath = new DOMXPath($this->DOMDocument);
        $this->objects = $xpath->query( implode(' | ', $this->xpathQueries) );
    	return $this;
    }

    /*
    *  get
    *
    *  Use find and return all nodes
    *  Goal: works with domDocuments functions
    *
    *  @type    function
    *  @date    07/07/2018
    *  @since   0.0.0
    *
    *  @param   $find (selector)
    *  @return  $this (htmlify)
    */
    public function get( $find )
    {
        $this->find( $find );
        return $this->objects;
    }

    /*
    *  each
    *
    *  This function will loop selector finded ($this->objects)
    *  Usage:
    *  $htmlify->find('h2')->each( function($index,$item){ 
    *       print_r( $item );
    *  });
    *
    *  @type    function
    *  @date    07/07/2018
    *  @since   0.0.0
    *
    *  @param   $callback (function)
    *  @return  $this (htmlify)
    */
    public function each( $callback )
    {
        foreach ($this->objects as $key => $value) 
        {
            $callback($key,$value);
        }        
    }

    /*
    *  insertBefore
    *
    *  Based on the JQuery logic you can use text or html as string to create nodes
    *
    *  @type    function
    *  @date    07/07/2018
    *  @since   0.0.0
    *
    *  @param   $string (string)
    *  @return  $this (htmlify)
    */
    public function insertBefore( $string )
    {
        $this->insert( $string, 'before' );
        return $this;
    }

    /*
    *  insertAfter
    *
    *  Based on the JQuery logic you can use text or html as string to create nodes
    *
    *  @type    function
    *  @date    07/07/2018
    *  @since   0.0.0
    *
    *  @param   $string (string)
    *  @return  $this (htmlify)
    */
    public function insertAfter( $string )
    {
        $this->insert( $string, 'after' );
        return $this;
    }

    /*
    *  prepend
    *
    *  Based on the JQuery logic you can use text or html as string to create nodes
    *
    *  @type    function
    *  @date    07/07/2018
    *  @since   0.0.0
    *
    *  @param   $string (string)
    *  @return  $this (htmlify)
    */
    public function prepend( $string )
    {
        $this->insert( $string, 'prepend' );
        return $this;
    }

    /*
    *  append
    *
    *  Based on the JQuery logic you can use text or html as string to create nodes
    *
    *  @type    function
    *  @date    07/07/2018
    *  @since   0.0.0
    *
    *  @param   $string (string)
    *  @return  $this (htmlify)
    */
    public function append( $string )
    {
        $this->insert( $string );
        return $this;
    }

    /*
    *  addClass
    *
    *  add one or multiple class
    *
    *  @type    function
    *  @date    10/07/2018
    *  @since   0.0.0
    *
    *  @param   $name (string), $value
    *  @return  $this (htmlify)
    */
    public function addClass( $classname )
    {
        foreach ($this->objects as $key => $object) 
        {
            $classes = $object->getAttribute('class');
            if( !$classes )
            {
                $domAttribute = $this->DOMDocument->createAttribute('class');
                $object->appendChild( $domAttribute );    
            }
            else
            {
                $classes = $this->str_clear_spacing( $classes );
                $classes_array = explode(' ', $classes);
                $new_classes = $this->str_clear_spacing( $classname );
                $new_classes_array = explode(' ', $new_classes);
                $classes_merge = array_unique( array_merge( $classes_array, $new_classes_array ), SORT_REGULAR );
                $classes_merge_str = implode(" ", $classes_merge);
            }
            if( $classes_merge_str )
            {
                $object->setAttribute( 'class', $classes_merge_str );
            }
        }
        return $this;
    }

    /*
    *  attr
    *
    *  create and update attribute
    *  Usage:
    *   $htmlify->find('img')->attr('title', )
    *
    *  @type    function
    *  @date    07/07/2018
    *  @since   0.0.0
    *
    *  @param   $name (string), $value
    *  @return  $this (htmlify)
    */
    public function attr( $name, $value = null )
    {
        foreach ($this->objects as $key => $object) 
        {
            $domAttribute = $this->DOMDocument->createAttribute($name);
            $object->appendChild( $domAttribute );
            if( $value )
            {
                $object->setAttribute( $name, $value );
            }
        }
        return $this;
    }

    /*
    *  loop
    *
    *  This function will use an array/object and duplicate an item to create a list
    *  $this->objects is update with the new nodes
    *  use anonymous function as callback
    *  
    *  $htmlify->loop( $keys, '.project-item', function( $index, $value, $el ) {
    *    $el->replace( '{title}', $value );
    *  });
    *
    *  @type    function
    *  @date    07/07/2018
    *  @since   0.0.0
    *
    *  @param   $list (array/object), $selector (selector string), $callback (function)
    *  @return  $this (htmlify)
    */
    public function loop( $list, $selector, $callback )
    {
        foreach ( $list as $key => $value ) 
        {
            $this->looping( $selector );
            $callback( $key, $value, $this );
        }
        $this->clear();
        return $this;
    }

    /*
    *  looping
    *
    *  This function will duplicate an item starting by the second
    *  $this->objects is update with the new node
    *  Important: give an index
    *
    *  @type    function
    *  @date    07/07/2018
    *  @since   0.0.0
    *
    *  @param   $item_to_copy (selector)
    *  @return  $this (htmlify)
    */
    public function looping( $item_to_copy )
    {
        $this->find( $item_to_copy );
        if( $this->loopingIndex == 0 )
        {
            $this->object = $this->objects->item( 0 );
            $this->removeList[] = $this->object;
        }
        $new_node = $this->object->cloneNode( true );
        $this->object->parentNode->appendChild( $new_node );
        $this->objects = array( 0 => $new_node ); 
        $this->loopingIndex++;
        return $this;
    }

    /*
    *  replace
    *
    *  This function will replace strings using the node as an html string
    *
    *  @type    function
    *  @date    07/07/2018
    *  @since   0.0.0
    *
    *  @param   $search (string), $replace (string)
    *  @return  $this (htmlify)
    */
    public function replace( $search, $replace = null )
    {
        $new_objects = array();
        foreach ( $this->objects as $key => $object ) 
        {
            $htmlString =  $object->ownerDocument->saveHTML( $object );
            $this->objects = array( 0 => $object );
            if( is_string( $search ) )
            {
                $htmlString = str_replace($search, $replace, $htmlString);
            }
            elseif( is_array( $search ) )
            {
                foreach ($search as $search_key => $search_value) 
                {
                    $htmlString = str_replace($search_key, $search_value, $htmlString);
                }
            }
            $this->insertAfter( $htmlString );
            $object->parentNode->removeChild( $object );
            $new_objects[] = $this->new_node;
        }
        
        $this->objects = $new_objects;
        $this->new_node = null;
        $this->new_nodes = array();
        return $this;
    }    

    /*
    *  remove
    *
    *  Remove a list of Nodes based on selector
    *
    *  @type    function
    *  @date    19/07/2018
    *  @since   0.0.0
    *
    *  @param   $selector (string)
    *  @return  $this (htmlify)
    */

    public function remove( $selector )
    {
        $this->find( $selector );
        foreach ($this->objects as $key => $removeNode) 
        {
            $removeNode->parentNode->removeChild( $removeNode );
        }
        $this->object = null;
        $this->objects = array();
        return $this;
    }

    /*
    *  clear
    *
    *  Reset htmlify class
    *  Important after usage of looping
    *
    *  @type    function
    *  @date    07/07/2018
    *  @since   0.0.0
    *
    *  @param   -
    *  @return  $this (htmlify)
    */
    public function clear()
    {
        foreach ($this->removeList as $key => $removeNode) 
        {
            $removeNode->parentNode->removeChild( $removeNode );
        }
        $this->removeList = array();

        $this->object = null;
        $this->objects = array();

        $this->new_node = null;
        $this->new_nodes = array();

        $this->loopingIndex = 0;
        
        return $this;
    }

    /*
    *  getDOMDocument
    *
    *  @type    function
    *  @date    07/07/2018
    *  @since   0.0.0
    *
    *  @param   -
    *  @return  DOMDocument
    */
    private function getDOMDocument(){
        $dom = new DOMDocument;
        $dom->loadHTML( $this->HTML );
        return $dom;
    }

    /*
    *  get_objects_by_selector
    *
    *  Convert css selector to DOMXPath
    *  Update $this->objects array with new results
    *
    *  @type    function
    *  @date    07/07/2018
    *  @since   0.0.0
    *
    *  @param   $find (selector)
    *  @return  -
    */
    private function get_objects_by_selector( $find )
    {
        $find = trim( $find );
        $value1_exploded = explode( ' ', $find);
        $this->selector[$find]['find'] = $find;
        $object = null;
        $query = '.';
        foreach ( $value1_exploded as $key2 => $value2 ) 
        {
            if( $this->is_class_selector( $value2 ) )
            {
                $classname = substr( trim( $value2 ), 1);
                $query .= "//*[contains(concat(' ', normalize-space(@class), ' '), ' $classname ')]";
            }
            elseif ( $this->is_id_selector( $value2 ) ) 
            {
                $idname = substr( trim( $value2 ), 1);
                $query .= "//*[contains(concat(' ', normalize-space(@id), ' '), ' $idname ')]";
            }
            else /* is tag selector*/
            {
                $query .= "//$value2";
            }
        }
        $this->xpathQueries[] = $query;
    }

    /*
    *  getNodeByString
    *  
    *  @type    function
    *  @date    07/07/2018
    *  @since   0.0.0
    *
    *  @param   $string (string)
    *  @return  node |or| nodeList
    */
    private function getNodeByString( $string )
    {
        if ( $string != strip_tags( $string ) ) /* is html */
        {
            $tmpDoc = new DOMDocument();
            $tmpDoc->loadHTML( $string );
            $nodes = $tmpDoc->getElementsByTagName('body')->item(0)->childNodes;
            $new_nodes = array();
            foreach ( $nodes as $node) 
            {
                $new_nodes[] = $this->DOMDocument->importNode($node, true);
            }
            return $new_nodes;
        }
        else /* is a string */
        {
            return $this->DOMDocument->createTextNode( $string );
        }
        return false;
    }

    /*
    *  DOMinnerHTML
    *
    *  Return inline html content as string
    *
    *  @type    function
    *  @date    07/07/2018
    *  @since   0.0.0
    *
    *  @param   $node
    *  @return  -
    */
    private function DOMinnerHTML( $node ) 
    { 
        $innerHTML = ""; 
        $children  = $node->childNodes;

        if( $children )
        {
            foreach ($children as $child) 
            { 
                $innerHTML .= $node->ownerDocument->saveHTML($child);
            }
            return $innerHTML; 
        }
        else
        {
            return '';
        }
    }

    
    /*
    *  is_class_selector
    *
    *  Return if is class selector
    *
    *  @type    function
    *  @date    07/07/2018
    *  @since   0.0.0
    *
    *  @param   $string
    *  @return  -
    */
    private function is_class_selector( $string )
    {
        if( strpos( $string, '.') === 0 )
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    /*
    *  is_id_selector
    *
    *  Return if is id selector
    *
    *  @type    function
    *  @date    07/07/2018
    *  @since   0.0.0
    *
    *  @param   $string
    *  @return  -
    */
    private function is_id_selector( $string )
    {
        if( strpos( $string, '#') === 0 )
        {
            return true;
        }
        else
        {
            return false;
        }   
    }

    /*
    *  insert
    *
    *
    *  @type    function
    *  @date    07/07/2018
    *  @since   0.0.0
    *
    *  @param   $string (string), $type(string)
    *  @return  -
    */
    private function insert( $string, $type = null )
    {
        foreach ($this->objects as $key => $node) 
        {
            $new_node = $this->getNodeByString( $string );
            if( is_array( $new_node ) )
            {
                foreach ($new_node as $key => $one_new_node) 
                {
                    $this->insert_one( $string, $type, $node, $one_new_node );
                }
            }
            elseif ( $new_node != false ) 
            {
                $this->insert_one( $string, $type, $node, $new_node ); 
            }
        }
    }

    /*
    *  insert_one
    *
    *
    *  @type    function
    *  @date    07/07/2018
    *  @since   0.0.0
    *
    *  @param   $string (string), $type(string), $node (DOM node), $new_node (DOM node)
    *  @return  -
    */
    private function insert_one( $string, $type, $node, $new_node )
    { 
        if( $type == 'before' )
        {
            $this->new_node = $node->parentNode->insertBefore( $new_node, $node);
            $this->new_nodes[] = $this->new_node;
        }
        elseif ( $type == 'after' ) 
        {
            $this->new_node = $this->proto_insertAfter( $new_node, $node );
            $this->new_nodes[] = $this->new_node;
        }
        elseif ( $type == 'prepend' ) 
        {
            $childNodes = $node->childNodes;
            if( $childNodes->length > 0 )
            {
                $firstChild = $childNodes->item(0);
                $firstChild->parentNode->insertBefore( $new_node, $firstChild);
            }
            else
            {
                $this->new_node = $node->appendChild( $new_node );
                $this->new_nodes[] = $this->new_node;
            }
        }
        else /* append */
        {
            $this->new_node = $node->appendChild( $new_node );
            $this->new_nodes[] = $this->new_node;
        }
    }

    /*
    *  proto_insertAfter
    *  DOMDocument insert After
    *
    *  @type    function
    *  @date    07/07/2018
    *  @since   0.0.0
    *
    *  @param   $newNode (DOM node), $referenceNode (DOM node)
    *  @return  node
    */
    private function proto_insertAfter(\DOMNode $newNode, \DOMNode $referenceNode)
    {
        if( $referenceNode->nextSibling === null )
        {
            return $referenceNode->parentNode->appendChild($newNode);
        } 
        else 
        {
            return $referenceNode->parentNode->insertBefore($newNode, $referenceNode->nextSibling);
        }
    }

    /*
    *  str_clear_spacing
    *
    *  Remove extra spaces but not space between two words
    *
    *  @type    function
    *  @date    10/07/2018
    *  @since   0.0.0
    *
    *  @param   $name (string), $value
    *  @return  $this (htmlify)
    */
    private function str_clear_spacing( $str )
    {
        return trim(preg_replace('/\s\s+/', ' ', str_replace("\n", " ", $str)));
    }
}
?>