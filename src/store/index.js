import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    arr: [10, 20, 30, 40, 50],
    myobj: { name: 'lxr' }
  },
  getters: {
    // 接收两个参数，第一个stae，第二个getters
    max: (state) => { return Math.max(...state.arr) },
    min: (state) => { return Math.min.apply(state, state.arr) },
    validator: (state, getters) => { return getters.min + state.arr[0] }
  },
  mutations: {
     // 接收两个参数，第一个stae，第二个任意类型
    // increment (state,num) {
    //   state.count += num()
    // },
    // increment (state,num) {
    //   state.count += num.parameter()
    // },
    increment (state, func) {
      state.count += func()
    },
    newattribute (state) {
      Vue.set(state.myobj, 'age', 123)
      state.myobj = { ...state.myobj, age: 123 }
    }
  },
  actions: {
    increment (context, func) {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
            context.commit('increment', func)
            resolve()
          }, 1000)
      })
    }
  },
  modules: {
  }
})
