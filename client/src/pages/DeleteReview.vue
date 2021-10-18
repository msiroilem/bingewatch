<template>
  <div>
    <div>
      <form @submit.prevent="deleteReview">
        <div>
          <label for="reviewId">
            reviewId:
          </label>
          <input
            type="text"
            reviewId="reviewId"
            id="reviewId"
            @input.prevent="handleReviewId"
            @value="reviewId"
          />
        </div>

        <button>Delete Review</button>
      </form>
    </div>
  </div>
</template>

<script>
import { DeleteReview } from '../services/ReviewServices'
export default {
  name: 'DeleteReview',
  data: () => ({
    showId: '',
    reviewId: ''
  }),
  methods: {
    handleReviewId(e) {
      this.reviewId = e.target.value
    },

    handleContent(e) {
      this.content = e.target.value
    },
    async deleteReview() {
      const newReview = await DeleteReview(this.reviewId)
      console.log(newReview, 'review')
      return newReview
    }
  }
}
</script>
