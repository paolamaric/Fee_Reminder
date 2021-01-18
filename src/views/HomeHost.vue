<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-4">
          <a href="" class="card2" data-toggle="modal" data-target="#Invoice"> 
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
        <div class="col-4">
          <a href="" class="card2" data-toggle="modal" data-target="#Clients"> 
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
        <div class="col-4">
          <a href="" class="card2"> 
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
          <div class="modal fade" id="Invoice" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                          <!-- <b> {{Invoices2.id}} </b> -->
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
                                <button type="button" @click="postNewInvoice()" class="btn btn-primary btn-sm mt-3">Add Invoice</button>
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
          <div class="modal fade" id="Clients" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h3 class="modal-title" id="exampleModalLabel"><b>Add New Client</b></h3>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"></button>
                </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-lg-12 well">
                    <form>
                      <div class="form-group row">
                        <label class="col-form-label col-sm-3" for="emailLab">Client Name: </label>
                          <div class="col-sm-9">
                            <input type="cname" id="cname" v-model="cname" placeholder="e.g. John Deer" class="form-control">
                          </div>
                      </div>
                      <div class="form-group mt-3 row">
                        <label class="col-form-label col-sm-3" for="passLab">Email: </label>
                          <div class="col-sm-9"> 
                            <input id="email" type="email" minlength=6 v-model="email" placeholder="e.g. jdeer@gmail.com" class="form-control">
                          </div>
                      </div>
                      <div class="form-group mt-3 row">
                        <label class="col-form-label col-sm-3" for="passLab">Phone: </label>
                          <div class="col-sm-9"> 
                            <input id="phone" type="phone" minlength=6 v-model="phone" placeholder="e.g. +3851234562" class="form-control">
                          </div>
                      </div>
                      <div class="form-group mt-3 row">
                        <label class="col-form-label col-sm-3" for="passLab">Address: </label>
                          <div class="col-sm-9"> 
                            <input id="address" type="adress" minlength=6 v-model="address" placeholder="e.g. Wall Street" class="form-control">
                          </div>
                      </div>
                      <button type="button" class="btn btn-primary btn-sm mt-3">Add Client</button>
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
import moment from 'moment';
import store from '@/store';
import { db } from '@/firebase';

// export default {
//   components: {
//   mdbContainer,
//   mdbRow,
//   mdbCol
//   },
// }

export default {
    name:'HomeHost',
    props: ['Invoices'],
    components: {
    },
    data () {
      return {
        DueDate:'',
        ClientName:'',
        BillName:'',
        BillAmount:'',
      };
    },
    mounted () {
        this.getInvoices();

        db.collection("Invoices")
            .orderBy("posted_at" , "desc")
            .limit(20)
            .get()
            .then((query) => {
                this.Invoices = [];
                query.forEach((doc) => {

                const data = doc.data();

                this.Invoices.push({
                    id: doc.id,
                    Date: data.DueDate,
                    time: data.posted_at,
                    ClientName: data.ClientName,
                    BillName: data.BillName,
                    BillAmount: data.BillAmount
                })
            });
        })
    },
    methods: {
      postNewInvoice () {
          const DueDate= this.DueDate
          const ClientName= this.ClientName
          const BillName= this.BillName
          const BillAmount = this.BillAmount

          db.collection("Invoices").add({
              Date: DueDate,
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
      },
      getInvoices2 () {
        console.log("Firebase dohvat")
      },
    }
  }

</script>

<style lang="scss">
// Normalize/Reset only elements used
body {
  margin: 0;
  padding: 0;
}

// Mixin for shadow button with block sliding up
@mixin card2-border-slide($color, $hoverColor, $borderWidth, $time) {
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

.col-4 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
}

div.col-4 a {
  font-size: 1.5em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-decoration: none;
  width: 100%;
}

.card2 {
  @include card2-border-slide(#252525, #168dff, 3px, 0.8s);
  padding: 50px;
  background-color: #f2f2f2;
}

</style>