<template>
  <div v-if="showDetails" class="show-content">
    <section class="image-container"></section>
    <section class="details">
      <div class="flex-row space"></div>
      <button @click="backButton">Back</button>
      <div>
        <h3>{{ showDetails.name }}</h3>
        <img :src="showDetails.background_image" />
        <p>
          {{ showDetails.description }}
        </p>
      </div>
    </section>
  </div>
</template>

<script>
// const API_KEY = process.env.VUE_APP_TVDB_KEY
import axios from 'axios'
import { BASE_URL } from '../../globals'
export default {
  name: 'TVShowDetails',
  data: () => ({
    showDetails: null,
    show: null
  }),
  mounted() {
    this.getShowDetails()
  },
  methods: {
    async getShowDetails() {
      const res = await axios.get(`${BASE_URL}`)

      this.showDetails = res.data
    },
    async getShows() {
      const res = await axios.get(`${BASE_URL}`)
      this.shows = res.data
    },
    async postShow() {
      const res = await axios.post(`${BASE_URL}`)
      this.shows = res.data
    },
    async updateShow() {
      const res = await axios.put(`${BASE_URL}`)
      this.shows = res.data
    },
    async deleteShow() {
      const res = await axios.delete(`${BASE_URL}`)
      this.shows = res.data
    },
    backButton() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped></style>
