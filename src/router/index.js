import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about-me",
    name: "about_me",
    component: () => import("@/components/home/AboutMe.vue"),
  },
  {
    path: "/services",
    name: "services",
    component: () => import("@/components/home/ServicesView.vue"),
  },
  {
    path: "/contact-me",
    name: "contact_me",
    component: () => import("@/components/home/ContactMe.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
