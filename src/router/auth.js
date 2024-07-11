export default [
  {
    path: '/auth',
    name: 'auth',
    component: import('@/views/Authentication/AuhView.vue'),
    children: [
      {
        path: '/auth/login',
        name: 'login',
        component: import('@/views/Authentication/LoginView.vue')
      },
      {
        path: '/auth/signup',
        name: 'signup',
        component: import('@/views/Authentication/SignUpView.vue')
      },
      {
        path: '/auth/:email/verify',
        name: 'verify',
        component: import('@/views/Authentication/VerifyView.vue')
      },
      {
        path: '/auth/forgot-password',
        name: 'forgot-password',
        component: import('@/views/Authentication/ForgotPasswordView.vue')
      }
    ]
  }
]
