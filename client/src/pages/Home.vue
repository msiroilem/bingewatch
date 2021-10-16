<template>
  <div>
    <div v-for="show in shows" :key="show.id">
      <TVCard
        :title="show.name"
        :genre="show.genre"
        :seasonNumber="show.seasonNumber"
        :runtime="show.runtime"
        :img="show.image"
        @handleChange="handleChange"
      />
    </div>
    <AddShow />
    <ReviewCard />
    <AddReview />
  </div>
</template>

<script>
import { getSeries } from '../services/TVDBServices'
import AddShow from '../components/AddShow.vue'
import AddReview from '../components/AddReview.vue'
import TVCard from '../components/TVCard.vue'
import ReviewCard from '../components/ReviewCard.vue'

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
  },
  methods: {
    async getShows() {
      const res = await getSeries()
      console.log(res, 'test test test')
      this.shows = res.data
    },

    handleChange(id) {
      this.$router.push(`/shows${id}`)
    }
  }
}
</script>

<style scoped></style>
