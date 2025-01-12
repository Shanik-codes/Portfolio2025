import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeViews.vue';
import About from '../views/AboutViews.vue';
import Projects from '../views/ProjectsViews.vue';
import Contact from '../views/ContactViews.vue';

const routes = [
  {
    path: '/',
    name: 'HomeViews',
    component: Home
  },
  {
    path: '/about',
    name: 'AboutViews',
    component: About
  },
  {
    path: '/projects',
    name: 'ProjectsViews',
    component: Projects
  },
  {
    path: '/contact',
    name: 'ContactViews',
    component: Contact
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;