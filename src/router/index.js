import { createRouter, createWebHistory } from 'vue-router';
import ProductDetails from '../views/ProductDetails.vue';
import Cart from '../views/Cart.vue';
import Login from '../views/auth/Login.vue';
import Register from '../views/auth/Register.vue';

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
      name: 'product-details',
      component: ProductDetails,
      props: true,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
  ],
});

export default router;
