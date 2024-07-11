export default [
  {
    name: 'stories',
    path: '/stories/:id',
    component: import('@/views/Stories/StoriesView.vue')
  },
  {
    name: 'create-story',
    path: '/stories/create',
    component: import('@/views/Stories/StoriesCreateView.vue')
  }
]
