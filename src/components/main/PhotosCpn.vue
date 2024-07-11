<script setup>
import photo1 from "../../assets/profile/photos/photo1.jpeg";
import photo2 from "../../assets/profile/photos/photo2.jpeg";
import photo3 from "../../assets/profile/photos/photo3.jpeg";
import photo4 from "../../assets/profile/photos/photo4.jpeg";
import photo5 from "../../assets/profile/photos/photo5.jpeg";
import photo6 from "../../assets/profile/photos/photo6.jpeg";
import photo7 from "../../assets/profile/photos/photo7.jpeg";
import photo8 from "../../assets/profile/photos/photo8.jpeg";
import photo9 from "../../assets/profile/photos/photo9.jpeg";
const image = [
    photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,



]
</script>

<template>
<div class="flex flex-col gap-4 p-5 border border-[#eee] rounded">
  <div class="flex items-end justify-between">
    <span class="text-lg font-medium font-poppins">Photos</span>
    <span class="text-sm text-blue-500 underline cursor-pointer">View more</span>
  </div>
  <div class="grid grid-cols-3 gap-5">
    <div v-for="(item, index) in image" :key="index" class="relative">

      <img alt="" class="w-full min-h-[70px]  object-cover rounded" :src="item.toString()" />
<!--      <img class="w-full min-h-[70px]  object-cover rounded" src="../../assets/profile/photos/photo9.jpeg" height="1080" width="1920"/>-->
    </div>
  </div>

</div>
</template>

<style scoped lang="scss">

</style>