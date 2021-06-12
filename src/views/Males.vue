<template>
	<div id="males">
    <h1>Males</h1>
    <OuterBoxTemplate v-bind:cards="cards"/>
	</div>
</template>

<script>

import OuterBoxTemplate from '../components/OuterBoxTemplate.vue'

export default {
	name: 'Males',
	mounted(){
	
	},
  components: {
    OuterBoxTemplate
  },
  data: function(){
    return {
      cards : [
        {
          cardName: 'Biscotti',
          mainImage: 'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/biscotti/biscotti.jpg',
          sideImages: [
            'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/biscotti/biscotti_1.jpg',
            'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/biscotti/biscotti_2.jpg',
            'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/biscotti/biscotti_3.jpg'
          ]
        },
        {
          cardName: 'Porcini',
          mainImage: 'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/porcini/porcini_3.jpg',
          sideImages: [
            'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/porcini/porcini_1.jpg',
            'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/porcini/porcini_2.jpg',
            'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/porcini/porcini.jpg'
          ]
        },
        {
          cardName: 'Griffin',
          mainImage: 'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/griffin/griffin.jpg',
          sideImages: [
            'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/griffin/griffin.jpg',
            'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/griffin/griffin_2.jpg',
            'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/griffin/griffin_3.jpg'
          ]
        },
        {
          cardName: 'Harquin',
          mainImage: 'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/harquin/harquin.jpg',
          sideImages: [
            'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/harquin/harquin_1.jpg',
            'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/harquin/harquin_2.jpg',
            'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/harquin/harquin_3.jpg'
          ]
        },
        {
          cardName: 'Crostini',
          mainImage: 'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/crostini/crostini.jpg',
          sideImages: [
            'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/crostini/crostini_1.jpg',
            'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/crostini/crostini_2.jpg',
            'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/crostini/crostini_3.jpg'
          ]
        },
        {
          cardName: 'Anzu',
          mainImage: 'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/anzu/anzu-4.jpeg',
          sideImages: [
            'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/anzu/anzu-2.jpeg',
            'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/anzu/anzu-1.jpeg',
            'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/anzu/anzu-3.jpeg'
          ]
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
