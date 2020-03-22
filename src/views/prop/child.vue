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
div {
  h1 {color:$color;}
}
</style>
