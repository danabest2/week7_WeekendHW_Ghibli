<template lang="html">
  <div id="app">
    <nav>
      <router-link :to="{ name: 'home'}">Home</router-link>
      <router-link :to="{ name: 'about'}">About</router-link>
    </nav>
    <router-view id="view"></router-view>

    <location-select :locations="locations" />
    <location-info :location="selectedLocation" />
  </div>
</template>

<script>
import { eventBus} from '@/main.js';
import LocationSelect from '@/components/LocationSelect.vue';
import LocationInfo from '@/components/LocationInfo';
import MainHeader from '@/components/MainHeader';

export default {
  components: {
    'location-select': LocationSelect,
    'location-info': LocationInfo,
    'main-header': MainHeader,
    name: 'app'
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
nav {
  display: flex;
  justify-content: center;
  width: 50vw;
  margin: 0 auto;
}

view {
  width: 50vw;
  margin: 0 auto;
}

a{
  margin: 0 20px;
}
</style>
