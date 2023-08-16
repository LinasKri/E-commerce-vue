<template>
  <MainLayout>
    <router-view />
  </MainLayout>
</template>

<script>
import MainLayout from './components/layout/MainLayout.vue';

export default {
  components: {
    MainLayout,
  },
};
</script>

<style lang="scss">
body {
  font-family: 'Arial', sans-serif;
}
</style>
