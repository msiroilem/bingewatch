<template>
  <div class="review-card" @selectReview="selectReview(id)">
    <div class="review-info">
      {{ content }}
    </div>
  </div>
</template>

<script>
import { getReviews } from '../services/ReviewServices'
export default {
  name: 'ReviewCard',
  props: ['content', 'rating', 'title', 'showId', 'userId'],
  methods: {
    selectReview(id) {
      this.$emit('selectReview', id)
    },
    getShowReview(id) {
      return getReviews(id)
    }
  }
}
</script>
