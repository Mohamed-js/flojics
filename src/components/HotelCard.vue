<script setup>
import StarRating from 'vue-star-rating'


const props = defineProps({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    action: {
        type: Function,
    },
    actionText: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="shadow-md rounded-md flex justify-between overflow-hidden bg-white sm:flex-col sm:w-[49%] md:w-[32%] lg:w-[24%]"
        v-bind="props">
        <div class="overflow-hidden p-3">
            <h2>{{ name }}</h2>
            <small class="block truncate hover:text-clip hover:whitespace-pre-wrap">{{ address }}</small>
            <star-rating :rating="rating" active-color="green" star-size="20" :showRating="false" :increment=".5"
                animate></star-rating>
        </div>
        <button class="bg-green-600 text-white p-3" @click="$emit('action', id)">{{ actionText }}</button>
    </div>
</template>
