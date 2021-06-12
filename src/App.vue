<template>
  <div id="app">
    <Navbar/>
    <Landing/>
    <About/>
    <Males/>
    <Females/>
    <Shows/>
    <Featured/>
    <Contact/>
    <Footer/>
    <Modal/>
    
  </div>
</template>

<script>
import Navbar from './views/Navbar.vue';
import Landing from './views/Landing.vue';
import About from './views/About.vue';
import Males from './views/Males.vue';
import Females from './views/Females.vue';
import Shows from './views/Shows.vue';
import Featured from './views/Featured.vue';
import Contact from './views/Contact.vue';
import Footer from './views/Footer.vue';
import Modal from './components/Modal.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Landing,
    About,
    Males,
    Females,
    Shows,
    Contact,
    Footer,
    Modal,
    Featured
  }
}
</script>

<style>
  @import './assets/css/variables.css';
  @import './assets/css/main.css';
  @import './assets/css/fontface.css';
</style>
