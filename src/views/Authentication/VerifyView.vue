<template>
  <div class="w-full min-h-screen flex items-center focus:outline-blue-400 justify-center">
    <div
      class="xs:w-full sm:w-full md:max-w-[400px] max-w-[490px] flex flex-col gap-8 items-center xs:px-2 sm:px-2 md:px-10 py-14 border border-[#eee] shadow-sm rounded animate-fade animate-duration-700"
    >
      <div class="flex flex-col gap-3 items-center">
        <span class="font-poppins text-lg font-semibold tracking-wide">Email Verification</span>
        <span class="font-poppins text-[12px] font-medium text-gray-400">
          We have sent a code to your email {{ email }}</span
        >
        <form class="flex flex-col items-center justify-between gap-8">
          <div class="flex items-center justify-between gap-4">
            <input
              id="code"
              type="text"
              v-model="code.code1"
              class="border border-[#eee] rounded w-16 h-16 text-lg font-poppins font-semibold p-2 text-center focus:outline-blue-400"
              @input="handleInput(0)"
            />
            <input
              id="code"
              type="text"
              v-model="code.code2"
              class="border border-[#eee] rounded w-16 h-16 text-lg font-poppins font-semibold p-2 text-center focus:outline-blue-400"
              @input="handleInput(1)"
            />
            <input
              id="code"
              type="text"
              v-model="code.code3"
              class="border border-[#eee] rounded w-16 h-16 text-lg font-poppins font-semibold p-2 text-center focus:outline-blue-400"
              @input="handleInput(2)"
            />
            <input
              id="code"
              type="text"
              v-model="code.code4"
              class="border border-[#eee] rounded w-16 h-16 text-lg font-poppins font-semibold p-2 text-center focus:outline-blue-400"
              @input="handleInput(3)"
            />
          </div>
          <div v-if="error" class="flex items-start">
            <span class="text-sm font-poppins text-red-500">{{ error }}</span>
          </div>
          <n-button
            @click="verify"
            class="font-poppins font-medium text-sm w-full h-12"
            type="success"
            >Verify</n-button
          >
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const email = route.params.email
const error = ref('')
const code = ref({
  code1: '',
  code2: '',
  code3: '',
  code4: ''
})

let codes = []

const handleInput = (index) => {
  const currentCode = code.value[`code${index + 1}`]
  if (!/^\d$/.test(currentCode)) {
    code.value[`code${index + 1}`] = ''
  }

  if (Number.isInteger(Number(currentCode))) {
    if (index < 4 && currentCode && typeof Number(currentCode) === 'number') {
      codes[index].classList.remove('border-red-400')
      if (index < 3) document.querySelectorAll('input')[index + 1].focus()
      error.value = ''
    }
  } else {
    codes[index].classList.add('border-red-400')
    error.value = 'Please format the code correctly'
  }
}

const verify = () => {
  const fullCode = `${code.value.code1}${code.value.code2}${code.value.code3}${code.value.code4}`
  if (fullCode.length < 4) {
    error.value = 'Please enter a valid code'
  } else {
    error.value = false
    console.log(`Verification code: ${fullCode}`)
  }
}
onMounted(() => {
  codes = document.querySelectorAll('input[type="text"]')
  codes[0].focus()
  console.log(codes)
})
</script>

<style lang="scss" scoped></style>
