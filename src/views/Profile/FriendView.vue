<script setup>
import {defineAsyncComponent} from "vue";
const Header = defineAsyncComponent(() => import('@/components/friends/FriendHeaderCpn.vue'))
const ListItem = defineAsyncComponent(() => import('@/components/friends/FriendListCpn.vue'))
</script>

<template>
  <div class="flex flex-col gap-5 mt-10 px-5 animate-fade">
    <Header/>
    <ListItem/>
  </div>
</template>

<style scoped lang="scss">

</style>