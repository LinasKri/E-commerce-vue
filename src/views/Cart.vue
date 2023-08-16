<template>
  <div>
    <h1>Cart</h1>
    <ul>
      <li v-for="item in cartItems" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: [{ id: 1, name: 'Product A' }],
    };
  },
};
</script>
