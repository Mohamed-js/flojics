import router from "./router";
import { BASEURL, HEADERS } from "./constants";

export const getHotels = async () => {
  try {
    const response = await fetch(`${BASEURL}/hotels`, {
      headers: HEADERS,
    });
    const hotels = await response.json();
    return hotels;
  } catch (error) {
    console.error("Error fetching hotels:", error);
    throw error;
  }
};

export const getUserBookings = async (userId) => {
  try {
    const response = await fetch(`${BASEURL}/bookings?user_id=${userId}`, {
      headers: HEADERS,
    });
    const bookings = await response.json();
    return bookings;
  } catch (error) {
    console.error("Error fetching user bookings:", error);
    throw error;
  }
};

export const getBookingsHotels = async (ids) => {
  try {
    const response = await fetch(`${BASEURL}/hotels${ids}`, {
      headers: HEADERS,
    });
    const hotels = await response.json();
    return hotels;
  } catch (error) {
    console.error("Error fetching bookings' hotels:", error);
    throw error;
  }
};

export const addBooking = async (bookingData) => {
  try {
    const response = await fetch(`${BASEURL}/bookings`, {
      headers: HEADERS,
      method: "POST",
      body: JSON.stringify(bookingData),
    });
    const booking = await response.json();
    return booking;
  } catch (error) {
    console.error("Error adding booking:", error);
    throw error;
  }
};

export const removeBooking = async (hotelId, userId) => {
  try {
    const response = await fetch(
      `${BASEURL}/bookings?hotel_id=${hotelId}&user_id=${userId}`,
      {
        headers: HEADERS,
      }
    );
    const booking = await response.json();

    await fetch(`${BASEURL}/bookings/${booking[0].id}`, {
      headers: HEADERS,
      method: "DELETE",
    });
  } catch (error) {
    console.error("Error removing booking:", error);
    throw error;
  }
};

export const signup = async (userData) => {
  try {
    const response = await fetch(`${BASEURL}/users`, {
      headers: HEADERS,
      method: "POST",
      body: JSON.stringify(userData),
    });
    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const response = await fetch(
      `${BASEURL}/users?email=${email}&password=${password}`,
      {
        headers: HEADERS,
      }
    );
    const user = await response.json();
    return user[0];
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const logout = (userStore) => {
  sessionStorage.removeItem("user");
  userStore.logout();
  router.push("/login");
};

export const handleAuthenticationRedirection = (useUserStore, router) => {
  const userStore = useUserStore();
  const user = JSON.parse(sessionStorage.getItem("user"));
  if (user) {
    userStore.authenticate();
  }

  router.beforeEach(async (to, from, next) => {
    if (to.meta.requiresAuth && !userStore.isAuthenticated) {
      router.push("/login");
    } else {
      next();
    }
  });
};

export const parameterizeIds = (userBookings) => {
  const ids = userBookings
    .map((booking) => "&id=" + booking.hotel_id)
    .join("")
    .replace("&", "?");

  return ids ? ids : "";
};
