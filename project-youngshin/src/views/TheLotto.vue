<template>
  <div class="d-flex justify-content-center">
    <div class="col-4 text-center">
      <h3 class="my-5">로또번호 뽑기</h3> 
      <button @click="getLottoNumbers" class="btn btnG btn-outline-secondary col-6">CLICK</button>
      <h3 class="my-5">
        <span class="text-warning">{{ result10 }}</span>
        <span class="text-primary">{{ result20 }}</span>
        <span class="text-danger">{{ result30 }}</span>
        <span class="text-secondary">{{ result40 }}</span>
        <span class="text-success">{{ result45 }}</span>
      </h3>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'TheLotto',
  data: function() {
    return {
      sampleNumbers: [],
      selectedNumbers: [],
      result10: '',
      result20: '',
      result30: '',
      result40: '',
    }
  },
  methods: {
    getLottoNumbers: function() {
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
  },
}
</script>

<style>

</style>