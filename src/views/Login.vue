<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue';
import { useUserStore } from '@/stores/user'
import router from '../router';
import { login } from '@/helpers.js';


const userStore = useUserStore();
const email = ref('');
const password = ref('');

const handleSubmit = async () => {
  try {
    const user = await login(email.value, password.value);
    if (!user) {
      return alert("Wrong credentials...");
    }
    sessionStorage.setItem('user', JSON.stringify(user));
    userStore.authenticate()
    router.push('/');
  } catch (error) {
    console.error('Error during login:', error);
  }
}
</script>

<template>
  <div class="login flex flex-col items-center justify-center mt-20 shadow-md bg-white p-5 rounded-md">
    <h1 class="font-bold text-lg text-green-600">Welcome Back To</h1>
    <h2 class="text-sm">Your Gate To The World Hotels!</h2>
    <br>
    <form class="flex flex-col items-center justify-center w-full" @submit.prevent="handleSubmit">
      <input type="email" placeholder="Email" v-model="email" required>
      <input type="password" placeholder="Password" minlength="6" v-model="password" required>
      <button class="bg-green-600 text-white p-1 px-3 rounded-sm">Login</button>
    </form>
    <br>
    <RouterLink to="/signup" class="self-start text-sm">Don't have an account?</RouterLink>
  </div>
</template>

<style scoped>
input {
  margin-bottom: 1rem;
  width: 100%;
  padding: .5rem;
  border-bottom: 1px solid lightgray;
}

label {
  display: block;
}
</style>
