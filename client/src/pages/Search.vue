<template>
  <div>
    <div class="search">
      <v-form @submit.prevent="getSearchResults">
        <input @input="handleChange" :value="searchQuery" />
        <v-btn>
          <v-icon left>
            mdi-magnify
          </v-icon>
          Search
        </v-btn>
      </v-form>
    </div>
    <h2>Search Results</h2>
    <section v-if="searched" class="search-results container-grid">
      <div v-for="show in searchResults" :key="show.id">
        <TVCard :show="show" @selectShow="selectShow" />
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import TVCard from '../components/TVCard.vue'
const API_KEY = process.env.VUE_APP_TVDB_KEY

export default {
  name: 'Search',
  components: {
    TVCard
  },
  data: () => ({
    searchQuery: '',
    searchResults: [],
    searched: false
  }),
  methods: {
    async getSearchResults() {
      const res = await axios.get(
        `https://api.thetvdb.com/api/series?search=${this.searchQuery}&key=${API_KEY}`
      )
      this.searchResults = res.data.searchResults
      this.searched = true
      this.searchQuery = ''
    },
    selectShow(showId) {
      this.$router.push(`/details/${showId}`)
    }
  }
}
</script>

<style scoped></style>
