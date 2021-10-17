<template>
  <div>
    <div v-for="show in shows" :key="show.id">
      <TVCard
        :id="show.id"
        :title="show.name"
        :genre="show.genre"
        :seasonNumber="show.seasonNumber"
        :runtime="show.averageRuntime"
        :img="show.image"
        @handleChange="handleChange"
        @selectShow="selectShow"
      />
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
import ReviewCard from '../components/ReviewCard.vue'

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
    selectShow(id) {
      this.$router.push(`/details/${id}`)
    }
    // selectMovie(id) {
    //   this.$router.push(`/movies/${id}`)
    // }
  }
}
</script>

<style scoped></style>
