<template>
	<div id="males">
    
    <div class="box-template">
      <ProfileCard 
        v-for="(card, index) in cards" v-bind:key="index"
        v-bind:cardName="card.cardName"
        v-bind:mainImage="card.mainImage"
        v-bind:sideImages="card.sideImages"
      />
    </div>
	</div>
</template>

<script>

import ProfileCard from '../components/ProfileCard.vue'

export default {
	name: 'OuterBoxTemplate',
	mounted(){
	
	},
  components: {
    ProfileCard
  },
  props: {
    cards: Array
  },

}
</script>


<style scoped>
  .box-template {
    font-family: "majallab";
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    grid-gap: var(--grid-margin);
    grid-template-rows: repeat(2, min-content);
  }

	@media(max-width: 1100px) {
    .box-template {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: var(--grid-margin);
    }
  }

  @media(max-width: 768px) {
    .box-template {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: var(--grid-margin);
    }
  }

  @media(max-width: 375px) {
    .box-template {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: var(--grid-margin);
    }
  }
</style>
