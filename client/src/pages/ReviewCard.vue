<template>
  <div class="review-card" @click="selectReview(id)">
    <div class="review-info">
      <button>Create Review</button>
      <button>Find Review</button>
      <button>Update Review</button>
      <button>Delete Review</button>
    </div>
  </div>
</template>

<script>
import {
  CreateReview,
  DeleteReview,
  GetShowReviews,
  UpdateReview
} from '../services/ReviewServices'
export default {
  name: 'ReviewCard',
  props: ['content', 'rating', 'title', 'showId', 'userId'],
  data: () => ({
    reviews: []
  }),
  methods: {
    selectReview(id) {
      this.$emit('selectReview', id)
    },
    async getReviews() {
      const res = await GetShowReviews()
      this.reviews = res.data
    },
    async createReview() {
      const res = await CreateReview()
      this.reviews = res.data
    },
    async updateReview() {
      const res = await UpdateReview()
      this.reviews = res.data
    },
    async deleteReview() {
      const res = await DeleteReview()
      this.reviews = res.data
    }
  }
}
</script>
