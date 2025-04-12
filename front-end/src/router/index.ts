import { createRouter, createWebHistory } from "vue-router";

import Login from "@/views/Login.vue";
import RegistersUsers from "@/views/RegistersUsers.vue";
import Home from "@/views/Home.vue";
import ForgotPasswords from "@/views/ForgotPasswords.vue";

const manualRouters = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/register-user",
    name: "registerUser",
    component: RegistersUsers,
  },
  {
    path: "/home-page",
    name: "homePage",
    component: Home,
  },
  {
    path: "/forgot-password",
    name: "EsqueceuSuaSenha",
    component: ForgotPasswords,
  },
];
const routes = [...manualRouters];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.onError((err, to) => {
  if (err?.message?.includes?.("Failed to fetch dynamically imported module")) {
    if (!localStorage.getItem("vuetify:dynamic-reload")) {
      console.log("Reloading page to fix dynamic import error");
      localStorage.setItem("vuetify:dynamic-reload", "true");
      location.assign(to.fullPath);
    } else {
      console.error("Dynamic import error, reloading page did not fix it", err);
    }
  } else {
    console.error(err);
  }
});

router.isReady().then(() => {
  localStorage.removeItem("vuetify:dynamic-reload");
});

export default router;
