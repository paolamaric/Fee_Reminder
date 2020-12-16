<template>
    <div id="layoutAuthentication" class="bg-primary" _ngcontent-ghc-c106="">
        <div id="layoutAuthentication_content" _ngcontent-ghc-c106="">
            <div class="container" _ngcontent-ghc-c118="">
                <div class="row justify-content-center" _ngcontent-ghc-c118="">
                    <div class="col-xl-5 col-lg-6 col-md-8 col-sm-11 mt-4" _ngcontent-ghc-c118="">
                        <div class="card text-center h-100" _ngcontent-ghc-c118="">
                            <div class="card-body px-5 pt-5 d-flex flex-column" _ngcontent-ghc-c118="">
                                <div _ngcontent-ghc-c118="">
                                    <div class="h3 text-primary font-weight-300" _ngcontent-ghc-c118=""> Create </div>
                                    <i class="fas fa-4x fa-users text-primary mb-4" ></i>
                                    <div>
                                        <button type="button" class="btn btn-primary btn-xl js-scroll-trigger" data-toggle="modal" data-target="#exampleModal">
                                            Register as a client
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Client Registration</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-lg-12 well">
                            <form>
                                <div class="row justify-content-center mt-3">
                                    <div class="col-sm-10 form-group">
                                        <label>Full name</label>
                                        <input type="text" v-model="name" placeholder="e.g. Marko Markovic" class="form-control">
                                    </div>
                                    <div class="col-sm-10 form-group">
                                        <label>Email</label>
                                        <input type="email" v-model="email" placeholder="e.g. xyz@gmail.com" class="form-control">
                                    </div>			
                                <div class="col-sm-10 form-group">
                                    <label>Address</label>
                                    <input type="text" v-model="adress" placeholder="e.g. Zagrebacka ulica" class="form-control">
                                </div>	
                                </div>
                                <div class="row">
                                    <div class="col-sm-6 form-group">
                                        <label>City</label>
                                        <input type="text" v-model="city" placeholder="e.g. Pula" class="form-control">
                                    </div>	
                                    <div class="col-sm-6 form-group">
                                        <label>Zip Code</label>
                                        <input type="number" v-model="zip" placeholder="52100" class="form-control">
                                    </div>
                                </div>
                                <div class="row justify-content-center mt-3">
                                    <div class="col-sm-10 form-group">
                                        <label>Password</label>
                                        <input type="password" minlength=6 v-model="password" placeholder="Enter Your Password" class="form-control" aria-describedby="passwordHelpBlock">
                                        <small id="passwordHelpBlock" class="form-text text-muted">
                                            Your password must be longer than 6 characters
                                        </small>
                                    </div>	
                                    <div class="col-sm-10 form-group">
                                        <label>Repeat Password</label>
                                        <input type="password" minlength=6 v-model="passwordRepeat" placeholder="Retype Your Password" class="form-control" aria-describedby="passwordHelpBlockRepeat">
                                        <small id="passwordHelpBlockRepeat" class="form-text text-muted">
                                            Repeat the pasword from the field above
                                        </small>
                                    </div>		
                                </div>					
                                <button type="button" @click="signup" class="btn btn-primary btn-lg js-scroll-trigger">Register</button>
                            </form> 
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-danger" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
        </div>
        <div id="layoutAuthentication_content" _ngcontent-ghc-c106="">
            <div class="container" _ngcontent-ghc-c118="">
                <div class="row justify-content-center" _ngcontent-ghc-c118="">
                    <div class="col-xl-5 col-lg-6 col-md-8 col-sm-11 mt-4" _ngcontent-ghc-c118="">
                        <div class="card text-center h-100" _ngcontent-ghc-c118="">
                            <div class="card-body px-5 pt-5 d-flex flex-column" _ngcontent-ghc-c118="">
                                <div _ngcontent-ghc-c118="">
                                    <div class="h3 text-primary font-weight-300" _ngcontent-ghc-c118=""> Create </div>
                                    <i class="fas fa-4x fa-user-tie text-primary mb-4" ></i>
                                    <div>
                                        <button type="button" class="btn btn-primary btn-xl js-scroll-trigger" data-toggle="modal" data-target="#exampleModal2">
                                            Register as a host
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="layoutAuthentication_footer" _ngcontent-ghc-c106="">
            <footer class="page-footer font-small bg-success pt-4 mt-5"  _ngcontent-ghc-c101="">
                <div class="container-fluid text-center text-md-left text-light"  _ngcontent-ghc-c101="">
                    <div class="row"  _ngcontent-ghc-c101="">
                        <div class="col-md-6 small"  _ngcontent-ghc-c101="">
                            <p>
                                Privacy Policy <br> Terms and conditions   
                            </p>
                        </div>
                    </div>
                    <div class="footer-copyright text-center py-3">© 2020 Copyright: YourWebsite.com
                    </div>
                </div>
            </footer>
        </div>
    <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel2">Host Registration</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-lg-12 well">
                            <form>
                                <div class="row justify-content-center mt-3">
                                    <div class="col-sm-10 form-group">
                                        <label>Full name</label>
                                        <input type="text" v-model="name" placeholder="e.g. Marko Markovic" class="form-control">
                                    </div>
                                    <div class="col-sm-10 form-group">
                                        <label>Email</label>
                                        <input type="email" v-model="email" placeholder="e.g. xyz@gmail.com" class="form-control">
                                    </div>			
                                    <div class="col-sm-10 form-group">
                                        <label>Address</label>
                                        <input type="text" v-model="adress" placeholder="e.g. Zagrebacka ulica" class="form-control">
                                    </div>	
                                    <div class="col-sm-10 form-group">
                                        <label>OIB</label>
                                        <input type="number" v-model="OIB" placeholder="0123456789" class="form-control">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6 form-group">
                                        <label>City</label>
                                        <input type="text" v-model="city" placeholder="e.g. Pula" class="form-control">
                                    </div>	
                                    <div class="col-sm-6 form-group">
                                        <label>Zip Code</label>
                                        <input type="number" v-model="zip" placeholder="52100" class="form-control">
                                    </div>
                                </div>
                                <div class="row justify-content-center mt-3">
                                    <div class="col-sm-10 form-group">
                                        <label>Password</label>
                                        <input type="password" minlength=6 v-model="password" placeholder="Enter Your Password" class="form-control" aria-describedby="passwordHelpBlock">
                                        <small id="passwordHelpBlock" class="form-text text-muted">
                                            Your password must be longer than 6 characters
                                        </small>
                                    </div>	
                                    <div class="col-sm-10 form-group">
                                        <label>Repeat Password</label>
                                        <input type="password" minlength=6 v-model="passwordRepeat" placeholder="Retype Your Password" class="form-control" aria-describedby="passwordHelpBlockRepeat">
                                        <small id="passwordHelpBlockRepeat" class="form-text text-muted">
                                            Repeat the pasword from the field above
                                        </small>
                                    </div>		
                                </div>					
                                <button type="button" @click="signup" class="btn btn-primary btn-lg js-scroll-trigger">Register</button>
                            </form> 
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-danger" data-dismiss="modal">Close</button>
                </div>
            </div>
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
            OIB: "",
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