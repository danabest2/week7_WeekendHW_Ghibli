<template>
  <div id="">
    <main-header title='Home'/>
  </div>

</template>

<script>
import MainHeader from '@/components/MainHeader';

export default {
  components: {
    'main-header': MainHeader
  }
}
</script>

<style lang="css" scoped>
.main-header{
  font-family: 'Kotta One', serif;
  font-size: 48px;
}


</style>
