<template>
  <div>
    <h1>{{ product.title }}</h1>
    <p>{{ product.description }}</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import productService from '@/services/productService';

export default {
  setup(props, { attrs }) {
    const product = ref({});

    onMounted(() => {
      const productId = attrs.id;
      productService
        .getProductById(productId)
        .then((response) => {
          product.value = response.data;
        })
        .catch((error) => {
          console.error(`Error fetching product with ID ${productId}:`, error);
        });
    });

    return { product };
  },
};
</script>
