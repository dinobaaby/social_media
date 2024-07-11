<script setup>
import { HomeOutline, LogoFacebook, LogoGoogle, MailOutline } from '@vicons/ionicons5'
</script>

<template>
  <div class="w-full h-screen flex flex-col items-center justify-center px-5">
    <div
      class="w-full xs:h-screen sm:h-screen md:h-2/3 lg:h-screen my-auto grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 md:shadow sm:bottom-0 md:border md:border-[#eee] rounded-lg p-5"
    >
      <div class="flex flex-col xs:p-0 sm:px-10 md:px-10 lg:px-20 xl:px-40 gap-2 justify-center">
        <span
          class="flex items-center gap-4 font-poppins xs:text-sm sm:text-sm md:text-lg mb-5 text-fuchsia-900 font-medium"
        >
          <n-icon :component="HomeOutline" class="text-fuchsia-900" />
          <span>DinoSocial</span> /
          <router-link :to="{ name: 'signup' }">
            <span class="hover:underline transition-all cursor-pointer">SignUp</span>
          </router-link>
        </span>
        <span class="flex flex-col gap-2">
          <span class="text-2xl font-medium font-poppins">Hello</span>
          <span class="text-2xl font-medium font-poppins">Welcome Back</span>
        </span>
        <span class="text-[12px] font-poppins text-gray-400">Sign in to continue</span>
        <form>
          <div class="flex flex-col gap-2 mb-4">
            <label class="text-sm font-poppins">Email</label>
            <n-input placeholder="Email">
              <template #suffix>
                <n-icon :component="MailOutline" />
              </template>
            </n-input>
          </div>
          <div class="flex flex-col gap-2 mb-4">
            <label class="text-sm font-poppins">Password</label>
            <n-input
              type="password"
              show-password-on="mousedown"
              placeholder="Password"
              :maxlength="8"
            />
          </div>
          <div class="flex items-center justify-between font-poppins font-medium mb-4">
            <n-checkbox label="Remember me" />
            <router-link :to="{ name: 'forgot-password' }">
              <span class="text-sm text-blue-400 font-normal underline cursor-pointer"
                >Forgot Password</span
              >
            </router-link>
          </div>
          <n-button type="success">Login</n-button>
        </form>
        <div class="flex flex-col gap-2 mt-2">
          <div
            class="relative flex cursor-pointer items-center justify-center gap-3 py-2 w-full border rounded font-medium font-poppins text-blue-500 border-blue-500 transition-all animate-fade animate-duration-1000 hover:bg-opacity-50 group"
          >
            <n-icon :component="LogoFacebook" />
            <span>Login with Facebook</span>
            <div
              class="absolute inset-0 bg-blue-500 opacity-0 transition-all duration-500 ease-out group-hover:opacity-50 group-hover:scale-x-100 z-0"
            ></div>
          </div>

          <div
            class="relative flex cursor-pointer items-center justify-center gap-3 py-2 w-full border rounded font-medium font-poppins text-yellow-400 border-amber-400 transition-all animate-fade animate-duration-1000 hover:bg-opacity-50 group"
          >
            <n-icon :component="LogoGoogle" />
            <span>Login with Google</span>
            <div
              class="absolute inset-0 bg-yellow-400 opacity-0 transition-all duration-500 ease-out group-hover:opacity-50 group-hover:scale-x-100 z-0"
            ></div>
          </div>
        </div>
      </div>

      <img
        class="w-full xs:hidden sm:hidden md:block h-[100%] object-cover rounded-lg animate-fade animate-duration-1000"
        alt=""
        src="../../assets/auth/loginbanner.png"
        height="768"
        width="1024"
      />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
