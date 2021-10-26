<template>
  <div>
    <h2>New Component!</h2>
    {{ myMessage }}
    <input @keyup.enter="childInputChange" v-model="childInputData" type="text">
  </div>
</template>

<script>
export default {
  name: 'NewComponent',
  data: function () {
    return {
      childInputData: '',
    }
  },
  props: {
    myMessage: {
      type: String,
      required: true,
    },
  },
  methods: {
    childInputChange: function () {
      if (!this.childInputData.trim() == "") {
        this.$emit('child-input-change', this.childInputData.trim())
        this.childInputData = ""
      }
    }
  }
}
</script>

<style>

</style>