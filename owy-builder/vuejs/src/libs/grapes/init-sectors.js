import advancedSelector from './sectors/advanced-selector.js'
import marginPadding from './sectors/margin-padding/margin-padding.js'

export default function () {
	//let $ = this.jquery

	console.log('sector', this.editor );
	
	advancedSelector( this.editor, this.jquery )

	marginPadding( this.editor )
}