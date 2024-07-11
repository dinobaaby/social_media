<template>
  <router-link :to="data.to">
    <div
      class="w-full h-12 flex items-center gap-6 hover:bg-gray-200 rounded px-4 font-medium font-poppins transition-colors cursor-pointer animate-fade"
    >
      <n-icon class="ml-2" size="large" :component="data.icon" />
      <span>{{ data.name }}</span>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  data: Object
})
</script>

<style lang="scss" scoped></style>
