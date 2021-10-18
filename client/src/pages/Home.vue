<template>
  <div>
    <div v-for="show in shows" :key="show.id">
      <TVCard :show="show" @selectShow="selectShow" :fromHome="true" />
    </div>
  </div>
</template>

<script>
import { GetSeries, GetMovies } from '../services/TVDBServices'
import TVCard from '../components/TVCard.vue'

export default {
  name: 'Home',
  components: {
    TVCard
  },
  data: () => ({
    shows: [],
    movies: []
  }),
  mounted() {
    this.getShows()
  },
  methods: {
    async getShows() {
      const res = await GetSeries()
      console.log(res, 'test test test')
      this.shows = res.data
    },
    async getMovies() {
      const res = await GetMovies()
      this.movies = res.data
    },

    selectShow(showId) {
      this.$router.push(`/details/${showId}`)
    }
  }
}
</script>

<style scoped>
div {
  display: grid;
  grid-template-columns: 500px 500px 500px;
}
</style>
