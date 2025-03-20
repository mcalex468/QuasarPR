const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/Home.vue') },
      { path: 'items', component: () => import('../components/Item/ItemList.vue') },
      { path: 'item/:id', component: () => import('../components/Item/ItemDetail.vue') }
    ]
  }
];

export default routes;
