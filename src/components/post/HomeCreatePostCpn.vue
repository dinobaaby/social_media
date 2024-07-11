<template>
  <div class="bg-white p-4 flex flex-col gap-4 rounded-lg">
    <div class="flex items-center gap-2">
      <img class="w-10 rounded-full" :src="avatar" alt="" />
      <div
        class="h-10 w-full flex items-center bg-gray-200 rounded-3xl px-3 text-sm font-poppins cursor-pointer"
      >
        Dino, What are you thing?
      </div>
    </div>
    <hr />
    <div class="flex items-center justify-between">
      <div
        class="flex items-center h-10 px-2 rounded hover:bg-gray-200 transition-colors cursor-pointer gap-2"
      >
        <n-icon class="w-6 h-6 flex items-center text-2xl text-red-600" :component="Videocam" />
        <span class="text-[15px] font-poppins font-medium text-gray-400">Video live</span>
      </div>
      <div
        class="flex items-center h-10 px-2 rounded hover:bg-gray-200 transition-colors cursor-pointer gap-2"
      >
        <n-icon class="w-6 h-6 flex items-center text-2xl text-green-400" :component="Image" />
        <span class="text-[15px] font-poppins font-medium text-gray-400">Image/Video</span>
      </div>
      <div
        class="flex items-center h-10 px-2 rounded hover:bg-gray-200 transition-colors cursor-pointer gap-2"
      >
        <n-icon class="w-6 h-6 flex items-center text-2xl text-red-400" :component="Today" />
        <span class="text-[15px] font-poppins font-medium text-gray-400">Short Video</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import avatar from '@/assets/profile/banner/avatar.jpg'
import { Videocam, Image, Today } from '@vicons/ionicons5'
</script>

<style lang="scss" scoped></style>
