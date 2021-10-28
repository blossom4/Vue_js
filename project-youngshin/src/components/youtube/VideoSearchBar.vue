<template>
  <div>
    <div class="input-group mb-3">
      <input v-model="query" @keyup.enter="searchVideo" type="text" class="form-control" placeholder="">
      <button @click="searchVideo" class="btn btnG btn-outline-secondary" type="button" id="button-addon2">Enter</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoSearchBar',
  data: function() {
    return {
      query: '',
    }
  },
  methods: {
    searchVideo: function() {
      this.$store.dispatch('searchVideo', this.query)
      this.query = ''
    },
  }
}
</script>

<style>

</style>