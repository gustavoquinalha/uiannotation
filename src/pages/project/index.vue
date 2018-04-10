<template lang="html">
<div class="">

  <div class="head size margin">
    <div class="text">
      <h2>Projects</h2>
    </div>
  </div>

  <div class="container wrap container-item">
    <!-- repetir -->
    <div class="col-12 col-sm-6 col-md-6 col-lg-4 item" v-for="x in projects" v-bind:key="x.id">
      <router-link to="products">
        <div class="item__content container align-center text-align-center">
          <div class="item__text">
            <h3>{{x.name}}</h3>
            <span>{{x.products.length}} screens</span>
          </div>
        </div>
      </router-link>
    </div>
    <!-- end repetir -->

    <!-- add novo -->
    <div class="col-12 col-sm-6 col-md-6 col-lg-4 item">
      <div class="item__content container align-center new">
        <div class="add">
          +
        </div>
      </div>
    </div>
    <!-- end add novo -->

  </div>

</div>
</template>

<script>
export default {
  data () {
    return {
      projects: [{
        id: 1,
        name: 'Minds EAD',
        products: [{
          name: 'Home',
          image: '1.png',
          dots: [{
            id: 1,
            title: 'Slider',
            text: 'Slider na horizontal com cards',
            type: 'good',
            x: 100,
            y: 130
          }, {
            id: 2,
            title: 'Aumentar botao',
            text: 'O botao esta muito apagado',
            type: 'bad',
            x: 242,
            y: 534
          }]
        }, {
          name: 'Contato',
          image: '2.png',
          dots: [{
            id: 1,
            title: 'Aumentar botao',
            text: 'O botao esta muito apagado',
            type: 'bad',
            x: 242,
            y: 534
          }, {
            id: 2,
            title: 'Aumentar botao',
            text: 'O botao esta muito apagado',
            type: 'bad',
            x: 242,
            y: 534
          }]
        }]
      }, {
        id: 2,
        name: 'Outra coisa',
        products: [{
          name: 'Home',
          image: '1.png',
          dots: [{
            id: 1,
            title: 'Slider',
            text: 'Slider na horizontal com cards',
            type: 'good',
            x: 100,
            y: 130
          }]
        }]
      }]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
