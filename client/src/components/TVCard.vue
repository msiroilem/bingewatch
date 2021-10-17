<template>
  <div class="tv-card" @click="selectShow(show.id)">
    <div class="info">
      {{ show.title }}
      <div class="image">
        <img :src="`https://www.thetvdb.com${show.image}`" />
      </div>
    </div>
  </div>
</template>

<script>
import { GetImage } from '../services/TVDBServices'
export default {
  name: 'TVCard',
  props: {
    show: Object
  },
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
