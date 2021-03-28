import advancedSelector from './sectors/advanced-selector.js'

export default function () {
	//let $ = this.jquery

	console.log('sector', this.editor );
	
	advancedSelector( this.editor, this.jquery )

	
}