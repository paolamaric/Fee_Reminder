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
                    <tr :key="item.key" v-for="item in db.collection('Invoices')">{{List}}</tr>
                </tbody>
                    <!-- <td> {{Invoices.DueDate}} </td>
                    <td> {{Invoices.ClientName}} </td>
                    <td> {{Invoices.BillName}} </td>
                    <td> {{Invoices.BillAmount}} </td>  -->
            </table>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
export default {
    name: 'List',
    props: ['Invoices'],
    computed: {
        postedFromNow () {
            return moment(this.Invoices.time).fromNow();
            }
        },
    }
</script>