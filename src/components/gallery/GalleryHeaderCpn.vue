<script setup>
import {Search} from "@vicons/ionicons5";
import {ref} from "vue";

const isFocused = ref(false);
const handleInputFocus = () => {
  isFocused.value = true;
}
const handleInputBlur = () => {
  isFocused.value = false;
}
</script>

<template>
  <div class="flex items-center justify-between">
    <div>
      <span class="text-lg font-poppins font-medium">
        Gallery
      </span>
      <span class="bg-blue-400 px-3 py-1  text-white text-sm font-medium rounded-xl">
        100
      </span>
    </div>
    <div :class="{ 'w-[50%]':  isFocused, 'animate-fade animate-duration-1000' : true}">
      <n-input id="searchInput" @focus="handleInputFocus" @blur="handleInputBlur" placeholder="Search gallarie">
        <template #prefix>
          <n-icon :component="Search" class="text-gray-500"/>
        </template>
      </n-input>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>