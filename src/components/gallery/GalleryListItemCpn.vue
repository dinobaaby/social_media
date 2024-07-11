<script setup>
import {defineAsyncComponent} from "vue";
const ImageItem = defineAsyncComponent(() => import("./GallaryImageItem.vue"));
</script>

<template>
  <div class="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-cols-3 gap-5">
    <ImageItem />
  </div>
</template>

<style scoped lang="scss">

</style>