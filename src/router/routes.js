const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/HomePage.vue') }, // Home como ruta raíz
      { path: 'pokemons', component: () => import('../components/Pokemon/PokemonList.vue') },
      { path: 'pokemon/:id', component: () => import('../components/Pokemon/PokemonDetail.vue') },
    ],
  },
];

export default routes;
