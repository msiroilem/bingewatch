<template>
  <div v-if="showDetails" class="show-content">
    <section class="image-container"></section>
    <section class="details">
      <div class="flex-row space"></div>
      <h3>{{ showDetails.name }}</h3>
      <img :src="showDetails.image" />

      <p v-if="showDetails">
        {{ showDetails.name }}'s last show was {{ showDetails.lastAired }}.
      </p>

      <p>Would you like to add, update or delete a review?</p>
      <div>
        <!-- <v-if="createReview"/> -->
        <v-btn to="/reviews" fab @click="createReview">
          <v-icon style="height:auto" left small> mdi-plus </v-icon></v-btn
        >

        <!-- <v-if="updateReview"/> -->
        <v-btn to="/reviews" fab
          ><v-icon left small> mdi-update </v-icon></v-btn
        >
        <!-- <v-if="deleteReview"/> -->
        <v-btn fab><v-icon left small> mdi-minus </v-icon></v-btn>
        <v-btn fab to="/"><v-icon left> mdi-arrow-left </v-icon></v-btn>
      </div>
      <div>
        <form @submit.prevent="handleSubmit">
          <textarea v-model="newReview"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
// const API_KEY = process.env.VUE_APP_TVDB_KEY
import axios from 'axios'
import { TVDBClient } from '../services/TVDBServices'
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
    reviews: [],
    newReview: ''
  }),
  mounted() {
    this.getShowDetails()
  },
  methods: {
    async getShowDetails() {
      console.log(this.$route.params, 'test')
      const res = await TVDBClient.get(
        `${TVDB_BASE_URL}/series/${this.$route.params.show_id}/extended`
      )
      console.log(res, 'test test')

      this.showDetails = res.data.data
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

    backButton() {
      this.$router.push('/')
    },

    selectShow(id) {
      this.$emit('selectShow', id)
    },
    handleSubmit() {}
  }
}

//post review creates show in db but first create show with handleSubmit and then create review
</script>

<style scoped>
img {
  max-height: 400px;
  cursor: pointer;
}
div {
  display: flex;
  justify-content: center;
  background-color: cornsilk;
}
form {
  background-color: white;
}
</style>
