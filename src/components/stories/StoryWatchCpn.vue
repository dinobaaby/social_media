<template>
  <div class="relative w-full h-screen flex-1 flex items-center justify-center mt-12 px-10">
    <WatchHeader />
    <img class="" :src="photo" alt="" />
  </div>
</template>

<script setup>
import photo from '@/assets/profile/photos/photo1.jpeg'
import { defineAsyncComponent } from 'vue'

const WatchHeader = defineAsyncComponent(
  () => import('@/components/stories/StoriesWatchHeaderCpn.vue')
)
</script>

<style lang="scss" scoped></style>
