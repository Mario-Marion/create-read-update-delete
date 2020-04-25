<template>
<div>
    <sandwich type="number" placeholder="必须输入数值！" :checked.sync="lovingVue"  @click.native.self="burger" v-model="eat" @focus="fishSandwich">
    </sandwich>
    <h1>{{eat}}</h1>
</div>
</template>
<script>

import sandwich from './children'

export default {
    name: 'beefSandwich',
    data () {
        return {
            eat: 0,
            lovingVue: true
        }
    },
    components: { sandwich },
    methods: {
        burger (ev) {
            console.log(ev.target)
        },
        // fishSandwich (ev) {
        //     console.log(ev.target.value)
        // },
        fishSandwich (ev) {
            console.log(ev)
        }
    }
}
</script>

