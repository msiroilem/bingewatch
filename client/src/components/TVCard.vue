<template>
  <div class="tv-card" @click="selectShow(show.id)">
    <div class="info">
      {{ show.name }}
      <div class="image">
        <img v-if="fromHome" :src="`https://www.thetvdb.com${show.image}`" />
        <img v-if="fromSearch" :src="show.image_url" />
      </div>
    </div>
  </div>
</template>

<script>
import { GetImage } from '../services/TVDBServices'
export default {
  name: 'TVCard',
  props: {
    show: Object,
    fromHome: Boolean,
    fromSearch: Boolean
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
