<template>
	<div class="horizontal-grid">
		<figure class="grid-item" v-for="(image, index) in images" v-bind:key="index">
			<img v-bind:src="image" v-on:click="display_modal(image)">
		</figure>
	</div>
</template>

<script>
export default {
	name: 'HorizontalGrid',
	props: {
		images: Array
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

	.horizontal-grid {
		width:100%;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
		grid-gap: var(--grid-margin);
	}

	.grid-item img {
		object-fit: cover;
		max-width: 300px;
		max-width: 100%;
		min-height: 250px;
		max-height: 100%;
	}

	img:hover{
		opacity: 0.7;
	}


	@media(max-width: 1440px) {
		.grid-item img {
			object-fit: cover;
			max-width: 300px;
			max-width:100%;
			min-height: 200px;
		}
  }


	@media(max-width: 1100px) {
		.grid-item img {
			object-fit: cover;
			max-width: 300px;
			max-width:100%;
			min-height: 150px;
		}
  }

  @media(max-width: 768px) {
		.grid-item img {
			object-fit: cover;
			max-width: 300px;
			max-width:100%;
			min-height: 90px;
		}


  }

  @media(max-width: 375px) {

  }



</style>
