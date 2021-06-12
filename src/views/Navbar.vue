<template>
  <div id="navbar">
    <nav class="navigation">
      <ul>
        <li class="headerlogo">
            <img src="https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/logos/la_contessa_logo.png" alt="">
        </li>
        <div class="left">
          <div class="links">
            <li><a href="#" v-scroll-to="'#landing'">Home</a></li>
            <li><a href="#" v-scroll-to="about">About</a></li>
            <li><a href="#" v-scroll-to="males">Males</a></li>
            <li><a href="#" v-scroll-to="females">Females</a></li>
            <li><a href="#" v-scroll-to="shows">Shows</a></li>
            <li><a href="#" v-scroll-to="contact">Contact</a></li>
          </div>
          <div class="socmed">
            <li><a href="https://www.facebook.com/lacontessacattery/" target="_blank"><i class="fa fa-facebook-official"></i></a></li>
            <li><a href="https://www.instagram.com/cleotheexplorer/" target="_blank"><i class="fa fa-instagram"></i></a></li>
            <li><a href="mailto:cleotheexplorer@gmail.com" target="_blank"><i class="fa fa-gmail"></i></a></li>
          </div>
        </div>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data: function(){
    return {
      about: {
        el: '#about',
        duration: 500,
        offset: 250,
        onStart: null,
        onDone: null,
        onCancel: null,
      },
      males: {
        el: '#males',
        duration: 500,
        offset: -100,
        onStart: null,
        onDone: null,
        onCancel: null,
      },
      females: {
        el: '#females',
        duration: 500,
        offset: -100,
        onStart: null,
        onDone: null,
        onCancel: null,
      },
      shows: {
        el: '#shows',
        duration: 500,
        offset: -100,
        onStart: null,
        onDone: null,
        onCancel: null,
      },
      contact: {
        el: '#contact',
        duration: 500,
        offset: -50,
        onStart: null,
        onDone: null,
        onCancel: null,
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .headerlogo > img {
    object-fit: contain;
    display: inline-block;
    width: 200px;
    height: auto;
  }

  .navigation{
    /* overflow: hidden; */
    position: fixed;
    top: 0;
    width: var(--navbar-width);
    height: 90px;
    background-color:white;
    z-index: 1;
    -webkit-box-shadow: 0px 1px 1px #C0C0C0;
    -moz-box-shadow: 0px 1px 1px #C0C0C0;
    box-shadow: 0px 1px 1px #C0C0C0;
  }

  .links {
    display: inline-block;
  }

  .socmed {
    display: inline;
  }


  .left {
    float: right;
    margin-right: 20px;
    vertical-align: middle;
  }

  .navigation ul{
    margin: 0px;
    padding :0px;
  }

  .navigation ul li{
    list-style-type: none;
    display: inline-block;
    font-size: 2em;
    padding: 20px 10px 10px 20px;
  }

  .navigation ul li a{
    color:black;
  }

  .navigation li a:hover{
    color:#DCDCDC;
  }

  @media(max-width: 1200px) {
    .links {
      display: none;
    }
	}

  @media(max-width: 768px) {
    .headerlogo > img {
      margin-top: 5px;
      width: 130px;
    }

    .fa {
      font-size: 0.8em;
    }
  }

  @media(max-width: 375px) {
    .navigation {
      overflow: hidden;
    }
    
    .headerlogo > img {
      margin-top: 10px;
      width: 100px;
    }

    .fa {
      font-size: 0.5em;
    }
  }



</style>
