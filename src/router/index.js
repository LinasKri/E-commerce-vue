import { createRouter, createWebHistory } from 'vue-router';
import ProductDetails from '../views/ProductDetails.vue';
import Cart from '../views/Cart.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue'),
    },
    {
      path: '/product/:id',
      component: ProductDetails,
    },
    {
      path: '/cart',
      component: Cart,
    },
  ],
});

export default router;
