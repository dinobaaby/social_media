<template>
  <div class="flex flex-col gap-3 mt-2">
    <span class="pl-2 text-sm font-poppins px-2">Chat of comunication</span>
    <ChatComunicationItem :data="{}" />
    <ChatComunicationItem :data="{}" />
    <ChatComunicationItem :data="{}" />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
const ChatComunicationItem = defineAsyncComponent(
  () => import('@/components/chatcomunication/ChatComunicationItemCpn.vue')
)
</script>

<style lang="scss" scoped></style>
