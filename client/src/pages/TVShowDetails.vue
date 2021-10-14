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
const API_KEY = process.env.VUE_APP_TVDB_KEY
import axios from 'axios'
export default {
  name: 'TVShowDetails',
  data: () => ({
    showDetails: null
  }),
  mounted() {
    this.getShowDetails()
  },
  methods: {
    async getShowDetails() {
      const res = await axios.get(
        `https://api.thetvdb.com/api/series/${this.$route.params.show_id}?key=${API_KEY}`
      )

      this.showDetails = res.data
    },
    backButton() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped></style>
