<script setup>

import {Person, PersonAdd, PersonCircle, Save} from "@vicons/ionicons5";
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <n-icon size="medium" :component="Save" class="text-gray-500 animate-fade" />
    <span class="text-[16px] font-medium font-poppins animate-fade">938</span>
    <span class="p-0 text-[12px] text-gray-400 font-poppins animate-fade">Post</span>
  </div>
  <div class="flex flex-col items-center">
    <n-icon size="medium" :component="PersonCircle" class="text-gray-500 animate-fade" />
    <span class="text-[16px] font-medium font-poppins animate-fade">938</span>
    <span class="p-0 text-[12px] text-gray-400 font-poppins animate-fade">Followers</span>
  </div>
  <div class="flex flex-col items-center">
    <n-icon size="medium" :component="PersonAdd" class="text-gray-500 animate-fade" />
    <span class="text-[16px] font-medium font-poppins animate-fade">938</span>
    <span class="p-0 text-[12px] text-gray-400 font-poppins animate-fade">Following</span>
  </div>
</template>

<style scoped lang="scss">

</style>