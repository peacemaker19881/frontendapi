// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/PostsList.vue';
import NewPost from '../views/NewPost.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/new-post', name: 'NewPost', component: NewPost },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

