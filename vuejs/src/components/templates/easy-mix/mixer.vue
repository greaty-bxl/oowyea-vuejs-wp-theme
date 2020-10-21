<template>
	<div class="mixer-ui">
		<div><input type="number" name="n-mix" placeholder="number of mixer" v-model="nMix" v-on:change="update_n_mixers"></div>
		<div class="mixers">
			<div class="mixer" v-for="(mixer, key) in mixers" :key="key">
				<input v-model="mixer.search" :ref="'mixer-'+key" type="text" name="yt-search" placeholder="search" v-on:keyup="search_mixer(key)">
				<v-icon v-if="mixer.searching" class="loader rotating" name="spinner"/><br/>
				
				<div class="results" v-show="mixer.search !== ''">
					<div class="result" v-for="(result, r_key) in mixer.results" :key="r_key">
						<v-icon v-on:click="load_video( key, result.id.videoId )" name="upload"/>
						{{result.snippet.title}}
					</div>
				</div>
				<div class="yt-wrap" v-show="mixer.search === ''">
					<youtube  class="yt-iframe" :video-id="mixer.id" :player-vars="YtVars" width="100%" height="200px" ref="youtube"></youtube>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import VueYoutube from 'vue-youtube'
import is from 'is_js'

Vue.use(VueYoutube)

export default {
	data(){
		return{
			nMix: 2,
			YTReady: false,
			YtId: 'tnGaCZZ5Z28', //'tnGaCZZ5Z28',//'6stlCkUDG_s',//'1eHwlmn_Mps', rlonGk2UcnE, EbOy4D4hu3U
			YtVars: {
				autoplay: 0,
				controls: 1,
				showinfo: 0,
				loop: 1,
				suggestedQuality:'large',
			},
			mixers: [
				{
					search: '',
					id: 'N-pEuWL_mOA',
					searching: false,
				},
				{
					search: '',
					id: 'MOQjtw-lXqc',
					searching: false,
				},
			]
		}
	},
	mounted(){
		let $ = this.$
		$('#header').hide();
		$('#footer').next().hide();
		
		
	},
	methods: {
		update_n_mixers : function(){
			var i
			if( this.mixers.length < this.nMix )
			{
				for (i = 0; i < this.nMix; i++) {
					
					if( !is.object( this.mixers[i] ) )
					{
						//this.mixers[i] = 
						this.mixers.push( {
							s: '',
							id: '',
							searching: false
						})
						console.log('add one', this.mixers);
					}
				}
				console.log('up nmix', this.mixers.length);	
			}
			else if( this.mixers.length > this.nMix )
			{
				for (i = 0; i < this.mixers.length; i++) {
					
					if( i > this.nMix - 1 ) 
					{
						//delete this.mixers[i]
						this.mixers.splice(i, 1);
					}
				}
			}
		},
		search_mixer : function(key){
			let $ = this.$
			let mixer = this.mixers[key]
			//let input_val = this.$refs['mixer-'+key][0].value
			
			console.log(mixer.search);
			//mixer.search = 'test'

			clearTimeout( mixer.timer )

			if( mixer.search !== '' ){
			
				mixer.timer = setTimeout( ()=>{

					this.$set(mixer, 'searching', true)
					//console.log('search', mixer, mixer.search);

					$.get('https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&order=viewCount&q='+mixer.search+'&maxResults=99&key=AIzaSyANoXz_G0TxveXOLcLX9Jip2hmtW264OyU', (data) => {
						console.log('in', data);
						this.$set(mixer, 'searching', false)
						this.$set(mixer, 'results', data.items)
					});
					//console.log('search');
				}, 350)
			}
			else
			{
				this.$set(mixer, 'searching', false)
			}
			
		},
		load_video : function(key, id){
			let mixer = this.mixers[key]
			this.$set(mixer, 'id', id)
			this.$set(mixer, 'search', '')
		}
	}

}
</script>

<style scoped>
.mixer-ui{
	background: #2B2B2B;
}
.mixer-ui .mixer{
	width: 50%;
}

.mixer-ui .mixers{
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
}

.mixer-ui .results{
	height: 200px;
	overflow: auto;
}

.mixer-ui .mixer .result{
	text-align: left;
	color: #B1B9D1;
	border-bottom: solid 1px #B1B9D1;
}

.mixer-ui .yt-wrap{
	height: 200px;
	background: #000000;
}

@-webkit-keyframes rotating /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.rotating {
  -webkit-animation: rotating 2s linear infinite;
  -moz-animation: rotating 2s linear infinite;
  -ms-animation: rotating 2s linear infinite;
  -o-animation: rotating 2s linear infinite;
  animation: rotating 2s linear infinite;
}
</style>