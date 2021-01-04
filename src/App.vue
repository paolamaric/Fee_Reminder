<template>
  <div id="app">
    <fee-navbar></fee-navbar>
    <router-view/>
  </div>
</template>

<script>
  import FeeNavbar from './components/navbar.vue';
  import { firebase } from '@/firebase';

  firebase.auth().onAuthStateChanged ((user) => {
    if (user) {
      console.log("***", user.email);
    }
    else {
      console.log("No user");
    }
  });

 
  export default {
    name:'App',
    components: {
      FeeNavbar
    },
  
  methods: {
    logout() {
      firebase.auth().signOut();
    }
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