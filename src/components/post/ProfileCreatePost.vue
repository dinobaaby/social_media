<script setup>

import {CalendarNumberOutline, ImageOutline} from "@vicons/ionicons5";
import { ref } from "vue";
const image = ref(null);

const  handleImage = (e) => {
  const file = e.target.files[0];
  image.value = URL.createObjectURL(file);

}
</script>

<template>
<div class="w-full flex flex-col gap-5 p-5 border border-[#eee] rounded">
  <img v-if="image" alt="" class="rounded h-48 object-cover animate-fade" :src="image">
  <n-input rows="8" type="textarea" placeholder="Share your thoughts" />
  <div class="flex justify-between items-center">
      <div class="flex items-center gap-5">
        <div>
          <label for="postimage">
            <div class="flex items-center gap-3 hover:bg-gray-300 pr-2 rounded transition-colors cursor-pointer animate-fade animate-once font-poppins">
              <n-icon :component="ImageOutline" class="w-[30px] h-[30px] bg-blue-600 text-white flex items-center justify-center rounded-[50%]" />
              <span>Photo/Video</span>
            </div>
          </label>
          <input type="file" v-on:change="handleImage" hidden="" id="postimage" />
        </div>
        <div class="flex items-center gap-3 hover:bg-gray-300 px-2 rounded transition-colors cursor-pointer animate-fade animate-once font-poppins">
          <n-icon :component="CalendarNumberOutline" class="w-[30px] h-[30px] bg-blue-300  text-white flex items-center justify-center rounded-[50%]" />
          <span>Article</span>
        </div>
      </div>
      <div class="flex gap-3">
        <n-button v-if="image" @click="image = null" size="small" type="error">Cancle</n-button>
        <n-button size="small" class="xs:w-12 sm:w-12 md:w-20 md:h-8 lg:w-32 lg:h-8" type="info">Post</n-button>
      </div>
  </div>
</div>
</template>

<style scoped lang="scss">

</style>