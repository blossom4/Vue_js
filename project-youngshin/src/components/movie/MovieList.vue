<template>
  <div class="mt-5">
    <div class="row">
      <MovieListItem v-for="movie in getSearchMovies" 
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
    getSearchMovies() {
      return this.$store.state.movies
    }
  }
}
</script>

<style>

</style>