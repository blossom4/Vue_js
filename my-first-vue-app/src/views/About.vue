<template>
  <div>
    <h2>This is About Page</h2>
    <NewComponent my-message="this is prop data" @child-input-change="parentGetChange"/>
  </div>
</template>

<script>
import NewComponent from '@/components/NewComponent.vue'

export default {
  name: 'About',
  components: {
    NewComponent,
  },
  methods: {
    parentGetChange: function (textInput) {
      console.log(`하위 컴포넌트 NewComponent로 부터 받은 ${textInput} 입니다.`)
    }
  },
}
</script>

<style>

</style>
