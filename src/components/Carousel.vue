<template>
  <div class="carousel">
    <div v-for="(image, index) in images" v-bind:key="index" class="slide fade">
      <img v-bind:src="image">  
    </div>

    <span class="next" v-on:click="incrementSlide(1)">&#10095;</span>
    <span class="prev" v-on:click="incrementSlide(-1)">&#10094;</span> 

    <div class="dot-panel">
      <span v-for="(image, index) in images" v-bind:key="index" class="dot" v-on:click="currentSlide(index+1)"></span> 
    </div>

  </div>
</template>

<script>
export default {
  name: 'carousel',
  props: {
    images: Array,
  },
  mounted(){
    this.showSlides(this.slideIndex)
  },
  data: function(){
    return {
      slideIndex: 1
    }
  },
  methods: {
    showSlides(page){

      var slides = document.getElementsByClassName('slide');
      var dots = document.getElementsByClassName('dot');

      if(page > slides.length){ this.slideIndex = 1}
      if(page < 1) {this.slideIndex = slides.length}

      for(var i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
      }

      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');  
      }  

      slides[this.slideIndex -1].style.display = 'block';
      dots[this.slideIndex-1].className += ' active';

    },
    incrementSlide(index){
      this.showSlides(this.slideIndex+= index);
    },
    currentSlide(index) {
      this.showSlides(this.slideIndex = index);
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .carousel {
    position: relative;
    overflow: show;
  }

  .carousel img {
    width:100%;
  }

  .slide {
    /* remove all possible spacings for in-line elements */
    font-size: 0px;
    letter-spacing: 0px;
    word-spacing: 0px;
    display: none;
  }

  /* Fading animation */
  .fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
  }

  .dot-panel {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    margin-bottom: 0.5em;
  }

  .dot {
    cursor: pointer;
    height: 0.8em;
    width: 0.8em;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
  }

  .active, .dot:hover {
    background-color: #717171;
  }

  .prev, .next {
    margin: auto;
    position: absolute;
    cursor: pointer;
    top:50%;
    transform: translateY(-50%);
    padding:0.3em;
    color: white;
    font-weight: bold;
    font-size: 2em;
    transition: 0.6s ease;
  }

  .next {
    right: 0;
  }

  span:focus {
    outline:0;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  @-webkit-keyframes fade {
    from {opacity: .4} 
    to {opacity: 1}
  }

  @keyframes fade {
    from {opacity: .4} 
    to {opacity: 1}
  }



</style>
