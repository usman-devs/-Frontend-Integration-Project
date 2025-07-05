<template>
  <div class="todos-page">
    <h2 class="page-title">
      ✅ Todos List
    </h2>

    <div v-if="loading" class="loader-container">
      <div class="spinner"></div>
      <p>Loading todos...</p>
    </div>

    <div v-else class="todos-grid">
      <div v-for="todo in todos" :key="todo.id" class="card" :class="{ done: todo.completed }">
        <div class="todo-header">
          <span class="todo-id">#{{ todo.id }}</span>
          <p class="todo-title">{{ todo.title }}</p>
        </div>
        <div class="status-badge" :class="todo.completed ? 'completed' : 'pending'">
          {{ todo.completed ? '✅ Done' : '⏳ Pending' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TodosPage',
  data() {
    return {
      todos: [],
      loading: true
    }
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        this.todos = res.data
        this.loading = false
      })
  }
}
</script>

<style scoped>
.todos-page {
  max-width: 1150px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Segoe UI', Tahoma, sans-serif;
  background-color: #f4f7fa;
}

.page-title {
  text-align: center;
  font-size: 30px;
  color: #1e1e2f;
  margin-bottom: 35px;
  font-weight: 600;
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

.todos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.card {
  background: #ffffff;
  border-left: 6px solid #ffc107;
  padding: 20px;
  border-radius: 14px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.card.done {
  border-left-color: #28a745;
}

.todo-header {
  margin-bottom: 12px;
}

.todo-id {
  font-size: 14px;
  font-weight: 600;
  color: #007bff;
}

.todo-title {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin-top: 6px;
  line-height: 1.4;
}

.status-badge {
  font-size: 14px;
  font-weight: bold;
  padding: 6px 12px;
  border-radius: 30px;
  display: inline-block;
  margin-top: 10px;
  width: fit-content;
}

.completed {
  background-color: #d4edda;
  color: #155724;
}

.pending {
  background-color: #f8d7da;
  color: #721c24;
}
</style>
