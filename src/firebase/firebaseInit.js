// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBwBmLKywQ_zhLbdla_g_AiTPd2CrNGuGw',
  authDomain: 'e-commerce-vue-linkri.firebaseapp.com',
  projectId: 'e-commerce-vue-linkri',
  storageBucket: 'e-commerce-vue-linkri.appspot.com',
  messagingSenderId: '292846789458',
  appId: '1:292846789458:web:13cad13a3b5505fead508b',
  measurementId: 'G-0FXWFFXKHK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const storage = firebase.storage();

export { storage };
