<template>
  <div>
    <img :src="movie.Poster" alt="">
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
}
</script>

<style>

</style>