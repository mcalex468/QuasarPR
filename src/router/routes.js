const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/HomePage.vue') },
      { path: 'items', component: () => import('../components/ItemList.vue') },
      { path: 'item/:id', component: () => import('../components/ItemDetail.vue') },
    ],
  },
]

export default routes
