<template>
	<div id="shows">
    <h1>Shows</h1>
    <OuterBoxTemplate v-bind:cards="cards"/>
	</div>
</template>

<script>

import OuterBoxTemplate from '../components/OuterBoxTemplate.vue'

export default {
	name: 'Shows',
	mounted(){
	
	},
  components: {
    OuterBoxTemplate
  },
  data: function(){
    return {
      cards : [
        {
          cardName: 'Best Cat',
          mainImage: 'https://res.cloudinary.com/do75dapnh/image/upload/v1552830170/la-contessa/shows/porky_trophy-min.jpg',
          sideImages: [
            'https://res.cloudinary.com/do75dapnh/image/upload/v1552830170/la-contessa/shows/porky_judge_3-min.jpeg',
            'https://res.cloudinary.com/do75dapnh/image/upload/v1552830170/la-contessa/shows/trophy1.JPG',
            'https://res.cloudinary.com/do75dapnh/image/upload/v1552830170/la-contessa/shows/porky_judge_4-min.jpeg'
          ]
        },
        {
          cardName: '2nd Best Cat',
          mainImage: 'https://res.cloudinary.com/do75dapnh/image/upload/v1552830170/la-contessa/shows/harquin_trophy_2-min.jpg',
          sideImages: [
            'https://res.cloudinary.com/do75dapnh/image/upload/v1552830170/la-contessa/shows/harquin_judge_2-min.jpeg',
            'https://res.cloudinary.com/do75dapnh/image/upload/v1552830170/la-contessa/shows/trophy2.JPG',
            'https://res.cloudinary.com/do75dapnh/image/upload/v1552830170/la-contessa/shows/harquin_trophy-min.JPG'
          ]
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
