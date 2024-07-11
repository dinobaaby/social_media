<template>
  <div class="relative w-full max-h-screen bg-black">
    <Header />
    <div class="flex flex-col lg:flex-row bg-opacity-90">
      <div class="w-[400px] h-screen hidden lg:block bg-gray-200"></div>
      <div class="flex flex-1 items-center justify-center">
        <StoryWatch />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const Header = defineAsyncComponent(() => import('@/components/stories/StoriesHeaderCpn.vue'))
const StoryWatch = defineAsyncComponent(() => import('@/components/stories/StoryWatchCpn.vue'))
</script>

<style lang="scss" scoped></style>
