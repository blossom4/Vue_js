<template>
  <div>
    <div>
      <img :src="videoImg" alt="videoImg" class="me-2 videoImg" @click="selectVideo">
      <div class="my-2">{{ videoTitle }}</div>
      <div class="text-secondary">• {{ channelTitle }}</div>
      <div class="text-secondary">{{ videoPublishedAt }}</div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'VideoListItem',
  props: {
    video: {
      type: Object,
    }
  },
  methods: {
    selectVideo: function() {
      this.$store.dispatch('selectVideo', this.video)
    },
  },
  computed: {
    videoTitle: function() {
      if (_.unescape(this.video.snippet.title).length > 50) {
        return (_.unescape(this.video.snippet.title).substring(0, 50) + '...')
      }
      return _.unescape(this.video.snippet.title)
    },
    videoImg: function() {
      return this.video.snippet.thumbnails.medium.url
    },
    channelTitle: function() {
      return _.unescape(this.video.snippet.channelTitle)
    },
    videoPublishedAt: function() {
      return _.unescape(this.video.snippet.publishedAt).substring(0, 10)
    }
  },
}
</script>

<style>
.videoImg {
  cursor: pointer;
}

.videoImg {
  opacity: 1;
  transition: opacity 0.5s;
}

.videoImg:hover {
  opacity: 0.3;
}
</style>