<template>
<popout>
    <p slot="username">用户名：</p>
    <p slot="password">密码：</p>
    <p slot="verify">验证码：</p>
</popout>
</template>
<script>
import popout from '@/components/Popout.vue'
export default {
  methods: {
    increase () { alert('确定') },
    addShow () { alert('取消') }
  },
  components: {
    popout
  }
}
</script>
<style scoped>
    p {
        color: red;
    }
</style>
