<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light pt-3"> 
    <ul class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <router-link v-if="!userProfile.name" class="navbar-brand" to="/">Home</router-link>
      <router-link v-if="userProfile.name" class="navbar-brand" to="/home">Home</router-link>
      <!-- <router-link class="navbar-brand" to="/HomeHost">Home Host</router-link> -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <ul class="navbar-nav">  
        <router-link class="nav-item nav-link" to="/about">About</router-link> 
        <li v-if="!userProfile.name" class="nav-item">  
          <router-link class="nav-item nav-link" to="/registration">Register</router-link> 
        </li>
        <li v-if="!userProfile.name" class="nav-item">
          <router-link  to="/login" class="nav-link">Login</router-link>
        </li>
        <li v-if="userProfile.name" class="nav-item" >
          <a href="#" @click="logout()" class="nav-link">Logout</a>
        </li>
      </ul>
      <ul class="navbar-nav pt-2 ml-auto mr-1">
        <li class="nav-item ml-auto mr-1">
          <router-link class="nav-link" v-if="userProfile.name != null" :to="'/users/' + userProfile.name">
            {{userProfile.name}}
          </router-link>  
        </li>
      </ul>
    </ul>
  </nav>
</template>

<script>
import { firebase } from '@/firebase';
import store from '@/store';
import auth from '@/firebase';
import { mapState } from 'vuex';

export default {
    name: 'FeeNavbar',
    data () {
      return {
        store,
      };
    },
    computed: {
      ...mapState(['userProfile'])
    },
    methods: {
      logout() {
        this.$store.dispatch('logout');
        },
      }
    // methods: {
    //   logout() {
    //     firebase.auth().signOut().then(() => {
    //       // this.$router.replace({ name: 'Login' });
    //       window.location = 'login';
    //   }); 
    // },
    // },
  };
</script>