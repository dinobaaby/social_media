<template>
  <div class="w-full h-screen bg-[#eaecee]">
    <Header />
    <div
      class="w-full h-screen grid xs:grid-cols-1 sm:grid-col-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-5"
    >
      <div class="xs:col-span-1 sm:col-span-1 col-span-1">
        <div class="xs:w-2/3 sm:w-2/3 md:w-full lg:w-full h-full flex flex-col gap-3 bg-white p-3">
          <div class="flex items-center justify-between">
            <span class="flex text-lg font-medium font-poppins">Friends</span>
            <n-icon
              class="w-10 h-10 flex items-center justify-center text-xl font-medium rounded-full bg-[#f0f2f5] cursor-pointer"
              :component="Settings"
            />
          </div>
        </div>
      </div>
      <div class="xs:hidden sm:hidden md:col-span-2 lg:col-span-3 xl:col-span-4">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Settings } from '@vicons/ionicons5'
import { defineAsyncComponent } from 'vue'
import { RouterView } from 'vue-router'

const Header = defineAsyncComponent(() => import('@/components/home/layout/HeaderLayoutCpn.vue'))
</script>

<style lang="scss" scoped></style>
