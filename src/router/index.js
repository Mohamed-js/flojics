import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Bookings from "../views/Bookings.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { requiresAuth: true },
    },
    {
      path: "/bookings",
      name: "bookings",
      component: Bookings,
      meta: { requiresAuth: true },
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup,
    },
  ],
});

export default router;
