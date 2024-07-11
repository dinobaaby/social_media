export default [
  {
    path: '/post/:id',
    name: 'post',
    component: import('@/views/Post/PostView.vue')
  },
  {
    path: '/post/create',
    name: 'create-post',
    component: import('@/views/Post/CreatePostView.vue')
  }
]
