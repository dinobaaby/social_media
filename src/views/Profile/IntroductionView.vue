<script setup>
import {defineAsyncComponent} from "vue";
const DetailIntroduction = defineAsyncComponent(() => import('@/components/main/DetailIntroduction.vue'))
const ProfileCreatePost = defineAsyncComponent(() => import('@/components/post/ProfileCreatePost.vue'))
const Photos = defineAsyncComponent(() => import('@/components/main/PhotosCpn.vue'))
const ExprienceTimeline = defineAsyncComponent(() => import('@/components/main/ExperienceTimelineCpn.vue'))
const PostCart = defineAsyncComponent(() => import('@/components/post/PostCardCpn.vue'))
const Skills = defineAsyncComponent(() => import('@/components/main/SkillsCpn.vue'))
</script>

<template>
<div class="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 grid-cols-3 gap-5 mt-10 px-5">
  <div class="flex flex-col gap-5">
      <DetailIntroduction/>
      <Photos/>
      <Skills/>
  </div>

  <div class="xs:col-span-1 sm:col-span-1 md:col-span-2 col-span-2 flex flex-col gap-5">

    <ProfileCreatePost/>
    <ExprienceTimeline/>
    <PostCart/>
    <PostCart/>

  </div>
</div>

</template>

<style scoped lang="scss">

</style>