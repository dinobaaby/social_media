<template>
  <router-link>
    <div
      class="h-12 flex items-center gap-4 hover:bg-gray-200 rounded px-4 font-medium font-poppins transition-colors cursor-pointer animate-fade"
    >
      <img :src="avatar" class="h-10 w-10 object-cover rounded-full" alt="" />
      <div class="flex flex-col justify-between h-full">
        <span class="text-sm font-poppins font-medium">Lap trinh java</span>
        <span class="text-[12px] font-poppins">Lap tring java cung voi chung toi</span>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import avatar from '../../assets/profile/banner/avatar.jpg'
defineProps({
  data: Object
})
</script>

<style lang="scss" scoped></style>
