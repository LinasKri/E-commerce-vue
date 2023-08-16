<template>
  <div>
    <Banner />
    <ProductList />
  </div>
</template>

<script>
import Banner from '../components/home/Banner.vue';
import ProductList from '../components/home/ProductList.vue';

export default {
  components: {
    Banner,
    ProductList,
  },
};
</script>
