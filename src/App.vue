<template>
  <div id="app">
    <router-view/>

    <div class="container container-app">
      <router-view name="image"/>
      <router-view name="content"/>
      <router-view name="sidebar" style="display: none"/>
    </div>

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
    // overflow-x: auto;
    // overflow-y: hidden;
    background: $color-dark;
  }
</style>
