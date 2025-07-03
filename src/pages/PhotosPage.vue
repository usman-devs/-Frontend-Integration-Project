<template>
  <div>
    <h2>Photos</h2>
    <div v-if="loading">Loading...</div>
    <div v-else class="grid">
      <div v-for="photo in photos" :key="photo.id" class="card">
        <img :src="photo.thumbnailUrl" :alt="photo.title" />
        <p>{{ photo.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PhotosPage',
  data() {
    return {
      photos: [],
      loading: true
    }
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=30')
      .then(res => {
        this.photos = res.data
        this.loading = false
      })
  }
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 12px;
}
.card {
  text-align: center;
}
img {
  width: 100%;
  border-radius: 4px;
}
</style>
