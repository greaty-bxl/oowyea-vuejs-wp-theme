<?php 

//include GREATY_TEMPLATE_PATH.'/libs/radio/yt-funny-bg.php';

function radio_generate_order($post_id, $post)
{
	if( $post->post_type == 'radio-show' )
	{
		$musics_query = new WP_Query(array(
			'post_type' => 'attachment',
			'post_mime_type' => 'audio/mpeg',
		    'post_status'    => 'inherit',
		    'posts_per_page' => -1,
		    'tax_query' => array(  
		        'relation' => 'AND',
		          array(
		            'taxonomy' => 'music_tag',
		            'field' => 'id',
		            'terms' => $_POST['acf']['field_5f3862199a219'],
		            'include_children' => true,
		            'operator' => 'IN'
		          ),
		        ),
		));
		
		$musics_by_ids = (object) array();

		if( !empty( $_POST['acf']['field_5f386bef684cd'] ) )
		{
			$ids_in = array();

			foreach ($_POST['acf']['field_5f386bef684cd'] as $key => $value) 
			{
				$ids_in[] = $value['field_5f386c25684ce'];
			}

			$musics_by_ids = new WP_Query(array(
				'post_type' => 'attachment',
				'post_mime_type' => 'audio/mpeg',
			    'post_status'    => 'inherit',
			    'posts_per_page' => -1,
			    'post__in' => $ids_in
			));
		}

		$start = $_POST['acf']['field_5f390319f90a4'];
		$end = $_POST['acf']['field_5f39034ef90a6'];

		$date1 = new DateTime($start);
		$date2 = new DateTime($end);

		$diff = $date1->diff($date2);
		$playlist_duration_seconds = ($diff->i + $diff->h * 60) * 60 + $diff->s ;

		$musics = array_merge( $musics_query->posts, $musics_by_ids->posts );
		$musics_clean = array();
		foreach ($musics as $key => $value) 
		{
			$musics_clean[$value->ID] = $value;
		}
		$musics = $musics_clean;		

		function get_musics_for($musics, $duration, $list, $start_at = 0)
		{
			shuffle($musics);

			foreach ($musics as $key => $music) 
			{	
				$prev = array_slice($list, -1)[0];
				
				if( $prev->ID == $music->ID && count( $musics ) > 2 )
				{
					continue;
				}

				$duration -= $music_duration;
				
				$music_duration = get_post_meta( $music->ID, '_wp_attachment_metadata', true )['length'];

				$list[$start_at] = $music;

				$start_at += $music_duration;
				
			}

			if( $duration < 0 )
			{
				return $list;
			}
			else
			{
				return get_musics_for($musics, $duration, $list, $start_at);
			}
		}

		$playlist = array();

		if( count( $musics ) > 0 )
		{
			$playlist = get_musics_for( $musics, $playlist_duration_seconds, $playlist);
		}
		
		$_POST['acf']['field_5f39042b7c73a'] = json_encode( $playlist );

		update_post_meta( $post_id, 'playlist_array', $playlist );

	}
}
add_action( 'save_post', 'radio_generate_order', 10, 2 );

function get_radio_playlist()
{
	global $post;

	if( $post )
	{
		if( @$post->template == 'radio' )
		{
			$shows = new WP_Query(array(
				'post_type' => 'radio-show',
				'posts_per_page' => -1
			));

			/*
			to do: find the current show about current hour
			*/

			$current_show = $shows->post;
			$current_show_playlist = get_post_meta( $current_show->ID, 'playlist_array', true );

			/*echo "<pre>";
			print_r(id3_get_tag( $current_show_playlist[0]->guid ) );
			exit();*/
			//id3_get_tag 

			wp_vue_add_var('radio_show', $current_show);
			wp_vue_add_var('radio_playlist', $current_show_playlist);	
		}
	}
	
	
}

add_action( 'wp_head', 'get_radio_playlist' );
add_action( 'wp', 'get_radio_playlist' );