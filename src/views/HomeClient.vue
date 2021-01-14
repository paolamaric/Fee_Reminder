<template>
    <div class="container-fluid">
        <div class="row my-4">
            <div class="col-2 p-0">
                <div class="col-12">
                    <a href="" class="card1" data-toggle="modal" data-target="#InvoiceModal"> 
                        <span>
                            <span>
                                <span>
                                    <i class="fas fa-5x fa-file-contract text-primary mb-4"></i>
                                    <hr>
                                    <h5> Create New Bill </h5>
                                </span>
                            </span>
                        </span>
                    </a>
                </div>
            </div>
            <div class="col-2 p-0">
                <div class="col-12">
                    <a href="" class="card1"> 
                        <span>
                            <span>
                                <span>
                                    <i class="fas fa-5x fa-book img-fluid text-primary mb-4"></i>
                                    <!-- <img src="/img/PaidHistory.jpeg"> -->
                                    <hr>
                                    <h5> History of Paid Bills </h5>
                                </span>
                            </span>
                        </span>
                    </a>
                </div>
            </div>
            <div class="col-2 p-0">
                <div class="col-12">
                    <a href="" class="card1"> 
                        <span>
                            <span>
                                <span>
                                    <i class="fas fa-5x fa-list-alt img-fluid text-primary mb-4"></i>
                                    <!-- <img src="/img/Bill.jpeg"> -->
                                    <hr>
                                    <h5> List of Upcoming Bills </h5>
                                </span>
                            </span>
                        </span>
                    </a>
                </div> 
            </div>
            <div class="col-2 p-0">
                <div class="col-12">
                    <a href="" class="card1" data-toggle="modal" data-target="#Category"> 
                        <span>
                            <span>
                                <span>
                                    <i class="fas fa-5x fa-user-cog img-fluid text-primary mb-4"></i>
                                    <!-- <img src="/img/Bill_Categories.jpeg"> -->
                                    <hr>
                                    <h5> Manage Bill Categories </h5>
                                </span>
                            </span>
                        </span>
                    </a>
                </div>
            </div>
            <div class="col-2 p-0">
                <div class="col-12">
                    <a href="" class="card1"> 
                        <span>
                            <span>
                                <span>
                                    <i class="fas fa-5x fa-chart-pie img-fluid text-primary mb-4"></i>
                                    <!-- <img src="/img/Reports.jpeg"> -->
                                    <hr>
                                    <h5> Future/Past Monthly Exspense Reports </h5>
                                </span>
                            </span>
                        </span>
                    </a>    
                </div>
            </div>
            <div class="col-2 p-0">
                <div class="col-12">
                    <a href="" class="card1"> 
                        <span>
                            <span>
                                <span>
                                    <i class="fas fa-5x fa-folder-open img-fluid text-primary mb-4"></i>
                                    <!-- <img src="/img/Export.jpeg"> -->
                                    <hr>
                                    <h5> Export App Data to File </h5>
                                </span>
                            </span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
        
        <div class="modal fade" id="InvoiceModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title" id="exampleModalLabel"><b>Create New Invoice</b></h3>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"></button>
                        <h5 class="modal-title" id="exampleModalLabel">Create New Invoice</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-lg-12 well">
                                <form>
                                <div class="form-group row">
                                    <label class="col-form-label col-sm-3" for="emailLab">To: </label>
                                    <div class="col-sm-9">
                                        <input type="email" id="emailLab" v-model="email" placeholder="Enter Client Name Here..." class="form-control">
                                    </div>
                                </div>
                                <div class="form-group mt-3 row">
                                    <label class="col-form-label col-sm-3" for="passLab">Bill name: </label>
                                    <div class="col-sm-9"> 
                                        <input id="passLab" type="password" minlength=6 v-model="password" placeholder="e.g. Membership fee" class="form-control">
                                    </div>
                                </div>
                                <div class="form-group mt-3 row">
                                    <label class="col-form-label col-sm-3" for="passLab">Bill amount: </label>
                                    <div class="col-sm-9"> 
                                        <input id="passLab" type="password" minlength=6 v-model="password" placeholder="e.g. 150,00 kn" class="form-control">
                                    </div>
                                </div>
                                <button type="button" class="btn btn-secondary btn-sm mt-3">Mark Paid</button>
                                <button type="button" class="btn btn-primary btn-sm mt-3">Add Invoice</button>
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

 <div class="modal fade" id="Category" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title" id="exampleModalLabel"><b>Create   Category</b></h3>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-lg-12 well">
                                <form>
<div class="form-group mt-3 row">
    <label class="col-form-label col-sm-3" for="passLab">Category: </label>
<div class="col-sm-9"> 
  <button class="col-form-label col-sm-3" for="passLab" type="button" minlength=6 id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Choose Category
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" >
    <a class="dropdown-item" href="#">Membership fees</a>
    <a class="dropdown-item" href="#">Utilities</a>
    <a class="dropdown-item" href="#">Loans</a>
    <a class="dropdown-item" href="#">Other</a>
  </div>
</div>

  </div>

                                <div class="form-group mt-3 row">
                                    <label class="col-form-label col-sm-3" for="passLab">Category name: </label>
                                    <div class="col-sm-9"> 
                                        <input id="passLab" type="password" minlength=6 v-model="password" placeholder="e.g. Odbojkaški klub" class="form-control">
                                    </div>
                                </div>

                                <div class="form-group mt-3 row">
    <label class="col-form-label col-sm-3" for="passLab">Repeat: </label>
<div class="col-sm-9"> 
  <button class="col-form-label col-sm-3" for="passLab" type="button" minlength=6 id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Choose Category
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" >
    <a class="dropdown-item" href="#">One time (Doesn't repeat)</a>
    <a class="dropdown-item" href="#">Monthly</a>
    <a class="dropdown-item" href="#">Quarterly (Every 3 months)</a>
    <a class="dropdown-item" href="#">Yearly</a>
  </div>
</div>

  </div>
                                <button type="button" class="btn btn-primary btn-sm mt-3">Add Category</button>
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


                </div>
            </div>
        </div> 
    </div> 
</template>

<style lang="scss">

// Normalize/Reset only elements used
body {
  margin: 0;
  padding: 0;
}

// Mixin for shadow button with block sliding up
@mixin card1-border-slide($color, $hoverColor, $borderWidth, $time) {
  $easing: cubic-bezier(0.4, 0, 0.2, 1);
  
  position: relative;

  display: inline-block;
  padding: 0.5em 2em;

  cursor: pointer;
  overflow: hidden;

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0;

    height: $borderWidth;
    width: 100%;

    background-color: $color;
  }

  &:before {
    top: 0;
  }

  &:after {
    bottom: 0;
  }

  &:hover {

    & > * {

      & > * {

        &:before,
        &:after {
          transform: translate3d(0, 0, 0);
        }

        & > * {
          &:before,
          &:after {
            transform: translate3d(0, 0, 0);
          }
        }
      }
    }
  }

  & > * {

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 0;

      height: 100%;
      width: $borderWidth;

      background-color: $color;
    }

    &:before {
      left: 0;
    }

    &:after {
      right: 0;
    }

    & > * {

      &:before,
      &:after {
        content: "";
        position: absolute;
        left: 0;
        z-index: 9;

        height: $borderWidth;
        width: 100%;

        background-color: $hoverColor;
      }

      &:before {
        top: 0;

        transform: translate3d(-105%, 0, 0);
        transition: transform $time $easing;
      }

      &:after {
        bottom: 0;
        
        transform: translate3d(105%, 0, 0);
        transition: transform $time $easing;
      }

      & > * {

        &:before,
        &:after {
          content: "";
          position: absolute;
          top: 0;
          z-index: 9;

          height: 100%;
          width: $borderWidth;

          background-color: $hoverColor;
        }

        &:before {
          left: 0;

          transform: translate3d(0, 105%, 0);
          transition: transform $time $easing;
        }

        &:after {
          right: 0;

          transform: translate3d(0, -105%, 0);
          transition: transform $time $easing;
        }
      }
    }
  }
}

// Start of styling
* {
  box-sizing: border-box;
}

.col-2 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0;
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
}

.card1 {
  font-size: 1.5em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-decoration: none;
  width: 100%;
  height: 15em;
  @include card1-border-slide(#252525, #168dff, 3px, 0.8s);
  padding: 50px 10px;
  background-color: #f2f2f2;
    }

</style>