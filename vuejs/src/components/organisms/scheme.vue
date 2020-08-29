<template>
	<div>scheme</div>
</template>

<script>

import ColorScheme from 'color-scheme'

export default{
	mounted(){
		//var ColorScheme = require('color-scheme');

		var scheme = new ColorScheme;
		scheme.from_hue(21)         // Start the scheme 
			.scheme('triade')     // Use the 'triade' scheme, that is, colors
			// selected from 3 points equidistant around
			// the color wheel.
			.variation('soft');   // Use the 'soft' color variation

		var colors = scheme.colors();

		console.log(colors);
	}
}
</script>