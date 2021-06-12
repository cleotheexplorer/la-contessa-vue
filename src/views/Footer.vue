<template>
	<div id="footer">
    <footer>
      <div class="footer-contact">

        <div class="item-1">
          <img v-bind:src="logo">
          <div class="social-media">
            <a href="https://www.facebook.com/lacontessacattery/" target="_blank"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
            <a href="https://www.instagram.com/cleotheexplorer/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="mailto:cleotheexplorer@gmail.com" target="_blank"><i class="fa fa-gmail"></i></a>
          </div>
        </div>

      </div>

    </footer>
  </div>
</template>

<script>

export default {
  components: { 

	},
  name: 'Footer',
  data: function (){
    return {
      logo: 'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/logos/Full_Gold_Landscape.png',
      cat1: 'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/revised_cats/Cats-01-min.png',
			cat2: 'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/revised_cats/Cats-02-min.png',
			cat3: 'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/revised_cats/Cats-03-min.png',
			cat4: 'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/revised_cats/Cats-04-min.png',
			cat5: 'https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/revised_cats/Cats-05-min.png',
    }
  }
}
</script>

<style scoped>

  footer {
    margin-top: var(--grid-margin);
    font-size: var(--font-size-form);
    background-color:#FFF0F5;
    border: 1px solid #FFE4E1;
    padding: 2em;
    height: auto;
  }

  footer a{
    display: inline;
    text-decoration: none;
    color:black;
    list-style-type: none;
    padding: 0px 0.8em;
  }

  .cat {
    width: 17%;
  }

  .footer-contact {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .item-1 {
    text-align: center;
    justify-self: stretch;
    flex-grow: 1;
  }

  .item-1 > img {
    width: 45%;
    text-align: center;
  }

  .item-2 {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .social-media > a {
    font-size: 4em;
  }

  @media(max-width: 1100px) {
    footer a {
      padding: 0px 0.5em;
    }

    .social-media > a {
      font-size: 2em;
    }

    .item-1 > img {
      width: 50%;
      text-align: center;
    }

	}

	@media(max-width: 768px) {
    footer a {
      padding: 0px 0.3em;
    }

    .social-media > a {
      font-size: 1.5em;
    }
	}

	@media(max-width: 375px) {
    footer a {
      padding: 0px 0.3em;
    }

    .social-media > a {
      font-size: 1.5em;
    }
	}



</style>
