<template>
  <div class="movie-card" @click="selectMovie(id)">
    <div class="info">
      {{ title }}
      <div class="image">
        <img :src="`https://www.thetvdb.com${img}`" />
      </div>
    </div>
  </div>
</template>

<script>
import { getImage } from '../services/TVDBServices'
export default {
  name: 'MovieCard',
  methods: {
    selectMovie(id) {
      this.$emit('selectMovie', id)
    },
    getMovieImage(image) {
      return getImage(image)
    }
  }
}
</script>

<style scoped></style>
