<template>
    <div v-if="show">
        <p @click="eat" @dblclick="season">默认初始值是{{show}}，所以是显示的</p>
        <button @click="closeDiv">关闭</button>
        <h1>food:{{food}} date:{{date}}</h1>
    </div>
</template>
<script>

export default {
    props: [ 'show', 'food', 'date' ],
    methods: {
        closeDiv() {
            this.$emit('update:show', false); // 触发 input 事件，并传入新值
        },
        eat () {
            this.$emit('update:food', 'pork');
        },
        season () {
            this.$emit('update:date', 'summer');
        }
    }
}
</script>
<style lang="scss" scope>
    div>h1:first-of-type::selection { background: red;color: white;}
    div>p:first-of-type { user-select:none;}
</style>
