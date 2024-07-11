<script setup>
import avatar from "../../assets/profile/banner/avatar.jpg"
import {EllipsisVertical} from "@vicons/ionicons5";
</script>

<template>
<div class="border border-[#eee] rounded p-5 flex items-start justify-between cursor-pointer hover:scale-105 transition-all">
  <div class="flex gap-4 items-start">
    <n-avatar bordered :src="avatar" size="large" />
    <div class="flex flex-col gap-1">
      <span class="text-sm font-medium font-poppins">Nguyen TH Hoang</span>
      <span class="text-gray-500 text-sm flex items-center gap-1">
        <span class="text-blue-500 underline">20 same friends</span>
      </span>
    </div>
  </div>
  <n-icon class="w-6 h-6 flex items-center justify-center rounded-xl hover:bg-gray-300 transition-colors" :component="EllipsisVertical" />
</div>
</template>

<style scoped lang="scss">

</style>