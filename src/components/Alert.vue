<script setup>
import CheckIcon from './icons/CheckIcon.vue'
const props = defineProps(['message'])
</script>

<template>
    <div class="bg-white flex flex-col items-center justify-center p-3 px-4 rounded-md alert">
        <CheckIcon />
        <p class="mt-2 text-center">{{ message }}</p>
    </div>
</template>


<style scoped>
.alert {
    min-height: 150px;
    max-width: min(300px, 100%);
}
</style>