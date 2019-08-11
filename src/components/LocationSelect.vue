<template>
  <div>

<select @change="locationSelected">
  <option selected disabled>-</option>
  <option v-for="(location, index) in locations"
  :value="index">{{ location.name }}</option>
</select>



<p>{{chartData}}</p>


  </div>

</template>

<script>
import { eventBus } from '@/main.js';

export default {
  name: 'LocationSelect',
  props: ['locations', 'chartData'],
  methods: {
    locationSelected(e) {
      const selectedIndex = e.target.value;
      eventBus.$emit('location-selected', selectedIndex);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
