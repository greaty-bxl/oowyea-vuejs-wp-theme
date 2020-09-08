<template>
	<div class="full" v-on:click="reset_manual_selection">
		<div class="max-width-vh">
			<h2>Scheme</h2>
			<select v-model="colorSettings">
				<option>generator</option>
				<option>manual</option>	
				<option>saved-schemes</option>
			</select>
			<br/><br/>
			<div id="color-scheme-generator" v-show="colorSettings == 'generator'">
				<button v-on:click="randomize">Random color</button>
				<br/><br/>
				<Slider v-model="mainColor_object" @input="update_color_picker" />			
				<br/>
				<select v-model="schemesType" v-on:change="update_main_color">
					<option>mono</option>
					<option>contrast</option>
					<option>triade</option>
					<option>tetrade</option>
					<option>analogic</option>
				</select>
				<select v-model="variation" v-on:change="update_main_color">
					<option>default</option>
					<option>pastel</option>
					<option>soft</option>
					<option>light</option>
					<option>hard</option>
					<option>pale</option>
				</select>
				<br/><br/>
				<input v-model="distance" v-if="distance_type.includes(schemesType)" type="range" max="1" min="0" step="0.1" v-on:change="update_main_color">
			</div>
			<div id="color-scheme-manual" v-show="colorSettings == 'manual'">
				<Sketch v-model="manual_current_color" @input="doing_manual_change" />
				<br/>
				<button v-on:click="add_color" v-if="manual_current_edit_color_key == null">Add this color</button>
				<br/><br/>
			</div>

			<div v-if="manual_change != 0 && colorSettings == 'generator'">
				<strong>Warning:</strong> After manual change, the system will not respect all auto-generated scheme logics.
			</div>

			<div v-if="colorSettings != 'saved-schemes'">
				<div class="color-cards">
					<!-- <div v-show="mainColor != null" class="main-color color-card" :style="{'background':'#'+mainColor}">
						#{{mainColor}}
					</div> -->
					<div class="color-card"  v-for="(color, key) in colors" 
						:key="key" 
						:style="{'background':'#'+color}" 
						v-bind:class="{ current: (key == manual_current_edit_color_key) }">
						<div class="color-card-tools" v-if="colorSettings == 'manual'" >
							<div class="remove" title="Remove this color" v-on:click="delete_color(key)"><v-icon name="trash-alt"></v-icon></div>
							<div class="edit" title="Edit this color" v-on:click="edit_color(key)"><v-icon name="edit"></v-icon></div>
						</div>
						#{{color}}
						<div v-if="key == 0">- main -</div>
					</div>
				</div>
				<br/>
				<div id="preview-cards-mask">
					<div id="preview-cards">
						<div class="preview-card clr-bg-1 clr-paragraph" :id="'preview-color-'+id" v-for="(scheme_style, id) in scheme_styles" :key="id">
							<Style ref="css" :id="'preview-color-css-'+id">
								#preview-color-{{id}}{
									background-color: {{scheme_style['background']}};
								}
								#preview-color-{{id}} h1{
									color: {{scheme_style['headline-1']}}
								}
								#preview-color-{{id}} h2{
									color: {{scheme_style['headline-2']}}
								}
								#preview-color-{{id}}, #preview-color-{{id}} p{
									color: {{scheme_style['paragraph']}}
								}
								#preview-color-{{id}} a{
									color: {{scheme_style['link']}}
								}
								
								#preview-color-{{id}} .btn-common{
									color: {{scheme_style['cta-common-text']}} ;
								}
								#preview-color-{{id}} .btn-common{
									background-color: {{scheme_style['cta-common-bg']}} ;
								}

								#preview-color-{{id}} .btn-rare{
									color: {{scheme_style['cta-rare-text']}} ;
								}
								#preview-color-{{id}} .btn-rare{
									background-color: {{scheme_style['cta-rare-bg']}} ;
								}
							</Style>
							<div class="name">- {{id}} -</div>
							<h1 class="clr-headline-1">Title</h1>
							<h2 class="clr-headline-2">Subtitle</h2>
							<p >
								Content with <a class="clr-link" href="#">link</a>
							</p>
							<label class="clr-headline-2">Label</label><br/><br/>
							<input type="text" name="" value="Input Value" /><br/><br/>
							<input type="text" name="" placeholder="Placeholder" /><br/><br/>
							<button class="btn-common">Reset form</button>&nbsp;
							<button class="btn-rare">Send</button>
						</div>			
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '';
	for (var i = 0; i < 6; i++) 
	{
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

import { Slider, Sketch } from 'vue-color'
import is from 'is_js'
import ColorScheme from 'color-scheme'
import Style from 'Molecules/dynamic-style'

export default{
	components: {
		Sketch,
		Slider,
		Style
	},
	data(){
		return {
			init: false,
			color1: '#fff',
			colorSettings: 'generator',
			scheme: null,
			schemesType: 'mono',
			schemesType_arr: ['mono', 'contrast', 'triade', 'tetrade', 'analogic'],
			variation: 'default',
			variation_arr: ['default', 'pastel', 'soft', 'light', 'hard', 'pale'],
			distance: 0.75,
			distance_type: ['triade', 'tetrade', 'analogic'],
			colors: [],
			mainColor: getRandomColor(),
			mainColor_object: '000000',
			manual_current_color: getRandomColor(),
			manual_current_edit_color_key: null,
			manual_change: 0,
			scheme_styles:{},
			theme_options: ['colorSettings', 'mainColor', 'mainColor_object', 'schemesType', 'variation', 'distance', 'colors', 'manual_change'],
		}
	},
	mounted(){

		this.scheme = new ColorScheme

		if( !this.colors.length )
		{
			this.mainColor = getRandomColor()
			this.mainColor_object = this.mainColor
			this.manual_current_color = this.mainColor
			this.update_main_color()
		}

		this.mainColor_object = this.mainColor

		this.wp_options_synch( this.theme_options, () => {
			//loaded
			setTimeout( ()=>{ this.init = true }, 1 )
		})

		if( is.desktop() )
		{

			const slider = document.querySelector('#preview-cards-mask');
			let isDown = false;
			let startX;
			let scrollLeft;

			slider.addEventListener('mousedown', (e) => {
				isDown = true;
				slider.classList.add('active');
				startX = e.pageX - slider.offsetLeft;
				scrollLeft = slider.scrollLeft;
			});
			slider.addEventListener('mouseleave', () => {
				isDown = false;
				slider.classList.remove('active');
			});
			slider.addEventListener('mouseup', () => {
				isDown = false;
				slider.classList.remove('active');
			});
			slider.addEventListener('mousemove', (e) => {
				if(!isDown) return;
				e.preventDefault();
				const x = e.pageX - slider.offsetLeft;
				const walk = (x - startX) * 3; //scroll-fast
				slider.scrollLeft = scrollLeft - walk;
				//console.log(walk);
			});

		}
	},
	watch: {
		colors: function(){
			if( this.init == true 
				||  Object.keys(this.scheme_styles).length == 0 ) 
			{ 
				this.generate_schemes()				
			}
		},
		/* Theme Option */
		scheme_styles : function(){
			this.$refs.css.forEach( comp => comp.update() )
		},
		immediate: true,
		deep: true
	},
	methods:{
		update_main_color: function(){
			if( this.colorSettings == 'generator' )
			{
				this.manual_change = 0

				this.scheme
					//.from_hue(100)         // Start the scheme 
					.from_hex( this.mainColor )
					.scheme( this.schemesType )     // Use the 'triade' scheme, that is, colors
					.distance( parseFloat( this.distance ) )
					// selected from 3 points equidistant around
					// the color wheel.
					.variation( this.variation );   // Use the 'soft' color variation

				let main_array = [ this.mainColor ]
				this.colors = main_array.concat( this.scheme.colors() )	
			}			
		},
		update_color_picker: function(){
			this.mainColor = this.mainColor_object.hex.substr(1)
			this.update_main_color()
		},
		randomize: function(){
			this.mainColor = getRandomColor()
			this.mainColor_object = this.mainColor

			let schemesType_Rand_key = Math.floor(Math.random() * this.schemesType_arr.length);
			this.schemesType = this.schemesType_arr[schemesType_Rand_key]

			let variation_rand_key = Math.floor(Math.random() * this.variation_arr.length);
			this.variation = this.variation_arr[variation_rand_key]

			this.distance = Math.floor( Math.random() * 100 ) / 100

			this.update_main_color()
		},
		add_color: function () {
			this.manual_change = 1
			let new_colors = this.colors

			if( is.object( this.manual_current_color ) )
			{
				new_colors.push( this.manual_current_color.hex.substr(1) )
			}
			else
			{
				new_colors.push( this.manual_current_color )
			}
		},
		edit_color: function (key) {
			console.log('edit_color', key);
			this.manual_change = 1
			this.manual_current_edit_color_key = key

			this.manual_current_color = this.colors[key]
		},
		doing_manual_change: function(){
			if( this.manual_current_edit_color_key != null )
			{
				//let new_array = []
				let key = this.manual_current_edit_color_key
				let newColor = this.manual_current_color.hex.substr(1)
				//new_array[key] = newColor

				console.log('manual change', this.colors, newColor);
				this.$set(this.colors, key, newColor);

				console.log('manual change', this.colors, newColor);
				
				/*if( key == 0 )
				{
					this.mainColor = newColor
					this.mainColor_object = newColor
				}*/


				//this.colors = Object.assign( [], this.colors, new_array )
			}
		},
		delete_color: function (key) {
			this.manual_change = 1
			let new_colors = []
			let count = 0
			
			this.colors.forEach( (el, index) => {
				if( index != key ){
					new_colors[count] = el
					count++
				}
			})
			this.colors = new_colors
		},
		reset_manual_selection: function (event) {
			let $ = this.$

			if( $(event.target).parents(".vc-sketch").length == 0 
				&& !$(event.target).hasClass('color-card current')
				&& $(event.target).parents(".color-card").length == 0
			)
			{
				this.manual_current_edit_color_key = null
			}
			
		},
		/*generate_sheme_style: function () {
			if( this.init == true )
			{
				console.log('generate_sheme_style');	
			}			
		}*/
	}
}
</script>

<style>
	.full{
		min-height: 100vh;
		min-width: 100%;
	}
	.max-width-vh {
		max-width: 100vh;
		margin: auto;
	}
	.vc-Slider, .vc-slider, .vc-material, .vc-sketch {
		margin: auto;
	}
	.vc-ps-ac-btn, .vc-ps-head, .vc-ps-previews, .vc-sketch-presets, .vc-sketch-alpha-wrap {
		display: none;
	}
	.vc-sketch-field > .vc-sketch-field--single:last-child/*,
	.vc-sketch-controls > .vc-sketch-color-wrap*/{
		display: none;
	}
	.vc-photoshop, .vc-sketch {
		background: none !important;
		border-radius: initial !important;
		box-shadow: none !important;
		margin: auto;
    }
	.color-cards{
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
		height: 15vh;
		overflow: auto;
	}
	.color-cards .color-card{
		font-size: 12px;
		flex: 1 1 100px;
		max-width: 70px;
		margin: 5px;
		height: 7vh;
		border-radius: 5px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.color-cards .color-card.current{
		box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.50);
	}

	.color-card-tools {
		position: absolute;
		margin-top: -2.5vh;
	}

	.color-card-tools > div{
		display: inline-block;
	}
	.color-card-tools .fa-icon{
		height: 10px;
	}

	#preview-cards-mask{
		height: 30vh;
		width: 100%;
		overflow-y: hidden;
		overflow-x: scroll;
		cursor: move;
	}

	#preview-cards {	
		transform: scale(0.5);
		transform-origin: left top;
		min-width: calc(200% - 40px);
		padding: 10px;
		white-space: nowrap;
	}
	#preview-cards * {
		pointer-events: none;
		user-select: none;
	}
	#preview-cards .preview-card {
		display: inline-block;
		margin-right: 20px;
		padding: 25px;
		width: 300px;
		box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.50);
	}
	#preview-cards .preview-card h1 {
		font-size: 320%
	}
	#preview-cards .preview-card label{
		font-weight: bold;
	}

	#preview-cards .preview-card input{
		border: none;
		line-height: 180%;
	}

	#preview-cards .preview-card button{
		line-height: 180%;
		border: none;
	}
	/*#preview-cards .preview-card a {
		color: initial;
	}*/
	/*.color-cards .color-card:last-child{
		margin-right: 0px;
	}*/
</style>