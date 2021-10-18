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
    updatedReview: ''
  }),
  methods: {
    handleContent(e) {
      this.content = e.target.value
    },
    handleShowId(e) {
      this.showId = e.target.value
    },
    handleUserId(e) {
      this.userId = e.target.value
    },
    async updateReview() {
      const updatedReview = await UpdateReview({
        content: this.content,
        showId: this.showId
      })
      return updatedReview
    }
  }
}
</script>
