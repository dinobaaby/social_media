<template>
  <div class="flex flex-col animate-fade">
    <router-link>
      <div
        class="w-full h-12 flex items-center gap-4 hover:bg-gray-200 rounded px-4 font-medium font-poppins transition-colors cursor-pointer"
      >
        <img class="h-2/3 rounded-full" :src="avatar" />
        <span>Trinh Hieu</span>
      </div>
    </router-link>
    <BookMarkItem v-for="(bookm, index) in bookmarks" :key="bookm" :data="listAction[index]" />
    <div
      @click="displaymore = !displaymore"
      class="w-full h-12 flex items-center gap-4 hover:bg-gray-200 rounded px-4 font-medium font-poppins transition-colors cursor-pointer"
    >
      <n-icon
        v-if="!displaymore"
        class="h-8 w-8 bg-gray-200 flex items-center justify-center rounded-full"
        :component="ChevronDownOutline"
      />
      <n-icon
        v-else
        class="h-8 w-8 bg-gray-200 flex items-center justify-center rounded-full"
        :component="ChevronUpOutline"
      />
      <span v-if="!displaymore">Display more</span>
      <span v-else>Hide</span>
    </div>
  </div>
</template>

<script setup>
import { computed, defineAsyncComponent, ref } from 'vue'
import { ChevronDownOutline, People, ChevronUpOutline } from '@vicons/ionicons5'
import avatar from '@/assets/profile/banner/avatar.jpg'
const displaymore = ref(false)
const listAction = [
  {
    to: '/friends',
    name: 'Friends',
    icon: People
  },
  {
    to: '',
    name: 'Feed broad',
    icon: People
  },
  {
    to: '',
    name: 'Groups',
    icon: People
  },
  {
    to: '',
    name: 'Videos',
    icon: People
  },
  {
    to: '',
    name: 'Control center',
    icon: People
  },
  {
    to: '',
    name: 'Friends',
    icon: People
  },
  {
    to: '',
    name: 'Friends',
    icon: People
  }
]
const BookMarkItem = defineAsyncComponent(() => import('./BookMarkItemCpn.vue'))

const bookmarks = computed(() => {
  if (displaymore.value) {
    return listAction
  }
  return listAction.slice(0, 4)
})
</script>

<style lang="scss" scoped></style>
