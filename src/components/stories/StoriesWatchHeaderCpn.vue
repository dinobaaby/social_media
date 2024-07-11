<template>
  <div class="absolute top-5 w-full h-10 flex flex-col gap-5 px-10">
    <div class="w-full h-1 bg-white"></div>
  </div>
  <div class="absolute top-8 w-full h-10 flex items-center justify-between gap-5 px-10">
    <div class="flex items-center gap-2">
      <img :src="avatar" class="w-10 rounded-full" alt="" />
      <span class="text-sm text-white font-poppins font-medium">Nguyen Viet Hoang</span>
      <span class="text-[14px] text-gray-400 font-poppins flex items-center gap-1">
        14 hours <n-icon :component="EarthOutline" />
      </span>
    </div>
    <div class="flex items-center gap-3">
      <n-icon class="text-white text-lg" :component="Play" />
      <n-icon class="text-white text-lg" :component="VolumeMuteOutline" />
      <n-icon class="text-white text-lg" :component="EllipsisVertical" />
    </div>
  </div>
</template>

<script setup>
import { EarthOutline, Play, EllipsisVertical, VolumeMuteOutline } from '@vicons/ionicons5'
import avatar from '@/assets/profile/banner/avatar.jpg'
</script>

<style lang="scss" scoped></style>
