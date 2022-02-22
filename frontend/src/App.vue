<template>
  <div class="title">
    <h1>Welcome to <span>Calmly</span></h1>
  </div>
  <div id="nav">
    <Navbar></Navbar>
  </div>
  <router-view/>
</template>

<script>
import Navbar from "@/components/Navbar";
  export default {
    name: 'App',
    components: {
      Navbar
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}

.title{
  text-align: center;
  padding: 15px;
}

.title span{
  color: white;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 20px;

    &.router-link-exact-active, a {
      color: white;
    }
  }
}

</style>
