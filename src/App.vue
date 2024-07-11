<script setup>
</script>

<template>
  <n-loading-bar-provider>
    <n-notification-provider>
      <n-modal-provider>
        <n-dialog-provider>
          <n-scrollbar >
              <RouterView />
          </n-scrollbar>
        </n-dialog-provider>
      </n-modal-provider>
    </n-notification-provider>
  </n-loading-bar-provider>
</template>

<style scoped></style>
