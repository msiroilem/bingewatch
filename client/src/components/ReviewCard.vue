<template>
  <div class="review-card" @click="selectReview(id)">
    <div class="review-info">
      {{ content }}
    </div>
  </div>
</template>

<script>
import { GetReviews } from '../services/ReviewServices'
export default {
  name: 'ReviewCard',
  props: ['content', 'rating', 'title', 'showId', 'userId'],
  methods: {
    selectReview(id) {
      this.$emit('selectReview', id)
    },
    getShowReview(id) {
      return GetReviews(id)
    }
  }
}
</script>
