<template>
    <div class="cointainer">
    <h2 class="my-4"> History of Paid Bills </h2>
        <div class="row my-4"> 
            <table class="table">
                <thead>
                    <tr>
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
                            Category
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr :key="invoice.key" v-for="invoice in invoices">
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
                            {{invoice.Category}}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

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

<script>
import moment from 'moment';
import store from '@/store';
import { firebase } from '@/firebase';
import { db } from '@/firebase';
import { invoiceCollection } from '@/firebase';
import { mapState } from 'vuex';


export default {
    name:'HistoryPaid',
    props: ['Invoices'],
    data () {
        return {
            invoices: [],
            DueDate:'',
            ClientName:'',
            BillName:'',
            BillAmount:'',
            Category: '',
            isPaid,
            };
        },
    computed: {
      ...mapState(['invoices'])
    },
    mounted () {
        this.$store.dispatch('fetchInvoice');
        },
    methods: {
		invoice(isPaid) {
            if (isPaid) {
                this.$store.dispatch('invoice', {
                    DueDate: this.invoiceForm.DueDate,
                    ClientName: this.invoiceForm.ClientName,
                    BillName: this.invoiceForm.BillName,
                    BillAmount: this.invoiceForm.BillAmount,
                    Category: this.invoiceForm.Category,
                    isPaid: isPaid
                    })
                }
            else {
                this.$store.dispatch('invoice', {
                    DueDate: this.invoiceForm.DueDate,
                    ClientName: this.invoiceForm.ClientName,
                    BillName: this.invoiceForm.BillName,
                    BillAmount: this.invoiceForm.BillAmount,
                    Category: this.invoiceForm.Category,
                    isPaid: isPaid
                    })
            }
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