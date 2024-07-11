export default [
  {
    path: '/:name',
    name: 'profile',
    component: import('@/views/ProfileView.vue'),
    children: [
      {
        path: '/about',
        name: '/about',
        component: import('@/views/About/AboutView.vue')
      },
      {
        path: '/:name',
        name: 'introduction',
        component: import('@/views/Profile/IntroductionView.vue')
      },
      {
        path: '/:name/followers',
        name: 'followers',
        component: import('@/views/Profile/FollowersView.vue')
      },
      {
        path: '/:name/friends',
        name: 'friends',
        component: import('@/views/Profile/FriendView.vue')
      },
      {
        path: '/:name/gallery',
        name: 'gallery',
        component: import('@/views/Profile/GalleryView.vue')
      }
    ]
  }
]
