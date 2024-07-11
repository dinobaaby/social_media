<template>
  <div class="flex flex-col gap-2 mt-2">
    <div class="flex item-center justify-between px-2">
      <span class="text-sm font-poppins flex items-center justify-center">
        Page and your page
      </span>
      <n-icon
        class="w-8 h-8 flex items-center justify-center text-lg rounded-full hover:bg-gray-300 cursor-pointer transition-colors"
        :component="EllipsisVertical"
      />
    </div>
    <router-link>
      <div
        class="h-12 flex items-center gap-4 hover:bg-gray-200 rounded px-4 font-medium font-poppins transition-colors cursor-pointer animate-fade"
      >
        <img :src="avatar" class="h-10 w-10 object-cover rounded-full" alt="" />
        <span>Dino baby</span>
      </div>
    </router-link>

    <div class="pl-2">
      <BookMark v-for="item in listAction" :key="item" :data="item" />
    </div>
  </div>
</template>

<script setup>
import { EllipsisVertical, PersonCircleSharp, MegaphoneOutline } from '@vicons/ionicons5'
import avatar from '@/assets/profile/photos/photo1.jpeg'
import { defineAsyncComponent } from 'vue'
const BookMark = defineAsyncComponent(() => import('@/components/BookMarks/BookMarkItemCpn.vue'))

const listAction = [
  {
    to: '',
    name: 'Go to profile',
    icon: PersonCircleSharp
  },
  {
    to: '',
    name: 'Create advertisement',
    icon: MegaphoneOutline
  }
]
</script>

<style lang="scss" scoped></style>
