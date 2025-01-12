import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Projects from '../views/Projects.vue';
import Contact from '../views/Contact.vue';

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