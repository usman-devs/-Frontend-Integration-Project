<template>
  <div class="users-page">
    <h2 class="page-title">👥 Users Directory</h2>

    <div v-if="loading" class="loader-container">
      <div class="spinner"></div>
      <p>Loading users...</p>
    </div>

    <div v-else class="users-grid">
      <div v-for="user in users" :key="user.id" class="card">
        <div class="avatar-box">
          <span class="avatar-icon">👤</span>
        </div>
        <div class="user-info">
          <h3 class="user-name">{{ user.name }}</h3>
          <p><strong>Email:</strong> {{ user.email }}</p>
          <p><strong>Phone:</strong> {{ user.phone }}</p>
          <p><strong>Company:</strong> {{ user.company.name }}</p>
          <p><strong>City:</strong> {{ user.address.city }}</p>
        </div>
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
.users-page {
  max-width: 1150px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Segoe UI', Tahoma, sans-serif;
  background-color: #f4f7fa;
}

.page-title {
  text-align: center;
  font-size: 30px;
  margin-bottom: 35px;
  font-weight: 600;
  color: #1e1e2f;
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

.users-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 20px;
}

.card {
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.05);
  padding: 20px;
  display: flex;
  gap: 16px;
  align-items: flex-start;
  transition: 0.3s ease;
  border-left: 6px solid #007bff;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.08);
}

.avatar-box {
  background: #e9f0ff;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: #007bff;
  font-weight: bold;
}

.user-info {
  flex: 1;
}

.user-name {
  font-size: 18px;
  font-weight: 600;
  color: #222;
  margin-bottom: 8px;
}

.user-info p {
  font-size: 14px;
  margin: 4px 0;
  color: #444;
}
</style>
