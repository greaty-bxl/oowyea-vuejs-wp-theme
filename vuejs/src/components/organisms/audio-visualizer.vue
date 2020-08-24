<template>
	<div :class="$style['audio-visualizer-wrap']">
		<canvas id="audio-visualizer"></canvas>	
	</div>
	
</template>

<script>
export default{
	data(){
		return{
			context: null,
			src: null,
			analyser: null,
			bufferLength: null,
			dataArray: null,
			barHeight: null,
			x: null,
			max_height: null,
			visualizer_first_time: 1,
			animation: null
		}
	},
	mounted(){

		this.$store.subscribe((mutation, state) => {
			
			if( mutation.type == 'update_main_audio_src' )
			{
				this.init_visualizer( state.main_audio.audio )
			}
		})

		if( this.$store.state.main_audio.playing )
		{
			this.init_visualizer( this.$store.state.main_audio.audio )
		}
	},
	methods:{
		init_visualizer: function(audio){
			if( audio )
			{

				if( this.$store.state.main_audio.last_audio == this.$store.state.main_audio.audio )
				{
					this.context = this.$store.state.main_audio.radio_visualizer_vars.context
					this.src = this.$store.state.main_audio.radio_visualizer_vars.src
					this.analyser = this.$store.state.main_audio.radio_visualizer_vars.analyser
				}
				else
				{
					this.context = new AudioContext();
					this.src = this.context.createMediaElementSource(audio);
					this.analyser = this.context.createAnalyser();

					this.$store.state.main_audio.radio_visualizer_vars = {
						'context' : this.context,
						'src' : this.src,
						'analyser': this.analyser
					}
				}

				this.src.connect(this.analyser);
				this.analyser.connect(this.context.destination);

				this.analyser.fftSize = 256 * 8//256;

				this.bufferLength = this.analyser.frequencyBinCount;

				this.dataArray = new Uint8Array(this.bufferLength);
				this.barHeight;
				this.x = 0;
				this.max_height = 0

				cancelAnimationFrame(this.animation)
				this.render_frame();

				this.$store.state.main_audio.last_audio = audio				
			}			
		},
		render_frame: function(){
			

			let $ = this.$

			var canvas = document.getElementById("audio-visualizer");

			if( !canvas ) return

			canvas.width = $(this.$el).innerWidth();
			canvas.height = $(this.$el).height();
			var ctx = canvas.getContext("2d");
			var WIDTH = canvas.width;
			var HEIGHT = canvas.height;

			var barWidth = (WIDTH / this.bufferLength) * 2.5;

			this.animation = requestAnimationFrame( this.render_frame )

			this.x = 0;

			this.analyser.getByteFrequencyData(this.dataArray);

			var canContext = canvas.getContext('2d');
			canContext.clearRect(0, 0, canvas.width, canvas.height)

			for (var i = 0; i < this.bufferLength; i++) {
				////console.log(i);
				this.barHeight = this.dataArray[i] / 3;

				if( this.barHeight > this.max_height )
				{
					this.max_height = this.barHeight
				}

				var percent = Math.round( this.barHeight / this.max_height * 100 ) / 100

				ctx.fillStyle = "rgba(255,255,255, "+percent+")"
				ctx.fillRect(this.x, HEIGHT - this.barHeight, barWidth, this.barHeight);

				this.x += barWidth + 2;
			}
		}
	},
	computed: {
		main_audio: {
			get () {
				return this.$store.state.main_audio
			}
		}
	},
	beforeDestroy(){
		cancelAnimationFrame(this.animation)
	}
}
</script>

<style module>
	.audio-visualizer-wrap{
		width: 100%;
		height: 30vh;
	}
</style>