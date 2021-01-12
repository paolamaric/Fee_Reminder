<template>
  <div id="app">
    <fee-navbar></fee-navbar>
    <router-view/>
  </div>
</template>

<script>
  import store from '@/store';
  import FeeNavbar from './components/navbar.vue';
  import { firebase } from '@/firebase';
  import router from '@/router';

  firebase.auth().onAuthStateChanged ((user) => {
    if (user) {
      console.log("***", user.email);
      store.currentUser = user.email;
      } 
    else {
    //   console.log('No user');
    //   store.currentUser = user.email;

    // if(router.name !== 'Login'){
    //   router.push({ name: 'Login' });
    // }
      // store.currentUser = 0;
    }
    // let userName = store.currentUser;
    // console.log("userName = " + userName);
  });


  export default {
    name:'App',
    components: {
      FeeNavbar
    },
    data () {
      return {
        store,
      };
    },
    methods: {
      logout() {
        firebase.auth().signOut().then(() => {
          this.$router.replace({ name: 'Login' });
      });
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
