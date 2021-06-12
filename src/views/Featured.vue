<template>
	<div id="featured">
    <h1>Featured In</h1>
    <h2>Animal scene</h2>
    <div class="frame">
      <iframe v-bind:src="article_url"></iframe>
      <div class="right">
        <button><a href="https://animalscene.ph/2021/03/01/fur-and-a-snub-nose-loving-the-exotic-shorthair/" target="_blank">Read more</a></button>
      </div>


    </div>
	</div>
</template>

<script>

export default {
  components: { 

	},
  name: 'Featured',
  data: function (){
    return {
      article_url: 'https://animalscene.ph/2021/03/01/fur-and-a-snub-nose-loving-the-exotic-shorthair/'
    }
  }
}
</script>

<style scoped>


  iframe {
    width:99%;
    height:400px;
  }


  .frame {
    width: 100%;
  }

  h2 {
    text-align: center;
  }
  
  button {
    margin-right: 1em;
    padding: 10px;
  }

  a {
    color: white;
    padding: 0px;
    margin: 0px;
  }

  .right {
    text-align: right;
  }

</style>
