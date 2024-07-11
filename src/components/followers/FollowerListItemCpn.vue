<script setup>
import {defineAsyncComponent} from "vue";
const FolowerItem = defineAsyncComponent(() => import('@/components/followers/FollowerItemCpn.vue'))
</script>

<template>
<div class="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-w lg:grid-cols-3 grid-cols-3 gap-5">
  <FolowerItem />
  <FolowerItem />
</div>
</template>

<style scoped lang="scss">

</style>