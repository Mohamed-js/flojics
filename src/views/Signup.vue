<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue';
import { useUserStore } from '@/stores/user'
import router from '../router';
import { signup } from '@/helpers.js';


const userStore = useUserStore();
const email = ref('');
const password = ref('');

const handleSubmit = async () => {
  try {
    const user = await signup({ email: email.value, password: password.value });
    sessionStorage.setItem('user', JSON.stringify(user));
    userStore.authenticate()
    router.push('/');
  } catch (error) {
    console.error('Error during signup:', error);
  }
}
</script>

<template>
  <div class="signup flex flex-col items-center justify-center mt-20 shadow-md bg-white p-5 rounded-md">
    <h1 class="font-bold text-lg text-green-600">Now Join</h1>
    <h2 class="text-sm">The Best Gate To The World Hotels!</h2>
    <br>
    <form class="flex flex-col items-center justify-center w-full" @submit.prevent="handleSubmit">
      <input type="email" placeholder="Email" required v-model="email">
      <input type="password" placeholder="Password" required v-model="password" minlength="6">
      <button class="bg-green-600 text-white p-1 px-3 rounded-sm">Signup</button>
    </form>
    <br>
    <RouterLink to="/login" class="self-start text-sm">Already have an account?</RouterLink>
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
