<template>
  <div class="small">
    <h3> Report of paid and not paid invoices </h3>
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
        0,0,0
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
        console.log((this.invoices.isPaid));
        // console.log((this.invoices[0]));
        for (var i = 0;i<this.invoices.length;i++) {
          console.log(this.invoices[i].isPaid);
          if (this.invoices[i].isPaid === true) {
            this.counter[0] = this.counter[0] + 1;
            }
          else if (this.invoices[i].isPaid === "") {
            this.counter[1] = this.counter[1] + 1;
            }
          }
        this.invoiceCollection = {
          labels: ["Paid", "Not paid"],
          datasets: [
            {
              label: 'Invoice',
              backgroundColor: '#17a2b8',
              data: [ this.counter[0], this.counter[1], this.invoices.length]
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
    margin:  150px auto;
  }
</style>