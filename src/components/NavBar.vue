<template>
  <nav class="navbar" role="navigation" aria-label="Primary navigation">
    <div class="nav-container">
      <router-link to="/posts" class="nav-link" active-class="active-link">Posts</router-link>
      <router-link to="/comments" class="nav-link" active-class="active-link">Comments</router-link>
      <router-link to="/albums" class="nav-link" active-class="active-link">Albums</router-link>
      <router-link to="/photos" class="nav-link" active-class="active-link">Photos</router-link>
      <router-link to="/todos" class="nav-link" active-class="active-link">Todos</router-link>
      <router-link to="/users" class="nav-link" active-class="active-link">Users</router-link>
    </div>
  </nav>
  
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 9999;
  background: linear-gradient(90deg, #0b1d2e, #13394a, #1d4f6f);
  padding: 14px 0;
  box-shadow: 0 3px 15px rgb(0 0 0 / 0.25);
  backdrop-filter: saturate(180%) blur(12px);
}

.nav-container {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 28px;
  flex-wrap: wrap;
  padding: 0 1rem;
}

.nav-link {
  position: relative;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  color: #cfd8dc;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 35px;
  background-color: rgba(255 255 255 / 0.07);
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    transform 0.2s ease;
  user-select: none;
}

.nav-link:hover,
.nav-link:focus-visible {
  background-color: rgba(255 255 255 / 0.15);
  color: #ffffff;
  transform: translateY(-3px);
  box-shadow: 0 6px 10px rgb(255 255 255 / 0.12);
  outline: none;
}

/* Active link underline effect */
.active-link {
  color: #fff;
  font-weight: 700;
  background-color: rgba(255 255 255 / 0.25);
  box-shadow: 0 8px 20px rgb(255 255 255 / 0.3);
}

.active-link::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 4px;
  transform: translateX(-50%);
  width: 40%;
  height: 3px;
  border-radius: 2px;
  background-color: #4fc3f7; /* Bright accent underline */
  box-shadow: 0 0 10px #4fc3f7aa;
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .nav-container {
    gap: 14px;
  }
  .nav-link {
    padding: 8px 14px;
    font-size: 1rem;
  }
}
</style>
