<template>
  <div>
    <h2>Todos</h2>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-for="todo in todos" :key="todo.id" class="card">
        <p>{{ todo.title }}</p>
        <p>Status: <strong :style="{ color: todo.completed ? 'green' : 'red' }">{{ todo.completed ? 'Done' : 'Pending' }}</strong></p>
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
.card {
  margin: 10px;
  padding: 10px;
  background: #fff3cd;
  border-left: 5px solid #ffc107;
  border-radius: 4px;
}
</style>
