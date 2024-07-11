<script setup>
import photo5 from '../../assets/profile/photos/photo2.jpeg'
import { ChatbubbleOutline, EllipsisVertical, ThumbsUpSharp } from '@vicons/ionicons5'
import { ref } from 'vue'
const isReply = ref(false)
</script>

<template>
  <div class="flex flex-col gap-2 items-end">
    <div class="border border-[#eee] rounded p-3 flex flex-col gap-2 w-full">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <n-avatar size="large" round :src="photo5" />
          <span class="text-sm font-medium font-poppins">Admam</span>
          <li class="text-[12px] font-normal text-gray-400">10 min ago</li>
        </div>
        <n-icon
          class="cursor-pointer w-5 h-5 hover:bg-gray-300 flex items-center justify-center rounded-[50%] transition-colors"
          :component="EllipsisVertical"
        />
      </div>
      <div>
        <span class="text-sm text-gray-600"> Ti beavsan buz bogam vugfeam fecpujnap </span>
      </div>
      <div class="flex items-center gap-5">
        <div class="group relative">
          <n-icon
            :component="ThumbsUpSharp"
            class="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-[50%] text-gray-400"
          />
          <span
            class="absolute hidden group-hover:block transition-all duration-500 animate-fade -top-8 -left-1 bg-black rounded text-white text-sm font-normal font-poppins px-2 py-1"
            >Like</span
          >
        </div>
        <div class="group relative">
          <n-icon
            @click="isReply = !isReply"
            :component="ChatbubbleOutline"
            class="w-8 h-8 flex items-center justify-center bg-blue-500 rounded-[50%] text-white active:animate-fade animate-duration-500 active:bg-blue-300 animate-delay-300 transition-all"
          />
          <span
            class="absolute hidden group-hover:block transition-all duration-500 animate-fade -top-8 -left-5 bg-black rounded text-white text-sm font-normal font-poppins px-2 py-1"
            >Comment</span
          >
        </div>
      </div>
    </div>
    <div v-if="isReply" class="w-11/12 flex items-center gap-2 animate-fade animate-delay-200">
      <n-avatar size="large" :src="photo5" />
      <input
        type="text"
        placeholder="Reply"
        class="border border-[#eee] outline-0 w-[80%] h-10 px-2"
      />
      <n-button size="large" type="info">Send</n-button>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
