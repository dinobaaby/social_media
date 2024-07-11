<template>
  <div class="w-full relative flex flex-col">
    <div class="relative  ">
      <img
        src="../../assets/profile/banner/banner.jpg"
        alt="banner"
        class="xs:h-48 sm:h-48 md:h-64 lg:h-96 xl:h-96 w-full object-cover animate-fade "
      />
      <n-icon size="medium" :component="Camera" class="absolute bottom-5 right-5  w-[40px] h-[40px] bg-gray-300 flex items-center justify-center rounded-xl" />
    </div>
    <div class="w-full  sm:min-h-24 md:min-h-24 lg:min-h-36 flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xs:gap-4 sm:gap-4 md:gap-0 flex-row items-center justify-between  px-5 xs:pb-4 sm:pb-4 md:pb-0  ">
      <div class="flex xs:order-2 sm:order-2 md:order-1 items-center gap-7">
          <OverviewFriends/>
      </div>
      <div class="flex xs:col-start-1 xs:order-1 sm:order-1  md:order-2 flex-col gap-1 items-center relative">
        <div class="absolute xs:-top-16 sm:-top-20 lg:-top-32 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-[50%] p-1">
          <img class="xs:w-[100px] sm:w-[100px] md:w-[100px] lg:w-[150px] xl-[150px] w-[150px] rounded-[50%]  border-4 border-white animate-fade" alt="avatar" src="../../assets/profile/banner/avatar.jpg">
        </div>
        <div class="flex flex-col items-center justify-center xs:mt-10 sm:mt-10 md:mt-6">
          <span class="font-poppins text-lg font-medium">Dino babyy</span>
          <span class="font-poppins text-sm text-gray-500">Keo</span>
        </div>
      </div>
      <div class="flex xs:order-3 sm:order-3 md:order-3 gap-3 items-center">
          <SocialMedia/>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script setup>
import {Camera} from "@vicons/ionicons5";
import {defineAsyncComponent} from "vue";
const SocialMedia = defineAsyncComponent(() => import("@/components/main/SocialMediaCpn.vue"));
const OverviewFriends = defineAsyncComponent(() => import("@/components/main/OverviewFriends.vue"));
</script>

<style lang="scss" scoped></style>
