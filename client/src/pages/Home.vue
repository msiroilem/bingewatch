<template>
  <div>
    <TVCard
      v-for="show in shows"
      :key="show.id"
      :title="show.title"
      :genre="show.genre"
      :seasonNumber="show.seasonNumber"
      :runtime="show.runtime"
      @handleChange="handleChange"
    />
    <AddShow />
    <ReviewCard />
    <AddReview />
  </div>
</template>

<script>
import axios from 'axios'
import { BASE_URL } from '../globals'
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
    shows: []
  }),
  mounted() {
    this.getShows()
  },
  methods: {
    async getShows() {
      const res = await axios.get(`${BASE_URL}/shows`)
      this.shows = res.data
    },
    handleChange(id) {
      this.$router.push(`/shows${id}`)
    }
  }
}
</script>
