<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import { useUserStore } from '@/stores/user'
import router from './router';
import { handleAuthenticationRedirection } from "./helpers";

handleAuthenticationRedirection(useUserStore, router)
</script>

<template>
  <Navbar />
  <main class="px-2 sm:px-3 pt-20 bg-slate-50">
    <RouterView />
  </main>
</template>
