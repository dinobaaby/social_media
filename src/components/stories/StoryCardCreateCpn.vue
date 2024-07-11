<template>
  <div
    class="relative min-w-36 xs:h-48 sm:h-48 md:h-60 h-60 overflow-hidden rounded group cursor-pointer"
  >
    <img
      class="group-hover:scale-105 transition-all w-full xs:h-48 sm:h-48 md:h-60 h-60 object-cover rounded"
      :src="photo"
    />
    <div class="absolute w-full h-12 bottom-0 right-0 left-0">
      <div class="relative w-full h-12 bg-white">
        <n-icon
          :component="AddCircle"
          class="absolute -top-4 translate-x-14 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white text-lg border-2 border-white"
        />
      </div>
      <span class="top-5 translate-x-8 absolute text-[12px] font-poppins text-black font-medium"
        >Create story</span
      >
    </div>
  </div>
</template>

<script setup>
import photo from '@/assets/profile/photos/photo1.jpeg'
import { AddCircle } from '@vicons/ionicons5'
</script>

<style lang="scss" scoped></style>
