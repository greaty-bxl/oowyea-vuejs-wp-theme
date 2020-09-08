/* -----------------
	Color material & conditions
------------------- */ 
function lightOrDark(color) {

	let r, g, b, hsp;

	if( color.indexOf('#') === 0 )
	{
		color = color.substr(1)
	}
	// Check the format of the color, HEX or RGB?
	if (color.match(/^rgb/)) {

		// If HEX --> store the red, green, blue values in separate variables
		color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);

		r = color[1];
		g = color[2];
		b = color[3];
	} 
	else 
	{
		// If RGB --> Convert it to HEX: http://gist.github.com/983661
		color = +("0x" + color.slice(1).replace( 
		color.length < 5 && /./g, '$&$&'
		)
		);

		r = color >> 16;
		g = color >> 8 & 255;
		b = color & 255;
	}

	// HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
	hsp = Math.sqrt(
		0.299 * (r * r) +
		0.587 * (g * g) +
		0.114 * (b * b)
	);

	// Using the HSP value, determine whether the color is light or dark
	if (hsp>127.5) {
		return {type:'light', hsp};
	} 
	else 
	{
		return {type:'dark', hsp};
	}
}

function check_index_availability( colors, index )
{
	if( index > colors.length - 1 )
	{
		return colors.length - 1
	}
	else
	{
		return index
	}
}


/* -----------------
	Color functions 
------------------- */ 

function main_or_best(colors, bg) 
{
	//console.log('main_or_best', lightOrDark(colors[0]), lightOrDark(bg.substr(1)) );

	if( lightOrDark(bg).hsp - lightOrDark(colors[0]).hsp > 60 )
	{
		return '#' + colors[0]
	}
	else
	{
		return get_best_contrast(colors, bg)
	}
}

function get_best_contrast(colors, bg, index = 0) 
{
	let founds = {}

	let bg_type = lightOrDark(bg)
	//let find
	colors.forEach( el => {
		let el_type = lightOrDark(el)
		
		if( el_type.type != bg_type.type )
		{
			let hsp_diff = Math.round( el_type.hsp - bg_type.hsp )
			if( hsp_diff < 0 ) hsp_diff *= -1
			founds[ hsp_diff ] = el
		}		
	})

	let keys = Object.keys(founds).sort()

	index = check_index_availability( keys, index )

	let found = founds[ keys[index] ]

	//console.log( 'founds best_contrast', founds, index, lightOrDark(bg) )

	let tryClr

	if( found )
	{
		return '#' + founds[ keys[index] ]
	}
	else if( bg_type.type == 'light' )
	{
		tryClr = get_darker(colors)
	}
	else if( bg_type.type == 'dark' )
	{
		tryClr = get_middle_light(colors, bg)
	}

	if( tryClr == bg )
	{
		console.log( 'issue best_contrast', founds, tryClr )
		return 'rgba(255,255,255,0.7)'
	}
	else
	{
		return tryClr
	}
}

function get_middle_light(colors, bg, can_diff = 30) 
{
	let founds = {}

	colors.forEach( el => {
		let el_type = lightOrDark(el)
		let bg_type = lightOrDark(bg)
		if( el_type.type == 'light' )
		{
			let hsp_diff = Math.round( el_type.hsp - bg_type.hsp )
			if( hsp_diff < 0 ) hsp_diff *= -1

			if( hsp_diff > can_diff )
			{
				founds[ hsp_diff ] = el
			}
		}		
	})

	let keys = Object.keys(founds).sort()

	let found = founds[ keys[0] ]

	//console.log('middle_light founds', founds)

	if( found )
	{
		return '#' + found
	}
	else if( can_diff > 10 )
	{
		return get_middle_light(colors, bg, 10)
	}
	else
	{
		return get_best_contrast(colors, bg)
	}
	

	
}

function get_darker(colors, index = 0)
{
	let founds = {}

	colors.forEach(el => {
		founds[lightOrDark(el).hsp] = el
	})

	let key = Object.keys(founds).sort()[index]
	//console.log('get_darker', founds[key] );
	return '#' + founds[key]
}


/* -----------------
	Models
------------------- */ 
import Vue from 'vue'
/* ---------------- */

Vue.prototype.get_light_model = function () 
{
	
	let colors = this.loop.colors
	let index = this.loop.index

	let bg_1 = '#F9F9F9'

	//console.log('get_light_model', index)

	this.scheme_styles['light-'+index] = {
		'background' : bg_1,
		'background-2' : get_middle_light(colors, bg_1),
		'headline-1' : main_or_best(colors, bg_1),
		'headline-2' : get_best_contrast(colors, bg_1),
		'paragraph' : '#333333',
		'cta-common-bg' : get_best_contrast(colors, bg_1, 1), // call to action (e.g tabs, list bullets, ...)
		'cta-common-text': bg_1,
		'cta-rare-bg' : get_best_contrast(colors, bg_1, 3), // important call to action (e.g button save, contact us, ...)
		'cta-rare-text': bg_1,
		'link': get_best_contrast(colors, bg_1, 1),
	}
}

Vue.prototype.get_dark_model = function () 
{
	
	let colors = this.loop.colors
	let index = this.loop.index

	let bg_1 = '#191C1E'

	this.scheme_styles['dark-'+index] = {
		'background' : bg_1,
		'background-2' : get_middle_light(colors, bg_1),
		'headline-1' : main_or_best(colors, bg_1),
		'headline-2' : get_best_contrast(colors, bg_1),
		'paragraph' : '#F9F9F9',
		'cta-common-bg' : get_best_contrast(colors, bg_1, 1), // call to action (e.g tabs, list bullets, ...)
		'cta-common-text': bg_1,
		'cta-rare-bg' : get_best_contrast(colors, bg_1, 3), // important call to action (e.g button save, contact us, ...)
		'cta-rare-text': bg_1,
		'link': get_best_contrast(colors, bg_1, index),
	}
}

Vue.prototype.get_colorized_model = function () 
{
	let colors = this.loop.colors.slice()
	delete colors[0]

	let index = this.loop.index

	let bg_1 = get_darker(colors, 1)
	let rare_bg = get_middle_light(colors, bg_1)

	console.log('get_colorized_model', index)

	this.scheme_styles['colorized-'+index] = {
		'background' : bg_1,
		'background-2' : get_middle_light(colors, bg_1),
		'headline-1' : get_best_contrast(colors, bg_1),
		'headline-2' : get_best_contrast(colors, bg_1),
		'paragraph' : '#F9F9F9',
		'cta-common-bg' : get_best_contrast(colors, bg_1, 1), // call to action (e.g tabs, list bullets, ...)
		'cta-common-text': bg_1,
		'cta-rare-bg' : rare_bg, // important call to action (e.g button save, contact us, ...)
		'cta-rare-text': get_best_contrast(colors, rare_bg),
		'link': get_best_contrast(colors, bg_1, 1),
	}
}

/* -----------------
	Main function
------------------- */
export default function (){

	if( Object.keys( this.scheme_styles ).length > 0 )
	{
		this.scheme_styles = {}
	}

	let colors_groups = []

	//generator colors scheme
	if( this.manual_change == 0 )
	{
		let group_by = {
			mono: 1,
			contrast: 2,
			triade: 3,
			tetrade: 4,
			analogic: 3
		}		

		let loop = group_by[this.schemesType]

		for (var i = 0; i < loop; i++) 
		{
			colors_groups[i] = []
			colors_groups[i][0] = this.colors[0]
			for (var e = 1; e <= 4; e++) 
			{
				colors_groups[i][e] = this.colors[i*4+e]
			}
		}
	}
	//manual colors
	else
	{
		colors_groups[0] = this.colors
	}

	
	colors_groups.forEach( (colors, index) => {
		this.loop = {'colors':colors, 'index':index}
		this.get_light_model()
	})

	colors_groups.forEach( (colors, index) => {
		this.loop = {'colors':colors, 'index':index}
		this.get_dark_model()
	})

	colors_groups.forEach( (colors, index) => {
		this.loop = {'colors':colors, 'index':index}
		this.get_colorized_model()
	})

	setTimeout( ()=>{
		this.$refs.css.forEach( (css)=> { 
			css.update()
		})
	}, 1)
	
}