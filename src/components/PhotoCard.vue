<template>
    <a class="card"
      :href="link"
      target="_blank"
      ref="card"
      @mousemove="move"
      @mouseleave="leave"
      @mouseover="over">
      <div class="reflection" ref="refl"></div>
      <img :src="img" />
    </a>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    props: {
      img: {
        type: String,
        required: true,
      },
      link: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        debounce: null,
      };
    },
    methods: {
      over() {
        const refl = this.$refs.refl;
        refl.style.opacity = 1;
      },
      leave() {
        const card = this.$refs.card;
        const refl = this.$refs.refl;
        card.style.transform = `perspective(500px) scale(1)`;
        refl.style.opacity = 0;
      },
      move(event) {
        const card = this.$refs.card;
        const refl = this.$refs.refl;
  
        const relX = (event.offsetX + 1) / card.offsetWidth;
        const relY = (event.offsetY + 1) / card.offsetHeight;
        const rotY = `rotateY(${(relX - 0.5) * 60}deg)`;
        const rotX = `rotateX(${(relY - 0.5) * -60}deg)`;
        card.style.transform = `perspective(500px) scale(2) ${rotY} ${rotX}`;
  
        const lightX = this.scale(relX, 0, 1, 150, -50);
        const lightY = this.scale(relY, 0, 1, 30, -100);
        const lightConstrain = Math.min(Math.max(relY, 0.3), 0.7);
        const lightOpacity = this.scale(lightConstrain, 0.3, 1, 1, 0) * 255;
        const lightShade = `rgba(${lightOpacity}, ${lightOpacity}, ${lightOpacity}, 1)`;
        const lightShadeBlack = `rgba(0, 0, 0, 1)`;
        refl.style.backgroundImage = `radial-gradient(circle at ${lightX}% ${lightY}%, ${lightShade} 20%, ${lightShadeBlack})`;
      },
      scale(val, inMin, inMax, outMin, outMax) {
        return outMin + ((val - inMin) * (outMax - outMin)) / (inMax - inMin);
      },
    },
  });
  </script>
  
  <style scoped>
  .card {
    background-color: #ccc;
    width: 150px;
    height: 150px;
    transition: all 0.1s ease;
    border-radius: 3px;
    position: relative;
    z-index: 1;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0);
    overflow: hidden;
    cursor: pointer;
  }
  
  .card:hover {
    transform: scale(2);
    z-index: 2;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  }
  
  .card .reflection {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    left: 0;
    top: 0;
    transition: all 0.1s ease;
    opacity: 0;
    mix-blend-mode: soft-light;
  }
  
  .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(0.65);
    transition: all 0.3s ease;
  }
  
  .card:hover img {
    filter: grayscale(0);
  }
  </style>
  