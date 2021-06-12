<template>
	<div id="females">
    <h1>Females</h1>
    <OuterBoxTemplate v-bind:cards="cards"/>
	</div>
</template>

<script>
import OuterBoxTemplate from '../components/OuterBoxTemplate.vue'
export default {
	name: 'Females',
	components: {
		OuterBoxTemplate
	},
	props: {

	},
	mounted(){
		
	},
	data: function(){
    return {
      cards : [
        {
          cardName: 'Cleo',
          mainImage: 'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/cleo/cleo.jpg',
          sideImages: [
           'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/cleo/cleo_1.jpg',
            'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/cleo/cleo-1.jpg',
            'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/cleo/cleo_3.jpg'
          ]
        },
        {
          cardName: 'Noriko',
          mainImage: 'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/noriko/noriko.jpg',
          sideImages: [
            'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/noriko/noriko_1.jpg',
						'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/noriko/noriko_2.jpg',
						'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/noriko/noriko_3.jpg'
          ]
        },
        {
          cardName: 'Cinnamon',
          mainImage: 'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/cinnamon/cinnamon.jpg',
          sideImages: [
            'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/cinnamon/cinnamon-2.jpg',
            'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/cinnamon/cinnamon-3.jpg',
						'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/cinnamon/cinnamon_3.jpg',
          ]
        },
        {
          cardName: 'Ponzu',
          mainImage: 'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/ponzu/ponzu2-min.jpeg',
          sideImages: [
            'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/ponzu/ponzu_1.jpg',
						'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/ponzu/ponzu_2.jpg',
						'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/ponzu/ponzu.jpg',
          ]
        },
        {
          cardName: 'Ume',
          mainImage: 'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/ume/ume7-min.jpeg',
          sideImages: [
            'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/ume/ume3-min.jpeg',
            'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/ume/ume5-min.jpeg',
            'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/ume/ume6-min.jpeg'
          ]
        },
        {
          cardName: 'Kaki',
          mainImage: 'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/kaki/kaki1-min.jpeg',
          sideImages: [
            'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/kaki/kaki6-min.jpeg',
            'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/kaki/kaki3-min.jpeg',
            'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/kaki/kaki-min.jpeg'
          ]
        }
      ]
    }
  }
}
</script>


<style scoped>



</style>
