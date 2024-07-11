<template>
  <div class="h-32 w-full flex items-center gap-2 p-2 rounded hover:bg-gray-200 transition-all">
    <img class="w-28 h-28 rounded object-cover" :src="photo" alt="" />
    <div class="flex flex-col gap-1">
      <div class="text-lg font-semibold font-poppins">Anti</div>
      <div class="text-xs text-gray-500">https://www.facebook.com/</div>
    </div>
  </div>
</template>

<script setup>
import photo from '@/assets/profile/photos/photo1.jpeg'
</script>

<style lang="scss" scoped></style>
