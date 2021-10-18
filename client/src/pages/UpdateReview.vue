<template>
  <div>
    <form @submit.prevent="updateReview">
      <div>
        <label for="content">
          Content:
        </label>
        <input
          type="text"
          content="content"
          id="content"
          @input.prevent="handleContent"
          @value="content"
        />
      </div>

      <div>
        <label for="userId">
          userId:
        </label>
        <input
          type="text"
          userId="userId"
          id="userId"
          @input.prevent="handleUserId"
          @value="userId"
        />
      </div>

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
      <button>Update Review</button>
      <v-btn fab to="/"><v-icon left> mdi-arrow-left </v-icon></v-btn>
    </form>
  </div>
</template>

<script>
import { UpdateReview } from '../services/ReviewServices'
export default {
  name: 'UpdateReview',
  data: () => ({
    content: '',
    updatedReview: '',
    reviewId: '',
    userId: ''
  }),
  methods: {
    handleContent(e) {
      this.content = e.target.value
    },

    handleUserId(e) {
      this.userId = e.target.value
    },
    handleReviewId(e) {
      this.reviewId = e.target.value
    },
    async updateReview() {
      const updatedReview = await UpdateReview(this.reviewId, {
        content: this.content,
        userId: this.userId,
        reviewId: this.reviewId
      })
      return updatedReview
    }
  }
}
</script>
