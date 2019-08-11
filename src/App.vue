<template lang="html">
  <body>
  <div id="app">
    <nav>
      <router-link :to="{ name: 'home'}">Home</router-link>
      <router-link :to="{ name: 'about'}">About</router-link>
    </nav>
    <router-view id="view"></router-view>

    <location-select :locations="locations" />
    <location-info :location="selectedLocation" />

    <br></br>

    <p>Surface Water Analysis</p>
    <surface-chart :chartData='chartData'></surface-chart>

  </div>


</body>
</template>

<script>
import { eventBus} from '@/main.js';
import LocationSelect from '@/components/LocationSelect.vue';
import LocationInfo from '@/components/LocationInfo.vue';
import MainHeader from '@/components/MainHeader.vue';
import SurfaceChart from '@/components/SurfaceChart.vue';
import { GChart } from 'vue-google-charts'


export default {
  name: 'app',
  data() {
    return {
      locations: [],
      selectedLocation: null,
      chartData: [],
      location: null
      // cdata: []
      // people: []
    };
  },
  components: {
    GChart,
    "location-select": LocationSelect,
    "location-info": LocationInfo,
    "main-header": MainHeader,
    "surface-chart": SurfaceChart

  },
  methods: {
    getChartFormat: function(locations){
      let x = locations;
      let y = x.map(item => [item.name, item.surface_water]);
      y.unshift["name", "surface_water"];
      return y;
    // }
  }
},

  mounted() {
    eventBus.$on('location-selected', (selectedIndex) => {
      this.selectedLocation = this.locations[selectedIndex];
    });
    fetch('https://ghibliapi.herokuapp.com/locations')
    .then(res => res.json())
    .then(locations => this.locations = locations)
    .then(locations2 => {
      this.chartData = this.getChartFormat(this.locations);
    });
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
  margin: 0 40px;
}
body {
  background-image: url("./assets/ghibli-wallpaper.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right top;
  background-attachment: scroll;

}
</style>
