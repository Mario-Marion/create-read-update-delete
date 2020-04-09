<template>
    <div>
        <children :placeholder='placeholderMsg' v-model="msg"/>
        <h1>{{msg}}</h1>
    </div>
</template>
<script>

import children from './children'

export default {
    data () {
        return {
            // placeholder: Date.now(),
            msg: 1
        }
    },
    components: {
        children
    },
    computed: {
        placeholderMsg () {
            return Date.now()
        }
    }
}
</script>
