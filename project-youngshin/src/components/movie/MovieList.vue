<template>
  <div class="mt-5">
    <div class="d-flex justify-content-center">
      <div v-if="movieListLoading" class="spinner-border my-2" style="color: #42b983"></div>
    </div>
    <div v-if="message">
      <h3 class="text-center">{{ message }}</h3>
    </div>
    <div v-if="!message && movies.length == 0 && !movieListLoading">
      <h3 class="text-center">× No Result</h3>
    </div>
    <div class="row">
      <MovieListItem v-for="movie in movies" 
                    :key="movie.imdbID" 
                    :movie="movie"
                    class="col-3 mb-4"/>
    </div>
  </div>
</template>

<script>
import MovieListItem from '@/components/movie/MovieListItem.vue'

export default {
  name: 'MovieList',
  components: {
    MovieListItem,
  },
  computed: {
    movies() {
      return this.$store.state.movies
    },
    message() {
      return this.$store.state.message
    },
    movieListLoading() {
      return this.$store.state.movieListLoading
    }
  }
}
</script>

<style scoped>
h3 {
  color: #bebebe;
}
</style>