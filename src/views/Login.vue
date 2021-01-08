<template>
    <div id="layoutAuthentication" class="bg-primary" _ngcontent-ghc-c106="">
        <div id="layoutAuthentication_content" _ngcontent-ghc-c106="">
            <div class="container" _ngcontent-ghc-c118="">
                <div class="row justify-content-center" _ngcontent-ghc-c118="">
                    <div class="col-xl-5 col-lg-6 col-md-8 col-sm-11 mt-4" _ngcontent-ghc-c118="">
                        <div class="card text-center h-100" _ngcontent-ghc-c118="">
                            <div class="card-body px-5 pt-5 d-flex flex-column" _ngcontent-ghc-c118="">
                                <div _ngcontent-ghc-c118="">
                                    <div class="h3 text-primary font-weight-300" _ngcontent-ghc-c118=""> Login </div>
                                    <i class="fas fa-4x fa-users text-primary mb-4" ></i>
                                    <div>
                                        <button type="button" class="btn btn-primary btn-xl js-scroll-trigger" data-toggle="modal" data-target="#clientLoginModal">
                                            Login as a client
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <div class="modal fade" id="clientLoginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Client Login</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-lg-12 well">
                            <form>
                              <div class="form-group row">
                                <label class="col-form-label col-sm-2" for="emailLab">Email: </label>
                                  <div class="col-sm-10">
                                    <input type="email" id="emailLab" v-model="email" placeholder="Enter Email Address Here..." class="form-control">
                                  </div>
                              </div>
                              <div class="form-group mt-3 row">
                                <label class="col-form-label col-sm-2" for="passLab">Password: </label>
                                  <div class="col-sm-10"> 
                                    <input id="passLab" type="password" minlength=6 v-model="password" placeholder="Enter Your Password" class="form-control">
                                  </div>
                              </div>
                              <button type="button" @click="login()" class="btn btn-primary btn-sm mt-3">Login</button>
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
      <div id="layoutAuthentication" class="bg-primary" _ngcontent-ghc-c106="">
        <div id="layoutAuthentication_content" _ngcontent-ghc-c106="">
            <div class="container" _ngcontent-ghc-c118="">
                <div class="row justify-content-center" _ngcontent-ghc-c118="">
                    <div class="col-xl-5 col-lg-6 col-md-8 col-sm-11 mt-4" _ngcontent-ghc-c118="">
                        <div class="card text-center h-100" _ngcontent-ghc-c118="">
                            <div class="card-body px-5 pt-5 d-flex flex-column" _ngcontent-ghc-c118="">
                                <div _ngcontent-ghc-c118="">
                                    <div class="h3 text-primary font-weight-300" _ngcontent-ghc-c118=""> Login </div>
                                    <i class="fas fa-4x fa-user-tie text-primary mb-4" ></i>
                                    <div>
                                        <button type="button" class="btn btn-primary btn-xl js-scroll-trigger" data-toggle="modal" data-target="#hostLoginModal">
                                            Login as a host
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div class="modal fade" id="hostLoginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Host Login</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-lg-12 well">
                            <form>
                              <div class="form-group row">
                                <label class="col-form-label col-sm-2" for="emailLab">Email: </label>
                                <div class="col-sm-10">
                                  <input type="email" id="emailLab" v-model="email" placeholder="Enter Email Address Here..." class="form-control">
                                </div>
                              </div>
                              <div class="form-group mt-3 row">
                                <label class="col-form-label col-sm-2" for="passLab">Password: </label>
                                <div class="col-sm-10"> 
                                  <input id="passLab" type="password" minlength=6 v-model="password" placeholder="Enter Your Password" class="form-control">
                                </div>
                              </div>
                              <button type="button" @click="login()" class="btn btn-primary btn-sm mt-3">Login</button>
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
import store from '@/store.js';
    export default {
        name: "Login",
        data() {
            return {
                email: "",
                password: "",
            };
        },
        methods: {
            login () {
                console.log("login... " + this.email);

                firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then((result) => {
                    console.log("Uspješna prijava", result);
                })
                .catch(function(e) {
                    console.error('Greška', e);
                });

            },
            
        },
    }
</script>

