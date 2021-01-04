<template>
  <form>
    <p class="h4 text-center mb-4">Sign in</p>
    <label for="defaultFormLoginEmailEx" class="grey-text">Your email</label>
    <input 
        type="email" 
        v-model="username"
        id="defaultFormLoginEmailEx" 
        class="form-control"/>
    <br/>
    <label for="defaultFormLoginPasswordEx" class="grey-text">Your password</label>
    <input 
        type="password" 
        v-model="password"
        id="defaultFormLoginPasswordEx" 
        class="form-control"/>
    <div class="text-center mt-4">
      <button class="btn btn-indigo" type="button" @click="login()" >Login</button>
    </div>
  </form>
</template>

<script>
import { firebase } from '@/firebase.js';
    export default {
        name: "Login",
        data() {
            return {
                username: "",
                password: "",
            };
        },
        methods: {
            login () {
                console.log("login..." + this.username);

                firebase
                .auth()
                .signInWithEmailAndPassword(this.username, this.password)
                .then((result) => {
                    console.log("Uspješna prijava", result);

                    this.$router.replace({name: "Home"});

                })
                .catch(function(e) {
                    console.error('Greška', e);
                });

            },
            
        },
    }
</script>

