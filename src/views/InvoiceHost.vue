<template>
    <div class="cointainer">
        <div class="header">
            <button type="button" class="btn btn-primary mt-3" data-toggle="modal" data-target="#Invoice">Add New Invoices</button>
        </div> 
        <h2 class="my-4"> List of Invoices </h2>
            <div class="row my-4"> 
                <table class="table">
                    <thead>
                        <tr>
                            <!-- <th scope="col">
                                Invoice ID
                            </th> -->
                            <th scope="col">
                                Client Name
                            </th>
                            <th scope="col">
                                Bill Name
                            </th>
                            <th scope="col">
                                Bill Amount
                            </th>
                            <th scope="col">
                                Due date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr :key="invoice.key" v-for="invoice in invoices">
                            <!-- <td>
                                {{invoice.id}}
                            </td> -->
                            <td>
                                {{invoice.ClientName}}
                            </td>
                            <td>
                                {{invoice.BillName}}
                            </td>
                            <td>
                                {{invoice.BillAmount}}
                            </td>
                            <td>
                                {{invoice.DueDate}}
                            </td>
                        </tr>
                    </tbody>
                </table>
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
                                            <div class="container">
                                                <div class="row-md">
                                                    <div class="col-md">
                                                    <!-- <b> {{Invoices2.id}} </b> -->
                                                    <br>Buisness info<br>
                                                    </div>
                                                    <div class="col-md">
                                                    <b>Due on receipt</b><br>
                                                        <div id="app">
                                                            <input type="date" id="DueDate" v-model="DueDate">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
    </div>
</template>

<script>

import moment from 'moment';
import store from '@/store';
import { db } from '@/firebase';
import { firebase } from '@/firebase';
import { invoiceCollection } from '@/firebase';

export default {
    name:'InvoiceHost',
    components: {
    },
    data () {
        return {
            invoices: [],
            DueDate:'',
            ClientName:'',
            BillName:'',
            BillAmount:'',
            };
        },
    mounted () {
        this.getInvoices();
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
          })
          .then ((doc)=>{
              console.log("Spremljeno ", doc);
              this.DueDate ="";
              this.ClientName = "";
              this.BillName = "";
              this.BillAmount = "";
          })
          .catch ((e)=> {
              console.error(e);
          });
        },
        getInvoices () {
            let invoices = [];
            invoiceCollection.get().then((results) => {
                results.forEach((doc) => {
                    let data = doc.data();
                    let invoice = {
                        id: doc.id,
                        DueDate: data.Date,
                        ClientName: data.Client,
                        BillName: data.Bill,
                        BillAmount: data.Amount                    
                        }
                    this.invoices.push(invoice);
                    })
                })
            console.log("Firebase dohvat")
            },
    }
}
</script>

<style lang="scss">

* {
    box-sizing: border-box;
}
.col-12 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0;
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
}
.col-4 {
  font-size: 1.5em;
  letter-spacing: 0.1em;
  text-decoration: none;
  width: 100%;
}
</style> 
