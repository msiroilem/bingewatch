<template>
  <div>
    <TVCard />
  </div>
</template>

<script>
import axios from 'axios'
import { BASE_URL } from '../globals'
import TVCard from '../components/TVCard.vue'
export default {
  name: 'Home',
  components: {
    TVCard
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
