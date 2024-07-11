<template>
  <div class="flex flex-col gap-2 mt-2">
    <div class="flex items-center">
      <span class="pl-2 text-sm font-poppins">Group chat</span>
    </div>
    <div>
      <FriendCard v-for="item in listAction" :key="item" :data="item" />
    </div>
  </div>
</template>

<script setup>
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
  }
]
</script>

<style lang="scss" scoped></style>
