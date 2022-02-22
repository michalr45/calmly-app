<template>
  <nav class="default-nav">
    <div>
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'playlists' }">Playlists</router-link> |
      <router-link :to="{ name: 'embedded' }">Embedded sounds</router-link> |
      <a href="/accounts/logout/">Logout</a>
    </div>
  </nav>
  <!--  mobile nav  -->
  <div class="mobile-nav">
  <a class="menu-icon" @click="showMenu()">
    <font-awesome-icon :icon="['fas', 'bars']" />
  </a>
  <nav>
    <ul>
      <li><router-link to="/" @click="showMenu()">Home</router-link></li>
      <li><router-link :to="{ name: 'playlists' }" @click="showMenu()">Playlists</router-link></li>
      <li><router-link :to="{ name: 'embedded' }" @click="showMenu()">Embedded sounds</router-link></li>
      <li><a href="/accounts/logout/" @click="showMenu()">Logout</a></li>
    </ul>
  </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    showMenu() {
      const nav = document.querySelector('.mobile-nav');
      const menu = document.querySelector('.mobile-nav nav');
      if (menu.style.display === 'block') {
        menu.style.display = 'none';
        nav.style.position = 'relative';
        nav.style.backgroundColor = 'transparent';
      } else {
        menu.style.display = 'block';
        nav.style.position = 'fixed';
        nav.style.backgroundColor = 'RGBA(3,131,115, 0.94)';
      }
    }
  }
}
</script>

<style scoped>

  .menu-icon{
    display: none;
    font-size: 40px;
    width: 100%;
    left: 0;
    text-align: center;
  }

  .mobile-nav{
    overflow: hidden;
    height: 100%;
    transition: 0.5s;
    width: 100%;
    left: 0;
  }

   .mobile-nav nav{
     display: none;
     height: 100%;
   }

  .mobile-nav nav ul{
    padding: 0;
    width: 100%;
  }

  .mobile-nav nav ul li{
    position: relative;
    list-style: none;
    width: 100%;
    margin-top: 50px;
    text-align: center;
  }

@media (max-width: 600px) {

  .default-nav{
    display: none;
  }

  .menu-icon{
    display: inline
  }
}

</style>