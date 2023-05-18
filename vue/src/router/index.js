import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import Product from "../views/Product.vue";
import Category from "../views/Category.vue";
import Search from "../views/Search.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/:category_slug/:product_slug",
    name: "product",
    component: Product,
  },
  {
    path: "/:category_slug",
    name: "category",
    component: Category,
  },
  {
    path: "/search/",
    name: "search",
    component: Search,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
