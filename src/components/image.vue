<template lang="html">
  <div class="image">

    <div class="text">
      <h2><span>Projeto</span> Minds</h2>
      <p>Words Attack</p>
    </div>

    <div class="dots">

      <ul>
        <li><div class="dot" style="top: 0.1%;left: 67%;"></div></li>
        <li><div class="dot good" style="top: 2%;left: 91%;"></div></li>
        <li><div class="dot bad" style="top: 11%;left: 24%;"></div></li>
      </ul>

      <img src="../assets/images/2.jpg" width="100%" alt="">
      <!-- <img src="../assets/images/1.png" width="100%" alt=""> -->
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.image {
    flex-basis: 500px;
    min-width: 300px;
    flex-grow: 2;
    background: $color-dark-2;
    padding: 20px;
    box-sizing: border-box;
    min-height: 100vh;
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
            box-shadow: 0 0 70px 10px $color-green;
        }
        &.bad {
            background: $color-red;
            box-shadow: 0 0 70px 10px $color-red;
        }
    }
}
</style>
