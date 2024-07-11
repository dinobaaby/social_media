<template>
 <n-infinite-scroll class="max-h-screen">
   <div class="w-full">
     <BannerProfile />
     <MainContent/>
     <RouterView />

   </div>
 </n-infinite-scroll>

</template>

<script setup>
import { defineAsyncComponent } from 'vue'
const BannerProfile = defineAsyncComponent(() => import('@/components/main/BannerProfile.vue'))
const MainContent = defineAsyncComponent(() => import('@/components/main/MainContent.vue'))
</script>

<style lang="scss" scoped></style>
