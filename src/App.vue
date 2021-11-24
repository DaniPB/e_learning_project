<template>
  <navbar/>
  <home/>
</template>

<script>
import Home from './components/Home.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Home,
    Navbar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nunito');

#app {
  font-family: Nunito;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

body {
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>
