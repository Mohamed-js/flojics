<script setup>
import { ref, onMounted } from 'vue';
import BookingFrom from '../components/BookingFrom.vue';
import Alert from '../components/Alert.vue';
import Popup from '../components/Popup.vue';
import { usePopupStore } from '@/stores/popup'
import { getHotels } from '../helpers'
import HotelCards from '../components/HotelCards.vue';

const popup = usePopupStore();
const hotels = ref([]);
const hotelId = ref(null);

async function fetchHotels() {
  try {
    const data = await getHotels();
    hotels.value = data;
  } catch (error) {
    console.error('Error retrieving hotels:', error);
  }
}

function handleBookingForm(id) {
  hotelId.value = id
  popup.toggleBookingForm()
}

onMounted(() => {
  fetchHotels();
});

</script>

<template>
  <div class="home min-h-screen">
    <HotelCards :hotels="hotels" :action="handleBookingForm" actionText="Book" />

    <Popup v-if="popup.isPopupShowing">
      <Alert message="Thank you for booking with us." v-if="popup.isAlertShowing" />
      <BookingFrom v-if="popup.isBookingFormShowing" :hotelId="hotelId" />
    </Popup>
  </div>
</template>
