<template>
  <div>
    <div v-for="show in shows" :key="show.id">
      <TVCard :show="show" @selectShow="selectShow" />
    </div>
    <AddShow />
    <ReviewCard />
    <AddReview />

    <div v-for="movie in movies" :key="movie.id">
      <MovieCard @selectMovie="selectMovie" />
    </div>
  </div>
</template>

<script>
import { GetSeries, GetMovies } from '../services/TVDBServices'
import AddShow from '../components/AddShow.vue'
import AddReview from '../components/AddReview.vue'
import TVCard from '../components/TVCard.vue'
import MovieCard from '../components/MovieCard.vue'
import ReviewCard from './ReviewCard.vue'

export default {
  name: 'Home',
  components: {
    TVCard,
    MovieCard,
    AddShow,
    ReviewCard,
    AddReview
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

    // handleChange(id) {
    //   this.$router.push(`/shows${id}`)
    // },
    selectShow(showId) {
      this.$router.push(`/details/${showId}`)
    }
    // selectMovie(id) {
    //   this.$router.push(`/movies/${id}`)
    // }
  }
}
</script>

<style scoped></style>
