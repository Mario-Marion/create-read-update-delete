<template>
  <div class="list">
    <router-link to="/">Home</router-link>
    <SlotComponent>
      <template v-slot:first>
        <h1>来自父组件的具名(first)分发内容</h1>
      </template>
      <template v-slot:default>
        <input type="button" @click="getElem" value='点击控制台打印DOM元素' />
        <h1 class="projector" :data-spotlight='message2'>{{message}}</h1>
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
  data () {
    return {
      message: '来自父组件分发的内容(无具名,子组件没slot无具名标签我会被抛弃)'
    }
  },
  components: {
    SlotComponent
  },
  methods: {
    getElem () {
      console.log(this.$refs.msg)
    }
  },
  computed: {
    message2 () {
      return this.message + '!'
    }
  }
}
</script>
<style scoped>
  .projector {
    color: #3333;
    font-size: 2rem;
    position: relative;
  }
  .projector::after {
    content: attr(data-spotlight);
    color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-clip-path: ellipse(100px 100px at 0% 50%);
    clip-path: ellipse(100px 100px at 0% 50%);
    background: url(https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1584624976&di=07e7218e9f9dd37d20028e3ba312a87a&src=http://bpic.588ku.com/back_pic/03/62/00/4357a96dfe81f2b.jpg)
    150% center;
    -webkit-background-clip: text;
    background-clip: text;
    animation: myspotlight 5s linear infinite;
  }
  @keyframes myspotlight {
    0% {
      -webkit-clip-path: ellipse(100px 100px at 0% 50%);
      clip-path: ellipse(100px 100px at 0% 50%);
    }
    100% {
      -webkit-clip-path: ellipse(100px 100px at 116% 50%);
      clip-path: ellipse(100px 100px at 116% 50%);
    }
  }
</style>
