export default [
  {
    name: 'friends',
    path: '/friends',
    component: import('@/views/Friends/FriendLayoutView.vue'),
    children: [
      {
        name: 'friendshome',
        path: '',
        component: import('@/views/Friends/FriendView.vue')
      }
    ]
  }
]
