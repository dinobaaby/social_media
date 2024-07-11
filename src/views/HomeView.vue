<script setup>
import { defineAsyncComponent } from 'vue'
const Stories = defineAsyncComponent(() => import('@/components/stories/StoryListCardCpn.vue'))
const CreatePostHome = defineAsyncComponent(() => import('@/components/post/HomeCreatePostCpn.vue'))
const PostCart = defineAsyncComponent(() => import('@/components/post/PostCardCpn.vue'))
</script>

<template>
  <div class="flex flex-col gap-3 px-2">
    <div class="overflow-auto">
      <Stories />
    </div>
    <CreatePostHome />
    <PostCart />
    <PostCart />
    <PostCart />
    <PostCart />
    <PostCart />
  </div>
</template>
