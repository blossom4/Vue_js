<template>
  <div>
    <div  v-if="videoURL != null" class="d-flex justify-content-center">
      <div class="col-6">
        <div class="iframeBox">
          <iframe :src="videoURL" frameborder="0" class="videoSize"></iframe>
        </div>
        <h5 class="my-3">{{ videoTitle }}</h5>
        <div class="my-3 text-secondary">• {{ videoChannelTitle }} - {{ videoPublishedAt }}</div>
        <p class="mb-5">{{ videoDescription }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoDetail',
  computed: {
    videoURL: function() {
      return this.$store.getters.videoURL
    },
    videoTitle: function() {
      return this.$store.getters.videoTitle
    },
    videoDescription: function() {
      return this.$store.getters.videoDescription
    },
    videoChannelTitle: function() {
      return this.$store.getters.videoChannelTitle
    },
    videoPublishedAt: function() {
      return (this.$store.getters.videoPublishedAt)
    },
    
  },
}
</script>

<style scoped>
.iframeBox {
  width: 100%;
  height: 370px;
}

.iframeBox iframe {
  width: 100%;
  height: 100%;
}
</style>