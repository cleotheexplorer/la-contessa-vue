<template>
	<div id="about">
		<div class="logo-full">
			<img v-bind:src="logo_url">
		</div>
		<div class="flex-container">
			<div class="item-1">
				<h1>About Us</h1>
				<p>
						Hi! We are a small cageless CFA registered cattery in Manila specializing in tabbies and bicolor Exotic Shorthair cats. 	Our cats are family members and they live freely in our home. They are pedigreed and registered with the CFA system.
				</p>
			</div>

			<div class="item-2">
				<img class="artbox" v-bind:src="artbox"/>
			</div>
		</div>

		<div class="wallpaper">
			<img v-bind:src="background"/>
		</div>

  </div>
</template>

<script>

export default {
  components: { 

	},
  name: 'About',
  data: function (){
    return {
			background: 'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/revised_cats/Pattern_3-min.jpg',
			artbox: 'https://res.cloudinary.com/do75dapnh/image/upload/v1614690337/la-contessa/revised_cats/Art_Box_No_Space.png',
			logo_url: 'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/logos/Full_Gold_Landscape.png'
    }
  }
}
</script>

<style scoped>

	#about{
		margin: var(--grid-margin) 0px;
	}

	.logo-full {
		font-size: 0px;
    letter-spacing: 0px;
		padding: 30px 0px; 
    word-spacing: 0px;
		background-color:#FFF0F5;
		border: 1px solid #FFE4E1;
		margin: auto;
		text-align: center;
	}

	h1 {
		font-size: var(--font-size-about);
	}


	.logo-full img {
		width:40%;
	}

	p {
		display: block;
		margin:0px;
		padding: 0px 1em 0px 0em;
		font-size: var(--font-size);
	}

	.flex-container {
		margin: 2em 0px;
		padding: 2em;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.item-1 > p {
		margin-left:2em;
	}

	.item-2 {
		margin: 1em 0px;
		text-align: center;
	}

	.wallpaper img{
		width: 100%;
	}

	.artbox {
		width: 100%;
		text-align: center;
	}


	@media(max-width: 1100px) {
		.flex-container {
			padding: 1em;
		}

		.logo-full img {
			width:50%;
		}

	}

	@media(max-width: 768px) {
		.flex-container {
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		
		.artbox {
			width: 95%;
			text-align: center;
		}

		.item-1 > p {
			margin-bottom:2em;
		}


	}

	@media(max-width: 375px) {
		.flex-container {
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}


</style>
