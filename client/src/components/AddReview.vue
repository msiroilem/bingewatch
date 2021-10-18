<template>
  <div>
    <form @submit.prevent="createReview">
      <div>
        <label for="content">
          Content:
        </label>
        <input
          type="text"
          content="content"
          id="content"
          @input="handleContent"
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
          @input="handleUserId"
          @value="userId"
        />
      </div>

      <button>Create Review</button>
    </form>
  </div>
</template>

<script>
import { CreateReview } from '../services/ReviewServices'
export default {
  name: 'AddReview',
  data: () => ({
    userId: '',
    content: ''
  }),
  methods: {
    handleUserId(e) {
      this.userId = e.target.value
    },
    handleContent(e) {
      this.content = e.target.value
    },
    async createReview() {
      const newReview = await CreateReview({
        content: this.content,
        userId: this.userId
      })
      console.log(newReview, 'review')
      return newReview
    }
  }
}
</script>
