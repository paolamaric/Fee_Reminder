<template>
    <div class="cointainer-fluid">
        <div class="row my-4"> 
            <div class="col-12">
                <h2> List of Upcoming Bills </h2>
                <tr class="col-3">
                    <th> Invoice ID </th>
                    <td> {{Invoices.id}} </td>
                </tr>
                <tr class="col-3">
                    <th> Client Name </th>
                    <td> {{Invoices.ClientName}} </td>
                </tr>
                <tr class="col-3">
                    <th> Bill Name </th>
                    <td> {{Invoices.BillName}} </td>
                </tr>
                <tr class="col-3">
                    <th> Bill Amount </th>
                    <td> {{Invoices.BillAmount}} </td>
                {{PostedFromNow}} 
                </tr>
            </div>
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