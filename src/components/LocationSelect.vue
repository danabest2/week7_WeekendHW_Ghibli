<template lang="html">
<select @change="locationSelected">
  <option selected disabled>-</option>
  <option v-for="(location, index) in locations"
  :value="index">{{ location.name }}</option>

</select>

</template>

<script>
import { eventBus } from '@/main.js';

export default {
  name: 'location-select',
  props: ['locations'],
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
