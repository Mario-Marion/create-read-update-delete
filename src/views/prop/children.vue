<template>
    <div>
        <h1>{{propType}}{{name.length}} length</h1>
    </div>
</template>
<script>
export default {
  props: ['propType', 'name'] // 无类型限制，字符串数组形式
  // prop 类型限制，对象形式
  // props: {
  //   title: String,
  //   likes: Number,
  //   isPublished: Boolean,
  //   commentIds: Array,
  //   author: Object,
  //   callback: Function,
  //   contactsPromise: Promise // or any other constructor
  // }

}
</script>
<style lang="scss" scoped>
$color:red;
@mixin round-corners($size,$color) {
  font-size: $size;
  &:hover {color:$color}
}
div {
  h1 {color:$color;
  @include round-corners(24px,$color:blue)
  }

}
</style>
