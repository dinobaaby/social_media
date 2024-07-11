<script setup>

import {HeartOutline, ImageOutline, PeopleOutline, PersonCircle} from "@vicons/ionicons5";
</script>

<template>
<div class="bg-blue-100 w-full rounded-bl rounded-br flex items-center justify-end px-5">
  <n-tabs type="line" class="flex items-end justify-end">
    <n-tab name="profile">
      <router-link class="py-1 px-1" :to="{name: 'introduction', params:{name: 'aaaa'}}"><n-icon :component="PersonCircle"/><span class="text-sm font-normal ml-2 font-poppins">Profile</span></router-link>
    </n-tab>
    <n-tab name="followers">
      <router-link class="py-1 px-1" :to="{name: 'followers', params:{name:'bbbb'}}"><n-icon :component="HeartOutline"/><span class="text-sm font-normal ml-2 font-poppins">Followers</span></router-link>
    </n-tab>
    <n-tab name="friends">
      <router-link class="py-1 px-1" :to="{name: 'friends', params:{name:'ccc'}}"><n-icon :component="PeopleOutline"/><span class="text-sm font-normal ml-2 font-poppins">Friends</span></router-link>
    </n-tab>
    <n-tab name="gallery">
      <router-link class="py-1 px-1" :to="{name: 'gallery', params:{name:'ddd'}}"><n-icon :component="ImageOutline"/><span class="text-sm font-normal ml-2 font-poppins">Gallery</span></router-link>
    </n-tab>
  </n-tabs>
</div>
</template>

<style scoped lang="scss">

</style>