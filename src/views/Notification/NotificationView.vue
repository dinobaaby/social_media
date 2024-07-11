<template>
  <n-infinite-scroll class="w-full min-h-screen max-h-screen p-4 bg-white rounded-lg">
    <div class="w-full flex items-center justify-between">
      <span class="xs:text-sm sm:text-sm md:text-sm lg:text-lg xl:text-xl font-poppins font-medium">
        Notification
      </span>
      <n-icon
        class="xs:w-8 xs:h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 xs:text-sm sm:text-sm md:text-lg flex items-center justify-center"
        :component="EllipsisVertical"
      />
    </div>
    <NotificationListItem />
  </n-infinite-scroll>
</template>

<script setup>
import { EllipsisVertical } from '@vicons/ionicons5'
import { defineAsyncComponent } from 'vue'
const NotificationListItem = defineAsyncComponent(
  () => import('@/components/notification/NotificationListItemCpn.vue')
)
</script>

<style lang="scss" scoped></style>
