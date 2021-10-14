<template>
  <div class="tv-card" @click="selectShow(show.id)">
    <div class="image">
      <img :src="show.background_image" />
    </div>
    <div class="info">
      {{ show.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TVCard',
  props: ['show'],
  methods: {
    selectShow(showId) {
      this.$emit('selectShow', showId)
    }
  }
}
</script>
