import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "./assets/scss/index.scss";
import HomePage from "./pages/HomePage.vue";
import ApartmentPage from "./pages/ApartmentPage.vue";
import ErrorPage from "./pages/ErrorPage.vue";
const routes = [
  {
    path: "/",
    component: HomePage,
    name: "homePage",
  },
  {
    path: "/apartments/:id",
    component: ApartmentPage,
    name: "apartmentPage",
  },
  {
    path: "/:catchAll(.*)",
    component: ErrorPage,
    name: "errorPage",
  },
];

const router = createRouter({
  history: createWebHistory("/Vue_rent_app"),
  routes: routes,
});

createApp(App).use(router).mount("#app");
