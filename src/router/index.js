// Vue Router Setup for Vue 3
import { createRouter, createWebHistory } from 'vue-router'

import PostsPage from '../pages/PostsPage.vue'
import CommentsPage from '../pages/CommentsPage.vue'
import AlbumsPage from '../pages/AlbumsPage.vue'
import PhotosPage from '../pages/PhotosPage.vue'
import TodosPage from '../pages/TodosPage.vue'
import UsersPage from '../pages/UsersPage.vue'

// Define routes
const routes = [
  { path: '/posts', component: PostsPage },
  { path: '/comments', component: CommentsPage },
  { path: '/albums', component: AlbumsPage },
  { path: '/photos', component: PhotosPage },
  { path: '/todos', component: TodosPage },
  { path: '/users', component: UsersPage },

 
]

// Create and export router instance
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
