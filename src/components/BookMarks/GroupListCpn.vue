<template>
  <div class="flex flex-col animate-fade">
    <div class="group flex items-center justify-between text-sm font-poppins px-5">
      <span>Shortcut for your</span>
      <span class="group-hover:block hidden transition-all text-blue-500 underline cursor-pointer"
        >Edit</span
      >
    </div>
    <GroupItem v-for="item in groupItem" :key="item" :data="item" />

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
import { ref, computed, defineAsyncComponent } from 'vue'
import { ChevronDownOutline, ChevronUpOutline } from '@vicons/ionicons5'
const displaymore = ref(false)
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
const GroupItem = defineAsyncComponent(() => import('./GroupItemCpn.vue'))

const groupItem = computed(() => {
  if (displaymore.value) {
    return listAction
  }
  return listAction.slice(0, 3)
})
</script>

<style lang="scss" scoped></style>
