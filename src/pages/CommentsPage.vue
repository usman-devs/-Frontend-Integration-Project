<template>
  <div>
    <h2>Comments</h2>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-for="comment in comments" :key="comment.id" class="card">
        <h4>{{ comment.name }}</h4>
        <p><strong>Email:</strong> {{ comment.email }}</p>
        <p>{{ comment.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CommentsPage',
  data() {
    return {
      comments: [],
      loading: true
    }
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(res => {
        this.comments = res.data
        this.loading = false
      })
  }
}
</script>

<style scoped>
.card {
  margin: 12px;
  padding: 12px;
  border: 1px solid #d0d0d0;
  background: #fefefe;
  border-radius: 5px;
}
</style>
