<script setup>
import HotelCard from './HotelCard.vue';
import { defineProps } from 'vue';
import { XyzTransitionGroup } from "@animxyz/vue3"

const props = defineProps({
    hotels: {
        type: Array,
        required: true
    },
    action: {
        type: Function,
    },
    actionText: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        required: true
    }
});
</script>

<template>
    <XyzTransitionGroup v-if="hotels && hotels.length" appear
        class="flex flex-col gap-3 py-4 sm:flex-row sm:flex-wrap sm:max-w-5xl sm:mx-auto"
        xyz="fade duration-2 appear-front-2 small-3 appear-small-0 stagger-1 out-stagger-0">
        <HotelCard v-for="hotel in hotels" :key="hotel.id" :id="hotel.id" :name="hotel.name" :rating="hotel.rating"
            :address="hotel.address" :actionText="actionText" @action="action" />
    </XyzTransitionGroup>


    <p v-else class="min-h-[80vh] flex items-center justify-center">{{ placeholder }}</p>
</template>
