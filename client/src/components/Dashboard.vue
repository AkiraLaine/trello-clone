<template>
  <div>
    <navbar />
    <board-container />
  </div>
</template>

<script>
import Navbar from '@/components/Dashboard/Navbar'
import BoardContainer from '@/components/Dashboard/BoardContainer'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'dashboard',
  components: {
    Navbar,
    BoardContainer
  },
  created () {
    this.$http.get(`/api/boards?filter[where][userId]=${this.userId}`)
      .then(res => {
        this.initBoards(res.data)
      })
  },
  methods: {
    ...mapActions({
      initBoards: 'platform/initBoards'
    })
  },
  computed: {
    ...mapState({
      user: state => state.user.data
    }),
    userId () {
      return this.user.email ? this.user.id : this.user.userId
    }
  }
}
</script>

<style>

</style>
