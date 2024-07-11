<template>
  <div
    class="relative flex gap-2 h-20 p-2 group hover:bg-gray-200 rounded cursor-pointer transition-colors"
  >
    <div class="xs:w-56 sm:w-56 md:w-36 w-36 relative">
      <img class="h-16 w-16 rounded-full" :src="photo" alt="avt" />
      <n-icon
        :class="{
          'absolute xs:-right-1 sm:-right-1 bottom-0 md:right-0 lg:right-3 right-3 w-7 h-7 flex items-center justify-center rounded-full text-white': true,
          'bg-blue-500': data.type === 1,
          'bg-green-500': data.type === 2
        }"
        :component="Bookmark"
      />
    </div>
    <div class="flex flex-col gap-2">
      <span class="text-sm font-poppins text-gray-500 line-clamp-2">{{ data.content }}</span>
      <span class="text-sm font-poppins text-gray-500">{{ data.createAt }}</span>
    </div>
    <n-icon
      :class="{
        ' absolute translate-y-1/2 right-8 w-7 h-7 hidden group-hover:flex items-center justify-center rounded-full text-gray-300 bg-white ': true
      }"
      :component="Bookmark"
    />
  </div>
</template>

<script setup>
import photo from '@/assets/profile/banner/avatar.jpg'
import { Bookmark } from '@vicons/ionicons5'
defineProps({
  data: Object
})
</script>

<style lang="scss" scoped></style>
