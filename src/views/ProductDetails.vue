<template>
  <div v-if="product && product.rating">
    <div class="container my-5">
      <div class="row">
        <div class="col-md-6">
          <img
            :src="product.image"
            alt="product.title"
            class="img-fluid rounded product-image"
          />
        </div>
        <div class="col-md-6">
          <h1 class="mb-4">{{ product.title }}</h1>
          <p class="text-muted">{{ product.category }}</p>
          <h3 class="mb-4">${{ product.price }}</h3>
          <p>{{ product.description }}</p>
          <div class="my-3">
            <span class="me-2">Rating: {{ product.rating.rate }}</span>
            <span class="text-muted">({{ product.rating.count }} reviews)</span>
          </div>
          <button class="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
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

<style scoped>
.product-image {
  width: 100%;
  max-width: 400px;
  display: block;
  margin: 20px auto;
}
</style>
