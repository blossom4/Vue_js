<template>
  <div>
    <div class="d-flex justify-content-center">
      <div class="mb-3 col-4">
        <div class="d-flex">
          <img src="@/assets/youtube.png" alt="youtube.png" class="logoImage mx-2">
          <h3 class="mb-3">Youtube</h3>
        </div>
        <VideoSearchBar/>
      </div>
    </div>
    <VideoList/>
    <VideoDetail/>
  </div>
</template>

<script>
import VideoSearchBar from '@/components/youtube/VideoSearchBar.vue'
import VideoDetail from '@/components/youtube/VideoDetail.vue'
import VideoList from '@/components/youtube/VideoList.vue'

export default {
  name: 'Youtube',
  components: {
    VideoSearchBar,
    VideoDetail,
    VideoList,
  }
}
</script>

<style>

</style>