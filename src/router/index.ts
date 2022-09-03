import { createRouter, createWebHashHistory } from "vue-router";
import example1 from '../pages/example1.vue'


const routes = [
  {
    path: "/example1",
    component: example1,
  },


];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
