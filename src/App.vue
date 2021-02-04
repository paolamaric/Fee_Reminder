<template>
  <div id="app">
    <fee-navbar></fee-navbar>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
  import store from '@/store';
  import FeeNavbar from './components/navbar.vue';
  import { firebase } from '@/firebase';
  import router from '@/router';
  export default {
    name:'App',
    components: {
      FeeNavbar
      },
    data () {
      return {
        store,
        };
      }
  }
</script>