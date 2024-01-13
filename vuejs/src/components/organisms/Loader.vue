<template>
	<div id="page-loader">
		<canvas id="canvas-loader"></canvas>
		<div id="logo-loader"><img src="/assets/logo-al-piccolo-mondo.svg"></div>
	</div>
</template>
<script>
	import { fabric } from "fabric"
	/*import get_new_page from 'Libs/get-new-page.js'*/

	export default {
		data(){
			return {
				canvasElement: null
			}
		},
		mounted() {
			
			this.create_canvas()
			
			this.$(window).resize( () => {
				this.$store.state.loader.canvas.dispose()
				this.create_canvas()
			})

			/*get_new_page(this);*/
		},
		methods : {
			create_canvas() {
				this.canvasElement = document.getElementById('canvas-loader');
				let canvasElement = this.canvasElement
				let w = window.innerWidth
				let h = window.innerHeight
				canvasElement.width = w;
				canvasElement.height = h;

				fabric.Object.prototype.selectable = false;
				fabric.Object.prototype.lockScalingX = true;
				fabric.Object.prototype.lockScalingY = true;
				fabric.Object.prototype.lockMovementX = true;
				fabric.Object.prototype.lockMovementY = true;
				fabric.Object.prototype.lockRotation = true;
				fabric.Object.prototype.hoverCursor = 'default';
				
				
				this.$store.state.loader.canvas = new fabric.Canvas('canvas-loader');
				this.$store.state.loader.fabric = fabric

				// Courbe initiale
				var pathData = `
					M 0 ${h / 4}
					Q ${w / 2} ${(h / 4) * -1} ${w} ${h / 4} 
					L ${w} ${h + h / 4}
					Q ${w / 2} ${h + h / 4} 0 ${h + h / 4}
					Z
				`;


				var path = new fabric.Path(pathData, {
					fill: '#971732',
					stroke: 'blue',
					strokeWidth: 0,
				});

				// Grouper le chemin dans un fabric.Group
				var group = new fabric.Group([path], {
					left: 0,
					top: -h / 8,
				});
				this.$store.state.loader.canvas.add(group);

				//entrée
				group.set({
					angle: 0,
					originX: 'center',
					originY: 'center',
				}).setCoords();

				group.left = w / 2;
				group.top = h * 2 - ( h / 2 );

				this.$store.state.loader.group = group
				this.$store.state.loader.path = path

				console.log('canvas', fabric, this.$store.state.loader);
			}
		}
	}
</script>
<style >
	#page-loader{
		position: fixed;
		height: 100vh;
		width: 100%;
		top: 0px;
		/*background: rgba(0,0,0,0.5);*/
		display: none;
		align-items: center;
		justify-content: center;
		z-index: 8000;
	}

	#page-loader .fa-icon{
		height: 5vh;
		width: 5vh;
		color: rgba(255,255,255,0.5);
	}

	#logo-loader {
		position: fixed;
		top: calc(50vh - 150px);
		font-size: 150px;
		line-height: 150px;
		color: white;
	}

	.canvas-container {
		/*display: none;*/
	}
	#canvas-loader {
		position: fixed !important;
	}

	#logo-loader img {
		opacity: 0;
		transition: all 0.5s 0.5s;
		transform: translateY(-50px);
	}

	#logo-loader img.hello {
		opacity: 1;
		transform: translateY(00px);
	}

	
</style>