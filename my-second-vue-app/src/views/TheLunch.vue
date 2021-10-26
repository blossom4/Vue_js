<template>
  <div class="text-center">
    <div>
      <h3>점심메뉴 추천</h3>
      <button class="btn my-5 col-2" @click="pickOneLunchMenu">CLICK</button>
      <h3>{{ selectedLunchMenu }}</h3>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'TheLunch',
  data: function () {
    return {
      lunch: ['🍕피자', '🍜라멘', '🍔햄버거', '🥞팬케이크', '🌮타코', '🍣초밥', '🥗샐러드', '🍛카레', '🍰케이크'],
      selectedLunchMenu: '',
    }
  },
  methods: {
    pickOneLunchMenu: function () {
      this.selectedLunchMenu = _.sample(this.lunch)
    }
  },
}
</script>

<style scoped>
  .btn {
    background-color: #42b983;
    color: white;
  }
</style>