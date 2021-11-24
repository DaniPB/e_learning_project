<template>
  <div class="main-container">
    <navbar></navbar>
    <h2>Mujeres en STEM</h2>
  </div>  
</template>

<script>
import Navbar from './Navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar
  }
}
</script>

<style scoped>
.main-container {
  background: url("https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  height: 100%; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.main-container h2 {
  font-size: 56px;
  color: white;
  text-align: center;
  padding: 22% 0;
  margin: 0;
}


@media (min-width: 320px) {
  /* .tablet\:text-center { text-align: center } */
  .main-container h2 {
    padding: 102% 0;
    font-size: 37px;
  }
}

@media (min-width: 480px) {
  /* .tablet\:text-center { text-align: center } */
  .main-container h2 {
    padding: 62% 0;
  }
}

@media (min-width: 640px) {
  /* .tablet\:text-center { text-align: center } */
  .main-container h2 {
    padding: 50% 0;
  }
}

@media (min-width: 768px) {
  .main-container h2 {
    padding: 64% 0;
  }
}

@media (min-width: 1024px) {
  /* .laptop\:text-center { text-align: center } */
  .main-container h2 {
    padding: 66% 0;
  }
}

@media (min-width: 1280px) {
  /* .desktop\:text-center { text-align: center } */
  .main-container h2 {
    padding: 26% 0;
  }
}
</style>
