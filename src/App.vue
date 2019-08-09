<template lang="html">
  <div >
    <location-select :locations="locations" />
    <location-info :location="selectedLocation" />
  </div>
</template>

<script>
import { eventBus} from '@/main.js';
import LocationSelect from '@/components/LocationSelect.vue';
import LocationInfo from '@/components/LocationInfo';

export default {
  components: {
    'location-select': LocationSelect,
    'location-info': LocationInfo,
    // 'people-info': PeopleInfo
  },
  data() {
    return {
      locations: [],
      selectedLocation: null,
      // people: []
    };
  },
  mounted() {
    eventBus.$on('location-selected', (selectedIndex) => {
      this.selectedLocation = this.locations[selectedIndex];
    });
    fetch('https://ghibliapi.herokuapp.com/locations')
    .then(res => res.json())
    .then(locations => this.locations = locations);

    // fetch('https://ghibliapi.herokuapp.com/people')
    // .then(res => res.json())
    // .then(people => this.people = people);
  }
}
</script>

<style lang="css" scoped>
</style>
