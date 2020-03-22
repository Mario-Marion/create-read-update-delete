<template>
    <div>
        <slot name="first"></slot>
        <slot :user="message"></slot>
        <slot name="last"></slot>
    </div>
</template>
<script>
export default {
  data () {
    return {
      message: {
        name: '作用域插槽，来自子组件的数据'
      }
    }
  }
}
</script>
<style scoped>

</style>
