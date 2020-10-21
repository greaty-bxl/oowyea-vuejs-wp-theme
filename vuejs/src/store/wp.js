//import getField from "Libs/acf-get-field.js"

class wp{

	/* State */
	constructor(){
		this.state = window.wp
	}

	/* Mutations */
	section_change(state, payload){

		state.wp.current_section = payload.current_section

		state.wp = Object.assign({}, state.wp)
	}

	sections_load(state, payload){

		state.wp.sections = payload.sections

		let max = state.wp.sections.length
		let count = 0

		function wait_dom( index, id ) {

			let dom = document.querySelector('[data-state="current"] #'+id)

			if( dom == null )
			{
				setTimeout( () => { wait_dom( index, id) }, 1 )
			}
			else
			{
				count++
				state.wp.sections[index].dom = dom
				if( max == count )
				{
					state.wp = Object.assign({}, state.wp)
				}
			}
		}

		state.wp.sections.forEach( (el, i) => {
			wait_dom( i, el.post_name )
		})
	}
}

export default new wp()