<template>
  <div>
    <h1>Home Page</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: 'Product A' },
        { id: 2, name: 'Product B' },
      ],
    };
  },
};
</script>
