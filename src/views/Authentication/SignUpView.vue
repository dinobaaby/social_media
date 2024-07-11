<script setup>
import { PersonOutline, HomeOutline, MailOutline, GlassesOutline, Glasses } from '@vicons/ionicons5'
import { ref } from 'vue'
import photo from '@/assets/profile/photos/photo6.jpeg'
const signUp = ref({
  fullname: '',
  username: '',
  birthdate: Date.now().value,
  email: '',
  password: '',
  confirmPassword: ''
})
</script>

<template>
  <div
    class="min-h-screen grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-5 animate-fade animate-duration-1000"
  >
    <div class="xs:hidden sm:hidden md:flex">
      <img :src="photo" loading="lazy" class="animate-fade animate-delay-300" />
    </div>
    <div
      class="flex flex-col items-center justify-center gap-4 mx-auto animate-fade animate-duration-1000"
    >
      <div class="xs:max-w-[350px] sx:max-w-[350px] md:max-w-[450px] max-w-[450px]">
        <span
          class="flex items-center gap-4 font-poppins xs:text-sm sm:text-sm md:text-lg mb-5 text-fuchsia-900 font-medium"
        >
          <n-icon :component="HomeOutline" class="text-fuchsia-900" />
          <span>DinoSocial</span> /
          <router-link :to="{ name: 'login' }">
            <span class="hover:underline transition-all cursor-pointer">Login</span>
          </router-link>
        </span>
      </div>
      <form class="w-full flex flex-col gap-3">
        <div class="w-full flex items-center justify-between gap-2">
          <div class="flex flex-col gap-2">
            <label
              class="xs:text-[12px] sm:text-[12px] md:text-sm lg:text-lg text-[10px] font-poppins text-gray-400 mb-1"
              >Full name</label
            >
            <n-input placeholder="Fullname">
              <template #prefix>
                <n-icon :component="PersonOutline" />
              </template>
            </n-input>
            <span id="error" class="text-[10px] text-red-500 font-poppins"></span>
          </div>
          <div class="flex flex-col gap-2">
            <label
              class="xs:text-[12px] sm:text-[12px] md:text-sm lg:text-lg text-[10px] font-poppins text-gray-400 mb-1"
              >Username</label
            >
            <n-input placeholder="Username">
              <template #prefix>
                <n-icon :component="PersonOutline" />
              </template>
            </n-input>
            <span id="error" class="text-[10px] text-red-500 font-poppins"></span>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <label
            class="xs:text-[12px] sm:text-[12px] md:text-sm lg:text-lg text-[10px] font-poppins text-gray-400 mb-1"
            >Birthdate</label
          >
          <n-date-picker v-model:value="signUp.birthdate" type="date" />
          <span id="error" class="text-[10px] text-red-500 font-poppins"></span>
        </div>
        <div class="flex flex-col gap-2">
          <label
            class="xs:text-[12px] sm:text-[12px] md:text-sm lg:text-lg text-[10px] font-poppins text-gray-400 mb-1"
            >Email</label
          >
          <n-input placeholder="Email">
            <template #prefix>
              <n-icon :component="MailOutline" />
            </template>
          </n-input>
          <span id="error" class="text-[10px] text-red-500 font-poppins"></span>
        </div>
        <div class="flex flex-col gap-2">
          <label
            class="xs:text-[12px] sm:text-[12px] md:text-sm lg:text-lg text-[10px] font-poppins text-gray-400 mb-1"
            >Password</label
          >
          <n-input
            type="password"
            show-password-on="mousedown"
            placeholder="Password"
            :maxlength="8"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label
            class="xs:text-[12px] sm:text-[12px] md:text-sm lg:text-lg text-[10px] font-poppins text-gray-400 mb-1"
            >Confirm password</label
          >
          <n-input
            type="password"
            show-password-on="click"
            placeholder="Confirm Password"
            :maxlength="8"
          >
            <template #password-visible-icon>
              <n-icon :size="16" :component="GlassesOutline" />
            </template>
            <template #password-invisible-icon>
              <n-icon :size="16" :component="Glasses" />
            </template>
          </n-input>
        </div>
        <n-button class="mt-4 font-poppins font-medium text-sm" type="success">SignUp</n-button>
      </form>
      <div class="flex items-center justify-center">
        <hr class="h-1 flex-grow bg-gray-500" />
        <span class="text-[12px] font-poppins text-gray-400">Or Signup with</span>
        <hr class="h-1 flex-grow bg-gray-500" />
      </div>
      <div class="flex flex-col gap-2 mt-2 w-full">
        <div
          class="relative flex cursor-pointer items-center justify-center gap-3 py-2 w-full border rounded font-medium font-poppins text-blue-500 border-blue-500 transition-all animate-fade animate-duration-1000 hover:bg-opacity-50 group"
        >
          <n-icon :component="LogoFacebook" />
          <span>Signup with Facebook</span>
          <div
            class="absolute inset-0 bg-blue-500 opacity-0 transition-all duration-500 ease-out group-hover:opacity-50 group-hover:scale-x-100 z-0"
          ></div>
        </div>

        <div
          class="relative flex cursor-pointer items-center justify-center gap-3 py-2 w-full border rounded font-medium font-poppins text-yellow-400 border-amber-400 transition-all animate-fade animate-duration-1000 hover:bg-opacity-50 group"
        >
          <n-icon :component="LogoGoogle" />
          <span>Signup with Google</span>
          <div
            class="absolute inset-0 bg-yellow-400 opacity-0 transition-all duration-500 ease-out group-hover:opacity-50 group-hover:scale-x-100 z-0"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
