<template>
  <div>
    <TVCard />
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
  data: () => ({}),
  mounted: {},
  methods: {
    async getShows() {
      const res = await axios.get(`${BASE_URL}`)
      this.shows = res.data
    }
  }
}
</script>
