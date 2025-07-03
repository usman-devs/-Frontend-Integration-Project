<template>
  <div>
    <h2>Users</h2>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-for="user in users" :key="user.id" class="card">
        <h3>{{ user.name }}</h3>
        <p>Email: {{ user.email }}</p>
        <p>Phone: {{ user.phone }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UsersPage',
  data() {
    return {
      users: [],
      loading: true
    }
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        this.users = res.data
        this.loading = false
      })
  }
}
</script>

<style scoped>
.card {
  margin: 10px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: #f0f0ff;
}
</style>
