<template>
  <div>
    <div class="search">
      <form @submit.prevent="getSearchResults">
        <input v-model="searchQuery" />
        <v-btn type="submit">
          <v-icon left>
            mdi-magnify
          </v-icon>
          Search
        </v-btn>
      </form>
    </div>
    <h2>Search Results</h2>
    <section v-if="searched" class="search-results container-grid">
      <div v-for="show in searchResults" :key="show.id">
        <TVCard
          :show="show"
          @selectShow="selectShow"
          :fromSearch="true"
          :fromHome="false"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { GetSearchResults } from '../services/TVDBServices'
import TVCard from '../components/TVCard.vue'

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
      const res = await GetSearchResults(this.searchQuery)
      console.log(res, 'search')
      this.searchResults = res.data
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
