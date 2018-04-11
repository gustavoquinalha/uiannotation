<template lang="html">
<div class="">

<div class="container">
  <div class="flex-basis-400 flex-grow-1">
    <imageComponent/>
  </div>

  <div class="">
    <contentComponent/>
  </div>
</div>

</div>
</template>

<script>
import imageComponent from '@/components/image'
import contentComponent from '@/components/content'
export default {
  components: {
    imageComponent,
    contentComponent
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: 920px) {
    .container {
        flex-wrap: wrap;
    }
}
</style>
