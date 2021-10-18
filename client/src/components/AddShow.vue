<template>
  <div>
    <div>
      <form @submit.prevent="createShow">
        <textarea>Test</textarea>
      </form>
    </div>
  </div>
</template>

<script>
import { CreateShow } from '../services/ShowServices'
export default {
  name: 'AddShow',
  data: () => ({
    addShow: '',
    shows: []
  }),
  methods: {
    async createShow() {
      const res = await CreateShow()
      this.shows = res.data
    }
  }
}
</script>
