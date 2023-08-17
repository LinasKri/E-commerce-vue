<template>
  <div class="py-5">
    <div class="container px-4 px-lg-5 mt-5">
      <div
        v-if="products.length"
        class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="col mb-5 h-100"
        >
          <router-link
            :to="{ name: 'product-details', params: { id: product.id } }"
          >
            <div class="card h-100">
              <!-- ... existing code ... -->

              <!-- Product image-->
              <div class="product-image-container">
                <img
                  class="card-img-top p-2"
                  :src="product.image"
                  :alt="product.title"
                />
              </div>
              <!-- Product details-->
              <div class="card-body p-4">
                <div class="text-center">
                  <!-- Product name-->
                  <h5 class="fw-bolder text-truncate">{{ product.title }}</h5>
                  <!-- Product reviews-->
                  <div
                    class="d-flex justify-content-center small text-warning mb-2"
                  >
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-half"></div>
                    <div class="bi-star"></div>
                  </div>
                  <!-- Product price-->
                  <span class="text-muted text-decoration-line-through"
                    >${{ product.price }}</span
                  >
                  ${{ product.price }}
                </div>
              </div>
              <!-- Product actions-->
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a class="btn btn-outline-dark mt-auto" href="#"
                    >Add to cart</a
                  >
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import productService from '../../services/productService.js';

const products = ref([]);
const router = useRouter();

const goToProductDetails = (productId) => {
  router.push({ name: 'ProductDetails', params: { id: productId } });
};

onMounted(() => {
  productService
    .getProducts()
    .then((response) => {
      products.value = response.data;
    })
    .catch((error) => {
      console.error('Error fetching products:', error);
    });

  return { products };
});
</script>

<style>
.product-image-container {
  height: 16rem;
  overflow: hidden;
}
.card-img-top {
  height: 100%;
  object-fit: scale-down;
}

.card {
  transition: transform 0.3s ease; /* This adds a smooth transition for the transform property */
}

.card:hover {
  transform: scale(1.05); /* This will scale the card up by 5% when hovered */
}

/* Optional: Add a shadow on hover for a more elevated look */
.card:hover {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
