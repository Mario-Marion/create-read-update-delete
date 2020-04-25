<template>
<div>
    <input v-bind='$attrs'  :value="value" v-on="inputListeners"/>
    <input type="checkbox" :checked='checked' @input="checkboxListeners">
</div>
</template>
<script>
export default {
    inheritAttrs: false,
    props: {
        value: {
            type: [String, Number],
            required: true,
            default: 0
        },
        checked: {
            type: Boolean
        }
    },
    computed: {
        inputListeners: function () {
        var vm = this
        // `Object.assign` 将所有的对象合并为一个新对象
        return Object.assign({},
            // 我们从父级添加所有的监听器
            this.$listeners,
            // 然后我们添加自定义监听器，
            // 或覆写一些监听器的行为
            {
                // 这里确保组件配合 `v-model` 的工作
                input: function (event) {
                    Number(vm.$emit('input', event.target.value))
                },
                focus: () => vm.$emit('focus', event.target.value)
            }
        )
        }
    },
    beforeCreate() {
        console.log(this.$listeners)
        console.log(this.$attrs)
    },
    methods: {
        checkboxListeners () {
            this.$emit('update:checkbox', !this.checked)
            confirm('123')
        }
    }
}
</script>
<style lang="scss" scoped>
    input:invalid {
    box-shadow: 0 0 5px 1px red;
    }
    input:focus:invalid {
    outline: none;
    }
</style>

