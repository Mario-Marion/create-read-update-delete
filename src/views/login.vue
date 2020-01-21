<template>
<popout>
    <p class="p" slot="username">用户名：</p>
    <p class="p" slot="password">密码：</p>
    <p class="p" slot="verify">验证码：</p>
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
    .p {
        color: skyblue;
        margin-bottom: 5px;
    }
</style>
