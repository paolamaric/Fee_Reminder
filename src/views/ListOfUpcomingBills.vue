<template>
    <div class="cointainer">
    <h2 class="my-4"> List of Upcoming Bills </h2>
        <div class="row my-4"> 
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">
                            Invoice ID
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
                    </tr>
                </thead>
                <tbody>

                </tbody>
                    <!-- <td> {{Invoices.id}} </td> -->
                    <!-- <td> {{Invoices.ClientName}} </td> -->
                    <!-- <td> {{Invoices.BillName}} </td> -->
                    <!-- <td> {{Invoices.BillAmount}} </td>
                {{PostedFromNow}}  -->
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
// import List from '@/components/List.vue';
import { db } from '@/firebase';
export default {
    name:'ListOfUpcomingBills',
    props: ['Invoices'],
    // computed: {
    //     postedFromNow () {
    //         return moment(this.Invoices.time).fromNow();
    //         }
    //     },  
    data () {
        return {
            List: [],
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
                this.List = [];
                query.forEach((doc) => {
                const data = doc.data();
                this.List.push({
                    id: doc.id,
                    time: data.posted_at,
                    ClientName: data.ClientName,
                    BillName: data.BillName,
                    BillAmount: data.BillAmount
                    })
                });
            })
        },
    methods: {
        getInvoices () {
            console.log("Firebase dohvat")
            },
        // postNewInvoice () {
        //   const ClientName= this.ClientName
        //   const BillName= this.BillName
        //   const BillAmount = this.BillAmount
        //   db.collection("Invoices").add({
        //       Client: ClientName,
        //       Bill: BillName,
        //       Amount: BillAmount,
        //       email: store.currentUser,
        //       created_at: Date.now(),
        //   })
        //   .then ((doc)=>{
        //       console.log("Spremljeno ", doc);
        //       this.ClientName = "";
        //       this.BillName = "";
        //       this.BillAmount = "";
              
        //       this.getInvoices();
        //   })
        //   .catch ((e)=> {
        //       console.error(e);
        //   });
        // }
        }
    }
</script>