<template>
  <header
    class="flex items-center justify-between py-2 border-b border[#eee] shadow bg-white xs:px-0 sm:px-0 md:px-0 lg:px-5 px-5"
  >
    <div class="flex items-center gap-3">
      <router-link :to="{ name: 'home' }">
        <img :src="logo" class="w-10" alt="logo" />
      </router-link>
      <router-link class="">
        <n-icon
          class="xs:flex sm:flex md:flex lg:hidden w-10 h-10 flex items-center justify-center text-lg rounded-full hover:bg-gray-200 transition-all cursor-pointer"
          :component="Search"
        />
        <n-input class="xs:hidden sm:hidden md:hidden lg:block" round placeholder="Search">
          <template #prefix>
            <n-icon :component="Search" />
          </template>
        </n-input>
      </router-link>
      <router-link class="xs:block sm:block md:block lg:hidden hidden" :to="{ name: 'bookmark' }">
        <n-icon
          :class="{
            'w-10 h-10 flex items-center justify-center text-lg rounded-full hover:bg-gray-200 transition-all cursor-pointer': true,
            'text-blue-500': isBookMarkPage
          }"
          :component="Menu"
        />
      </router-link>
    </div>
    <div
      id="nav-bar"
      class="xs:hidden sm:hidden md:hidden lg:flex flex items-center gap-2 animate-fade animate-duration-200 mr-16"
    >
      <div class="transition-all" @click="handleNav(1)">
        <n-icon
          :component="Home"
          :class="{
            'w-16 h-10 flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer rounded text-lg': true,
            'text-blue-500': navE === 1,
            'text-gray-600': navE !== 1
          }"
        />
        <hr v-if="navE === 1" class="h-[4px] bg-blue-500 rounded" />
      </div>
      <div class="transition-all" @click="handleNav(2)">
        <n-icon
          :component="Home"
          :class="{
            'w-16 h-10 flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer rounded text-lg': true,
            'text-blue-500': navE === 2,
            'text-gray-600': navE !== 2
          }"
        />
        <hr v-if="navE === 2" class="h-[4px] bg-blue-500 rounded" />
      </div>
      <div class="transition-all" @click="handleNav(3)">
        <n-icon
          :component="Home"
          :class="{
            'w-16 h-10 flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer rounded text-lg': true,
            'text-blue-500': navE === 3,
            'text-gray-600': navE !== 3
          }"
        />
        <hr v-if="navE === 3" class="h-[4px] bg-blue-500 rounded" />
      </div>
      <div class="transition-all" @click="handleNav(4)">
        <n-icon
          :component="Home"
          :class="{
            'w-16 h-10 flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer rounded text-lg': true,
            'text-blue-500': navE === 4,
            'text-gray-600': navE !== 4
          }"
        />
        <hr v-if="navE === 4" class="h-[4px] bg-blue-500 rounded" />
      </div>
      <div class="transition-all" @click="handleNav(5)">
        <n-icon
          :component="Home"
          :class="{
            'w-16 h-10 flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer rounded text-lg': true,
            'text-blue-500': navE === 5,
            'text-gray-600': navE !== 5
          }"
        />
        <hr v-if="navE === 5" class="h-[4px] bg-blue-500 rounded" />
      </div>
    </div>

    <div class="flex items-center gap-3">
      <n-icon
        class="w-10 h-10 flex items-center justify-center text-lg rounded-full bg-gray-200 hover:bg-gray-400 transition-all cursor-pointer"
        :component="Add"
      />
      <n-icon
        class="w-10 h-10 flex items-center justify-center text-lg rounded-full bg-gray-200 hover:bg-gray-400 transition-all cursor-pointer"
        :component="Chatbox"
        @click="chatBoxOpen = true"
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
  <Modal ref="chatBoxTarget" v-if="chatBoxOpen" @closemodal="chatBoxOpen = false" />
</template>

<script setup>
import logo from '@/assets/logohome.jpg'
import avatar from '@/assets/profile/banner/avatar.jpg'
import { Add, Chatbox, Home, Menu, Notifications, Search } from '@vicons/ionicons5'
import { computed, ref, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'
import { onClickOutside } from '@vueuse/core'
const Modal = defineAsyncComponent(() => import('@/components/base/ModalCpn.vue'))
const route = useRoute()
const navE = ref(1)
const isBookMarkPage = computed(() => route.name === 'bookmark')
const isNotificationPage = computed(() => route.name === 'notification')

const chatBoxTarget = ref(null)
const chatBoxOpen = ref(false)
onClickOutside(chatBoxTarget, () => {
  chatBoxOpen.value = false
})
const handleNav = (index) => {
  navE.value = index
  const navs = document.querySelectorAll('#nav-bar div')
  navs[index].classList.toggle('animate-fade')
}
</script>

<style lang="scss" scoped></style>
