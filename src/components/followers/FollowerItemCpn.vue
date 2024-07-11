<script setup>
import avatar from "../../assets/profile/banner/avatar.jpg"
import {LocationOutline} from "@vicons/ionicons5";
</script>

<template>
<div class="flex items-center justify-between border border-[#eee] rounded p-5">

  <div class="flex gap-4 items-start">
      <n-avatar round :src="avatar" size="large" />
     <div class="flex flex-col gap-1">
       <span class="text-sm font-medium font-poppins">Nguyen TH Hoang</span>
       <span class="text-gray-500 text-sm flex items-center gap-1">

        <n-icon :component="LocationOutline" />
        <span>Ho Chi Minh City, Vietnam</span>
      </span>
     </div>
  </div>
  <n-button type="info" ghost>
    Follow
  </n-button>
</div>
</template>

<style scoped lang="scss">

</style>