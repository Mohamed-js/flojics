<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue';
const props = defineProps({
    header: {
        type: String,
        required: true
    },
    tagline: {
        type: String,
        required: true
    },
    submitText: {
        type: String,
        required: true
    },
    handleSubmit: {
        type: Function,
        required: true
    },
    referalText: {
        type: String,
        required: true
    },
    referalLink: {
        type: String,
        required: true
    },
})

const email = ref('');
const password = ref('');
</script>

<template>
    <div class="flex flex-col items-center justify-center mt-20 shadow-md bg-white p-5 rounded-md max-w-lg mx-auto">
        <h1 class="font-bold text-lg text-green-600">{{ header }}</h1>
        <h2 class="text-sm">{{ tagline }}</h2>
        <br>
        <form class="flex flex-col items-center justify-center w-full" @submit.prevent="handleSubmit(email, password)">
            <input type="email" placeholder="Email" v-model="email" required>
            <input type="password" placeholder="Password" minlength="6" v-model="password" required>
            <button class="bg-green-600 text-white p-1 px-3 rounded-sm">{{ submitText }}</button>
        </form>
        <br>
        <RouterLink :to="referalLink" class="self-start text-sm">{{ referalText }}</RouterLink>
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