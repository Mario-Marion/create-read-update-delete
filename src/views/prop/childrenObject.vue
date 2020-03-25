<template>
    <div>
        <!-- 传入一个对象的所有属性 -->
        <!-- <h1>{{id}}-{{title}}</h1> -->
        <!-- ====================================== -->
        <ul>
            <li v-for="item in postArr" :key="item.id">{{item.id}}-{{item.title}}</li>
        </ul>
        <h1>{{propF}}</h1>
        <h1>{{author}}</h1>
    </div>
</template>
<script>
function Person (firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}
export default {
    // 传入一个对象的所有属性
    // props: ['id', 'title']
    // =============================
    props: {
        postArr: {
            // type: Array, // 类型
            type: [Array, Object], // 多个可能的类型
            required: true, // 必传一个值
            default: () => [{ id: 1, title: '我是默认' }] // 带有默认值的数组
            // ！对象或数组默认值必须从一个工厂函数获取
        },
        // 自定义验证函数
        propF: {
            verify: function (value) {
                return [ 'success', 'warning', 'danger' ].indexOf(value) !== -1
            }
        },
        author: Person
    }
}
</script>
