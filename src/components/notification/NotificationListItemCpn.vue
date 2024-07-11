<template>
  <div class="flex flex-col gap-3">
    <span class="text-sm font-poppins font-medium">New</span>
    <div>
      <NotificationItem v-for="item in data" :key="item" :data="item" />
    </div>
  </div>
  <div class="flex flex-col gap-3">
    <span class="text-sm font-poppins font-medium">Old</span>
    <div>
      <NotificationItem v-for="item in data" :key="item" :data="item" />
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
const NotificationItem = defineAsyncComponent(
  () => import('@/components/notification/NotificationItemCpn.vue')
)

const data = [
  {
    title: 'New notification',
    createAt: '2021-10-10',
    type: 1,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas libero dolores atque iste nihil eum veritatis officiis aliquam nostrum ab numquam! Alias qui mollitia asperiores minus magni nisi dolorum!'
  },
  {
    title: 'Old notification',
    createAt: '2021-10-10',
    type: 2,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas libero dolores atque iste nihil eum veritatis officiis aliquam nostrum ab numquam! Alias qui mollitia asperiores minus magni nisi dolorum!'
  },
  {
    title: 'New notification',
    createAt: '2021-10-10',
    type: 1,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas libero dolores atque iste nihil eum veritatis officiis aliquam nostrum ab numquam! Alias qui mollitia asperiores minus magni nisi dolorum!'
  },
  {
    title: 'Old notification',
    createAt: '2021-10-10',
    type: 2,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas libero dolores atque iste nihil eum veritatis officiis aliquam nostrum ab numquam! Alias qui mollitia asperiores minus magni nisi dolorum!'
  },
  {
    title: 'New notification',
    createAt: '2021-10-10',
    type: 1,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas libero dolores atque iste nihil eum veritatis officiis aliquam nostrum ab numquam! Alias qui mollitia asperiores minus magni nisi dolorum!'
  },
  {
    title: 'Old notification',
    createAt: '2021-10-10',
    type: 2,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas libero dolores atque iste nihil eum veritatis officiis aliquam nostrum ab numquam! Alias qui mollitia asperiores minus magni nisi dolorum!'
  },
  {
    title: 'New notification',
    createAt: '2021-10-10',
    type: 1,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas libero dolores atque iste nihil eum veritatis officiis aliquam nostrum ab numquam! Alias qui mollitia asperiores minus magni nisi dolorum!'
  },
  {
    title: 'Old notification',
    createAt: '2021-10-10',
    type: 2,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas libero dolores atque iste nihil eum veritatis officiis aliquam nostrum ab numquam! Alias qui mollitia asperiores minus magni nisi dolorum!'
  }
]
</script>

<style lang="scss" scoped></style>
