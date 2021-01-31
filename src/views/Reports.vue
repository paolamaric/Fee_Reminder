<template>
  <div class="small">
    <h3> Report of Invoices by Categories </h3>
    <bar :chart-data="invoiceCollection"></bar>
  </div>
</template>

<script>
import Bar from '@/BarChart.js'
import { mapState } from 'vuex';

  export default {
    components: {
      Bar
    },
    data () {
      return {
        invoiceCollection: {},
        counter: [
        0,0,0,0,0,0
        ]
      }
    },
    computed: {
    ...mapState(['invoices'])
    },
    async mounted () {
      await this.$store.dispatch('fetchInvoice');
      this.fillData();
    },
    methods: {
      fillData () {
        // console.log((this.invoices));
        // console.log((this.invoices[0]));
        for (var i = 0;i<this.invoices.length;i++) {
          if (this.invoices[i].Category === "Membership fees") {
            this.counter[0] = this.counter[0] + 1;
            }
          else if (this.invoices[i].Category === "Utilities") {
            this.counter[1] = this.counter[1] + 1;
            }
          else if (this.invoices[i].Category === "Car&Moto") {
            this.counter[2] = this.counter[2] + 1;
            }
          else if (this.invoices[i].Category === "Dining") {
            this.counter[3] = this.counter[3] + 1;
            }
          else if (this.invoices[i].Category === "Rent") {
            this.counter[4] = this.counter[4] + 1;
            }
          else if (this.invoices[i].Category === "Other") {
            this.counter[5] = this.counter[5] + 1;
            }
          }
        for (var i = 0;i < this.counter.length;i++) {
          console.log("this.counter u " + i + " = " + this.counter[i]);
          if (i === 0) {
            this.topOfthePops = this.counter[i];
            }
          else if (this.topOfthePops < this.counter[i]) {
            this.topOfthePops = this.counter[i];
            }
          }
        this.topOfthePops++;
        console.log(this.topOfthePops);
        this.invoiceCollection = {
          labels: ["MembershipFees", "Utilities", "Car&Moto", "Dining", "Rent", "Other"],
          datasets: [
            {
              label: 'Invoice',
              backgroundColor: '#17a2b8',
              data: [ this.counter[0], this.counter[1], this.counter[2],this.counter[3],this.counter[4],this.counter[5], this.topOfthePops]
              }
            ]
          }
        },
    }
  }
</script>

<style>
  .small {
    max-width: 600px;
    margin:  2% auto;
  }
</style>