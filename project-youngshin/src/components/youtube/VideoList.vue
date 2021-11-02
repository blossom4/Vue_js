<template>
  <div class="container mb-5">
    <div class="d-flex justify-content-center">
      <div v-if="videoListLoading" class="spinner-border my-5" style="color: #42b983"></div>
    </div>
    <div class="row">
      <VideoListItem
        v-for="video in searchVideos"
        :key="video.etag"
        :video="video"
        class="col-3 mb-4"
      />
    </div>
  </div>
</template>

<script>
import VideoListItem from '@/components/youtube/VideoListItem.vue'

export default {
  name: 'VideoList',
  components: {
    VideoListItem,
  },
  computed: {
    searchVideos: function() {
      if (this.$store.state.selectVideo == null) {
        return this.$store.state.searchVideoResult
      } else {
        return this.$store.state.emptyVideoResult
      }
    },
    videoListLoading() {
      return this.$store.state.videoListLoading
    },
  }
}
</script>

<style>

</style>