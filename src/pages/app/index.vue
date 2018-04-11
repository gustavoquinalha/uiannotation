<template lang="html">
<div class="">

<div class="container">
  <imageComponent class="flex-basis-400 flex-grow-1"/>
  <contentComponent/>
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
