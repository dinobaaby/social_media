<script setup>
import { defineAsyncComponent } from 'vue'

const BookMarkActions = defineAsyncComponent(
  () => import('@/components/BookMarks/BookMarkListActionCpn.vue')
)

const Groups = defineAsyncComponent(() => import('@/components/BookMarks/GroupListCpn.vue'))
</script>
<template>
  <div class="flex flex-col gap-2 p-2 animate-fade animate-duration-1000">
    <BookMarkActions />
    <hr />
    <Groups />
  </div>
</template>
<style lang="scss" scoped></style>
