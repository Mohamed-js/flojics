<script setup>
import HotelCard from './HotelCard.vue';
import { defineProps } from 'vue';

const props = defineProps({
    hotels: {
        type: Array,
        required: true
    },
    action: {
        type: Function,
        required: true
    },
    actionText: {
        type: String,
        required: true
    }
});
</script>

<template>
    <div class="flex flex-col gap-3 py-4" v-if="hotels && hotels.length">
        <HotelCard v-for="hotel in hotels" :key="hotel.id" :id="hotel.id" :name="hotel.name" :rating="hotel.rating"
            :address="hotel.address" :actionText="actionText" @action="action" />
    </div>
    <p v-else>You don't have any active bookings now.</p>
</template>
