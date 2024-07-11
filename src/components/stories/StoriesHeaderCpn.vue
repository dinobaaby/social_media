<template>
  <header
    class="fixed flex top-0 left-0 right-0 items-center justify-between py-2 bg-transparent xs:px-2 sm:px-2 md:px-2 lg:px-5 px-5"
  >
    <div class="xs:flex sm:flex md:flex flex items-center gap-3">
      <router-link to="/" class="">
        <n-icon
          class="flex w-10 h-10 items-center justify-center text-xl rounded-full text-white transition-all cursor-pointer"
          :component="Close"
        />
      </router-link>
      <router-link :to="{ name: 'home' }">
        <img :src="logo" class="w-10 rounded-full" alt="logo" />
      </router-link>
    </div>

    <div class="flex items-center gap-3">
      <n-icon
        class="w-10 h-10 flex items-center justify-center text-lg rounded-full bg-gray-200 hover:bg-gray-400 transition-all cursor-pointer"
        :component="Add"
      />
      <n-icon
        class="w-10 h-10 flex items-center justify-center text-lg rounded-full bg-gray-200 hover:bg-gray-400 transition-all cursor-pointer"
        :component="Chatbox"
      />

      <router-link :to="{ name: 'notification' }">
        <n-icon
          :class="{
            'w-10 h-10 flex items-center justify-center text-lg rounded-full bg-gray-200 hover:bg-gray-400 transition-all cursor-pointer': true,
            'text-blue-500': isNotificationPage
          }"
          :component="Notifications"
        />
      </router-link>
      <img :src="avatar" class="w-10 h-10 rounded-full" alt="avatar" />
    </div>
  </header>
</template>

<script setup>
import logo from '@/assets/logohome.jpg'
import avatar from '@/assets/profile/banner/avatar.jpg'
import { Add, Chatbox, Notifications, Close } from '@vicons/ionicons5'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const isNotificationPage = computed(() => route.name === 'notification')
</script>

<style lang="scss" scoped></style>
