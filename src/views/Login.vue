<script setup>
import { useUserStore } from '@/stores/user'
import router from '../router';
import { login } from '@/helpers.js';
import AuthForm from '../components/AuthForm.vue';

const userStore = useUserStore();

const handleSubmit = async (email, password) => {
  try {
    const user = await login(email, password);
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
  <AuthForm header="Welcome Back To" tagline="Your Gate To The World Hotels!" submitText="Login"
    :handleSubmit="handleSubmit" referalText="Don't have an account?" referalLink="/signup" />
</template>
