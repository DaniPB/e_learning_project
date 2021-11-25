<template>
    <nav class="navbar-box">
      <router-link v-if="guestRoute" to="" class="navbar-box__element">
        NOSOTROS
      </router-link>
      <router-link v-if="guestRoute" to="/login" class="navbar-box__element">
        INGRESAR
      </router-link>    
      <router-link v-if="loggedInRoute" to="/" class="navbar-box__element">
        <img src="https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/74617575_2435660979814755_942643595171594240_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_eui2=AeEiZNiy6y0Me9J8Gy5v1M4l0qKT6PQPQmfSopPo9A9CZ-t0fQkwV2K_gGTTbdm1I9QZ-ArRUBGBUvXDnAMoJmyx&_nc_ohc=wkv26V86MVQAX-CfA4q&_nc_ht=scontent-bog1-1.xx&oh=af2e4af292735cd7516a85ac741a628b&oe=61C4B301" />
      </router-link>     
    </nav>

    <router-view></router-view>

</template>

<script>
export default {
    name: "GuestNavbar",
    computed: {
      loggedInRoute() {
        let currentPath = this.$route.path

        return currentPath === '/courses-dashboard' || currentPath === '/dashboard-roadmap'
      },
      guestRoute() {
        let currentPath = this.$route.path

        return currentPath === '/login' || currentPath === '/sign-up' || currentPath === '/home' || currentPath === '/'
      }
    }
}
</script>

<style scoped>
.navbar-box {
  height: 4.5rem;
  background-color: #7EFFDB;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  width: 100%;
  align-items: center;

}

.navbar-box__element {
  padding: 0 24px;
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
  color: black;
}

.navbar-box__element img {
  width: 50px;
  height: 50px;
  object-fit: contain;
  border-radius: 50%;
  margin: 0;
}

@media (min-width: 320px) {
  .navbar-box {
    height: 3.5rem;
  }

  .navbar-box__element {
    padding: 0px 8px;
    font-size: 14px;
  }
}

@media (min-width: 768px) {
  .navbar-box {
    height: 4.5rem;
  }

  .navbar-box__element {
    padding: 0px 24px;
    font-size: 20px;
  }
}

</style>