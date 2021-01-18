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
                    <a href="/list" class="card1"> 
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
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-lg-12 well">
                                <form>
                                  <div id="app">
                                    <mdb-container>
                                      <mdb-row>
                                        <mdb-col>
                                          <!-- <b> {{Invoices.id}} </b> -->
                                          <br>Buisness info<br>
                                        </mdb-col>
                                        <mdb-col>
                                          <b>Due on receipt</b><br>
                                          <div id="app">
                                             <input type="date" id="DueDate" v-model="DueDate">
                                          </div>
                                        </mdb-col>
                                      </mdb-row>
                                    </mdb-container>
                                  </div>
                                  <div class="form-group row">
                                      <label class="col-form-label col-sm-3" for="ClientName" >To: </label>
                                      <div class="col-sm-9">
                                          <input type="text" id="ClientName" v-model="ClientName" placeholder="Enter Client Name Here..." class="form-control">
                                      </div>
                                  </div>
                                  <div class="form-group mt-3 row">
                                      <label class="col-form-label col-sm-3" for="BillName">Bill name: </label>
                                      <div class="col-sm-9"> 
                                          <input id="BillName" type="text" v-model="BillName" placeholder="e.g. Membership fee" class="form-control">
                                      </div>
                                  </div>
                                  <div class="form-group mt-3 row">
                                      <label class="col-form-label col-sm-3" for="BillAmount">Bill amount: </label>
                                      <div class="col-sm-9"> 
                                          <input id="BillAmount" type="number" minlength=1,2 v-model="BillAmount" placeholder="e.g. 150,00 kn" class="form-control">
                                      </div>
                                  </div>
                                  <div class="text-right">
                                      <a href="http://www.hok-cba.hr/hr/upute-o-na%C4%8Dinu-ispunjavanja-uplatnica">Payment Instructions</a>
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
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-lg-12 well">
                                <form>
                                  <div class="form-group mt-3 row">
                                    <label class="col-form-label col-sm-4" for="passLab">Category: </label>
                                      <select class="form-select col-sm-7" aria-label="Default select example">
                                          <option selected>Membership fees</option>
                                          <option value="1">Utilities</option>
                                          <option value="2">Loans</option>
                                          <option value="3">Other</option>
                                        </select>
                                  </div>
                                  <div class="form-group mt-3 row">
                                    <label class="col-form-label col-sm-4" for="passLab">Category name: </label>
                                      <div class="col-sm-7"> 
                                        <input id="passLab" type="text" v-model="CategoryName" placeholder="e.g. Odbojkaški klub" class="form-control">
                                      </div>
                                  </div>
                                  <div class="form-group mt-3 row">
                                    <label class="col-form-label col-sm-4" for="passLab">Repeat: </label>
                                        <select class="form-select col-sm-7" aria-label="Default select example">
                                          <option selected>One time (Doesn't repeat)</option>
                                          <option value="1">Monthly</option>
                                          <option value="2">Quarterly (Every 3 months)</option>
                                          <option value="3">Yearly</option>
                                        </select>
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

<script>
  import store from '@/store';
  import { db } from '@/firebase';

export default {
    name:'HomeClient',
    components: {
    },
    data () {
      return {
        ClientName:'',
        BillName:'',
        BillAmount:'',
      };
    },
    methods: {
      postNewInvoice () {
          const ClientName= this.ClientName
          const BillName= this.BillName
          const BillAmount = this.BillAmount

          db.collection("Invoices").add({
              Client: ClientName,
              Bill: BillName,
              Amount: BillAmount,
              email: store.currentUser,
              created_at: Date.now(),
          })
          .then ((doc)=>{
              console.log("Spremljeno ", doc);
              this.DueDate = "";
              this.ClientName = "";
              this.BillName = "";
              this.BillAmount = "";
              
              this.getInvoices();
          })
          .catch ((e)=> {
              console.error(e);
          });
      }
    }
  }
</script>