<template lang="html">
  <div class="image">

    <div class="text container align-items-center">
      <router-link :to="{ name: 'products', params: {} }" class="text-icon margin-right-10">
        <i class="fas fa-angle-left"></i>
      </router-link>

    <div class="">
      <h2><span>Projeto</span> {{projects[0].name}}</h2>
      <p>{{projects[0].products[0].name}}</p>
    </div>

    </div>

    <div class="dots">

      <ul>
        <li><div class="dot good" style="top: 3.5%;left: 55%;"></div></li>
        <li><div class="dot good" style="top: 3.5%;left: 85%;"></div></li>
        <li><div class="dot bad" style="top: 71%;left: 50%;"></div></li>
      </ul>

      <img src="../assets/images/1.png" width="100%" alt="">
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
.image {
    flex-basis: 500px;
    min-width: 300px;
    flex-grow: 2;
    background: $color-dark-2;
    padding: 20px;
    box-sizing: border-box;
    height: 100vh;
    overflow: auto;
    position: relative;
    img {
        // filter: brightness(80%);
    }
}

.image::-webkit-scrollbar {
    width: 1em;
}

.image::-webkit-scrollbar-track {}

.image::-webkit-scrollbar-thumb {
    background-color: $color-dark-3;
    border-radius: 50px;
}

.text {
    h2 {
        color: $color-light;
        font-size: 22px;
        span {}
    }
    p {
        color: $color-grey;
        font-size: 14px;
        line-height: 1;
    }
    margin-bottom: 20px;
}

.dots {
    position: relative;
    ul {
        list-style: none;
    }
    .dot {
        width: 22px;
        height: 22px;
        background: $color-grey;
        box-shadow: 0 0 50px 10px rgba(133,133,133,.5);
        z-index: 9999;
        border-radius: 50%;
        position: absolute;

        &.good {
            background: $color-green;
            box-shadow: 0 0 40px 10px darken($color-green, 5%);
        }
        &.bad {
            background: $color-red;
            box-shadow: 0 0 40px 10px darken($color-red, 5%);
        }
    }
}
</style>
