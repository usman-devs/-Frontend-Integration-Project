<template>
  <div>
    <h2>Posts</h2>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-for="post in posts" :key="post.id" class="card">
        <h2>{{ post.id }}</h2>
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
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
.card {
  margin: 10px 0;
  padding: 12px;
  background: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 6px;
}
</style>
