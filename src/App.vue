<template>
  <guest-navbar></guest-navbar>
</template>

<script>
import GuestNavbar from './components/GuestNavbar.vue'

export default {
  name: 'App',
  components: {
    GuestNavbar
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
