<template>
  <div class="tv-card" @click="selectShow(id)">
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
  name: 'TVCard',
  props: ['id', 'title', 'genre', 'seasonNumber', 'runtime', 'img'],
  methods: {
    selectShow(id) {
      this.$emit('selectShow', id)
    },
    getSeriesImage(image) {
      return getImage(image)
    }
    // deleteShow(showId) {}
  }
}
</script>

<style scoped></style>
