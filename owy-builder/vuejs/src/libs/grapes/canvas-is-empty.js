function change( el ) 
{
	let $el = el.view.$el
	let tagName = $el.prop('tagName')
	
	$el.parent().removeClass('is_empty')

	if( tagName )
	{
		$el.removeClass('is_empty')
	}

	if( tagName && $el.is(':empty') )
	{
		$el.addClass('is_empty')
	}
}

export default function (editor) {

	editor.on('component:update', (el) => {
		change( el )
	});

	editor.on('component:add', (el) => {
		change( el )
	});

	editor.on('component:remove', (el) => {
		change( el )
	});
	
}