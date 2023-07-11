<script setup>
import { useUserStore } from '@/stores/user'
import router from '../router';
import { signup } from '@/helpers.js';
import AuthForm from '../components/AuthForm.vue';

const userStore = useUserStore();

const handleSubmit = async (email, password) => {
  try {
    const user = await signup({ email, password });
    if (user === "User already exists.") {
      return alert(user)
    }
    sessionStorage.setItem('user', JSON.stringify(user));
    userStore.authenticate()
    router.push('/');
  } catch (error) {
    console.error('Error during signup:', error);
  }
}
</script>

<template>
  <AuthForm header="Now Join" tagline="YThe Best Gate To The World Hotels!" submitText="Signup"
    :handleSubmit="handleSubmit" referalText="Already have an account?" referalLink="/login" />
</template>
