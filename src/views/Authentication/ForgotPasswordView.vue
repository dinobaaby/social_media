<template>
  <div
    class="w-full h-screen grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 grid-cols-2 items-center justify-center p-5"
  >
    <div class="col-span-1 flex items-center justify-center">
      <img class="w-2/3" :src="forgotpassword" alt="forgospassword" />
    </div>
    <div class="flex items-center justify-center">
      <div class="flex flex-col gap-2">
        <h1 class="xs:text-lg sm:text-lg md:text-lg lg:text-xl font-poppins font-medium">
          ForgotPassword
        </h1>
        <span class="text-sm font-poppins"
          >Enter your email address and we will send you a link to reset your password.</span
        >
        <form class="w-full">
          <div class="flex flex-col gap-2">
            <label for="email">Email</label>
            <n-input v-model:value="email" size="large" placeholder="Enter your email">
              <template #suffix>
                <n-icon class="text-red-500" v-if="error" :component="AlertCircle" />
                <n-icon v-else :component="MailOutline" />
              </template>
            </n-input>
          </div>
          <span v-if="error" class="text-[12px] text-red-500 font-poppins">{{ error }}</span>
          <n-button @click="handleSendEmail" size="large" class="w-full mt-5" type="success"
            >Send</n-button
          >
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import forgotpassword from '@/assets/auth/forgotpassword.jpg'
import { MailOutline, AlertCircle } from '@vicons/ionicons5'
import { ref, watch } from 'vue'
const error = ref('')
const email = ref('')
const handleSendEmail = () => {
  console.log(email.value)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email.value) {
    error.value = 'Email is required'
  } else if (!emailRegex.test(email.value)) {
    error.value = 'Email is invalid'
  } else {
    error.value = ''
  }
}
watch(email, (newValue) => {
  if (newValue) {
    error.value = ''
  }
})
</script>

<style lang="scss" scoped></style>
