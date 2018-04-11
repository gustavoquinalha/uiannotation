<template lang="html">
  <div class="">

    <div class="image__head">
      <div class="text container align-items-center">
        <router-link :to="{ name: 'products', params: {} }" class="text-icon margin-right-10">
          <i class="fas fa-angle-left"></i>
        </router-link>

        <h2><span>Projeto</span> {{projects[0].name}}</h2>
        <p class="margin-left-10">{{projects[0].products[0].name}}</p>
      </div>
    </div>

    <div class="image">
      <div class="dots">
        <ul>
          <li v-for="(dot, index) in projects[0].products[0].dots" v-bind:key="dot.id">
            <div class="dot" :style="{ top: dot.y + '%', left: dot.x + '%'}" :class="{ good: dot.type === 'good', bad: dot.type === 'bad', think: dot.type === 'think'}">{{index + 1}}</div>
          </li>
        </ul>
        <img :src="require(`@/assets/images/${projects[0].products[0].image}`)" width="100%">
      </div>
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
            x: 23,
            y: 20
          }, {
            id: 2,
            title: 'Aumentar botao',
            text: 'O botao esta muito apagado',
            type: 'think',
            x: 85,
            y: 59
          }]
        }, {
          name: 'Contato',
          image: '2.png',
          dots: [{
            id: 1,
            title: 'Aumentar botao',
            text: 'O botao esta muito apagado',
            type: 'bad',
            x: 23,
            y: 20
          }, {
            id: 2,
            title: 'Aumentar botao',
            text: 'O botao esta muito apagado',
            type: 'bad',
            x: 85,
            y: 59
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
            x: 85,
            y: 59
          }]
        }]
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.image__head {
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
}
.image {
    padding: 0 20px 20px;
    flex-basis: 300px;
    min-width: 300px;
    flex-grow: 2;
    background: $color-dark-3;
    box-sizing: border-box;
    height: calc(100vh - 64px);
    overflow: auto;
    position: relative;
    img {
        border: none;
        border-radius: $radius;
    }
}

.image::-webkit-scrollbar {
    width: 0.5em;
}

.image::-webkit-scrollbar-track {}

.image::-webkit-scrollbar-thumb {
    background-color: $color-dark;
    border: 1px solid $color-dark-2;
    border-radius: 50px;
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
        box-shadow: 0 0 10px 5px rgba(0, 0, 0, .5);
        z-index: 9999;
        border-radius: 50%;
        position: absolute;
        transition: 0.3s;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        color: $color-dark;
        font-weight: bold;
        cursor: pointer;
        &.good {
            background: $color-green;
            box-shadow: 0 0 0 5px rgba($color-green, .4), 0 0 40px 10px rgba(0, 0, 0, .5);
        }
        &.bad {
            background: $color-red;
            box-shadow: 0 0 0 5px lighten($color-red, 10), 0 0 40px 10px rgba(0, 0, 0, .5);
        }
        &.think {
            background: $color-blue;
            box-shadow: 0 0 0 5px rgba($color-blue, .4), 0 0 40px 10px rgba(0, 0, 0, .5);
        }
        &:hover {
            transform: scale(1.3, 1.3);
        }
    }
}

@media (max-width: 720px) {
    .dots .dot {
        width: 16px;
        height: 16px;
    }
}

@media (max-width: 480px) {
    .dots .dot {
        width: 10px;
        height: 10px;
    }
}
@media (max-width: 920px) {
    .image {
        height: auto;
    }
}
</style>
