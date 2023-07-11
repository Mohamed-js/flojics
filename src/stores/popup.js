import { ref } from "vue";
import { defineStore } from "pinia";

export const usePopupStore = defineStore("popup", () => {
  const isPopupShowing = ref(false);
  function togglePopup() {
    isPopupShowing.value++;
  }

  const isBookingFormShowing = ref(false);
  function toggleBookingForm() {
    isBookingFormShowing.value = !isBookingFormShowing.value;
    togglePopup();
  }
  const isAlertShowing = ref(false);
  function toggleAlert() {
    isAlertShowing.value = !isAlertShowing.value;
    togglePopup();
  }

  function close() {
    isPopupShowing.value = false;
    isBookingFormShowing.value = false;
    isAlertShowing.value = false;
  }

  return {
    isBookingFormShowing,
    toggleBookingForm,
    isAlertShowing,
    toggleAlert,
    isPopupShowing,
    close,
  };
});
