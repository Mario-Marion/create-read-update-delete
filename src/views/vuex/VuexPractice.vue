<template>
  <div class="hello" @click.stop="alert123()">
      <h1>{{ count }}</h1>
      <h1>{{ max }}</h1>
      <h1>{{ min }}</h1>
      <h1>{{ alias }}</h1>
      <h1>{{ myobj }}</h1>
      <button @click="increment">+++++</button>
      <button @click="newattribute">改变</button>
      <p>
        For a guide and recipes on how to configure / customize this project,<br>
        check out the
        <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
      </p>
      <h3>Installed CLI Plugins</h3>
  </div>
</template>

<script>

import { mapState, mapGetters } from 'vuex'
// mapState, mapGetters, mapMutations, mapActions
// 除了Module属性外，其他属性都有辅助函数！！！！！！！！！！！！

export default {
  computed: {
    count () {
      return this.$store.state.count
    },
    ...mapState(['myobj']),
    // 辅助函数的三种写法，四种属性的辅助函数都一样的写法。===================================
    min () {
      return this.$store.getters.min
    },
    ...mapGetters({
        alias: 'validator'
    }),
    ...mapGetters([
        'max'
    ])
    // 辅助函数的三种写法，四种属性的辅助函数都一样的写法。===================================
  },
  methods: {
    // increment () {
    //   this.$store.commit('increment', this.parameter)
    // },
    // increment () {
      // this.$store.commit('increment', {parameter:this.parameter})
    //   this.$store.commit({type: 'increment', parameter:this.parameter})
    // },
    alert123 () { alert(123) },
    parameter () {
      return 50
    },
    newattribute () {
      this.$store.commit('newattribute')
    },
    increment () {
      this.$store.dispatch('increment', this.parameter).then(() => { console.log(123) })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
