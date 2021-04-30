export default function (editor) {
	editor.on('component:selected', function(el) {
		if( el.view.$el.attr('data-gjs-type') == 'wrapper' )
		{
			editor.select( el.find('#app') )
		}
	});
}