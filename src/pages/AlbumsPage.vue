<template>
  <div class="albums-page">
    <h2 class="page-title">🎵 Albums</h2>

    <div v-if="loading" class="loader-container" role="status" aria-live="polite" aria-busy="true">
      <svg class="spinner" viewBox="0 0 50 50" aria-hidden="true" focusable="false">
        <circle
          class="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke-width="5"
        />
      </svg>
      <p class="loading-text">Loading albums...</p>
    </div>

    <section v-else class="albums-list" aria-label="Albums list">
      <article v-for="album in albums" :key="album.id" class="album-card" tabindex="0">
        <h3 class="album-title" title="Album title">{{ album.title }}</h3>
        <span class="album-id">ID: {{ album.id }}</span>
      </article>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AlbumsPage',
  data() {
    return {
      albums: [],
      loading: true,
    }
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/albums')
      .then(res => {
        this.albums = res.data
        this.loading = false
      })
      .catch(err => {
        console.error('Failed to fetch albums:', err)
        this.loading = false
      })
  }
}
</script>

<style scoped>
.albums-page {
  max-width: 900px;
  margin: 2.5rem auto;
  padding: 0 1.25rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f9fbfc;
  border-radius: 12px;
  box-shadow: 0 12px 32px rgb(0 0 0 / 0.07);
  color: #2a3a4a;
  user-select: text;
}

.page-title {
  font-weight: 700;
  font-size: 2.6rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #1e40af;
  letter-spacing: 0.04em;
}

/* Loader */
.loader-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  color: #64748b;
}

.spinner {
  animation: rotate 1.2s linear infinite;
  width: 48px;
  height: 48px;
  margin-bottom: 1rem;
}

.path {
  stroke: #1e40af;
  stroke-linecap: round;
  animation: dash 1.6s ease-in-out infinite;
}

.loading-text {
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}

/* Albums grid */
.albums-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.75rem;
}

/* Album card */
.album-card {
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem 1.75rem;
  box-shadow: 0 6px 16px rgb(30 64 175 / 0.1);
  transition: box-shadow 0.3s ease, transform 0.2s ease;
  cursor: default;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  outline-offset: 4px;
}

.album-card:hover,
.album-card:focus-visible {
  box-shadow: 0 12px 32px rgb(30 64 175 / 0.2);
  transform: translateY(-5px);
  outline: none;
}

.album-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e40af;
  margin: 0 0 0.75rem;
  line-height: 1.3;
  word-break: break-word;
  flex-grow: 1;
}

.album-id {
  font-size: 0.85rem;
  font-weight: 600;
  color: #94a3b8;
  user-select: none;
  align-self: flex-end;
  background: #e0e7ff;
  padding: 0.15rem 0.5rem;
  border-radius: 6px;
  letter-spacing: 0.02em;
}
</style>
