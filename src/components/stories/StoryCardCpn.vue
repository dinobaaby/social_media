<template>
  <div
    @click="handleWatchStory"
    class="relative w-36 min-w-36 xs:h-48 sm:h-48 md:h-60 h-60 overflow-hidden rounded group cursor-pointer"
  >
    <img
      class="group-hover:scale-105 transition-all w-full xs:h-48 sm:h-48 md:h-60 h-60 object-cover opacity-80 rounded"
      :src="photo"
    />
    <img
      class="absolute top-3 left-3 w-9 h-9 border-2 border-blue-500 rounded-full object-cover bg-white p-[1px]"
      :src="photo"
    />
    <span
      class="absolute w-full flex justify-center bottom-0 text-[12px] text-white font-poppins font-medium mb-3"
      >Nguyen Viet Hoang</span
    >
  </div>
</template>

<script setup>
import photo from '@/assets/profile/photos/photo1.jpeg'
import { useRouter } from 'vue-router'

const router = useRouter()
const handleWatchStory = () => {
  router.push('/stories/12312')
}
</script>

<style lang="scss" scoped></style>
