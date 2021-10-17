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
import { GetImage } from '../services/TVDBServices'
export default {
  name: 'TVCard',
  props: ['id', 'title', 'genre', 'seasonNumber', 'runtime', 'img'],
  methods: {
    selectShow(id) {
      this.$emit('selectShow', id)
    },
    getSeriesImage(image) {
      return GetImage(image)
    }
    // deleteShow(showId) {}
  }
}
</script>

<style scoped>
img {
  max-height: 400px;
  cursor: pointer;
}

div {
  display: grid;
  max-width: 258px;
}
</style>
