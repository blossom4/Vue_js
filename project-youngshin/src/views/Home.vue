<template>
  <div>
    <MovieHeadLine/>
    <MovieSearchBar/>
    <MovieList/>
  </div>
</template>

<script>
import MovieHeadLine from '@/components/movie/MovieHeadLine.vue'
import MovieSearchBar from '@/components/movie/MovieSearchBar.vue'
import MovieList from '@/components/movie/MovieList.vue'

export default {
  name: 'Home',
  components: {
    MovieHeadLine,
    MovieSearchBar,
    MovieList,
  }
}
</script>

<style>

</style>