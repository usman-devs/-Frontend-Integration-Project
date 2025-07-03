<template>
  <nav class="navbar">
    <router-link to="/posts" class="nav-link">PostsPage</router-link>
    <router-link to="/comments" class="nav-link">CommentsPage</router-link>
    <router-link to="/albums" class="nav-link">AlbumsPage</router-link>
    <router-link to="/photos" class="nav-link">PhotosPage</router-link>
    <router-link to="/todos" class="nav-link">TodosPage</router-link>
    <router-link to="/users" class="nav-link">UsersPage</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.navbar {
  background-color: #007bff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 12px;
  gap: 10px;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 8px 14px;
  border-radius: 5px;
  transition: background 0.3s ease;
  font-weight: 500;
}

.nav-link:hover {
  background-color: #0056b3;
}

.router-link-exact-active {
  background-color: #0056b3;
}
</style>
