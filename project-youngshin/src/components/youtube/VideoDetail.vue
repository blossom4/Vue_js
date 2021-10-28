<template>
  <div>
    <div class="iframeBox">
      <iframe :src="videoURL" frameborder="0" class="videoSize"></iframe>
    </div>
    <p>{{ videoTitle }}</p>
    <p>{{ videoDescription }}</p>
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
    }
  },
}
</script>

<style scoped>
.iframBox {
  position: relative;
  width: 25%;
  padding-bottom: 56.25%;
}

.iframeBox iframe {
  position: absolute;
  width: 25%;
  height: 25%;
}
</style>