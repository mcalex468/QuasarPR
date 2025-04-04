const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),  // Usamos el layout principal
    children: [
      {
        path: '',  // Página de inicio
        component: () => import('../pages/HomePage.vue'),
      },
      {
        path: 'pokemons',  // Lista de Pokémon
        component: () => import('../components/Item/ItemList.vue'),
      },
      {
        path: 'pokemon/:name',  // Detalle del Pokémon
        name: 'pokemon-detail',
        component: () => import('../components/Item/ItemDetail.vue'),
      },
    ],
  },
];

export default routes;
