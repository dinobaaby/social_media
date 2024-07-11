<template>
  <div class="w-full max-h-screen fixed">
    <div class="xs:hidden sm:hidden md:hidden lg:block block"><Header /></div>
    <div
      class="min-h-screen w-full grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 grid-cols-5 gap-5 bg-[#eaecee]"
    >
      <div
        class="xs:hidden sm:hidden md:hidden col-span-1 lg:flex flex-col"
        v-if="isNotificationPage"
      ></div>
      <div
        v-if="!isNotificationPage"
        class="xs:hidden sm:hidden md:hidden col-span-1 lg:flex flex-col animate-fade"
      >
        <n-infinite-scroll class="max-h-screen">
          <Bookmark />
        </n-infinite-scroll>
      </div>

      <div
        class="flex flex-col xs:col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2 col-span-2 animate-fade"
      >
        <div class="xs:block sm:block md:block lg:hidden hidden mb-2.5"><Header /></div>
        <n-infinite-scroll class="max-h-screen">
          <div class="mb-3"></div>
          <RouterView />
        </n-infinite-scroll>
      </div>
      <div
        class="xs:hidden sm:hidden md:hidden col-span-1 lg:flex flex-col"
        v-if="isNotificationPage"
      ></div>
      <div
        v-if="!isNotificationPage"
        class="xs:hidden sm:hidden md:hidden col-span-1 lg:flex flex-col mt-2 animate-fade"
      >
        <n-infinite-scroll class="max-h-[calc(100vh-40px)] flex flex-col gap-3">
          <AdvertisementList />
          <hr class="mt-2" />
          <PageAndYourPage />
          <hr />
          <ListFriend />
          <hr class="mt-2" />
          <ChatComunications />
          <hr class="mt-2" />
          <GroupChat />
        </n-infinite-scroll>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const Header =
  defineAsyncComponent(() => import('@/components/home/layout/HeaderLayoutCpn.vue')) || null
const Bookmark = defineAsyncComponent(() => import('../Bookmarks/BookmarkView.vue'))
const AdvertisementList = defineAsyncComponent(
  () => import('@/components/advertisement/AdvertisementListCpn.vue')
)
const PageAndYourPage = defineAsyncComponent(
  () => import('@/components/pageandyourpage/PageAndYourPageCpn.vue')
)
const ListFriend = defineAsyncComponent(
  () => import('@/components/friends/FriendListCardItems.vue')
)
const ChatComunications = defineAsyncComponent(
  () => import('@/components/chatcomunication/ChatComunicationListItemCpn.vue')
)
const GroupChat = defineAsyncComponent(() => import('@/components/group/ChatGroupListCpn.vue'))

const isNotificationPage = computed(() => route.name === 'notification')
</script>

<style lang="scss" scoped></style>
