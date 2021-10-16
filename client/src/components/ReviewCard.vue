<template>
  <div class="review-card" @click="selectReview(id)">
    <div class="review-info">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewCard',
  props: ['content', 'rating', 'title', 'showId', 'userId'],
  methods: {
    selectReview(id) {
      this.$emit('selectReview', id)
    }
  }
}
</script>
