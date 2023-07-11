<script setup>
import { RouterLink } from 'vue-router'
import LogoIcon from './icons/LogoIcon.vue'
import { computed } from 'vue';
import { logout } from '../helpers'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const isAuthenticated = computed(() => userStore.isAuthenticated)
const handleLogout = () => {
    logout(userStore)
}
</script>

<template>
    <header class="fixed left-0 right-0 top-0 bg-white z-10 shadow-sm">
        <nav class="flex py-5 px-1 sm:px-3 items-center justify-between">
            <div class="flex items-center gap-2">
                <LogoIcon class="text-green-600" />
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/bookings">My Bookings</RouterLink>
            </div>
            <RouterLink v-if="!isAuthenticated" to="/login" class="py-1 px-2 text-green-600 rounded-md font-semibold">Login
            </RouterLink>
            <button @click="handleLogout" v-else class="py-1 px-2 text-green-600 rounded-md font-semibold">Logout</button>
        </nav>
    </header>
</template>
