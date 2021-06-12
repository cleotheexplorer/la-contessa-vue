<template>
  <div id="landing">
    <Carousel v-bind:images="images"/>
		<HorizontalGrid v-bind:images="gridImages"/>
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
import HorizontalGrid from '../components/HorizontalGrid.vue'

export default {
  components: { 
		Carousel,
		HorizontalGrid 
	},
  name: 'Landing',
  data: function (){
		return {
			images: [
				'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/gallery/3kittens1-min.jpeg',
				'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/gallery/ume-min.jpeg',
				'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/gallery/griffin-min.jpeg',
				'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/gallery/ponzu2-min.jpeg'
			],
			gridImages: [
				'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/gallery/griffin_gigil-min.jpg',
				'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/gallery/kaki6-min.jpeg',
				'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/gallery/cleo1-min.jpg',
				'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/gallery/noriko_stretching-min.jpg'
			]
		}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#landing{
		display:grid;
		grid-gap: var(--grid-margin);
		margin-top:90px;
		
	}

</style>
