<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import 'assets/css/main.scss';
  @import '../node_modules/the-grid-flexbox/css/the-grid.min.css';

  .container-app {
    height: 100vh;
    background: $color-dark;
  }
</style>
