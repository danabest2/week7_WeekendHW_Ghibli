<template>
<div>
<GChart
  type="PieChart"
  :data="chartData"
  :options="chartOptions"
/>

</div>
</template>

<script>
export default {
  name: 'SurfaceChart',
  props: [ 'chartData'],
  data() {
    return {
     // chartData: [],

      chartOptions: {
        chart: {
          title: 'Surface Water Chart',
          subtile: 'Enter location name here'
        }
      }
    }
  }
}
</script>

<style>
</style>
