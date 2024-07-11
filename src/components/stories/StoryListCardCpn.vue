<template>
  <n-scrollbar x-scrollable ref="scrollbarRef">
    <div class="flex gap-4 animate-fade">
      <StoryCardCreate />
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />

      <n-icon
        class="absolute top-1/2 -translate-y-1/2 left-5 w-10 h-10 flex items-center bg-white justify-center rounded-full text-lg font-medium cursor-pointer"
        :component="ChevronBackSharp"
        @click="scrollLeft"
      />
      <n-icon
        class="absolute top-1/2 right-5 -translate-y-1/2 w-10 h-10 flex items-center bg-white justify-center rounded-full text-lg font-medium cursor-pointer"
        :component="ChevronForwardSharp"
        @click="scollRight"
      />
    </div>
  </n-scrollbar>
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue'
import { ChevronBackSharp, ChevronForwardSharp } from '@vicons/ionicons5'
const StoryCard = defineAsyncComponent(() => import('@/components/stories/StoryCardCpn.vue'))
const StoryCardCreate = defineAsyncComponent(
  () => import('@/components/stories/StoryCardCreateCpn.vue')
)

const scrollbarRef = ref(null)

const scollRight = () => {
  const scrollbar = scrollbarRef.value
  if (scrollbar) {
    scrollbar.scrollBy({ left: 200, behavior: 'smooth' })
  }
}
const scrollLeft = () => {
  const scrollbar = scrollbarRef.value
  if (scrollbar) {
    scrollbar.scrollBy({ left: -200, behavior: 'smooth' })
  }
}
</script>

<style lang="scss" scoped></style>
