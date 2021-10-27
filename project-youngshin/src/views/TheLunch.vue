<template>
  <div class="d-flex justify-content-center">
    <div class="col-4 text-center">
      <h3 class="my-5">점심메뉴 추천</h3>
      <button @click="getLunchMenu" class="btn btnG btn-outline-secondary col-6">CLICK</button>
      <h3 class="mt-5">{{ selectedMenu }}</h3>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'TheLunch',
  data: function() {
    return {
      sampleLunchMenus: ['🍕피자', '🍔햄버거', '🥞팬케이크', '🥪샌드위치', '🧇와플', '🍛카레', '🍜라멘', '🥗샐러드'],
      selectedMenu: '',
    }
  },
  methods: {
    getLunchMenu: function() {
      const getRandomLunchMenu = _.sample(this.sampleLunchMenus)
      this.selectedMenu = getRandomLunchMenu
    }
  }
}
</script>

<style>

</style>
