<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/HomeClient">Home Client</router-link>
    <router-link class="navbar-brand" to="/HomeHost">Home Host</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> 
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
      <ul class="navbar-nav pt-2 ml-auto mr-1">
        <li class="nav-item ml-auto mr-1">
          <router-link class="nav-link" v-if="store.currentUser != null" :to="'/users/' + store.currentUser">
            {{store.currentUser}}
          </router-link>  
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
          // this.$router.replace({ name: 'Login' });
          window.location = 'Login';
      }); 
    },
    },
};
</script>