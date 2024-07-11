<script setup>
import { defineAsyncComponent } from 'vue'
import {
  ChatbubbleOutline,
  EllipsisVertical,
  Heart,
  ShareSocial,
  ThumbsDownSharp,
  ThumbsUpSharp
} from '@vicons/ionicons5'
import photo9 from '../../assets/profile/photos/photo9.jpeg'
import { ref } from 'vue'
const CommentItem = defineAsyncComponent(() => import('@/components/comment/CommentItemCpn.vue'))

// const showPostAcion = ref(false)
const isShowCreateComment = ref(false)
const isShowComment = ref(0)
const handleShowComment = () => {
  isShowComment.value = 1
}
</script>

<template>
  <div
    class="border bg-white border-[#eee] rounded-lg p-5 flex flex-col gap-4 animate-fade-up animate-duration-1000"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <n-avatar round size="medium" :src="photo9" />
        <span class="text-sm font-medium font-poppins">Hieu Trinh</span>
        <li class="text-[12px] font-normal text-gray-400">15 min ago</li>
      </div>
      <n-icon :component="EllipsisVertical" />
    </div>
    <div>
      <span class="text-sm text-gray-600">
        Ti beavsan buz bogam vugfeam fecpujnap nom wuwjav mizefwu nameg tascu posmuj wohlas tezog
        digesjot diw gidiv. Lew jolormi cu tuzih imazirege temutti balhuhag lesgalib aw wug ozumuado
        we udegi eljuw tagleveh wos rig.
      </span>
    </div>
    <div>
      <router-link :to="{ name: 'post', params: { id: 12412412 } }">
        <img
          alt=""
          :src="photo9"
          class="rounded object-cover xs:max-h-60 sm:max-h-60 md:max-h-80 lg:max-h-96 xl:max-h-96 w-full"
      /></router-link>
    </div>
    <div class="flex items-center justify-between border border-[#eee] rounded px-3 py-2">
      <div class="bg-none">
        <n-popover class="xs:ml-0 md:ml-24 bg-none" trigger="hover" raw :show-arrow="false">
          <template #trigger>
            <div class="flex items-center gap-2 bg-none">
              <n-icon size="medium" :component="ThumbsUpSharp" class="text-blue-500" />
              <span class="text-[12px] font-poppins font-normal">Like</span>
            </div>
          </template>
          <div class="flex items-center gap-4 p-3 rounded-2xl bg-gray-200">
            <n-icon
              size="medium"
              :component="ThumbsDownSharp"
              class="hover:scale-150 transition text-blue-500"
            />
            <n-icon
              size="medium"
              :component="Heart"
              class="hover:scale-150 transition text-red-600"
            />
            <n-icon
              size="medium"
              :component="ThumbsDownSharp"
              class="hover:scale-150 transition text-blue-500"
            />
            <n-icon
              size="medium"
              :component="ThumbsDownSharp"
              class="hover:scale-150 transition text-blue-500"
            />
            <n-icon
              size="medium"
              :component="ThumbsDownSharp"
              class="hover:scale-150 transition text-blue-500"
            />
          </div>
        </n-popover>
      </div>
      <div
        @click="isShowCreateComment = !isShowCreateComment"
        class="flex items-center gap-2 hover:bg-gray-300 transition-colors px-2 py-2 rounded cursor-pointer"
      >
        <n-icon :component="ChatbubbleOutline" />
        <span class="text-[12px] font-poppins font-normal">Comment</span>
      </div>
      <div>
        <n-icon :component="ShareSocial" />
      </div>
    </div>
    <div class="flex items-center justify-end gap-2">
      <span
        @click="handleShowComment"
        class="text-[12px] font-poppins cursor-pointer hover:text-blue-500 hover:underline transition-all"
        >1.9K comment</span
      >
      <span
        class="text-[12px] font-poppins cursor-pointer hover:text-blue-500 hover:underline transition-all"
        >244 shares</span
      >
    </div>
    <div v-if="isShowCreateComment" class="animate-fade border-t pt-4">
      <div class="flex items-center justify-between gap-2">
        <n-avatar class="min-w-[30px]" round size="small" :src="photo9" />
        <n-input type="text" placeholder="Comment" />
        <n-button type="info" size="medium">Comment</n-button>
      </div>
    </div>
    <span
      v-if="isShowComment >= 1"
      @click="handleShowComment"
      class="text-[12px] text-blue-500 font-poppins cursor-pointer hover:text-blue-500 hover:underline transition-all"
      >Show all</span
    >
    <div class="animate-fade duration-500 transition-all" v-if="isShowComment === 1">
      <CommentItem />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
