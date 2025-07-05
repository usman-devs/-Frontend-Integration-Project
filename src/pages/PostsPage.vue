<template>
  <div class="posts-page">
    <h2 class="page-title">
      <span class="icon">📄</span> All Posts
    </h2>

    <div v-if="loading" class="loader-container">
      <div class="spinner"></div>
      <p>Loading posts...</p>
    </div>

    <div v-else class="posts-grid">
      <div v-for="post in posts" :key="post.id" class="card">
        <div class="post-header">
          <span class="post-id">#{{ post.id }}</span>
          <h3 class="post-title">{{ post.title }}</h3>
        </div>
        <p class="post-body">{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PostsPage',
  data() {
    return {
      posts: [],
      loading: true
    }
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.posts = res.data
        this.loading = false
      })
  }
}
</script>

<style scoped>
.posts-page {
  max-width: 1150px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #f4f7fa;
  font-family: 'Segoe UI', Tahoma, sans-serif;
}

.page-title {
  text-align: center;
  font-size: 32px;
  margin-bottom: 40px;
  color: #1e1e2f;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.icon {
  font-size: 28px;
}

.loader-container {
  text-align: center;
  margin-top: 50px;
  color: #555;
}

.spinner {
  border: 6px solid #f3f3f3;
  border-top: 6px solid #007bff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 0 auto 10px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.card {
  background: #ffffff;
  padding: 22px 24px;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  transition: 0.3s ease;
  border-left: 6px solid #007bff;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
}

.post-header {
  margin-bottom: 12px;
}

.post-id {
  font-size: 14px;
  color: #007bff;
  font-weight: 600;
}

.post-title {
  font-size: 18px;
  color: #222;
  margin-top: 4px;
  font-weight: 600;
  line-height: 1.3;
}

.post-body {
  font-size: 15px;
  color: #555;
  line-height: 1.6;
}
</style>
