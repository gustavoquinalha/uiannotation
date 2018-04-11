<template lang="html">
  <div class="content">

    <div class="head__content">
      <div class="text">
        <div class="container align-items-center justify-content-between">
          <h2>Annotations</h2>
          <div class="">
            <i class="fas fa-filter"></i>
          </div>
        </div>
        <hr>
      </div>
    </div>

    <div class="list__content">

      <div class="container-cards container column" v-show="!dotSelected.id">
        <div class="card" v-for="(card, index) in projects[0].products[0].dots" v-bind:key="card.id" :class="{ good: card.type === 'good', bad: card.type === 'bad', think: card.type === 'think'}" @click="currentDot(card)">
          <div class="title">
            <div class="margin-bottom-10">
              <span><b>{{index + 1}} - </b> {{card.title}}</span>
            </div>
            <p class="block">{{card.text}}</p>
          </div>
        </div>
      </div>

      <div class="container-cards container column" v-show="dotSelected.id">

        <div class="back__content container align-center">
          <button type="button" name="button" class="btn btn-full" @click="resetCurrentDot()">
            <i class="fas fa-angle-left margin-right-10"></i> Voltar
          </button>
        </div>

        <div class="card" :class="dotSelected.type">
          <div class="title">
            <div class="margin-bottom-10">
              <span><b>{{dotSelected.id}}</b> - {{dotSelected.title}}</span>
            </div>
            <p>{{dotSelected.text}}</p>
          </div>
        </div>

        <div class="container__dots dots">
          <ul class="container">
            <li v-for="x in dots" v-bind:key="x">
              <div class="dot normal shadow" :class="x" v-if="x === dotSelected.type"></div>
              <div class="dot normal" :class="x" v-else></div>
            </li>
          </ul>
        </div>

      </div>

    </div>

    <div class="btn__content">
      <button type="button" name="button" class="btn btn-plus"><i class="fas fa-plus"></i></button>
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

      dots: ['default', 'good', 'bad', 'think'],

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
    currentDot: function (card) {
      this.dotSelected.id = card.id
      this.dotSelected.title = card.title
      this.dotSelected.text = card.text
      this.dotSelected.type = card.type
      this.dotSelected.x = card.x
      this.dotSelected.y = card.y
    },
    resetCurrentDot: function () {
      this.dotSelected.id = null
      this.dotSelected.title = ''
      this.dotSelected.text = ''
      this.dotSelected.type = ''
      this.dotSelected.x = null
      this.dotSelected.y = null
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
    position: relative;
    flex-grow: 1;
    flex-grow: 400px;
    max-width: 400px;
    background: $color-dark-3;
    color: $color-white;
    height: 100vh;
}

.head__content {
    padding: 20px 20px 0;
    box-sizing: border-box;
    height: 64px;
    hr {
        width: calc(100% - .5rem);
        background: $color-dark;
        height: 2px;
        border: none;
        margin-top: 20px;
    }
}

.list__content {
    height: calc(100vh - 64px);
    overflow-y: auto;
}

.container-cards {
    padding: 10px;
    box-sizing: border-box;
}

.btn__content {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    text-align: center;
    background: linear-gradient(to top, $color-dark-3, transparent);
    .btn {
        box-shadow: 0 0 30px 5px rgba(0,0,0,.5);
        margin-bottom: 10px;
    }
}
.card {
    background: $color-dark;
    margin: 10px;
    border-radius: $radius;
    padding: 20px;
    border-left: 5px solid $color-grey;
    &.good {
        border-left: 5px solid $color-green;
    }
    &.bad {
        border-left: 5px solid $color-red;
    }
    &.think {
        border-left: 5px solid $color-blue;
    }

    .title {
        span {
            font-weight: bold;
            font-size: 18px;
        }
        p {
            line-height: 1.3;
            color: $color-white;
            opacity: 0.7;
            &.block {
                max-height: 40px;
                overflow: hidden;
            }
        }
    }
}

.list__content::-webkit-scrollbar {
    width: 0.5em;
}

.list__content::-webkit-scrollbar-track {}

.list__content::-webkit-scrollbar-thumb {
    background-color: $color-dark;
    border: 1px solid $color-dark-2;
    border-radius: 50px;
}

.back__content {
    padding: 0 10px 10px;
}

.container__dots {
    padding: 10px 10px 0;
}

@media (max-width: 920px) {
    .content {
        max-width: 100%;
        width: 100%;
        height: auto;
    }
    .container-cards {
        width: 100%;
    }
    .list__content {
        height: auto;
        width: 100%;
    }
    .btn__content {
        display: none;
    }
}
</style>
