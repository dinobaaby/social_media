<script setup>

import {BagCheckOutline, LocationOutline, LogoGithub, MailOutline} from "@vicons/ionicons5";
</script>

<template>
<div class="flex flex-col gap-3 px-4 py-6 border border-[#eee] rounded">
  <span class="text-lg font-medium font-poppins">
    Introduction
  </span>
  <span class="text-[12px] font-poppins">
    Hello, I am Trinh Van Hieu. I love making websites and coding. Contact me if you need help with your project
  </span>
  <div class="flex flex-col gap-3">
      <div class="flex items-center gap-2">
        <n-icon class="font-medium text-black" :component="BagCheckOutline" />
        <span class="text-sm font-normal font-poppins">FrontEnd Developer</span>
      </div>
    <div class="flex items-center gap-2">
      <n-icon class="font-medium text-black" :component="MailOutline" />
      <span class="text-sm font-normal font-poppins">trinhhieu26112003@gmail.com</span>
    </div>
    <div class="flex items-center gap-2">
      <n-icon class="font-medium text-black" :component="LogoGithub" />
      <span class="text-sm font-normal font-poppins">https://github.com/dinobaaby</span>
    </div>
    <div class="flex items-center gap-2">
      <n-icon class="font-medium text-black" :component="LocationOutline"/>
      <span class="text-sm font-normal font-poppins">Ha Noi, Viet Nam</span>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">

</style>