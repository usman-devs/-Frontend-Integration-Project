<template>
  <div>
    <h2>Albums</h2>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-for="album in albums" :key="album.id" class="card">
        <h4>{{ album.title }}</h4>
        <p>Album ID: {{ album.id }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AlbumsPage',
  data() {
    return {
      albums: [],
      loading: true
    }
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/albums')
      .then(res => {
        this.albums = res.data
        this.loading = false
      })
  }
}
</script>

<style scoped>
.card {
  margin: 10px;
  padding: 10px;
  background: #e0f7fa;
  border-radius: 4px;
  border: 1px solid #b2ebf2;
}
</style>
