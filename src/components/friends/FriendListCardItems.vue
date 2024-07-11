<template>
  <div class="flex flex-col gap-2 mt-2">
    <div class="flex items-center justify-between px-2">
      <span class="pl-2 text-sm font-poppins">Friends</span>
      <div class="flex items-center gap-2 font-poppins font-medium text-sm">
        <n-icon
          class="w-8 h-8 flex items-center justify-center text-lg cursor-pointer"
          :component="Search"
        />
        <n-icon
          class="w-8 h-8 flex items-center justify-center text-lg cursor-pointer"
          :component="EllipsisVertical"
        />
      </div>
    </div>
    <div>
      <FriendCard v-for="item in listAction" :key="item" :data="item" />
    </div>
  </div>
</template>

<script setup>
import { Search, EllipsisVertical } from '@vicons/ionicons5'
import { defineAsyncComponent } from 'vue'
const FriendCard = defineAsyncComponent(() => import('@/components/friends/FriendCardItemCpn.vue'))

const listAction = [
  {
    to: '',
    name: 'Friends',
    image: 'https://via.placeholder.com/150'
  },
  {
    to: '',
    name: 'Friends',
    image: 'https://via.placeholder.com/150'
  },
  {
    to: '',
    name: 'Friends',
    image: 'https://via.placeholder.com/150'
  },
  {
    to: '',
    name: 'Friends',
    image: 'https://via.placeholder.com/150'
  }
]
</script>

<style lang="scss" scoped></style>
