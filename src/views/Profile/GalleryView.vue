<script setup>
import {defineAsyncComponent} from "vue";

const GalleryHeaderCpn = defineAsyncComponent(() => import('@/components/gallery/GalleryHeaderCpn.vue'));
const GalleryListCpn = defineAsyncComponent(() => import('@/components/gallery/GalleryListItemCpn.vue'));
</script>

<template>

  <div class="flex flex-col gap-5 mt-10 px-5 animate-fade">
    <GalleryHeaderCpn/>
    <GalleryListCpn/>
  </div>
</template>

<style scoped lang="scss">

</style>