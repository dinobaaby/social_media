<template>
  <router-link>
    <div
      class="h-12 flex items-center gap-4 hover:bg-gray-200 rounded px-4 font-medium font-poppins transition-colors cursor-pointer animate-fade"
    >
      <img :src="data.image" class="h-10 w-10 object-cover rounded-full" alt="" />
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
