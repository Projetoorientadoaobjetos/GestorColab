import { createRouter, createWebHistory } from "vue-router";
const Login = () => import("@/views/Login.vue");
const RegistersUsers = () => import("@/views/RegistersUsers.vue");
const Home = () => import("@/views/Home.vue");
const ForgotPasswords = () => import("@/views/ForgotPasswords.vue");

const routes = [
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

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

router.onError((err, to) => {
    if (err?.message?.includes("Failed to fetch dynamically imported module")) {
        if (!localStorage.getItem("vuetify:dynamic-reload")) {
            console.warn("Reloading page to fix dynamic import error");
            localStorage.setItem("vuetify:dynamic-reload", "true");
            location.assign(to.fullPath);
        }
        else {
            console.error("Dynamic import error, reloading page did not fix it", err);
        }
    }
    else {
        console.error(err);
    }
});

router.isReady().then(() => {
    localStorage.removeItem("vuetify:dynamic-reload");
});
export default router;
