<script setup>

import {EllipsisVertical} from "@vicons/ionicons5";
</script>

<template>
<div class="flex flex-col px-2 rounded border border-[#eee] hover:scale-[1.01] transition-all">

  <img class="min-w-[385px] w-full object-cover h-[250px] rounded  animate-fade animate-duration-1000" src="../../assets/profile/photos/photo3.jpeg" alt="" />
  <div class="flex items-center justify-between p-5">
    <div class="flex flex-col items-start justify-start gap-2">
      <span class="text-sm font-medium font-poppins">Hieu Trinh</span>
      <span class="text-[12px] font-normal text-gray-400">15 min ago</span>
    </div>
    <n-icon :component="EllipsisVertical" />
  </div>
</div>
</template>

<style scoped lang="scss">

</style>