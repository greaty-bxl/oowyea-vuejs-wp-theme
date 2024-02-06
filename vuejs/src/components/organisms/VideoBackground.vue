<template>
	<div>
		<video 
      ref="videoPlayer"
      playsinline
      autoplay
      :muted="isMuted"
      :loop="isLoop"
      :poster="poster"
      id="bgvid">
				<!-- <source src="@/Assets/AlPiccoloMondo_FINAL.mp4" type="video/webm"> -->
				<source :src="src" type="video/mp4">
		</video>
		<div class="video-bt" @click="toggleMute">
      <div class="sound" :class="{'sound-mute': isMuted}">
        <div class="sound--icon fa fa-volume-off"></div>
        <div class="sound--wave sound--wave_one"></div>
        <div class="sound--wave sound--wave_two"></div>
      </div>
			<!-- <button @click="toggleMute">{{ isMuted ? 'Activer le son' : 'Désactiver le son' }}</button>
			<button @click="toggleFullscreen">Mettre en plein écran</button> -->
		</div>
    <div class="video-bt bt-2" @click="toggleFullscreen">
      <div class="fa fa-expand"></div>
    </div>
	</div>
</template>

<style>
@import "//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css";

.video-container {
	position: relative;
	overflow: hidden;
}

video {
	position: absolute;
	top: 50%;
	left: 50%;
	min-width: 100%;
	min-height: 100%;
	transform: translateX(-50%) translateY(-50%);
	z-index: -1;
}

.video-bt {
  cursor: pointer;
  background-color: rgba(250, 250, 250, 0.2);
  border-radius: 50px;
	position: absolute;
	z-index: 1;
  right: 85px;
  padding: 10px;
  width: 45px;
  height: 45px;
  top: calc(100vh - 65px);
  color: rgba(250, 250, 250, 0.7);
  transition: all;
  transition-duration: 0.7s;
}

.video-bt.bt-2{
  right: 30px;
  font-size: 18px;
  line-height: 25px;
}

.video-bt:hover {
  background-color: rgba(250, 250, 250, 0.4);
  color: rgba(250, 250, 250, 1);
}

@media (max-width: 991px) {
  .video-bt {
    transform: scale(0.8);
    background-color: rgba(250, 250, 250, 0.4);
    color: rgba(250, 250, 250, 1);
  }
  .video-bt {
    top: calc(100vh - 170px);
    right: calc(50% + 0px);
  }
  .video-bt.bt-2{
    right: calc(50% - 45px);
  }
}
</style>

<style lang="scss">
  $color: rgba(250, 250, 250, 0.7);
  $hoverColor: rgba(250, 250, 250, 1); 
  $size: 25px;
  $border: $size / 12;

  .sound {
    width: $size;
    height: $size;
    position: relative;
    cursor: pointer;
    display: inline-block;
    
    &--icon {
      color: $color;
      width: 75%;
      height: 100%;
      line-height: 100%;
      font-size: $size;
      display: block;
      margin: auto;
      margin-left: -3px;

      &:hover {
        color: $hoverColor; 
      }

      @media (max-width: 991px) {
        &{
          color: $hoverColor;
        }
      }
    }
    
    &--wave {
      position: absolute;
      border: $border solid transparent;
      border-right: $border solid $color;
      border-radius: 50%;
      transition: all 200ms;
      margin: auto;
      top: 0;
      bottom: 0;
      left: -2px;
      right: 0;

      &:hover {
        border-right-color: $hoverColor; 
      }

      @media (max-width: 991px) {
        &{
          border-right-color: $hoverColor; 
        }
      }
      
      &_one {
        width: 50%;
        height: 50%;
      }

      &_two {
        width: 75%;
        height: 75%;
      }
    }
    
    &-mute .sound--wave {
      border-radius: 0;
      width: 50%;
      height: 50%;
      border-width: 0 $border 0 0;
      
      &_one {
        transform:
          rotate(45deg) 
          translate3d(0, -50%, 0);
      }
      
      &_two {
        transform: 
          rotate(-45deg)
          translate3d(0, 50%, 0);
      }
    }
  }
</style>

<script>
export default {
	props:{
		src : String,
		poster : String
	},
	data() {
		return {
			isMuted: true, // État du son (muet ou non)
			isLoop: true, // État de la boucle (lecture en boucle ou non)      
		};
	},
	methods: {
		toggleMute() {
			// Inversez l'état du son
			this.isMuted = !this.isMuted;

			// Accédez à l'élément vidéo et activez/désactivez le son
			const videoElement = this.$refs.videoPlayer;
			videoElement.muted = this.isMuted;
		},
		toggleFullscreen() {
			// Accédez à l'élément vidéo
			const videoElement = this.$refs.videoPlayer;

			// Vérifiez si le mode plein écran est pris en charge par le navigateur
			if (videoElement.requestFullscreen) {
				if (document.fullscreenElement) {
					// Si le document est déjà en mode plein écran, sortez du mode plein écran
					document.exitFullscreen();
				} else {
					// Sinon, demandez le mode plein écran pour l'élément vidéo
					videoElement.requestFullscreen();
				}
			}
		},
	}

	/*mounted() {
		window.addEventListener("scroll", this.parallaxEffect);
	},
	beforeDestroy() {
		window.removeEventListener("scroll", this.parallaxEffect);
	},
	methods: {
		parallaxEffect() {
			console.log('parallaxEffect');
			const video = document.getElementById("bgvid");
			const scrolled = window.scrollY;
			video.style.transform = `translateX(-50%) translateY(${-(scrolled * 0.3)}px)`;
		},
	},*/
};
</script>