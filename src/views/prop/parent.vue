<template>
    <div>
        <!-- 动态绑定传递 -->
        <children propType='我是动态传递：' :name=nameArr.concat([4,5])></children>
        <!-- 静态：静态传的值都是字符串 -->
        <children propType='我是动态传递：' name=[1,2,3]></children>
        =================================================================
        <!-- 传入一个对象的所有属性 -->
        <!-- <childrenObject v-bind='post'></childrenObject> -->
        <!-- 等价于： -->
        <!-- <childrenObject
            v-bind:id="post.id"
            v-bind:title="post.title"
        ></childrenObject> -->
        =================================================================
        <!-- prop类型验证 -->
        <childrenObject :postArr='undefined'></childrenObject>
        <!-- 自定义验证函数 -->
        <childrenObject data-date-picker="activated" :postArr='undefined' propF='warning' :author='property'></childrenObject>
        <inp data-date-picker="activated" class="date-picker-theme-dark"></inp>
    </div>
</template>
<script>
import children from './children'
import childrenObject from './childrenObject'
import inp from './input'
function Person (firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

export default {
    components: { children, childrenObject, inp },
    data() {
        return {
            nameArr: [1, 2, 3],
            // 传入一个对象的所有属性
            // post: {
            //     id: 1,
            //     title: 'My Journey with Vue'
            // }
            // ================================
            post: [
                { id: 1, title: 'My Journey with Vue' },
                { id: 2, title: 'My Journey with Vue' }
            ],
            // ================================
            property: new Person('mike', 'jake')
        }
    }
}
</script>
<style scoped>

</style>
