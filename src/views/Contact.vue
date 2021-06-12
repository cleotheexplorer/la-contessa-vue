<template>
	<div id="contact">

    <h1>Contact Us</h1>
    <p>* If you're interested in a kitten, or you have any inquiries please use the form below.</p>
    <form class="contact-form" method="POST" action="https://formspree.io/cleotheexplorer@gmail.com">
      
      <div class="item-1">
        <label for="n">Your name *</label>
          <br>
        <input type="text" placeholder=" John Doe" id="n" name="name" required>
          <br>
        <label for="e">Your email *</label>
          <br>
        <input type="email" placeholder=" test@mailbox.com" id="e" name="email" required>
          <br>
        <label for="c">Contact number *</label>
          <br>
        <input type="text" placeholder=" 0999-999-9999" id="c" name="contact_number" required>
          <br>
      </div>

      <div class="item-2">
        <label for="m">Message *</label>
          <br>
        <textarea name="message" placeholder=" Your message" id="m"></textarea>
          <br>
        <button type="submit">Send</button>
      </div>
    </form>

  </div>
</template>

<script>

export default {
  components: { 

	},
  name: 'Contact',
  data: function (){
    return {

    }
  }
}
</script>

<style scoped>

  #contact {
    padding: 3em 2em;

  }

  h2 {
    text-align: left;
  }

  .contact-form {
    display: flex;
    flex-direction: row;
    max-height: 400px; 
    height:100%; 
  }

  .contact-form > div {
    flex: 1; 
  }

  .contact-form label{
    font-size: var(--font-size);
  }

  .contact-form input{
    font-size: var(--font-size-form);
    width:96%;
    border: 1px solid grey;
    border-radius: 5px;
  }

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #D3D3D3;
    opacity: 1; /* Firefox */
    font-family:'Amiri'
  
  }

  .contact-form textarea {
    font-size: var(--font-size-form);
    height: 7vw;
    border: 1px solid grey;
    border-radius: 5px;
    width:96%;
  }

  .item-2 {
    margin:0;
  }

  @media(max-width: 1100px) {

    #contact p {
      font-size: 1.2em;
    }


    .contact-form label{
      font-size: 1.5em;
    }
	}

	@media(max-width: 768px) {
    .contact-form {
      display: flex;
      flex-direction: column;
      max-height: 400px; 
      height:100%; 
    }

	}

	@media(max-width: 375px) {
    .contact-form {
      display: flex;
      flex-direction: column;
      max-height: 400px; 
      height:100%; 
    }
	}

</style>
