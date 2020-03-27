<template>
<div>
  <ul>
    <li @click="switchover">{{firstView}}</li>
    <li @click="switchover">{{twoView}}</li>
  </ul>
  <component :is='warehouse'></component>
</div>
</template>

<script>

import firstView from '../login'
import twoView from '../userinfo'

export default {
  data() {
    return {
      firstView: 'firstView',
      twoView: 'twoView',
      warehouse: 'firstView'
    }
  },
  components: {
    firstView,
    twoView
  },
  methods: {
    switchover () {
      this.warehouse === this.firstView ? this.warehouse = this.twoView : this.warehouse = this.firstView
    }
  }
}
</script>
<style scoped>
</style>
