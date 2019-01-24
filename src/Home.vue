<template>
  <div class="container" id="home">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/App">Skills</router-link>
        <router-link to="/About/Dude">About</router-link>
      </nav>
    <router-view/>
    <p>Click in the nav links to change pages</p>
  </div>
</template>

<script>
import App from './components/App.vue'

export default {
  name: 'Home',
  components: {App}
}
</script>

<style>
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css');

body {
  background-color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  display: grid; 
  grid-template-rows: auto;
  justify-items: center;
  padding-top: 50px;
}

nav {
  padding: 20px 20px 20px 0;
}

nav a {
  padding: 10px;
  text-decoration: none;
  background: #fff;
  border-radius: 3px;
  color: rgb(0, 110, 255);
  font-weight: bold;
  margin-right: 15px;
}


</style>
