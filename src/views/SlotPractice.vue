<template>
  <div class="list">
    <router-link to="/">Home</router-link>
    <SlotComponent>
      <template v-slot:first>
        <h1>来自父组件的具名(first)分发内容</h1>
      </template>
      <template v-slot:default>
        <input type="button" @click="getElem" value='点击控制台打印DOM元素' />
        <h1>来自父组件分发的内容(无具名,子组件没slot无具名标签我会被抛弃)</h1>
      </template>
      <template v-slot:last>
        <h1 ref="msg">来自父组件的具名(last)分发内容</h1>
      </template>
    </SlotComponent>
  </div>
</template>
<script>

import SlotComponent from '@/components/SlotComponent'

export default {
  components: {
    SlotComponent
  },
  methods: {
    getElem () {
      console.log(this.$refs.msg)
    }
  }
}
</script>
