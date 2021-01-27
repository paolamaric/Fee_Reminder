<template>
     <div class="container-fluid">
        <div class="row my-4" v-if="userProfile.isHost">
          <div class="col-4 p-0">
              <div class="col-11">
                  <a href="/InvoiceHost" class="card2"> 
                      <span>
                          <span>
                              <span>
                                  <i class="fas fa-5x fa-file-invoice-dollar" text-primary mb-4></i>
                                  <hr>
                                  <h5> Invoices </h5>
                              </span>
                          </span>
                      </span>
                  </a>
              </div>
          </div>
          <div class="col-4 p-0">
              <div class="col-11">
                  <a href="/ClientsHost" class="card2"> 
                      <span>
                          <span>
                              <span>
                                  <i class="fas fa-5x fa-address-card" text-primary mb-4></i>
                                  <hr>
                                  <h5> Clients </h5>
                              </span>
                          </span>
                      </span>
                  </a>
              </div>
          </div>
          <div class="col-4 p-0">
              <div class="col-11">
                  <a href="/Reports" class="card2"> 
                      <span>
                          <span>
                              <span>
                                  <i class="fas fa-chart-line fa-5x" text-primary mb-4></i>
                                  <hr>
                                  <h5>Reports</h5>
                              </span>
                          </span>
                      </span>
                  </a>
              </div>
          </div>
      </div> 
        <div class="row my-4" v-else>
            <div class="col-2 p-0">
                <div class="col-12">
                    <a href="" class="card1" data-toggle="modal" data-target="#Invoice"> 
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
                    <a href="/HistoryPaid" class="card1"> 
                        <span>
                            <span>
                                <span>
                                    <i class="fas fa-5x fa-book img-fluid text-primary mb-4"></i>
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
                    <a href="/Categories" class="card1">
                        <span>
                            <span>
                                <span>
                                    <i class="fas fa-5x fa-user-cog img-fluid text-primary mb-4"></i>
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
                    <a href="/Reports" class="card1"> 
                        <span>
                            <span>
                                <span>
                                    <i class="fas fa-5x fa-chart-pie img-fluid text-primary mb-4"></i>
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
                    <a href="" class="card1" data-toggle="modal" data-target="#Export"> 
                        <span>
                            <span>
                                <span>
                                    <i class="fas fa-5x fa-folder-open img-fluid text-primary mb-4"></i>
                                    <hr>
                                    <h5> Export App Data to File </h5>
                                </span>
                            </span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
        <div class="modal fade" id="Invoice" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                      <h3 class="modal-title" id="exampleModalLabel"><b>Create New Invoice</b></h3>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-lg-12 well">
                                <form>
                                  <div id="app">
                                    <div class="container-md">
                                      <div class="row-md">
                                      </div>
                                    </div>
                                  </div>
                                  <div class="form-group row">
                                      <label class="col-form-label col-sm-3" for="ClientName" >To: </label>
                                      <div class="col-sm-9">
                                          <input type="text" id="ClientName" v-model="invoiceForm.ClientName" placeholder="Enter Client Name Here..." class="form-control">
                                      </div>
                                  </div>
                                  <div class="form-group mt-3 row">
                                      <label class="col-form-label col-sm-3" for="BillName">Bill name: </label>
                                      <div class="col-sm-9"> 
                                          <input id="BillName" type="text" v-model="invoiceForm.BillName" placeholder="e.g. Membership fee" class="form-control">
                                      </div>
                                  </div>
                                  <div class="form-group mt-3 row">
                                      <label class="col-form-label col-sm-3" for="BillAmount">Bill amount: </label>
                                      <div class="col-sm-9"> 
                                          <input id="BillAmount" type="number" minlength=1,2 v-model="invoiceForm.BillAmount" placeholder="e.g. 150,00 kn" class="form-control">
                                      </div>
                                  </div>
                                  <div class="form-group mt-3 row">
                                    <label class="col-form-label col-sm-3">Due on receipt:</label>
                                          <div class="col-sm-9"> 
                                             <input class="form-control" type="date" id="DueDate" v-model="invoiceForm.DueDate">
                                           </div>
                                        </div>
                                  <div class="form-group mt-3 row">	                                 
                                      <label class="col-form-label col-sm-3" for="Category">Category: </label>
                                      <div class="col-sm-9"> 
                                      <select class="form-control" v-model="invoiceForm.Category" aria-label="Default select example">	                                    
                                          <option value="Car&Moto">Car&Moto</option>	                                          
                                          <option value="Membership fees">Membership fees</option>	                                         
                                          <option value="Dining">Dining</option>	                                          
                                          <option value="Rent">Rent</option>	 
                                          <option value="Utilities">Utilities</option>	
                                          <option value="Other">Other</option>	                                           
                                        </select>	
                                        </div>                                       
                                  </div>
                                  <div class="form-group mt-3 row">	
                                      <div class="col-sm-9">                        
                                      <label class="col-form-label col-sm-3" for="one">Paid</label>
                                      <input type="checkbox" id="one" v-model="invoiceForm.isPaid">
                                      <br> 
                                    </div>                                      
                                  </div>
                                  <div class="text-right">
                                      <a href="http://www.hok-cba.hr/hr/upute-o-na%C4%8Dinu-ispunjavanja-uplatnica">Payment Instructions</a>
                                  </div>
                                  <button type="button" @click="invoice()" class="btn btn-primary btn-sm mt-3">Add Invoice</button>
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

    	    <div class="modal fade" id="Export" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                      <h3 class="modal-title" id="exampleModalLabel"><b>Export Data</b></h3>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-lg-12 well">
                                <form>
                                  <div id="app">
                                    <div class="container-md">
                                      <div class="row-md">
                                      </div>
                                    </div>
                                  </div>
                                  <div class="form-group row">
                                      <label class="col-form-label col-sm-6" for="Upcoming"><b>Upcoming bills:</b></label>
                                      <div class="text-centar">
                                      <a href="http://www.hok-cba.hr/hr/upute-o-na%C4%8Dinu-ispunjavanja-uplatnica">Download List of upcoming bills</a>
                                  </div>
                                  </div>
                                  <div class="form-group row">
                                      <label class="col-form-label col-sm-6" for="History"><b>History:</b></label>
                                      <div class="text-centar">
                                      <a href="http://www.hok-cba.hr/hr/upute-o-na%C4%8Dinu-ispunjavanja-uplatnica">Download List of paid bills</a>
                                  </div>
                                  </div>
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-sm btn-danger" data-dismiss="modal">Close</button>
                                  </div>
                                  </form> 
                              </div>
                          </div>
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

.col-4 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  }


.card2 {
  font-size: 2em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-decoration: none;
  width: 100%;
  @include card1-border-slide(#252525, #168dff, 3px, 0.8s);
  padding: 50px;
  background-color: #f2f2f2;
  }

  .card3 {
  font-size: 2em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-decoration: none;
  width: 100%;
  @include card1-border-slide(#252525, #168dff, 3px, 0.8s);
  padding: 50px;
  background-color: #f2f2f2;
  }

</style>

<script>
import moment from 'moment';
import store from '@/store';
import { db } from '@/firebase';
import { firebase } from '@/firebase';
import { mapState } from 'vuex';
import { invoiceCollection } from '@/firebase';

export default {
    name:'Home',
    components: {
    },
    data () {
      return {
        isHostNow:'',
        invoiceForm: {
          DueDate:'',
          ClientName:'',
          BillName:'',
          BillAmount:'',
          Category: '',
          isPaid: '',
        }
      };
    },
    // mounted () {
    //   let isHostNow 
    //   firebase.auth().onAuthStateChanged(async (user) => {
    //     if (user) {
    //       console.log("Samo da vidim");
    //       await db.collection('Users').doc(user.uid).get().then((result)=>{
    //         store.isHostNow = result.data().isHost;
    //         });
    //       }
    //     });
    //   console.log(store.isHostNow);
    // },
    computed: {
    ...mapState(['userProfile'])
      },
    methods: {
      postNewInvoice() {
          const DueDate= this.DueDate
          const ClientName= this.ClientName
          const BillName= this.BillName
          const BillAmount = this.BillAmount
          const Category = this.Category

          db.collection("Invoices").add({
              Date: DueDate,
              Client: ClientName,
              Bill: BillName,
              Amount: BillAmount,
              Category: Category,
          })
          .then ((doc)=>{
              console.log("Spremljeno ", doc);
              this.DueDate ="";
              this.ClientName = "";
              this.BillName = "";
              this.BillAmount = "";
              this.Category = "";
          })
          .catch ((e)=> {
              console.error(e);
          });
      },
      invoice() {
        if (this.invoiceForm.isPaid) {
          this.$store.dispatch('invoice', {
            DueDate: this.invoiceForm.DueDate,
            ClientName: this.invoiceForm.ClientName,
            BillName: this.invoiceForm.BillName,
            BillAmount: this.invoiceForm.BillAmount,
            Category: this.invoiceForm.Category,
            isPaid: this.invoiceForm.isPaid
            })
          }
        else {
            this.$store.dispatch('invoice', {
              ClientName: this.invoiceForm.ClientName,
              BillName: this.invoiceForm.BillName,
              BillAmount: this.invoiceForm.BillAmount,
              Category: this.invoiceForm.Category,
              isPaid: this.invoiceForm.isPaid
            })
          }
        },       
    }
  }
</script>