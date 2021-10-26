<template>
  <div class="text-center">
    <h3>로또번호 뽑기</h3>
    <button class="btn my-5 col-2" @click="pickLottoNumbers">CLICK</button>
    <h3>
      <span class="text-warning">{{ result10 }}</span>
      <span class="text-primary">{{ result20 }}</span>
      <span class="text-danger">{{ result30 }}</span>
      <span class="text-secondary">{{ result40 }}</span>
      <span class="text-success">{{ result45 }}</span>
    </h3>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'TheLotto',
  data: function () {
    return {
      sampleNumbers: [],
      selectedNumbers: [],
      result10: '',
      result20: '',
      result30: '',
      result40: '',
      result45: '',
    }
  },
  methods: {
    pickLottoNumbers: function () {
      const numbers = _.range(1, 46)
      this.sampleNumbers = _.sampleSize(numbers, 6)
      this.selectedNumbers = _.sortBy(this.sampleNumbers)

      this.result10 = ''
      this.result20 = ''
      this.result30 = ''
      this.result40 = ''
      this.result45 = ''

      for (let i = 0; i < 6; i++) {
        if (this.selectedNumbers[i] < 11) {
          this.result10 += this.selectedNumbers[i] + ' '
        } else if (this.selectedNumbers[i] < 21) {
          this.result20 += this.selectedNumbers[i] + ' '
        } else if (this.selectedNumbers[i] < 31) {
          this.result30 += this.selectedNumbers[i] + ' '
        } else if (this.selectedNumbers[i] < 41) {
          this.result40 += this.selectedNumbers[i] + ' '
        } else {
          this.result45 += this.selectedNumbers[i] + ' '
        }
      }
      
    }
  }

}
</script>

<style scoped>
  .btn {
    background-color: #42b983;
    color: white;
  }
</style>