<template lang="html">
  <ul v-if="location !== null">
    <li>{{ location.name }}</li>
    <li><span class="bold">Climate:</span>{{
      location.climate }}</li>
    <li><span class="bold">Terrain:</span>{{ location.terrain }}</li>
    <li><span class="bold">Surface Water:</span>{{ location.surface_water.toLocaleString() }}</li>
    <li><span class="bold">Residents:</span>{{ location.residents.people }}</li>

  </ul>

</template>

<script>
export default {
  name: 'location-info',
  props: ['location'],
  // props: [ 'people' ]
}
</script>

<style lang="css" scoped>
  .bold {
    font-weight: bold;
  }
</style>
