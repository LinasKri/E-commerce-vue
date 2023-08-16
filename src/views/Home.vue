<template>
  <div>
    <h1>Home Page</h1>
    <ul v-if="products.length">
      <li v-for="product in products" :key="product.id">
        {{ product.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import productService from '@/services/productService';

export default {
  setup() {
    const products = ref([]);

    onMounted(() => {
      productService
        .getProducts()
        .then((response) => {
          products.value = response.data;
        })
        .catch((error) => {
          console.error('Error fetching products:', error);
        });
    });

    return { products };
  },
};
</script>
