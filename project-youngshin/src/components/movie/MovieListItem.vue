<template>
  <div>
    <img @click="getMovieDetail" v-if="movie.Poster" :src="movie.Poster" alt="">
    <img @click="getMovieDetail" v-if="movie.Poster == 'N/A'" src="@/assets/NoImage.jpg" alt="">
    <div class="text-center mt-3">

      <h5 class="fw-bold" style="color: #42b983;">{{ movie.Year }}</h5>
      <h5 class="fw-bold">{{ movie.Title }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieListItem',
  props: {
    movie: {
      type: Object,
    }
  },
  methods: {
    getMovieDetail() {
      this.$store.dispatch('getMovieDetail', this.movie)
      this.$router.push('/movie')
    }
  },
}
</script>

<style scoped>
img:hover {
  cursor: pointer;
  border: 6px solid #42b983;
}
</style>