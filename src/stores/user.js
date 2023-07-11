import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const isAuthenticated = ref(false);

  function authenticate() {
    isAuthenticated.value = true;
  }

  function logout() {
    isAuthenticated.value = false;
  }

  return {
    isAuthenticated,
    authenticate,
    logout,
  };
});
