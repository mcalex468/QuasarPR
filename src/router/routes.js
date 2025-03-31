const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/HomePage.vue') }, // Home como ruta raíz
      { path: 'items', component: () => import('../components/Item/ItemList.vue') },
      { path: 'item/:id', component: () => import('../components/Item/ItemDetail.vue') },
    ],
  },
];

export default routes;
