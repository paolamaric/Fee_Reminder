<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">Home</router-link>
    <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> -->
    <ul class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul class="navbar-nav">  
        <router-link class="nav-item nav-link" to="/about">About</router-link> 
        <li v-if="!store.currentUser" class="nav-item">  
          <router-link class="nav-item nav-link" to="/Registration">Register</router-link> 
        </li>
        <li v-if="!store.currentUser" class="nav-item">
          <router-link  to="/login" class="nav-link">Login</router-link>
        </li>
        <li v-if="store.currentUser" class="nav-item" >
          <a href="#" @click="logout()" to="/logout" class="nav-link">Logout</a>
        </li>
      </ul>
    </ul>
  </nav>
</template>

<script>
import { firebase } from '@/firebase';
import store from '@/store';

export default {
    name: 'FeeNavbar',
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
    },
    },
};
</script>