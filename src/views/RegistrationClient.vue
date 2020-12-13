<template>
<div class="container">
    <h1 class="well">Registracija</h1>
	<div class="col-lg-12 well">
	<div class="row">
				<form>
					<div class="col-sm-12">
						<div class="row">
							<div class="col-sm-6 form-group">
								<label>Full name</label>
								<input type="text" 
								v-model="name"
								placeholder="Enter e.g. Marko Markovic" class="form-control">
							</div>
						</div>

						<div class="form-group">
						<label>Email</label>
						<input type="email" 
						v-model="email"
						placeholder="Enter Email Address Here.." class="form-control">
					</div>					
						<div class="form-group">
							<label>Address</label>
							<input type="text" 
							v-model="adress"
							placeholder="e.g. Zagrebacka ulica" class="form-control">
						</div>	
						<div class="row">
							<div class="col-sm-4 form-group">
								<label>City</label>
								<input type="text" 
								v-model="city"
								placeholder="e.g. Pula" class="form-control">
							</div>	
								
							<div class="col-sm-4 form-group">
								<label>Zip Code</label>
								<input type="text" 
								v-model="zip"
								placeholder="52100" class="form-control">
							</div>		
						</div>
						<div class="row">
							<div class="col-sm-6 form-group">
								<label>Password</label>
								<input type="text" 
								v-model="password"
								placeholder="Enter Your Password" class="form-control">
							</div>	
							</div>
							<div>
							<div class="col-sm-6 form-group">
								<label>Repeat Password</label>
								<input type="text" 
								v-model="passwordRepeat"
								placeholder="Retype Your Password" class="form-control">
							</div>		
						</div>	
						<div class="col-lg-8 align-self-baseline">						
					<button type="button" @click="signup" class="btn btn-primary btn-xl js-scroll-trigger">Submit</button>	
					<div class="col-lg-8 align-self-baseline">
                      </div>
                    </div>			
					</div>
				</form> 
				</div>
	</div>
	</div>
</template>

<script>
import { firebase } from '@/firebase.js';

export default {
	name: "RegistrationClient",
	data() {
		return {
			name: "",
			email: "",
			adress: "",
			city: "",
			zip: "",
			password: "",
			passwordRepeat: "",
		};
	},
	methods: {
		signup() {
			firebase
			.auth()
			.createUserWithEmailAndPassword(this.email, this.password)
			.then(function() {
				console.log('Uspjesna registracija');
			})
			.catch(function(error){
				console.error("Došlo je do greške", error);
			})
			console.log('Nastavak');
		},
	},
};
</script>