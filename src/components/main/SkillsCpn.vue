<script setup>

import {CashOutline, LogoDocker, LogoNodejs, LogoReact, LogoVue} from "@vicons/ionicons5";
</script>

<template>
  <div class="flex flex-col gap-4 p-5 border border-[#eee] rounded">
    <div class="flex items-end justify-between">
      <span class="text-lg font-medium font-poppins">Skills</span>
      <span class="text-sm text-blue-500 underline cursor-pointer">View more</span>
    </div>
    <n-timeline>
      <n-timeline-item color="grey" content="Oops">
        <template #icon>
          <n-icon :component="CashOutline">
          </n-icon>
        </template>
      </n-timeline-item>
      <n-timeline-item
          type="success"
          title="Frontend"
          content="success content"
          time="2018-04-03 20:46"
      >
        <template #icon>
          <n-icon :component="LogoReact">
          </n-icon>
        </template>
      </n-timeline-item>
      <n-timeline-item
          type="error"
          title="Backend"
          content="error content"
          time="2018-04-03 20:46"
      >
        <template #icon>
          <n-icon :component="LogoNodejs">
          </n-icon>
        </template>
      </n-timeline-item>
      <n-timeline-item
          type="warning"
          title="Mobile"
          content="warning content"
          time="2018-04-03 20:46"
      >
        <template #icon>
          <n-icon :component="LogoVue">
          </n-icon>
        </template>
      </n-timeline-item>
      <n-timeline-item
          type="info"
          title="DevOps"
          content="info content"
          time="2018-04-03 20:46"
      >
        <template #icon>
          <n-icon :component="LogoDocker">
          </n-icon>
        </template>
      </n-timeline-item>
    </n-timeline>
  </div>
</template>

<style scoped lang="scss">

</style>