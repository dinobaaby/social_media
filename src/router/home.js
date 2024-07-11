export default [
  {
    name: 'home',
    path: '/',
    component: import('@/views/Home/HomeLayout.vue'),
    children: [
      {
        name: 'home',
        path: '',
        component: import('@/views/HomeView.vue')
      },
      {
        name: 'bookmark',
        path: 'bookmarks',
        component: import('@/views/Bookmarks/BookmarkView.vue')
      },
      {
        name: 'notification',
        path: 'notification',
        component: import('@/views/Notification/NotificationView.vue')
      }
    ]
  }
]
