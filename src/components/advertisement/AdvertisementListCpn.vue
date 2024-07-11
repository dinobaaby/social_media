<template>
  <div class="flex flex-col gap-1">
    <span class="pl-2 text-sm font-poppins">Advertisement</span>
    <AdvertisementItem />
    <AdvertisementItem />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
const AdvertisementItem = defineAsyncComponent(() => import('./AdvertisementItemCpn.vue'))
</script>

<style lang="scss" scoped></style>
