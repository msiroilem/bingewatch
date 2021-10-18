<template>
  <div class="review-card">
    <div class="review-info" v-for="review in reviews" :key="review.id">
      <p>{{ review.content }}</p>
    </div>
  </div>
</template>

<script>
import { GetReviews } from '../services/ReviewServices'
export default {
  name: 'ReviewCard',

  data: () => ({
    reviews: [],
    content: '',
    showId: '',
    userId: ''
  }),
  mounted() {
    this.getReviews()
  },
  methods: {
    async getReviews() {
      const res = await GetReviews()
      console.log(res)
      this.reviews = res
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

<style scoped>
p {
  border: aliceblue;
}
</style>
