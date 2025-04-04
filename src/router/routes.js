const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/HomePage.vue') }, // Home como ruta raíz
      { path: 'pokemons', component: () => import('../components/Item/ItemList.vue') },
      { path: 'pokemon/:name', name: 'pokemon-detail', component: () => import('../components/Item/ItemDetail.vue') },
    ],
  },
];

export default routes;
