<template>
  <div id="MovieDetail">
    <div>
      <div v-if="movie != null" class="d-flex">
        <div>
          <img  :src="requestDiffSizeImage(movie.Poster)" alt="">
        </div>
        <div class="mx-5">
          <div style="font-weight: bolder; font-size: 4em;">{{ movie.Title }}</div>
          <h6 class="fw-bold my-3" style="color: #42b983">
            <span>{{ movie.Released }}</span>
            <span> • {{ movie.Runtime }}</span>
            <span> • {{ movie.Country }}</span>
          </h6>
          <h6 class="my-3">{{ movie.Plot }}</h6>
          <h3 class="mt-5 mb-3 fw-bold">Ratings</h3>
          <div class="d-flex">
            <div v-for="rate in movie.Ratings" :key="rate.Source" class="d-flex align-items-center me-5">
              <img v-if="rate.Source == 'Internet Movie Database'" src="@/assets/InternetMovieDatabase.png" alt="" style="width: 5vw;">
              <img v-if="rate.Source == 'Rotten Tomatoes'" src="@/assets/RottenTomatoes.png" alt="" style="width: 8vw;">
              <img v-if="rate.Source == 'Metacritic'" src="@/assets/Metacritic.png" alt="" style="width: 3vw;">
              <h6 class="ms-2 fw-bold mt-2">{{ rate.Value }}</h6>
            </div>
          </div>
          <h3 class="mt-5 mb-3 fw-bold">Actors</h3>
          <h6>{{ movie.Actors }}</h6>
          <h3 class="mt-5 mb-3 fw-bold">Director</h3>
          <h6>{{ movie.Director }}</h6>
          <h3 class="mt-5 mb-3 fw-bold">Awards</h3>
          <h6>{{ movie.Awards }}</h6>
        </div>
      </div>
    </div>
    <div v-if="movie == null" class="text-center">
      <h2 class="my-5">There is no content.</h2>
      <button @click="goHome" class="btn btnG btn-outline-secondary col-2 my-3">Search</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  computed: {
    movie() {
      return this.$store.state.selectMovie
    }
  },
  methods: {
    goHome() {
      this.$router.push('/home')
    },
    requestDiffSizeImage(url, size = 600) {
      return url.replace('SX300', `SX${size}`)
    }
  }
}
</script>

<style>
img {
  border-radius: 10px;
}
</style>