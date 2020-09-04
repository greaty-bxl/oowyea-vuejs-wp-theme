function lightOrDark(color) {

	let r, g, b, hsp;
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

function main_or_best(colors, bg) 
{
	console.log('main_or_best', lightOrDark(colors[0]), lightOrDark(bg) );

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
	//let find
	colors.forEach( el => {
		let el_type = lightOrDark(el)
		let bg_type = lightOrDark(bg)
		if( el_type.type != bg_type.type )
		{
			let hsp_diff = Math.round( el_type.hsp - bg_type.hsp )
			founds[ hsp_diff ] = el
		}		
	})

	let keys = Object.keys(founds).sort()
	let found = founds[ keys[index] ]

	console.log( 'founds best_contrast', found, index )

	if( found )
	{
		return '#' + founds[ keys[index] ]
	}
	else
	{
		return get_darker(colors)
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

	console.log('middle_light founds', founds)
}

function get_darker(colors)
{
	let founds = {}

	colors.forEach(el => {
		founds[lightOrDark(el).hsp] = el
	})

	let key = Object.keys(founds).sort()[0]
	console.log('get_darker', founds[key] );
	return '#' + founds[key]
}

export default function (){
	

	console.log(this.colors);

	if( Object.keys( this.scheme_styles ).length > 0 )
	{
		this.scheme_styles = {}
	}

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

		console.log('create schemes from generator', group_by);

		let colors_groups = []

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

		console.log( 'group', colors_groups, Object.keys( this.scheme_styles ) );

		

		colors_groups.forEach( (colors, index) => {
			//console.log( 'group', colors);
			this.scheme_styles['light-'+index] = {
				'background' : '#F9F9F9',
				'background-2' : get_middle_light(colors, '#F9F9F9'),
				'headline-1' : main_or_best(colors, '#F9F9F9'),
				'headline-2' : get_best_contrast(colors, '#F9F9F9'),
				'paragraph' : '#333333',
				'cta-common-bg' : 'grey', // call to action (e.g tabs, list bullets, ...)
				'cta-common-text': 'white',
				'cta-rare-bg' : get_best_contrast(colors, '#F9F9F9'), // important call to action (e.g button save, contact us, ...)
				'cta-rare-text': '#F9F9F9',
				'link': get_best_contrast(colors, '#F9F9F9', 1),
			}
		})

		/*this.scheme_styles.light = {
			'background' : '#F9F9F9',
			'background-2' : get_middle_light(this.colors, '#F9F9F9'),
			'headline-1' : main_or_best(this.colors, '#F9F9F9'), //,
			'headline-2' : get_best_contrast(this.colors, '#F9F9F9'),
			'paragraph' : '#333333',
			'cta-common-bg' : 'grey', // call to action (e.g tabs, list bullets, ...)
			'cta-common-text': 'white',
			'cta-rare-bg' : get_best_contrast(this.colors, '#F9F9F9'), // important call to action (e.g button save, contact us, ...)
			'cta-rare-text': '#F9F9F9',
			'link': get_best_contrast(this.colors, '#F9F9F9', 1),
		}*/

	}
	//manual colors
	else
	{
		console.log('create schemes from manual selection');

		this.scheme_styles['light'] = {
			'background' : '#F9F9F9',
			'background-2' : get_middle_light(this.colors, '#F9F9F9'),
			'headline-1' : main_or_best(this.colors, '#F9F9F9'),
			'headline-2' : get_best_contrast(this.colors, '#F9F9F9'),
			'paragraph' : '#333333',
			'cta-common-bg' : 'grey', // call to action (e.g tabs, list bullets, ...)
			'cta-common-text': 'white',
			'cta-rare-bg' : get_best_contrast(this.colors, '#F9F9F9'), // important call to action (e.g button save, contact us, ...)
			'cta-rare-text': '#F9F9F9',
			'link': get_best_contrast(this.colors, '#F9F9F9', 1),
		}
	}

	//console.log( this.$refs.css )

	setTimeout( ()=>{
		this.$refs.css.forEach( (css)=> { 
			css.update()
		})
	}, 1)
	
}