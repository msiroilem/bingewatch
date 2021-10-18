<template>
  <div class="review-card">
    <div class="review-info"></div>

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
        <label for="showId">
          showId:
        </label>
        <input
          type="text"
          showId="showId"
          id="showId"
          @input.prevent="handleShowId"
          @value="showId"
        />
      </div>
      <button>Update Review</button>
    </form>

    <form @submit.prevent="deleteReview">
      <div>
        <label for="content">
          Content:
        </label>
        <input
          type="text"
          content="content"
          id="content"
          @input.prevent="handleContent"
        />
      </div>
    </form>
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

  data: () => ({
    reviews: [],
    content: '',
    showId: '',
    userId: ''
  }),
  methods: {
    async getReviews() {
      const res = await GetShowReviews()
      this.reviews = res.data
    },
    async createReview() {
      const newReview = await CreateReview({
        content: this.content,
        userId: this.userId,
        showId: this.showId
      })
      console.log(newReview, 'review')
      return newReview
    },
    async updateReview() {
      const updatedReview = await UpdateReview({
        content: this.content,
        showId: this.showId
      })
      return updatedReview
    },
    async deleteReview() {
      const deleteReview = await DeleteReview({
        content: this.content
      })
      return deleteReview
    },
    handleContent(e) {
      this.content = e.target.value
    },
    handleShowId(e) {
      this.showId = e.target.value
    },
    handleUserId(e) {
      this.userId = e.target.value
    }
  }
}
</script>
