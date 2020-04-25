<template>
    <childInput v-model="lovingVue" :message='msg' />
</template>
<script>

import childInput from './children'

export default {
    data() {
        return {
            lovingVue: true,
            msg: '我是父组件传过来的数据！'
        }
    },
    components: { childInput },
    mounted() {
        console.log(this.$router, this.$route)
    }
}
</script>
