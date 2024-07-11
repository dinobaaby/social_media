<script setup>

import {Football, LogoFacebook, LogoTwitter, LogoYoutube} from "@vicons/ionicons5";
</script>

<template>
  <n-icon class="w-[28px] h-[28px] rounded-[50%] bg-blue-600 flex items-center justify-center text-white animate-fade hover:bg-opacity-50 cursor-pointer duration-300" :component="LogoFacebook" />
  <n-icon class="w-[28px] h-[28px] rounded-[50%] bg-blue-400 flex items-center justify-center text-white animate-fade hover:bg-opacity-50 cursor-pointer duration-500" :component="LogoTwitter" />
  <n-icon class="w-[28px] h-[28px] rounded-[50%] bg-pink-500 flex items-center justify-center text-white animate-fade hover:bg-opacity-50 cursor-pointer duration-700" :component="Football" />
  <n-icon class="w-[28px] h-[28px] rounded-[50%] bg-red-500 flex items-center justify-center text-white animate-fade hover:bg-opacity-50 cursor-pointer duration-1000" :component="LogoYoutube" />
  <n-button type="info"  class=" rounded border-0 text-sm text-white font-poppins font-medium animate-fade hover:bg-opacity-50 cursor-pointer animate-delay-300">Add To Story</n-button>
</template>

<style scoped lang="scss">

</style>