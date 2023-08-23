<template>
  <div>
    <video playsinline autoplay muted loop id="bgvid" :poster="poster">
        <!-- <source src="@/Assets/AlPiccoloMondo_FINAL.mp4" type="video/webm"> -->
        <source :src="src" type="video/mp4">
    </video>
    <div class="content">
      <!-- Votre contenu ici -->
    </div>
  </div>
</template>

<style>
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

.content {
  position: relative;
  z-index: 1;
  padding: 50px;
  color: white; /* Changez la couleur selon vos besoins */
}
</style>

<script>
export default {
  props:{
    src : String,
    poster : String
  },
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