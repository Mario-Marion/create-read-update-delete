<template>
    <div>
        <h1>{{name}}</h1>
    </div>
</template>
<script>
export default {
  props: {
      name: {
        type: Object,
        required: true
      }
  }
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
