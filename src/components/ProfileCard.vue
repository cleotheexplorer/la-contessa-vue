<template>
  <div class="profile-card">
    <div class="main-img">
      <h2>{{cardName}}</h2>
      <figure>
        <figcaption></figcaption>
        <img v-bind:src="mainImage" v-on:click="display_modal(mainImage)">
      </figure>
    </div>

    <HorizontalGrid v-bind:images="sideImages"/>

  </div> 
</template>

<script>
import HorizontalGrid from '../components/HorizontalGrid.vue'

export default {
  name: 'ProfileCard',
  components: {
    HorizontalGrid
  },
  props: {
    cardName: String,
    mainImage: String,
    sideImages: Array 
  },
  mounted(){
  },
  methods: {
    display_modal(image_url){
      var modal = document.getElementById('myModal')
      var modalImg = document.getElementById('img01')
      var captionText = document.getElementById("caption");
			modal.style.display = "block";
			modalImg.src = image_url;
			captionText.innerHTML = "";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .main-img{
    margin-top: var(--grid-margin);
  }

  .profile-card {
    display: grid;
    grid-gap: var(--grid-margin);
    grid-template-columns: 1fr;
  }

  figure img {
    max-width:100%;
    object-fit: contain;
  }

  img:hover {
    opacity: 0.7;
  }

</style>
