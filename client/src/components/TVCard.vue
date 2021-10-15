<template>
  <div class="tv-card" @click="selectShow(id)">
    <!-- <div class="image">
      <img :src="show.background_image" />
    </div> -->
    <div class="info">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TVCard',
  props: ['id', 'title', 'genre', 'seasonNumber', 'runtime'],
  methods: {
    selectShow(id) {
      this.$emit('selectShow', id)
    }
    // deleteShow(showId) {}
  }
}
</script>
