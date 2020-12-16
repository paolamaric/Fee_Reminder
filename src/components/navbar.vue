<template>
  <!-- <nav class="navbar navbar-light bg-light">
    <div class="navbar-nav">
      <router-link class="navbar-brand" to="/">Home</router-link> | 
      <router-link class="nav-item nav-link" to="/about">About</router-link> |
      <router-link to="/Registration">Register</router-link>
    </div>
  </nav> -->

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">Home</router-link>
    <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> -->
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">  
        <router-link class="nav-item nav-link" to="/about">About</router-link> 
        <router-link class="nav-item nav-link" to="/Registration">Register</router-link> 
        <li class="nav-item dropdown" href="#">
          <a href="#" class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Login
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <button class="dropdown-item" data-toggle="modal" data-target="#clientLoginModal">
                as Client
            </button>
            <button class="dropdown-item" data-toggle="modal" data-target="#hostLoginModal">
                as Host
            </button>
          </div>
        </li>
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
                              <button type="button" @click="signup" class="btn btn-primary btn-sm mt-3">Submit</button>
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
                              <button type="button" @click="signup" class="btn btn-primary btn-sm mt-3">Submit</button>
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
  </nav>
</template>

<script>
export default {
    name: 'FeeNavbar'
}
</script>