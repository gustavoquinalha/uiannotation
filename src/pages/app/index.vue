<template lang="html">
<div class="">

<div class="container">
  <imageComponent/>
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

</style>
