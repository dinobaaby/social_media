<script setup>

import {Search} from "@vicons/ionicons5";
</script>

<template>
<div class="flex items-center justify-between">
  <div>
    <span class="text-lg font-poppins font-medium">
      Followers
    </span>
    <span class="bg-blue-400 px-3 py-1 text-white text-sm font-medium rounded-xl">
      100
    </span>
  </div>
  <div class="w-[30%]">
      <n-input placeholder="Search followers">
        <template #prefix>
          <n-icon :component="Search" class="text-gray-500"/>
        </template>
      </n-input>
  </div>
</div>
</template>

<style scoped lang="scss">

</style>s