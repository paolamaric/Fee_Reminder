<template>
  <div class="small">
    <line-chart :chart-data="invoiceCollection"></line-chart>
    <button @click="fillData()">Randomize</button>
  </div>
</template>

<script>
  import LineChart from '@/LineChart.js'

  export default {
    components: {
      LineChart
    },
    data () {
      return {
        invoiceCollection: null
      }
    }, 
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.invoiceCollection = {
          labels: [this.getRandomInt(), this.getRandomInt()],
          datasets: [
            {
              label: 'Invoice',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }, {
              label: 'Due date',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    }
  }
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>