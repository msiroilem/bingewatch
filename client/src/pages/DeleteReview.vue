<template>
  <div>
    <div>
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
        <button>Delete Review</button>
      </form>
    </div>
  </div>
</template>

<script>
import { DeleteReview } from '../services/ReviewServices'
export default {
  name: 'DeleteReview',
  methods: {
    handleShowId(e) {
      this.showId = e.target.value
    },
    handleUserId(e) {
      this.userId = e.target.value
    },
    handleContent(e) {
      this.content = e.target.value
    },
    async deleteReview() {
      const newReview = await DeleteReview({
        content: this.content,
        userId: this.userId,
        showId: this.showId
      })
      console.log(newReview, 'review')
      return newReview
    }
  }
}
</script>
