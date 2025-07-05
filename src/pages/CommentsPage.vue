<template>
  <div class="comments-page">
    <h2 class="page-title">💬 User Comments</h2>

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
      <p class="loading-text">Loading comments...</p>
    </div>

    <section v-else class="comments-list" aria-label="User comments list">
      <article
        v-for="comment in comments"
        :key="comment.id"
        class="comment-card"
        tabindex="0"
        aria-describedby="comment-desc-{{comment.id}}"
      >
        <header>
          <h3 class="comment-name">{{ comment.name }}</h3>
          <p class="comment-email" title="Email">{{ comment.email }}</p>
        </header>
        <p id="comment-desc-{{comment.id}}" class="comment-body">{{ comment.body }}</p>
        <footer class="comment-footer">
          <small class="comment-id">ID: {{ comment.id }}</small>
        </footer>
      </article>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CommentsPage',
  data() {
    return {
      comments: [],
      loading: true,
    }
  },
  mounted() {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((res) => {
        this.comments = res.data
        this.loading = false
      })
  },
}
</script>

<style scoped>
/* Container */
.comments-page {
  max-width: 720px;
  margin: 2.5rem auto;
  padding: 1rem 1.25rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f7f9fc;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.07);
  color: #2e3a59;
  user-select: text;
}

/* Title */
.page-title {
  font-weight: 700;
  font-size: 2.4rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #1e3a8a;
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
  stroke: #1e3a8a;
  stroke-linecap: round;
  animation: dash 1.6s ease-in-out infinite;
}

.loading-text {
  font-size: 1rem;
  font-weight: 500;
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

/* Comments list */
.comments-list {
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
}

/* Each comment card */
.comment-card {
  background: #fff;
  border-radius: 10px;
  padding: 1.5rem 1.75rem;
  box-shadow: 0 4px 14px rgba(30, 58, 138, 0.1);
  transition: box-shadow 0.25s ease, transform 0.2s ease;
  outline-offset: 4px;
  cursor: default;
}

.comment-card:hover,
.comment-card:focus-visible {
  box-shadow: 0 10px 25px rgba(30, 58, 138, 0.2);
  transform: translateY(-4px);
  outline: none;
}

/* Header */
.comment-card header {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.75rem;
}

.comment-name {
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e3a8a;
  margin: 0;
  line-height: 1.2;
}

.comment-email {
  font-size: 0.9rem;
  color: #64748b;
  font-style: italic;
  word-break: break-word;
  margin-top: 0.15rem;
}

/* Body */
.comment-body {
  font-size: 1rem;
  line-height: 1.55;
  color: #334155;
  white-space: pre-wrap;
  margin: 0;
}

/* Footer */
.comment-footer {
  margin-top: 1rem;
  border-top: 1px solid #e2e8f0;
  padding-top: 0.5rem;
  display: flex;
  justify-content: flex-end;
}

.comment-id {
  font-size: 0.8rem;
  color: #94a3b8;
  font-variant-numeric: tabular-nums;
  user-select: none;
}
</style>
