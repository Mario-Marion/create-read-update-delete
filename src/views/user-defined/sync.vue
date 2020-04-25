<template>
    <div class="details">
        <syncChildren :show.sync='valueChild' v-bind.sync="doc" style="padding: 30px 20px 30px 5px;border:1px solid #ddd;margin-bottom: 10px;"></syncChildren>
        <button @click="changeValue">toggle</button>
    </div>
</template>
<script>

import syncChildren from './syncChildren'

export default {
    components: { syncChildren },
    data () {
        return {
            valueChild: true,
            doc: { food: 'eggs', date: 'spring' }
        }
    },
    methods: {
        changeValue () {
            this.valueChild = !this.valueChild
        }
    },
    mounted () {
        console.log(this.doc)
    },
    beforeUpdate () {
        console.log(this.doc)
    }
}
</script>
