<script setup>
import { ref, onMounted } from 'vue';
import { getUserBookings, getBookingsHotels, removeBooking, parameterizeIds } from '../helpers'
import HotelCards from '../components/HotelCards.vue';

const userId = JSON.parse(sessionStorage.getItem("user")).id
const hotels = ref([]);

async function getHotels() {
  try {
    const userBookings = await getUserBookings(userId);
    if (Array.isArray(userBookings)) {
      const bookingIds = parameterizeIds(userBookings);
      const bookingsHotels = await getBookingsHotels(bookingIds);
      hotels.value = bookingsHotels;
    }
  } catch (error) {
    console.error('Error retrieving hotels:', error);
  }
}

async function handleCancelBooking(hotelId) {
  try {
    await removeBooking(hotelId, userId);
    await getHotels();
  } catch (error) {
    console.error('Error canceling booking:', error);
  }
}

onMounted(() => {
  getHotels();
});
</script>

<template>
  <div class="bookings">
    <HotelCards :hotels="hotels" :action="handleCancelBooking" actionText="Cancel" />
  </div>
</template>
