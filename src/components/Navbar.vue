<template>
    <nav class="navbar-box">
      <router-link to="/" class="navbar-box__element">
        NOSOTROS
      </router-link> |
      <router-link to="/login" class="navbar-box__element">
        INGRESAR
      </router-link>
    </nav>
    <router-view/>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style scoped>
.navbar-box {
  height: 3rem;
  background-color: #7EFFDB;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  width: 100%;
}

.navbar-box__element {
  padding: 12px 24px;
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;
  color: black;
}
</style>