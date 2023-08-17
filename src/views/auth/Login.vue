<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="email"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="password"
        />
      </div>
      <div class="mb-3 form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="rememberMe"
          v-model="rememberMe"
        />
        <label class="form-check-label" for="rememberMe">Remember Me</label>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
    <p class="mt-3">
      <a href="#" @click.prevent="forgotPassword">Forgot Password?</a>
    </p>
    <p class="mt-3" v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {
  auth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  browserLocalPersistence, 
  browserSessionPersistence, 
} from '@/firebase/firebaseInit.js';

const email = ref('');
const password = ref('');
const rememberMe = ref(false);
const errorMessage = ref('');

const router = useRouter();
const login = async () => {
  try {
    await auth.setPersistence(
      rememberMe.value ? browserLocalPersistence : browserSessionPersistence
    );
    await signInWithEmailAndPassword(auth, email.value, password.value);
    router.push('/');
  } catch (error) {
    errorMessage.value = error.message;
  }
};

const forgotPassword = async () => {
  if (!email.value) {
    errorMessage.value =
      'Please enter your email address to reset the password.';
    return;
  }
  try {
    await sendPasswordResetEmail(auth, email.value);
    alert('Password reset email sent. Please check your inbox.');
  } catch (error) {
    errorMessage.value = error.message;
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
</style>
