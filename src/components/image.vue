<template lang="html">
  <div class="">

    <div class="image__head container wrap align-items-center justify-content-between">
      <div class="text container align-items-center">
        <router-link :to="{ name: 'products', params: {} }" class="text-icon margin-right-10">
          <i class="fas fa-angle-left"></i>
        </router-link>

        <h2><span>Projeto</span> {{projects[0].name}}</h2>
        <p class="margin-left-10">{{projects[0].products[0].name}}</p>
      </div>

      <div class="slide" @click="showDots = !showDots">
        <div class="slide__ball" :class="{show: showDots === true}"></div>
      </div>

    </div>

    <div class="image">
      <div class="dots">
        <ul v-show="showDots === true">
          <li v-for="(dot, index) in projects[0].products[0].dots" v-bind:key="dot.id">
            <div class="dot shadow" :style="{ top: dot.y + '%', left: dot.x + '%'}" :class="{ good: dot.type === 'good', bad: dot.type === 'bad', think: dot.type === 'think'}" @click="currentDot(dot)">
              {{index + 1}}
            </div>
          </li>
        </ul>
        <img :src="require(`@/assets/images/${projects[0].products[0].image}`)" width="100%">
      </div>
      {{dotSelected}}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dotSelected: {
        id: null,
        title: '',
        text: '',
        type: '',
        x: null,
        y: null
      },

      showDots: true,

      projects: [{
        id: 1,
        name: 'Minds EAD',
        products: [{
          name: 'Home',
          image: '1.png',
          dots: [{
            id: 1,
            title: 'Slider',
            text: 'Slider na horizontal com cards fluidos e animações etc e talz asd as das das dasdasdasdasdas sadasd',
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
  },
  methods: {
    currentDot: function (dot) {
      this.dotSelected.id = dot.id
      this.dotSelected.title = dot.title
      this.dotSelected.text = dot.text
      this.dotSelected.type = dot.type
      this.dotSelected.x = dot.x
      this.dotSelected.y = dot.y
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

.slide {
    width: 60px;
    height: 30px;
    background: $color-dark;
    border-radius: 50px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.3s;
    .slide__ball {
        width: 22px;
        height: 22px;
        background: $color-grey;
        border-radius: 50%;
        margin: 5px;
        transition: 0.3s;
        &.show {
            background: $color-green;
            transform: translateX(28px);
        }
    }
    &:hover {
        background: lighten($color-dark, 10);
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
        font-size: 8px;
    }
    .slide {
        height: 20px;
        width: 40px;
        .slide__ball {
            width: 14px;
            height: 14px;
            &.show {
                transform: translateX(16px);
            }
        }
    }
}

@media (max-width: 920px) {
    .image {
        height: auto;
        padding: 0;
        overflow: hidden;
        img {
            border-radius: 0;
        }
    }
}
</style>
