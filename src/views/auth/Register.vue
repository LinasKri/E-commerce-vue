<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h2 class="mb-0">Register</h2>
          </div>
          <div class="card-body">
            <form @submit.prevent="register">
              <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="email"
                  placeholder="Enter email"
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  v-model="password"
                  placeholder="Enter password"
                />
              </div>
              <div class="mb-3">
                <button type="submit" class="btn btn-primary w-100">
                  Register
                </button>
              </div>
              <div class="mb-3 text-center">
                <p class="text-muted">or</p>
                <button
                  @click="registerWithGoogle"
                  class="btn btn-outline-secondary"
                >
                  <i class="bi bi-google"></i> Register with Google
                </button>
              </div>
              <div v-if="error" class="alert alert-danger">
                {{ error }}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { auth } from '@/firebase/firebaseInit';

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const error = ref('');

    const register = async () => {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.value,
          password.value
        );
        const user = userCredential.user;

        const cartRef = doc(collection(auth, 'carts'), user.uid);
        await setDoc(cartRef, { items: [] });
        console.log('Registered');
      } catch (err) {
        error.value = err.message;
      }
    };

    const registerWithGoogle = async () => {
      const provider = new GoogleAuthProvider();
      try {
        const userCredential = await signInWithPopup(auth, provider);
        const user = userCredential.user;

        const cartRef = doc(collection(auth, 'carts'), user.uid);
        const docSnap = await getDoc(cartRef);
        if (!docSnap.exists()) {
          await setDoc(cartRef, { items: [] });
        }
        console.log('Registered with Google');
      } catch (err) {
        error.value = err.message;
      }
    };

    return { email, password, register, error, registerWithGoogle };
  },
};
</script>
