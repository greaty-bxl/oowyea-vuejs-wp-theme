let last_title
export default function(url){
	
	var $ = this.$

	if( history.pushState instanceof Function && url != document.location.href ) history.pushState({urlPath:url},"",url)

	setTimeout( () => {
		var new_title = $('.section[data-permalink="'+url+'"]').data('title')
		
		if(new_title && last_title != new_title) $('title').text( new_title + ' | ' + this.wp.options.blogname )

		last_title = new_title
	}, 2 )
	
}