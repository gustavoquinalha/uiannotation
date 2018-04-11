<template lang="html">
  <div class="content">

    <div class="head__content">
      <div class="text">
        <h2>Annotations</h2>
        <hr>
      </div>
    </div>

    <div class="list__content">

      <div class="container-cards container column">
        <div class="card" v-for="(card, index) in projects[0].products[0].dots" v-bind:key="card.id" :class="{ good: card.type === 'good', bad: card.type === 'bad', think: card.type === 'think'}">
          <div class="title">
            <div class="margin-bottom-10">
              <span><b>{{index + 1}} - </b> {{card.title}}</span>
            </div>
            <p>{{card.text}}</p>
          </div>
        </div>
      </div>

    </div>

    <div class="btn__content">
      <button type="button" name="button" class="btn">+</button>
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

@media (max-width: 920px) {
    .content {
        max-width: 100%;
        height: auto;
    }
    .container-cards {
        width: 100%;
    }
    .list__content {
        height: auto;
    }
    .btn__content {
        display: none;
    }
}
</style>
