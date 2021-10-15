<template>
  <div>
    <div v-for="show in shows" :key="show.id">
      <TVCard
        :title="show.title"
        :genre="show.genre"
        :seasonNumber="show.seasonNumber"
        :runtime="show.runtime"
        @handleChange="handleChange"
      />
    </div>
    <AddShow />
    <ReviewCard />
    <AddReview />
  </div>
</template>

<script>
import axios from 'axios'
import { BASE_URL, TVDB_BASE_URL } from '../globals'
import AddShow from '../components/AddShow.vue'
import AddReview from '../components/AddReview.vue'
import TVCard from '../components/TVCard.vue'
import ReviewCard from '../components/ReviewCard.vue'
const API_KEY = process.env.VUE_APP_TVDB_KEY
export default {
  name: 'Home',
  components: {
    TVCard,
    AddShow,
    ReviewCard,
    AddReview
  },
  data: () => ({
    shows: [],
    TVDBShows: []
  }),
  mounted() {
    this.getShows()
    this.getTVDBShows()
  },
  methods: {
    async getShows() {
      const res = await axios.get(`${BASE_URL}/shows`)
      this.shows = res.data
    },
    async getTVDBShows() {
      const res = await axios.get(`${TVDB_BASE_URL}/series?key=${API_KEY}`)
      this.TVDBShows = res.data.results
    },
    handleChange(id) {
      this.$router.push(`/shows${id}`)
    }
  }
}
</script>
