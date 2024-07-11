<script setup>
import {defineAsyncComponent} from "vue";
const Header = defineAsyncComponent(() => import('@/components/followers/FollowerHeaderCpn.vue'))
const ListItem = defineAsyncComponent(() => import('@/components/followers/FollowerListItemCpn.vue'))

</script>

<template>
<div class="w-full flex flex-col gap-5 mt-10 px-5 animate-fade">
  <Header />
  <ListItem />
</div>
</template>

<style scoped lang="scss">

</style>