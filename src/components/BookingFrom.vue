<script setup>
import { reactive } from 'vue';
import UserIcon from './icons/UserIcon.vue'
import { usePopupStore } from '@/stores/popup'
import { addBooking } from '@/helpers'

const popup = usePopupStore()
const props = defineProps({
    hotelId: {
        type: Number,
        required: true
    }
})

const formData = reactive({
    name: '',
    phone: '',
    email: ''
})
const userId = JSON.parse(sessionStorage.getItem("user")).id

const handleSubmit = async () => {
    const booking = await addBooking({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        user_id: userId,
        hotel_id: props.hotelId,
    })
    if (booking.id) {
        popup.close();
        return popup.toggleAlert();
    }
    alert("Sorry, an error happened.")
}
</script>

<template>
    <div class="form p-3 py-5 rounded-md bg-white flex flex-col items-center justify-center animate-appear-slow">
        <UserIcon class="m-5 text-green-600" />
        <form class="w-full" @submit.prevent="handleSubmit">
            <label for="name">Name</label>
            <input v-model="formData.name" name="name" placeholder="eg, Mohamed Atef" required />
            <label for="phone">Phone</label>
            <input v-model="formData.phone" name="phone" placeholder="eg, +201*********" type="tel" required />
            <label for="email">Email</label>
            <input v-model="formData.email" name="email" placeholder="eg, example@gmail.com" type="email" required />
            <div class="flex justify-center mt-5">
                <button class="bg-green-600 text-white font-semibold rounded-md p-2 px-5">Confirm Reservation</button>
            </div>
        </form>
    </div>
</template>

<style scoped>
.form {
    max-width: 500px;
    width: 100%;
}

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
