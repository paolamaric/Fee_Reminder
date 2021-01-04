<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/Registration">Register</router-link> |
    <router-link to="/Login">Sign up</router-link>
    <a href="#" @click="logout()" class="nav-link">Logout</a>
  </div>
</template>

<script>
export default {
    name: 'FeeNavbar'
}
</script>