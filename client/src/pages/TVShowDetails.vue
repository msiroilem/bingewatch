<template>
  <div v-if="showDetails" class="show-content">
    <section class="image-container"></section>
    <section class="details">
      <div class="flex-row space"></div>
      <h3>{{ show.name }}</h3>
      <div>Test</div>
    </section>
  </div>
</template>

<script>
// const API_KEY = process.env.VUE_APP_TVDB_KEY
import axios from 'axios'
// import {
//   GetReviews,
//   GetShowReviews,
//   UpdateReview,
//   DeleteReview
// } from '../services/ReviewServices'

import { TVDB_BASE_URL } from '../globals'
import {
  GetShowReviews,
  UpdateReview,
  CreateReview,
  DeleteReview
} from '../services/ReviewServices'
export default {
  name: 'TVShowDetails',
  data: () => ({
    showDetails: null,
    show: [],
    reviews: []
  }),
  mounted() {
    this.getShowDetails()
  },
  methods: {
    async getShowDetails() {
      const res = await axios.get(`${TVDB_BASE_URL}`)

      this.showDetails = res.data
    },
    async getShows() {
      const res = await axios.get(`${TVDB_BASE_URL}`)
      this.shows = res.data
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
    },
    // async postShow() {
    //   const res = await axios.post(`${BASE_URL}`)
    //   this.shows = res.data
    // },
    // async updateShow() {
    //   const res = await axios.put(`${BASE_URL}`)
    //   this.shows = res.data
    // },
    // async deleteShow() {
    //   const res = await axios.delete(`${BASE_URL}`)
    //   this.shows = res.data
    // },
    backButton() {
      this.$router.push('/')
    },

    selectShow(id) {
      this.$emit('selectShow', id)
    }
  }
}
</script>

<style scoped></style>
