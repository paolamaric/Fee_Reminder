<template>
    <div class="cointainer">
    <h2 class="my-4"> List of Invoices for Car&Moto Category </h2>
        <div class="row my-4"> 
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">
                            Due Date
                        </th>
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
                            Paid
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr :key="invoice.key" v-for="invoice in invoices">
                        <td>
                            {{invoice.DueDate}}
                        </td>
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
                            {{invoice.isPaid}}
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
    name:'Car_Moto', 
    data () {
        return {
            Car_Moto: [],
            DueDate:'',
            ClientName:'',
            BillName:'',
            BillAmount:'',
            Category: '',
            };
        },
    computed: {
      ...mapState(['invoices'])
        },
    async mounted () {
        await this.$store.dispatch('fetchInvoice');
        for (var i = 0;i<this.invoices.length;i++) {
            if (!("Car&Moto" == this.invoices[i].Category)){
                this.invoices.splice(i , 1);
                i--;
            }
        }
        },
    }
</script> 