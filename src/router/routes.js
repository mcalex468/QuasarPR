const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: 'items', component: () => import('pages/ItemsList.vue') },
      { path: 'item/:id', component: () => import('pages/ItemDetail.vue') }
    ]
  }
];

export default routes;
