import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import TodosView from '@/views/TodosView.vue';
import PostsView from '@/views/PostsView.vue';
import AlbumsView from '@/views/AlbumsView.vue';
import AlbumsDetailsView from '@/views/AlbumsDetailsView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/todos',
    name: 'Todos',
    component: TodosView,
  },
  {
    path: '/posts',
    name: 'Posts',
    component: PostsView,
  },
  {
    path: '/albums',
    name: 'Albums',
    component: AlbumsView,
  },
  {
    path: '/albums/:id',
    name: 'AlbumsDetail',
    component: AlbumsDetailsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
