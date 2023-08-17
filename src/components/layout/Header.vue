<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container px-4 px-lg-5">
        <router-link to="/" class="navbar-brand">Shopping App</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#!">Home</a>
            </li>
            <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >Shop</a
              >
              <!-- //TODO: update navbar -->

              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#!">All Products</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#!">Popular Items</a></li>
                <li><a class="dropdown-item" href="#!">New Arrivals</a></li>
              </ul>
            </li>
          </ul>

          <div v-if="authState === 'authenticated'">
            <a class="btn btn-outline-primary me-2" @click="logout">Logout</a>
          </div>
          <div v-else-if="authState === 'unauthenticated'">
            <a class="btn btn-outline-primary me-2" href="/login">Login</a>
            <a class="btn btn-primary" href="/register">Sign Up</a>
          </div>

          <form class="d-flex ms-3">
            <button class="btn btn-outline-dark" type="submit">
              <i class="bi-cart-fill me-1"></i>
              Cart
              <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
            </button>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { auth } from '@/firebase/firebaseInit';

const authState = ref('loading');

auth.onAuthStateChanged((user) => {
  if (user) {
    authState.value = 'authenticated';
  } else {
    authState.value = 'unauthenticated';
  }
});

const logout = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error('Error logging out:', error);
  }
};
</script>
