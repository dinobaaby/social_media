<template>
  <div
    @click.self="emit('closemodal')"
    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[500px] rounded-lg bg-gray-200 p-5 z-10"
  >
    <slot> </slot>
  </div>
</template>

<script setup></script>
