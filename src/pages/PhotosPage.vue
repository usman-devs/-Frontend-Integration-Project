<template>
  <div class="photos-page">
    <h2 class="page-title">🖼️ Real Photo Gallery</h2>

    <div v-if="loading" class="loader-container">
      <div class="spinner"></div>
      <p>Loading real photos...</p>
    </div>

    <div v-else class="photo-grid">
      <div v-for="photo in photos" :key="photo.id" class="photo-card">
        <div class="image-container">
          <img :src="photo.download_url" :alt="photo.author" />
          <div class="overlay">
            <p class="photo-title">{{ photo.author }}</p>
          </div>
        </div>
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
    axios.get('https://picsum.photos/v2/list?page=1&limit=30')
      .then(res => {
        this.photos = res.data
        this.loading = false
      })
  }
}
</script>

<style scoped>
.photos-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Segoe UI', Tahoma, sans-serif;
  background-color: #f4f7fa;
}

.page-title {
  text-align: center;
  font-size: 30px;
  margin-bottom: 30px;
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

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.photo-card {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #fff;
}

.photo-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.1);
}

.image-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.image-container img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  border-radius: 12px;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 8px 10px;
  font-size: 13px;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

.photo-card:hover .overlay {
  opacity: 1;
}

.photo-title {
  margin: 0;
  line-height: 1.4;
}
</style>
