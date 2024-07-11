<script setup>
import photo from '@/assets/profile/banner/avatar.jpg'
import {defineAsyncComponent} from "vue";
import {ChatbubbleOutline, EyeOutline} from "@vicons/ionicons5";
const  CommentItemCpn = defineAsyncComponent(() => import("@/components/comment/CommentItemCpn.vue"));
const BreadCrumb = defineAsyncComponent(() => import("@/components/breadcrumb/BeardCrumbCpn.vue"))
</script>

<template>
  <BreadCrumb/>
  <div class="xs:w-[90%] sm:w-[90%] md:w-[50%] lg:w-[50%] mx-auto  flex flex-col gap-5 border border-[#eee] rounded-lg min-h-screen">

    <div class="relative">
      <img class="rounded" alt="" src="../../assets/profile/photos/photo5.jpeg"/>
      <n-avatar class="absolute -bottom-8 left-8" round :size="60" :src="photo"/>
      <span class="absolute  right-5 bottom-5 bg-white w-12 h-8 flex items-center justify-center rounded-xl text-sm font-poppins">
        7863
      </span>
    </div>
   <div class="p-5 mt-10 border-t flex flex-col gap-3">
        <span class="bg-gray-300 w-20 h-8 flex items-center justify-center rounded-xl text-sm font-medium font-poppins">
          Gadget
        </span>
       <span class="text-3xl font-medium font-poppins">
            Title of the paragraph
       </span>
     <div class="flex items-center justify-between">
       <div class="flex items-center gap-3">
          <div class="flex items-center gap-2">
            <n-icon class="cursor-pointer" :component="EyeOutline"/>
            <span class="text-sm font-normal font-poppins text-gray-400">1242</span>
          </div>
         <div class="flex items-center gap-2">
           <n-icon class="cursor-pointer" :component="ChatbubbleOutline"/>
           <span class="text-sm font-normal font-poppins text-gray-400">2</span>
         </div>
       </div>
       <li class="text-sm text-gray-400 font-poppins font-normal hover:underline hover:text-blue-500 transition-colors">
         Thu, Jun12
       </li>
     </div>
   </div>
    <hr/>
    <div class="p-5 flex flex-col gap-4">
      <span class="text-xl font-medium font-poppins">
        Title of the paragraph
      </span>
      <span class="text-sm font-poppins font-normal text-justify">
        But you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the list.

        Gigure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the
      </span>
    </div>
  </div>
  <div class="xs:w-[90%] sm:w-[90%] md:w-[50%] lg:w-[50%] mx-auto mt-5  flex flex-col gap-5 border border-[#eee] rounded-lg p-5 ">
    <div class="w-full">
      <span class="text-xl font-medium font-poppins">
        Comments
      </span>
      <span class="px-5 py-1 rounded-lg bg-blue-400 font-medium font-poppins text-white ">
        10
      </span>
    </div>
    <CommentItemCpn/>
  </div>


</template>

<style scoped lang="scss">

</style>