<template>
  <nav>
    <router-link class="link" to="/">Home</router-link>
    <router-link class="link" to="/search">Search</router-link>
    <router-link class="link" to="/signup">Signup</router-link>
    <router-link class="link" to="/reviews">Reviews</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style scoped>
.link {
  margin: 0 10px;
  position: relative;
}
</style>
