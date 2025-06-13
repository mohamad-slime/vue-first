import { createRouter, createWebHistory } from "vue-router";

const routes = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/jobs",
      name: "Jobs",
      component: () => import("@/views/JobsView.vue"),
    },
    {
      path: '/jobs/:id',
      name: "JobDetails",
      component: () => import("@/views/JobDetailsView.vue"),
    },
    {
      path: "/:notFound",
      name: "notFound",
      component: () => import("@/views/NotFoundView.vue"),
    },

    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: () => import("@/views/NotFoundView.vue"),
    },
  ],
});

export default routes;
