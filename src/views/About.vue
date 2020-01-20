<template>
  <div class="about">
    <div>Oh no 😢</div>
    <!-- <ul>
      <li v-for="(item, name, index) in obj" :key="item">{{index}}{{name}}{{item}}</li>
    </ul> -->
    <ol>
      <li v-for="(value, index) in arr" :key="index">{{value.name}}</li>
    </ol>
    <ol>
      <li v-for="item in filterLists" :key="item">{{item}}</li>
    </ol>
  </div>
</template>
<script>
export default {
  data () {
    return {
      arr: [{}],
      obj: { age: 456 },
      lists: [0, 1, 2, 3, 4, 5, 6]
    }
  },
  mounted () {
    // this.arr[0] = {name: '我是修的一'} 不是响应式
    // 用this.$set(this.arr, index, newValue)修改将在响应式系统内触发状态更新
    // this.$set(this.arr, 0, { name: '我是修的一' })
    // this.$set(this.obj, 'name', '我是name')
    // this.arr.splice(0, 1, { name: '修改的一' })
    // this.obj = Object.assign({}, this.obj, { age: 1, home: '潮汕' })
    // console.log(this.arr)
  },
  // 想要显示一个数组经过过滤或排序后的版本,而不实际改变或重置原始数据
  computed: {
    filterLists () {
      return this.lists.filter(function (en) {
        return en % 2 === 0
      })
    }
  }
}
</script>
